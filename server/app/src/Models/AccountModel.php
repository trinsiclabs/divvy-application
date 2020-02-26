<?php

namespace TrinsicLabs\App\Models;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\TextField;
use SilverStripe\Security\Member;
use SilverStripe\Forms\RequiredFields;

class AccountModel extends DataObject
{
    private static $table_name = 'TL_AccountModel';

    private static $db = [
        'OrganisationCreated' => 'Boolean',
        'OrganisationName' => 'Varchar',
        'OrganisationSlug' => 'Varchar',
    ];

    private static $indexes = [
        'OrganisationSlug' => [
            'type' => 'unique',
            'columns' => ['OrganisationSlug'],
        ],
    ];

    private static $defaults = [
        'OrganisationCreated' => false,
    ];

    private static $has_many = [
        'Members' => Member::class,
    ];

    private static $cascade_deletes = [
        'Members',
    ];

    private static $searchable_fields = [
        'OrganisationName',
    ];

    private static $summary_fields = [
        'OrganisationName',
        'getMemberCount' => 'Members',
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab(
            'Root.Main',
            TextField::create('OrganisationName', 'Organisation name')
        );

        return $fields;
    }

    public function getCMSValidator()
    {
        return RequiredFields::create([
            'OrganisationName',
        ]);
    }

    public function getMemberCount()
    {
        return $this->Members()->count();
    }

    /**
     * Create an organisation for the member on the Fabric network.
     */
    public function createOrganisation()
    {
        if (!$this->ID) {
            throw new \LogicException('Can\'t create an org for an Account without an ID.');
        }

        if ($this->OrganisationCreated) {
            throw new \LogicException('Account already has an organisation.');
        }

        $id = $this->ID;

        // We can only have 99 users until orchestration is implemented
        // because of port allocation on the Docker host.
        if ($id < 10) {
            $id = "0${id}";
        } else if ($id > 99) {
            throw new \LogicException('Org limit reached, we can only have 99.');
        }

        $this->OrganisationCreated = true;
        $this->write();

        exec("echo './organisation.sh create --org $this->OrganisationSlug --pport 81$id --ccport 82$id --caport 83$id' > /var/www/html/host_queue");
    }
}

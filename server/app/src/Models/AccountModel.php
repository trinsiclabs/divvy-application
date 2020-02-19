<?php

namespace TrinsicLabs\App\Models;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\TextField;
use SilverStripe\Security\Member;
use SilverStripe\Forms\RequiredFields;
use TrinsicLabs\App\Models\TodoModel;

class AccountModel extends DataObject
{
    private static $table_name = 'TL_AccountModel';

    private static $db = [
        'IsTestAccount' => 'Boolean',
        'OrganisationName' => 'Varchar(64)',
    ];

    private static $has_many = [
        'Members' => Member::class,
        'Todos' => TodoModel::class,
    ];

    private static $cascade_deletes = [
        'Members',
        'Todos',
    ];

    private static $searchable_fields = [
        'OrganisationName',
    ];

    private static $summary_fields = [
        'OrganisationName',
        'getMemberCount' => 'Members',
    ];

    private static $defaults = [
        'IsTestAccount' => false,
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
}

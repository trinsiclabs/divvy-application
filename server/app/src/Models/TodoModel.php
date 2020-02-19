<?php

namespace TrinsicLabs\App\Models;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\RequiredFields;
use TrinsicLabs\App\Models\AccountModel;

class TodoModel extends DataObject
{
    private static $table_name = 'TL_TodoModel';

    private static $db = [
        'Name' => 'Varchar(64)',
    ];

    private static $has_one = [
        'Account' => AccountModel::class,
    ];

    private static $searchable_fields = [
        'Name',
    ];

    private static $summary_fields = [
        'Name',
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab(
            'Root.Main',
            TextField::create('Name', 'Name')
                ->setDescription('Name of todo.')
        );

        return $fields;
    }

    public function getCMSValidator()
    {
        return RequiredFields::create([
            'Name',
        ]);
    }
}

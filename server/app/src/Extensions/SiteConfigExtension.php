<?php

namespace TrinsicLabs\App\Extensions;

use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Forms\CheckboxField;

class SiteConfigExtension extends DataExtension
{
    private static $db = [
        'AllowPublicSignup' => 'Boolean',
    ];

    private static $defaults = [
        'AllowPublicSignup' => false,
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldsToTab(
            'Root.Main',
            [
                CheckboxField::create('AllowPublicSignup', 'Allow public account registration'),
            ]
        );
    }
}

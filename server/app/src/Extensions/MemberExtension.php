<?php

namespace TrinsicLabs\App\Extensions;

use SilverStripe\Security\Group;
use SilverStripe\Control\Director;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Control\Email\Email;
use SilverStripe\Security\Permission;
use SilverStripe\ORM\ValidationResult;
use TrinsicLabs\App\Models\AccountModel;
use SilverStripe\Security\DefaultAdminService;

class MemberExtension extends DataExtension
{
    private static $db = [
        'VerificationToken' => 'Varchar(16)',
        'Verified' => 'Boolean',
    ];

    private static $defaults = [
        'Verified' => false,
    ];

    private static $has_one = [
        'Account' => AccountModel::class,
    ];

    public function requireDefaultRecords()
    {
        parent::requireDefaultRecords();

        $subscriberPermissions = [
            'APP_ACCESS_ALL',
        ];

        $groups = [
            'subscribers' => [
                'title' => 'Subscribers',
                'permissions' => $subscriberPermissions,
            ],
        ];

        foreach ($groups as $code => $group) {
            if (Group::get()->filter('Code', $code)->exists()) {
                continue;
            }

            $g = new Group();
            $g->Title = $group['title'];
            $g->Code = $code;
            $g->write();

            foreach ($group['permissions'] as $permission) {
                Permission::grant($g->ID, $permission);
            }
        }
    }

    public function canLogIn(ValidationResult &$result = null)
    {
        if (DefaultAdminService::isDefaultAdmin($this->owner->Email) || !$this->owner->exists()) {
            return;
        }

        if (!$this->owner->Verified) {
            $result->addError('You need to verify your email address before logging in.');
        }

        if (!$this->owner->Account()->exists()) {
            $result->addError('We\'re still setting up your account.');
        }
    }

    public function onAfterWrite()
    {
        $member = $this->owner;
        $fields = $member->getChangedFields(['ID']);

        // Send a verification email if it's a new member.
        if (isset($fields['ID']) && $fields['ID']['before'] !== $fields['ID']['after'] && $member->VerificationToken) {
            $verificationUrl = Director::absoluteBaseURL() . 'signup/confirm/' . $member->VerificationToken;

            $email = Email::create()
                ->setSubject('Email verification')
                ->setBody(
                    '<p>Please click the link below to confirm your email address.</p>' .
                    '<p><a href="' . $verificationUrl . '">' . $verificationUrl . '</a></p>'
                )
                ->setTo($member->Email);

            $email->send();
        }
    }
}

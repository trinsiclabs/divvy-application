<?php

namespace TrinsicLabs\App\BuildTasks;

use Exception;
use SilverStripe\Control\Director;
use SilverStripe\Control\Email\Email;
use SilverStripe\Dev\BuildTask;
use TrinsicLabs\App\Models\AccountModel;
use TrinsicLabs\App\QueuedJobs\OrganisationSetupCompleteJob;

class OrganisationSetupCompleteTask extends BuildTask
{
    private static $segment = 'OrganisationSetupCompleteTask';

    public function run($request)
    {
        $org = $request->getVar('org');

        if (!$org) {
            throw new Exception('Org name was not provided.');
        }

        $account = AccountModel::get()
            ->filter('OrganisationSlug', $org)
            ->first();

        if (!$account || !$account->exists()) {
            throw new Exception("Invalid org name '$org' was provided.");
        }

        $account->OrganisationCreated = true;
        $account->write();

        $member = $account->Members()->first();

        if (!$member || !$member->exists()) {
            user_error('Unable to send organisation setup complete email. No user found.', E_USER_NOTICE);
            $this->isComplete = true;
            return;
        }

        $loginUrl = Director::absoluteBaseURL() . 'Security/login?BackURL=/';

        $email = Email::create()
            ->setSubject('Divvy setup complete!')
            ->setBody(
                '<p>Your organisation has been created and 100 shares have been issued.</p>' .
                '<p><a href="' . $loginUrl . '">Login</a> to get started.</p>'
            )
            ->setTo($member->Email);

        $email->send();
    }
}

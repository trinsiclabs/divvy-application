<?php

namespace TrinsicLabs\App\QueuedJobs;

use Exception;
use SilverStripe\Control\Director;
use SilverStripe\Control\Email\Email;
use Symbiote\QueuedJobs\Services\AbstractQueuedJob;
use Symbiote\QueuedJobs\Services\QueuedJob;

class OrganisationSetupCompleteJob extends AbstractQueuedJob implements QueuedJob
{
    public function __construct($accountId = null)
    {
        $this->accountId = $accountId;
    }

    public function getTitle()
    {
        return _t(
            __CLASS__ . '.Title',
            "Organisation setup complete",
        );
    }

    public function getJobType()
    {
        $this->totalSteps = 1;
        return QueuedJob::QUEUED;
    }

    public function process()
    {
        $account = AccountModel::get()->byId($this->accountId);

        if (!$account || !$account->exists()) {
            throw new Exception('Invalid Account ID was provided.');
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

        $this->isComplete = true;
    }
}

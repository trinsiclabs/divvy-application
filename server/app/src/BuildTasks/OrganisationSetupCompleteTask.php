<?php

namespace TrinsicLabs\App\BuildTasks;

use Exception;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\BuildTask;
use TrinsicLabs\App\Models\AccountModel;
use TrinsicLabs\App\QueuedJobs\OrganisationSetupCompleteJob;

class OrganisationSetupCompleteTask extends BuildTask
{
    private static $segment = 'OrganisationSetupCompleteTask';

    public function run($request)
    {
        $accountId = $request->getVar('accountId');

        if (!$accountId) {
            throw new Exception('Account ID was not provided.');
        }

        $account = AccountModel::get()->byId($accountId);

        if (!$account || !$account->exists()) {
            throw new Exception('Invalid Account ID was provided.');
        }

        $job = new OrganisationSetupCompleteJob($accountId);
        $service = Injector::inst()->get('Symbiote\QueuedJobs\Services\QueuedJobService');
        $service->queueJob($job);
    }
}

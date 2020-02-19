<?php

namespace TrinsicLabs\App\BuildTasks;

use SilverStripe\Dev\BuildTask;
use SilverStripe\Security\Group;
use SilverStripe\Dev\YamlFixture;
use SilverStripe\Security\Member;
use SilverStripe\Core\Environment;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Core\Injector\Injector;
use TrinsicLabs\App\Models\AccountModel;

class DemoAccountTask extends BuildTask
{
    protected function getExistingDemoAccount()
    {
        return AccountModel::get()
            ->filter([
                'IsTestAccount' => true,
                'OrganisationName' => 'Acme Ltd',
            ])
            ->first();
    }

    public function getTitle()
    {
        return 'App: Refresh demo account';
    }

    public function run($request)
    {
        $siteConfig = SiteConfig::current_site_config();

        if (!$siteConfig->DemoAccountRefreshEnabled) {
            return;
        }

        $existingAccount = $this->getExistingDemoAccount();

        if ($existingAccount !== null) {
            $existingAccount->delete();
        }

        // Create the demo account.
        $factory = Injector::inst()->create('DNADesign\Populate\PopulateFactory');
        $fixture = new YamlFixture('app/src/fixtures/demoAccount.yml');
        $fixture->writeInto($factory);

        $newAccount = $this->getExistingDemoAccount();

        // Add a member to the new demo account.
        $member = Member::create();

        $member->AccountID = $newAccount->ID;
        $member->Email = Environment::getEnv('TL_DEMO_ACCOUNT_USERNAME');
        $member->FirstName = 'demo';
        $member->IsTestAccount = true;
        $member->Verified = true;
        $member->Password = Environment::getEnv('TL_DEMO_ACCOUNT_PASSWORD');

        $member->write();

        // Add the new member to the Subscribers group.
        $subscribersGroup = Group::get()
            ->filter(['Code' => 'subscribers'])
            ->first();

        $member->Groups()->add($subscribersGroup);
    }
}

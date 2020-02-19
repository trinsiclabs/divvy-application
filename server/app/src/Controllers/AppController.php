<?php

namespace TrinsicLabs\App\Controllers;

use SilverStripe\View\ArrayData;
use SilverStripe\Control\Director;
use SilverStripe\Security\Security;
use SilverStripe\View\Requirements;
use SilverStripe\Control\Controller;
use SilverStripe\Core\Config\Config;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Security\Permission;
use SilverStripe\Security\SecurityToken;
use SilverStripe\Security\PermissionProvider;

class AppController extends Controller implements PermissionProvider
{
    private static $allowed_actions = [
        'index',
    ];

    private static $url_handlers = [
        '$Model/$ID/$Action' => 'index',
    ];

    public function init()
    {
        parent::init();

        if (Director::isDev()) {
            Requirements::javascript('http://localhost:3001/main.js');
        } else {
            Requirements::javascript('app/main.js');
        }
    }

    public function providePermissions()
    {
        return [
            'APP_ACCESS_ALL' => 'Access to all app sections',
        ];
    }

    public function index(HTTPRequest $request)
    {
        $member = Security::getCurrentUser();

        return [
            'GraphQLURI' => Director::absoluteBaseURL() . 'graphql',
            'SecurityID' => SecurityToken::getSecurityID(),
        ];
    }
}

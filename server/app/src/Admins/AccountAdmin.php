<?php

namespace TrinsicLabs\App\Admin;

use SilverStripe\Admin\ModelAdmin;
use TrinsicLabs\App\Models\AccountModel;

class AccountAdmin extends ModelAdmin
{
    private static $managed_models = [
        AccountModel::class,
    ];

    private static $url_segment = 'accounts';

    private static $menu_title = 'Accounts';
}

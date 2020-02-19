<?php

namespace TrinsicLabs\App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;

class SiteConfigTypeCreator extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'siteConfig',
        ];
    }

    public function fields()
    {
        return [
            'AllowPublicSignup' => ['type' => Type::boolean()],
        ];
    }
}

<?php

namespace TrinsicLabs\App\GraphQL\Query;

use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\QueryCreator;
use SilverStripe\SiteConfig\SiteConfig;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\OperationResolver;

class ReadSiteConfigQueryCreator extends QueryCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'readSiteConfig'
        ];
    }

    public function type()
    {
        return Type::listOf($this->manager->getType('siteConfig'));
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        return SiteConfig::current_site_config();
    }
}

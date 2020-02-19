<?php

namespace TrinsicLabs\App\GraphQL\Query;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Security;
use SilverStripe\GraphQL\QueryCreator;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\OperationResolver;

class ReadMemberQueryCreator extends QueryCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'readMember'
        ];
    }

    public function type()
    {
        return Type::listOf($this->manager->getType('member'));
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        return Security::getCurrentUser();
    }
}

<?php

namespace TrinsicLabs\App\GraphQL\Query;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Security;
use SilverStripe\GraphQL\QueryCreator;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\OperationResolver;

class ReadAccountQueryCreator extends QueryCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'readAccount'
        ];
    }

    public function type()
    {
        return Type::listOf($this->manager->getType('account'));
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $member = Security::getCurrentUser();

        if (!$member) {
            return;
        }

        return $member->Account();
    }
}

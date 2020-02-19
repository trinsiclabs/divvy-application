<?php

namespace TrinsicLabs\App\GraphQL\Type;

use SilverStripe\ORM\ArrayList;
use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;
use GraphQL\Type\Definition\ResolveInfo;

class MemberTypeCreator extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'member',
        ];
    }

    public function fields()
    {
        return [
            'ID' => ['type' => Type::nonNull(Type::id())],
            'AccountID' => ['type' => Type::id()],
            'FirstName' => ['type' => Type::string()],
            'Surname' => ['type' => Type::string()],
            'Email' => ['type' => Type::string()],
        ];
    }
}

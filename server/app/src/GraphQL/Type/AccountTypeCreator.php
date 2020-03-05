<?php

namespace TrinsicLabs\App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;
use GraphQL\Type\Definition\ResolveInfo;

class AccountTypeCreator extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'account',
        ];
    }

    public function fields()
    {
        return [
            'ID' => ['type' => Type::nonNull(Type::id())],
            'OrganisationCreated' => ['type' => Type::nonNull(Type::boolean())],
            'OrganisationName' => ['type' => Type::nonNull(Type::string())],
            'OrganisationSlug' => ['type' => Type::nonNull(Type::string())],
        ];
    }
}

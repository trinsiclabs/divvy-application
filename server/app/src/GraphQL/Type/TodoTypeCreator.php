<?php

namespace TrinsicLabs\App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;

class TodoTypeCreator extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'todo',
        ];
    }

    public function fields()
    {
        return [
            'ID' => ['type' => Type::nonNull(Type::id())],
            'Name' => ['type' => Type::string()],
        ];
    }
}

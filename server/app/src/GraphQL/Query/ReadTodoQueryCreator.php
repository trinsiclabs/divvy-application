<?php

namespace TrinsicLabs\App\GraphQL\Query;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Security;
use TrinsicLabs\App\Models\TodoModel;
use SilverStripe\GraphQL\QueryCreator;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\OperationResolver;

class ReadTodoQueryCreator extends QueryCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'readTodo'
        ];
    }

    public function type()
    {
        return Type::listOf($this->manager->getType('todo'));
    }

    public function args()
    {
        return [
            'ID' => ['type' => Type::id()],
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $list = null;
        $member = Security::getCurrentUser();

        if (!$member) {
            user_error('Tried to read todos without being logged in.', E_USER_NOTICE);
            return;
        }

        $account = $member->account();

        if (!$account->exists()) {
            user_error('Tried to read todos but member has no account.', E_USER_NOTICE);
            return;
        }

        if (isset($args['ID'])) {
            $list = TodoModel::get()
                ->filter([
                    'AccountID' => $account->ID,
                    'ID' => $args['ID'],
                ])
                ->first();
        } else {
            $list = TodoModel::get()->filter(['AccountID' => $account->ID]);
        }

        return $list;
    }
}

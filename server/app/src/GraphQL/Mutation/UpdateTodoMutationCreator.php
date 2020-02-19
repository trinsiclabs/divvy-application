<?php

namespace TrinsicLabs\App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Security;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\MutationCreator;
use SilverStripe\GraphQL\OperationResolver;

class UpdateTodoMutationCreator extends MutationCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'updateTodo',
        ];
    }

    public function type()
    {
        return $this->manager->getType('todo');
    }

    public function args()
    {
        return [
            'ID' => ['type' => Type::nonNull(Type::id())],
            'Name' => ['type' => Type::nonNull(Type::string())],
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $member = Security::getCurrentUser();

        if (!$member) {
            user_error('Tried to update todo without being logged in.', E_USER_NOTICE);
            return;
        }

        if (!$member->AccountID) {
            user_error('Tried to update todo but member has no account.', E_USER_NOTICE);
            return;
        }

        $todo = $member
            ->Account()
            ->Todos()
            ->filter(['ID' => $args['ID']])
            ->first();

        if (!$todo) {
            user_error('Tried to update todo which does not exist.', E_USER_NOTICE);
            return;
        }

        $todo
            ->update($args)
            ->write();

        return $todo;
    }
}

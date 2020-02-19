<?php

namespace TrinsicLabs\App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Security;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\MutationCreator;
use SilverStripe\GraphQL\OperationResolver;

class DeleteTodoMutationCreator extends MutationCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'deleteTodo',
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
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $member = Security::getCurrentUser();

        if (!$member) {
            user_error('Tried to delete todo without being logged in.', E_USER_NOTICE);
            return;
        }

        if (!$member->AccountID) {
            user_error('Tried to delete todo but member has no account.', E_USER_NOTICE);
            return;
        }

        $todo = $member
            ->Account()
            ->Todos()
            ->filter(['ID' => $args['ID']])
            ->first();

        if (!$todo) {
            user_error('Tried to delete todo which does not exist.', E_USER_NOTICE);
            return;
        }

        $todo->delete();

        return ['ID' => $args['ID']];
    }
}

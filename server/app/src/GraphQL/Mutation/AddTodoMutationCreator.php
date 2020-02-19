<?php

namespace TrinsicLabs\App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Security;
use TrinsicLabs\App\Models\TodoModel;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\MutationCreator;
use SilverStripe\GraphQL\OperationResolver;

class AddTodoMutationCreator extends MutationCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'addTodo',
        ];
    }

    public function type()
    {
        return $this->manager->getType('todo');
    }

    public function args()
    {
        return [
            'Name' => ['type' => Type::nonNull(Type::string())],
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $member = Security::getCurrentUser();

        if (!$member) {
            user_error('Tried to add todo without being logged in.', E_USER_NOTICE);
            return;
        }

        if (!$member->AccountID) {
            user_error('Tried to add todo but member has no account.', E_USER_NOTICE);
            return;
        }

        $todo = TodoModel::create($args);

        $member
            ->Account()
            ->Todos()
            ->add($todo);

        return $todo;
    }
}

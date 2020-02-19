<?php

namespace TrinsicLabs\App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Member;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\MutationCreator;
use SilverStripe\GraphQL\OperationResolver;

class AddMemberMutationCreator extends MutationCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'addMember',
        ];
    }

    public function type()
    {
        return $this->manager->getType('member');
    }

    public function args()
    {
        return [
            'FirstName' => ['type' => Type::nonNull(Type::string())],
            'Surname' => ['type' => Type::nonNull(Type::string())],
            'Email' => ['type' => Type::nonNull(Type::string())],
            'Password' => ['type' => Type::nonNull(Type::string())],
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $member = Member::create($args);
        $member->VerificationToken = uniqid();
        $member->write();
        $member->addToGroupByCode('subscribers');

        return $member;
    }
}

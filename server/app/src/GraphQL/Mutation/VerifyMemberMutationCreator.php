<?php

namespace TrinsicLabs\App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Member;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\GraphQL\MutationCreator;
use SilverStripe\GraphQL\OperationResolver;

class VerifyMemberMutationCreator extends MutationCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'verifyMember',
        ];
    }

    public function type()
    {
        return $this->manager->getType('member');
    }

    public function args()
    {
        return [
            'VerificationToken' => ['type' => Type::nonNull(Type::string())],
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $member = Member::get()
            ->filter(['VerificationToken' => $args['VerificationToken']])
            ->first();

        if (!$member) {
            user_error('Invalid verification token.', E_USER_NOTICE);
            return;
        }

        $member->VerificationToken = '';
        $member->Verified = true;
        $member->write();

        return $member;
    }
}

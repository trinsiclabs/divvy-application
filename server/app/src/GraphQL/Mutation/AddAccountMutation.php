<?php

namespace TrinsicLabs\App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use SilverStripe\Security\Member;
use GraphQL\Type\Definition\ResolveInfo;
use TrinsicLabs\App\Models\AccountModel;
use SilverStripe\GraphQL\MutationCreator;
use SilverStripe\GraphQL\OperationResolver;

class AddAccountMutationCreator extends MutationCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'addAccount',
        ];
    }

    public function type()
    {
        return $this->manager->getType('account');
    }

    public function args()
    {
        return [
            'OrganisationName' => ['type' => Type::string()],
            'Members' => ['type' => Type::listOf(Type::id())],
        ];
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $account = AccountModel::create();

        if (isset($args['OrganisationName'])) {
            $account->OrganisationName = $args['OrganisationName'];
        }

        $account->write();

        if (isset($args['Members'])) {
            $members = $account->Members();

            foreach (Member::get()->byIDs($args['Members']) as $member) {
                if (!$members->AccountID) {
                    $members->add($member);
                }
            }
        }

        return $account;
    }
}

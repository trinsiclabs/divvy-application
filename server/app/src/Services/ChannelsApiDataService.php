<?php

namespace TrinsicLabs\App\Services;

use TrinsicLabs\App\Models\AccountModel;

class ChannelsApiDataService extends ApiDataService
{
    protected $path = '/channels';

    public function getItems(): array
    {
        $response = $this
            ->client
            ->get($this->path);

        $data = $response
            ->getBody()
            ->getContents();

        // Get the account for each channel returned by the API.
        $accounts = AccountModel::get()
            ->filter('OrganisationSlug', json_decode($data, true));

        // The data returned to the client.
        $result = [];

        foreach ($accounts as $account) {
            $result[] = [
                'Name' => $account->OrganisationName,
                'Slug' => $account->OrganisationSlug,
            ];
        }

        return $result;
    }
}

<?php

namespace TrinsicLabs\App\Services;

use GuzzleHttp\Client;
use SilverStripe\Core\Environment;

abstract class ApiDataService
{
    protected $client;

    public function __construct(string $organisationSlug = '')
    {
        $this->client = new Client([
            'base_uri' => Environment::getEnv('DIVVY_API_SERVER'),
            'headers' => [
                'X-Divvy-Org' => $organisationSlug,
            ],
        ]);
    }
}

<?php

namespace TrinsicLabs\App\Services;

use GuzzleHttp\Exception\ClientException;

class ShareApiDataService extends ApiDataService
{
    protected $path = '/share';

    public function getItems(string $channel): array
    {
        $response = $this
            ->client
            ->get("{$this->path}/{$channel}");

        $data = $response
            ->getBody()
            ->getContents();

        return json_decode($data, true);
    }

    public function getItem(string $channel, string $shareKey): array
    {
        try {
            $response = $this
                ->client
                ->get("{$this->path}/{$channel}/{$shareKey}");
        } catch (ClientException $e) {
            var_dump($e->getResponse());
            return [];
        }

        $data = $response
            ->getBody()
            ->getContents();

        return [json_decode($data, true)];
    }
}

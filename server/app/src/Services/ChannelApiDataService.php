<?php

namespace TrinsicLabs\App\Services;

class ChannelApiDataService extends ApiDataService
{
    protected $path = '/channel';

    public function getItems(): array
    {
        $response = $this
            ->client
            ->get($this->path);

        $data = $response
            ->getBody()
            ->getContents();

        var_dump($data);

        return [];
    }
}

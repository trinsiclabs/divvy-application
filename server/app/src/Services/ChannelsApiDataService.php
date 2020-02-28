<?php

namespace TrinsicLabs\App\Services;

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

        return json_decode($data, true);
    }
}

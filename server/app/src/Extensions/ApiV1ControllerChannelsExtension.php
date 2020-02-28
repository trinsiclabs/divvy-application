<?php

namespace TrinsicLabs\App\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\Security\Security;
use SilverStripe\Control\HTTPRequest;
use TrinsicLabs\App\Services\ChannelsApiDataService;

class ApiV1ControllerChannelsExtension extends Extension
{
    private static $allowed_actions = [
        'channels',
    ];

    /**
     * Fetches all channels the account / org is a member of.
     *
     * @return HTTPResponse
     */
    public function fetchAllChannels()
    {
        $organisationSlug = Security::getCurrentUser()
            ->Account()
            ->OrganisationSlug;

        $channelService = new ChannelsApiDataService($organisationSlug);

        return $this->owner->sendResponse([
            'items' => $channelService->getItems(),
        ]);
    }

    /**
     * Request handler for the /api/v1/channels route.
     *
     * @param HTTPRequest $request
     * @return HTTPResponse
     * @throws HTTPResponse_Exception
     */
    public function channels(HTTPRequest $request)
    {
        $this->owner->ensureAuthenticated();

        if ($request->isGET()) {
            $response = $this->fetchAllChannels();
        } else {
            return $this->owner->httpError(405, 'Method not allowed');
        }

        return $response;
    }
}

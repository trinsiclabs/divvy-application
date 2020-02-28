<?php

namespace TrinsicLabs\App\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\Security\Security;
use SilverStripe\Control\HTTPRequest;
use TrinsicLabs\App\Services\ShareApiDataService;

class ApiV1ControllerShareExtension extends Extension
{
    private static $allowed_actions = [
        'share',
    ];

    /**
     * Fetche all shares owned by the account in a channel.
     *
     * @return HTTPResponse
     */
    public function fetchAllShares(string $channel)
    {
        $organisationSlug = Security::getCurrentUser()
            ->Account()
            ->OrganisationSlug;

        $shareService = new ShareApiDataService($organisationSlug);

        return $this->owner->sendResponse([
            'items' => $shareService->getItems($channel),
        ]);
    }

    /**
     * Fetch one share owned by the account in a channel.
     *
     * @return HTTPResponse
     */
    public function fetchShare(string $channel, string $shareKey)
    {
        $organisationSlug = Security::getCurrentUser()
            ->Account()
            ->OrganisationSlug;

        $shareService = new ShareApiDataService($organisationSlug);

        return $this->owner->sendResponse([
            'items' => $shareService->getItem($channel, $shareKey),
        ]);
    }

    /**
     * Request handler for the /api/v1/channel route.
     *
     * @param HTTPRequest $request
     * @return HTTPResponse
     * @throws HTTPResponse_Exception
     */
    public function share(HTTPRequest $request)
    {
        $this->owner->ensureAuthenticated();

        $channel = $request->param('ID');
        $shareKey = $request->param('Name');

        if ($request->isGET()) {
            if ($channel === null) {
                return $this->owner->httpError(400, 'Bad request');
            }

            if ($shareKey === null) {
                $response = $this->fetchAllShares($channel);
            } else {
                $response = $this->fetchShare($channel, $shareKey);
            }
        } else {
            return $this->owner->httpError(405, 'Method not allowed');
        }

        return $response;
    }
}

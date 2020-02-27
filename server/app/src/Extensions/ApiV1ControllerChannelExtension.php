<?php

namespace TrinsicLabs\App\Extensions;

use SilverStripe\Forms\Form;
use SilverStripe\Core\Extension;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\FormAction;
use SilverStripe\Security\Security;
use TrinsicLabs\App\Forms\TodoForm;
use SilverStripe\Control\HTTPRequest;
use TrinsicLabs\App\Services\ChannelApiDataService;

class ApiV1ControllerChannelExtension extends Extension
{
    private static $allowed_actions = [
        'channel',
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

        $channelService = new ChannelApiDataService($organisationSlug);

        return $this->owner->sendResponse([
            'items' => $channelService->getItems(),
        ]);
    }

    /**
     * Request handler for the /api/v1/channel route.
     *
     * @param HTTPRequest $request
     * @return HTTPResponse
     * @throws HTTPResponse_Exception
     */
    public function channel(HTTPRequest $request)
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

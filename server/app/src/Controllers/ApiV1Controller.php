<?php

namespace TrinsicLabs\App\Controllers;

use SilverStripe\Forms\Form;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\FormAction;
use SilverStripe\Security\Security;
use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Security\Permission;

class ApiV1Controller extends Controller
{
    public function index(HTTPRequest $request)
    {
        $this->httpError(404);
    }

    public function ensureAuthenticated()
    {
        $member = Security::getCurrentUser();

        if (
            !Permission::checkMember($member, 'APP_ACCESS_ALL') ||
            !$member->Account()->exists()
        ) {
            return $this->httpError(401);
        }
    }

    /**
     * Disables security tokens for all forms using this controller.
     *
     * @return boolean
     */
    public function securityTokenEnabled()
    {
        return false;
    }

    /**
     * Sends a JSON response.
     *
     * @param array [$body]
     * @return HTTPResponse
     */
    public function sendResponse($body = null)
    {
        $response = $this->getResponse();

        $response->addHeader('Content-type', 'application/json');

        if ($body !== null) {
            $response->setBody(json_encode($body));
        }

        return $response;
    }
}

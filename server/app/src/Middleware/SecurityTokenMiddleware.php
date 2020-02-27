<?php

namespace TrinsicLabs\App\Middleware;

use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Security\SecurityToken;
use SilverStripe\Control\Middleware\HTTPMiddleware;

/**
 * Adds CSRF protection by checking for a token in the X-Security-Token header.
 */
class SecurityTokenMiddleware implements HTTPMiddleware
{
    public function process(HTTPRequest $request, callable $delegate)
    {
        if ($request->getHeader('X-Security-Token') !== SecurityToken::getSecurityID()) {
            return new HTTPResponse('Bad request', 400);
        }

        return $delegate($request);
    }
}

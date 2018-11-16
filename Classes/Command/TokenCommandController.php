<?php
/**
 * Created by PhpStorm.
 * User: digid
 * Date: 12-11-2018
 * Time: 21:44
 */
namespace Digidennis\SitePack\Command;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Http\Request;
use Neos\Flow\Http\Response;
use Neos\Flow\Http\Client\CurlEngine;
/**
 * @Flow\Scope("singleton")
 */
class TokenCommandController extends \Neos\Flow\Cli\CommandController {

    /**
     * get access token from insta
     *
     * This command posts client id, secret and the auth code.
     *
     * @param string $id The Client Id
     * @param string $secret The Client Secret
     * @param string $authcode
     */
    public function getCommand($id = '9049c161c19a4213b3f8567afb282bd5',
                               $secret = 'f014193d1a2842168bec9854ee7772ef',
                               $authcode = '0124be0106064230b70c234490db8df5')
    {
        $curl = new CurlEngine();
        $request = Request::create(new \Neos\Flow\Http\Uri('https://api.instagram.com/oauth/access_token'), 'POST', [
            'client_id' => $id,
            'client_secret' => $secret,
            'code' => $authcode,
            'grant_type' => 'authorization_code',
            'redirect_uri' => 'http://kbh-skum.dk'
        ]);
        $response = $curl->sendRequest($request);
        $this->response->appendContent($response->getContent());
    }
}
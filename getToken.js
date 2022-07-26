const axios = require('axios')
const querystring = require('querystring')

/**
 * Get access token using client credential auth flow
 * @param {string} clientId Your client's Id
 * @param {string} secret Your client's secret
 */
function getAccessToken(clientId, secret) {
    const data = querystring.stringify({
        grant_type: 'client_credentials',
        scope: 'api_agencies_read api_listings_read'
    });
    return axios.post('https://auth.domain.com.au/v1/connect/token', data, {
        headers: {
            'Authorization': `Basic ${base64(`${clientId}:${secret}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(result => {
        const { access_token } = result.data;
        //store your access_token for authenticating your API calls
        console.log(access_token);
    }).catch(err => console.error(err.response.data))
}

function base64(str) {
    return Buffer.from(str).toString('base64')
}

module.exports = getAccessToken 

getAccessToken('client_2bf50cfd2349026b489480f4c464f395', 'secret_9d2aeb1d94d5f400c8128c5199a8d8de')

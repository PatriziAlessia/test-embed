import config from '../../../config.js'

const facebookAppId = config.facebookAppId
const SDK_SOURCE = config.isDev
    ? 'https://connect.facebook.net/en_US/sdk/debug.js'
    : 'https://connect.facebook.net/en_US/sdk.js'
const SDK_VERSION = 'v13.0'
const SDK_ID = 'facebook-jssdk' // use any ID but make it unique, it's used as html tag ID across the page

const baseConfig = {
    appId: facebookAppId,
    cookie: true,
    xfbml: false,
    version: SDK_VERSION,
}

const PERMISSIONS_SCOPE = 'email public_profile'

const Facebook = {
    load: async (d = document, s = 'script') => {
        return new Promise((resolve, reject) => {
            let js
            let documentBody = d.body
            if (d.getElementById(SDK_ID)) {
                return
            }
            js = d.createElement(s)
            js.id = SDK_ID
            js.src = SDK_SOURCE
            js.async = true
            js.defer = true
            // Load as last <body> child
            documentBody.insertBefore(js, documentBody.lastElementChild)
            js.onload = async () => {
                resolve(window.FB)
            }
            js.onerror = async () => {
                reject('Cannot load FB SDK')
            }
        })
    },
    getInstance: () => {
        return window.FB
    },
    initialize: () => {
        if (!facebookAppId) {
            throw new Error(`[${SDK_ID}] Facebook App ID is required`)
        }
        const instance = window.FB
        if (!instance) {
            throw new Error(`[${SDK_ID}] Facebook SDK is required`)
        }
        // Init Facebook JS SDK
        instance.init(baseConfig)
    },
    checkLoginState: callback => {
        // Called when a person is finished with the Login Button.
        const instance = window.FB
        if (instance) {
            instance.getLoginStatus(response => {
                if (typeof callback === 'function') callback(response)
            })
        }
    },
    login: callback => {
        const instance = window.FB
        if (instance) {
            instance.login(
                response => {
                    if (typeof callback === 'function') callback(response)
                },
                { scope: PERMISSIONS_SCOPE }
            )
        }
    },
    logout: () => {
        const instance = window.FB
        if (instance) {
            instance.logout()
        }
    },
}

export default Facebook

// Wrote as Promise to wait async SDK loading before rendering the React APP
export const asyncInitFacebookSdk = () => {
    return new Promise((resolve, reject) => {
        // load Facebook SDK script inside the document
        Facebook.load(document)
            .then(() => {
                resolve()
            })
            .catch(err => reject(err))
    })
}

export const statusChangeCallback = async ({ authResponse, status }) => {
    // Called with the results from FB.getLoginStatus().
    if (status === 'connected') {
        // The user is logged in in Facebook and has authorized your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire.
        console.log('authResponse', authResponse)
        //await testAPI(authResponse.accessToken);
    } else if (status === 'not_authorized') {
        console.log('Not authorized')
        // The user hasn't authorized your application.  They
        // must click the Login button, or you must call FB.login
        // in response to a user gesture, to launch a login dialog.
    } else {
        console.log('Not connected')
        // The user isn't logged in to Facebook. You can launch a
        // login dialog with a user gesture, but the user may have
        // to log in to Facebook before authorizing your application.
    }
}

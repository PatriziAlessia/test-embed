import config from '../../../config.js'

const CLIENT_LIBRARY = 'https://accounts.google.com/gsi/client'
const HTML_TAG_ID = 'google-identity-service'
const GOOGLE_CLIENT_ID = config.googleClientId
const GOOGLE_REDIRECT_URI = config.googleRedirectUri

// See: https://developers.google.com/identity/oauth2/web/reference/js-reference?hl=en#TokenClientConfig
const baseConfig = {
    client_id: GOOGLE_CLIENT_ID,
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    redirect_uri: GOOGLE_REDIRECT_URI,
}
// Using "Implicit Flow"
const GoogleIdentityService = {
    load: async (d = document, s = 'script') => {
        return new Promise((resolve, reject) => {
            let js
            let documentHead = d.head
            if (d.getElementById(HTML_TAG_ID)) {
                return
            }
            js = d.createElement(s)
            js.id = HTML_TAG_ID
            js.src = CLIENT_LIBRARY
            js.async = true
            js.defer = true
            // Load inside <head/>
            documentHead.appendChild(js)
            js.onload = async () => {
                resolve(window.google)
            }
            js.onerror = async () => {
                reject('Cannot load GSI')
            }
        })
    },
    getInstance: () => {
        return window.google
    },
    initialize: ({ onSuccessCallback }) => {
        if (!GOOGLE_CLIENT_ID) {
            throw new Error(`[${HTML_TAG_ID}] Google Client ID is required`)
        }
        const instance = window.google
        if (!instance) {
            throw new Error(`[${HTML_TAG_ID}] SDK is required`)
        }
        // returns the client
        return instance.accounts.oauth2.initTokenClient({
            ...baseConfig,
            callback: onSuccessCallback, // this will handle the TokenResponse (https://developers.google.com/identity/oauth2/web/reference/js-reference?hl=en#TokenResponse)
        })
    },
}

export const asyncInitGoogleClient = () => {
    return new Promise((resolve, reject) => {
        GoogleIdentityService.load(document)
            .then(() => {
                resolve()
                //GoogleIdentityService.initialize({onSuccess: resolve, onError: reject})
            })
            .catch(err => reject(err))
    })
}

export default GoogleIdentityService

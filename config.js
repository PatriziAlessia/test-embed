export default {
    mode: import.meta.env.MODE,
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
    apiEndpoint: import.meta.env.VITE_API_ENDPOINT,
    googleClientId: import.meta.env.VITE_GOOGLE_APP_ID,
    googleRedirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    facebookAppId: import.meta.env.VITE_FB_APP_ID,
}

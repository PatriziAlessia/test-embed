import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import '@/theme/bootstrap-grid.min.css'
import '@/theme/bootstrap-utilities.min.css'

const startApp = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

startApp()
/*
 * Initialize auth services before starting the app
const initAuthServices = async () => {
    const authServices = [asyncInitFacebookSdk(), asyncInitGoogleClient()]
    try {
        await Promise.allSettled(authServices)
    } catch (err) {
        console.log('Cannot load auth services', err)
    }finally {
        startApp()
    }
}
*/

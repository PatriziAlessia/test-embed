import { RouterProvider } from 'react-router-dom'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import AlertProvider from '@/context/AlertProvider.jsx'
import UserProvider from '@/context/UserProvider.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import router from './router.jsx'

function App() {
    const themeName = 'light'

    return (
        <ThemeProvider theme={getAppTheme({ name: themeName })}>
            <StyleSheetManager>
                <AlertProvider>
                    <UserProvider>
                        <GlobalStyles />
                        <RouterProvider router={router} />
                    </UserProvider>
                </AlertProvider>
            </StyleSheetManager>
        </ThemeProvider>
    )
}

export default App

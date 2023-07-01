import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from '@/components/header/Header'
import { getAppTheme, GlobalStyles } from '@/theme'

export default {
    title: 'Components',
    component: Header,
}

const HeaderFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MemoryRouter>
                <Header {...args}></Header>
            </MemoryRouter>
        </ThemeProvider>
    )
}

export const HeaderExample = HeaderFunction.bind({})

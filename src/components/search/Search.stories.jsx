import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Search from './Search.jsx'

export default {
    title: 'Components',
    component: Search,
}

const SearchFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Search {...args}></Search>
        </ThemeProvider>
    )
}

export const SearchExample = SearchFunction.bind({})

SearchExample.args = {
    placeholder: 'Search...',
    rounded: true,
}

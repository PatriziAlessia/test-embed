import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Divider from './Divider.jsx'

export default {
    title: 'Components',
    component: Divider,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const DividerFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Divider {...args}></Divider>
        </ThemeProvider>
    )
}

export const DividerExample = DividerFunction.bind({})

import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Spinner from './Spinner.jsx'

export default {
    title: 'Components',
    component: Spinner,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const SpinnerFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Spinner {...args} />
        </ThemeProvider>
    )
}

export const SpinnerExample = SpinnerFunction.bind({})

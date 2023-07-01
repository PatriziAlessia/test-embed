import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Radio from './Radio.jsx'

export default {
    title: 'Components',
    component: Radio,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        radioClassName: {
            table: {
                disable: true,
            },
        },
        radioWrapperClassName: {
            table: {
                disable: true,
            },
        },
    },
}

const RadioFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Radio {...args} />
        </ThemeProvider>
    )
}

export const RadioExample = RadioFunction.bind({})

RadioExample.args = {
    label: 'Radio',
    error: {
        message: 'Error messsage',
    },
}

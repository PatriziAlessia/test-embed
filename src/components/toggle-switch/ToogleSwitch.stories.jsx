import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import ToogleSwitch from './ToggleSwitch.jsx'

export default {
    title: 'Components',
    component: ToogleSwitch,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const ToogleSwitchFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ToogleSwitch {...args} />
        </ThemeProvider>
    )
}

export const ToogleSwitchExample = ToogleSwitchFunction.bind({})

ToogleSwitchExample.args = {
    label: 'Toggle Switch',
    labelOn: 'right',
    errors: {
        message: 'Error message',
    },
}

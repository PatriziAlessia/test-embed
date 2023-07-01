import { ThemeProvider } from 'styled-components'

import Button from '@/components/button/Button'
import { getAppTheme, GlobalStyles } from '@/theme'

export default {
    title: 'Components',
    component: Button,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const ButtonFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Button {...args}></Button>
        </ThemeProvider>
    )
}

export const ButtonExample = ButtonFunction.bind({})

ButtonExample.args = {
    children: <span>Button</span>,
}

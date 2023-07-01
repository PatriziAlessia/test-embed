import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Card from './Card.jsx'

export default {
    title: 'Components',
    component: Card,
    argTypes: {
        classNames: {
            table: {
                disable: true,
            },
        },
    },
}

const CardFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Card {...args}></Card>
        </ThemeProvider>
    )
}

export const CardExample = CardFunction.bind({})

CardExample.args = {
    children: <div>Card</div>,
}

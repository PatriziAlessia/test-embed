import { ThemeProvider } from 'styled-components'

import { SuccessIcon } from '@/assets/icons/icons.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Accordion from './Accordion.jsx'

export default {
    title: 'Components',
    component: Accordion,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        bodyClassName: {
            table: {
                disable: true,
            },
        },
        headClassName: {
            table: {
                disable: true,
            },
        },
    },
}

const AccordionFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Accordion {...args}></Accordion>
        </ThemeProvider>
    )
}

export const AccordionExample = AccordionFunction.bind({})

AccordionExample.args = {
    icon: <SuccessIcon />,
    title: 'Accordion',
    children: <div>Accordion</div>,
}

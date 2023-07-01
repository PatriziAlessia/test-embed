import { ThemeProvider } from 'styled-components'

import { ChatIcon } from '@/assets/icons/icons.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Chip from './Chip.jsx'

export default {
    title: 'Components',
    component: Chip,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const ChipFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Chip {...args}></Chip>
        </ThemeProvider>
    )
}

export const ChipExample = ChipFunction.bind({})

ChipExample.args = {
    icon: <ChatIcon />,
    text: 'I am chip',
}

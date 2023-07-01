import { ThemeProvider } from 'styled-components'

import { SuccessIcon } from '@/assets/icons/icons'
import { getAppTheme, GlobalStyles } from '@/theme'

import Dropdown from './Dropdown.jsx'

export default {
    title: 'Components',
    component: Dropdown,
}

const DropdownFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Dropdown {...args}></Dropdown>
        </ThemeProvider>
    )
}

export const DropdownExample = DropdownFunction.bind({})

DropdownExample.args = {
    defaultOpen: false,
    side: 'bottom',
    trigger: <button type="button">Dropdown</button>,
    items: [
        {
            label: 'Dropdown 1',
            onSelect: () => {},
            icon: <SuccessIcon />,
            isToDelete: false,
        },
        {
            label: 'Dropdown 2',
            onSelect: () => {},
            icon: <SuccessIcon />,
            isToDelete: true,
        },
    ],
}

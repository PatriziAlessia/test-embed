import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import ContextMenu from './ContextMenu'

export default {
    title: 'Components',
    component: ContextMenu,
}

const ContextMenuFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ContextMenu {...args} />
        </ThemeProvider>
    )
}

export const ContextMenuExample = ContextMenuFunction.bind({})

ContextMenuExample.args = {
    trigger: 'Right click here.',
    menuItems: ['Back', ' Foward', 'Reload'],
    triggerItems: [
        {
            trigger: 'More Tools',
            values: [
                { name: ' Save Page As…', icon: '⌘+S' },
                { name: 'Create Shortcut…' },
                { name: 'Name Window…' },
                { name: 'Developer Tools' },
            ],
        },
    ],
}

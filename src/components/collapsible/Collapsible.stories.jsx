import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Collapsible from '@/components/collapsible/Collapsible'
import { getAppTheme, GlobalStyles } from '@/theme'

export default {
    title: 'Components',
    component: Collapsible,
    argTypes: {
        setOpenCollapse: {
            table: {
                disable: true,
            },
        },
    },
}

const CollapsibleFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })
    const [openCollapse, setOpenCollapse] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Collapsible
                openCollapse={openCollapse}
                setOpenCollapse={setOpenCollapse}
                {...args}
            />
        </ThemeProvider>
    )
}

export const CollapsibleExample = CollapsibleFunction.bind({})

CollapsibleExample.args = {
    title: 'Collapsible',
    section: 'Collapse',
    items: ['item1', 'item2', 'item3'],
}

import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Button from '@/components/button/Button.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import SidePopover from './SidePopover.jsx'

export default {
    title: 'Components',
    component: SidePopover,
}

const SidePopoverFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })
    const [open, setOpen] = useState(false)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Button onClick={() => setOpen(true)}>Open</Button>
            {open && (
                <SidePopover setOpen={setOpen} {...args}>
                    <h1>Body</h1>
                </SidePopover>
            )}
        </ThemeProvider>
    )
}

export const SidePopoverExample = SidePopoverFunction.bind({})

SidePopoverExample.args = {
    title: 'Header',
    footer: (
        <>
            <Button size={'large'} disabled={true}>
                Add
            </Button>{' '}
            <Button size={'fullWidth'}>Save</Button>
        </>
    ),
}

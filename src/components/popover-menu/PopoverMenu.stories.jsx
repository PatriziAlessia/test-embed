import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import PopoverMenu from './PopoverMenu.jsx'

export default {
    title: 'Components',
    component: PopoverMenu,
}

const PopoverMenuFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100px',
                    width: '500px',
                }}
            >
                <PopoverMenu {...args}></PopoverMenu>
            </div>
        </ThemeProvider>
    )
}

export const PopoverMenuExample = PopoverMenuFunction.bind({})

PopoverMenuExample.args = {
    cta: <button type="button">Popover</button>,
    children: (
        <>
            <span>Menu 1</span>
            <span>Menu 2</span>
        </>
    ),
}

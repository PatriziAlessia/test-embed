import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Tooltip from './Tooltip.jsx'

export default {
    title: 'Components',
    component: Tooltip,
}

const TooltipFunction = args => {
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
                <Tooltip {...args}></Tooltip>
            </div>
        </ThemeProvider>
    )
}

export const TooltipExample = TooltipFunction.bind({})

TooltipExample.args = {
    children: <span>Tooltip</span>,
    visibilityCondition: true,
    text: 'Tooltip message',
    showPosition: 'right',
}

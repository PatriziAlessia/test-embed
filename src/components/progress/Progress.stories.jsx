import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Progress from './Progress.jsx'

export default {
    title: 'Components',
    component: Progress,
}

const ProgressFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Progress {...args} />
        </ThemeProvider>
    )
}

export const ProgressExample = ProgressFunction.bind({})

ProgressExample.args = {
    progressValue: 60,
    width: 300,
    height: 25,
}

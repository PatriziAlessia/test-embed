import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Timeline from './Timeline.jsx'

export default {
    title: 'Components',
    component: Timeline,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const TimelineFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Timeline {...args} />
        </ThemeProvider>
    )
}

export const TimelineExample = TimelineFunction.bind({})
TimelineExample.args = {
    stepNames: ['step1', 'step2', 'step3', 'step4'],
    stepValues: ['1', '2', '3'],
}

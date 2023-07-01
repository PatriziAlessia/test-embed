import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Slider from './Slider.jsx'

export default {
    title: 'Components',
    component: Slider,
    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },
}

const SliderFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Slider {...args} />
        </ThemeProvider>
    )
}

export const SliderExample = SliderFunction.bind({})

SliderExample.args = {
    defaultValue: [50],
    max: 100,
    step: 1,
    width: 300,
}

import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Checkbox from './Checkbox.jsx'

export default {
    title: 'Components',
    component: Checkbox,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        checkboxWrapperClassName: {
            table: {
                disable: true,
            },
        },
        checkboxClassName: {
            table: {
                disable: true,
            },
        },
    },
}

const CheckboxFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Checkbox {...args}></Checkbox>
        </ThemeProvider>
    )
}

export const CheckboxExample = CheckboxFunction.bind({})

CheckboxExample.args = {
    label: 'I am a checkbox',
    error: { message: 'This is an error sample' },
}

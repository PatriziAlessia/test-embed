import { useForm } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Select from './Select.jsx'

export default {
    title: 'Components',
    component: Select,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const SelectFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })
    const { control } = useForm()

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Select {...args} control={control} />
        </ThemeProvider>
    )
}

export const SelectExample = SelectFunction.bind({})

SelectExample.args = {
    name: 'Select',
    options: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
    ],
}

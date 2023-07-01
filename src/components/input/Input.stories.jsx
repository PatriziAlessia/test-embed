import { ThemeProvider } from 'styled-components'

import { TwitchIcon } from '@/assets/icons/icons.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Input from './Input.jsx'

export default {
    title: 'Components',
    component: Input,
    argTypes: {
        rootClassName: {
            table: {
                disable: true,
            },
        },
    },
}

const InputFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Input {...args}></Input>
        </ThemeProvider>
    )
}

export const InputExample = InputFunction.bind({})

InputExample.args = {
    placeholder: 'I am an input',
    label: 'Name:',
    errors: { message: 'this is an error sample in input' },
    icon: <TwitchIcon />,
}

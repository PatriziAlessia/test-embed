import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import TextArea from './TextArea.jsx'

export default {
    title: 'Components',
    component: TextArea,
}

const TextAreaFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <TextArea {...args} />
        </ThemeProvider>
    )
}

export const TextAreaExample = TextAreaFunction.bind({})

TextAreaExample.args = {
    placeholder: 'Textarea',
}

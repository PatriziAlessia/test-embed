import { ThemeProvider } from 'styled-components'

import { CloseIcon } from '@/assets/icons/icons.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Toast from './Toast.jsx'

export default {
    title: 'Components',
    component: Toast,
}

const ToastFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Toast {...args} />
        </ThemeProvider>
    )
}

export const ToastExample = ToastFunction.bind({})

ToastExample.args = {
    visible: true,
    closeIcon: <CloseIcon />,
    title: 'Toast title',
    message: 'Toast message',
}

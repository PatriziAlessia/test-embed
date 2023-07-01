import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import AlertModal from './AlertModal.jsx'

export default {
    title: 'Components',
    component: AlertModal,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        bodyClassName: {
            table: {
                disable: true,
            },
        },
        actionsClassName: {
            table: {
                disable: true,
            },
        },
    },
}

const AlertModalFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AlertModal {...args}></AlertModal>
        </ThemeProvider>
    )
}

export const AlertModalExample = AlertModalFunction.bind({})

AlertModalExample.args = {
    title: <span>Alert Modal</span>,
    actionsAlertModal: () => {
        return (
            <>
                <button>Button</button>
            </>
        )
    },
    cancelAlertModal: true,
    canDismiss: true,
    triggerAlertModal: <button>Alert Modal</button>,
}

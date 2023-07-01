import { ThemeProvider } from 'styled-components'

import Button from '@/components/button/Button.jsx'
import Input from '@/components/input/Input.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Modal from './Modal.jsx'

export default {
    title: 'Components',
    component: Modal,
    argTypes: {
        trigger: {
            table: {
                disable: true,
            },
        },
        action: {
            table: {
                disable: true,
            },
        },
    },
}

const ModalFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Modal {...args}>
                <Input label={'Name'} />
            </Modal>
        </ThemeProvider>
    )
}

export const ModalDialogExample = ModalFunction.bind({})

ModalDialogExample.args = {
    trigger: <Button>Modal</Button>,
    title: 'Modal',
    description: 'This is the modal description',
    action: <Button>Save</Button>,
}

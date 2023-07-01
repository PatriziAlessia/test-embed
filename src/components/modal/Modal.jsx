import * as Dialog from '@radix-ui/react-dialog'
import PropTypes from 'prop-types'

import { CloseIcon } from '@/assets/icons/icons.jsx'

import {
    StyledIconButton,
    StyledDialogOverlay,
    StyledDialogContent,
    StyledDialogTitle,
    StyledDialogDescription,
    StyledDiv,
} from './styles.js'

const Modal = ({
    trigger,
    open,
    onOpenChange,
    modal,
    title,
    description,
    children,
    action,
}) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange} modal={modal}>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <StyledDialogOverlay />
                <StyledDialogContent>
                    <StyledDialogTitle>{title}</StyledDialogTitle>
                    <StyledDialogDescription>
                        {description}
                    </StyledDialogDescription>
                    {children}
                    <StyledDiv>
                        <Dialog.Close asChild>{action}</Dialog.Close>
                    </StyledDiv>
                    <Dialog.Close asChild>
                        <StyledIconButton
                            size={'small'}
                            variant={'link'}
                            collapsed
                        >
                            <CloseIcon />
                        </StyledIconButton>
                    </Dialog.Close>
                </StyledDialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal

Modal.propTypes = {
    trigger: PropTypes.element,
    open: PropTypes.bool,
    onOpenChange: PropTypes.func,
    modal: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
    action: PropTypes.element,
}

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import PropTypes from 'prop-types'

import { CloseIcon } from '@/assets/icons/icons'

import {
    StyledActionsContainer,
    StyledAlertDialogContent,
    StyledAlertDialogDescription,
    StyledAlertDialogOverlay,
    StyledAlertDialogTitle,
} from './styles'

const AlertModal = ({
    title,
    children,
    actionsAlertModal,
    triggerAlertModal,
    cancelAlertModal,
    canDismiss = true,
}) => {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                {triggerAlertModal}
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <StyledAlertDialogOverlay />

                <StyledAlertDialogContent>
                    <StyledAlertDialogTitle>
                        {title}
                        {canDismiss && (
                            <AlertDialog.Cancel>
                                <CloseIcon />
                            </AlertDialog.Cancel>
                        )}
                    </StyledAlertDialogTitle>

                    <StyledAlertDialogDescription>
                        {children}
                    </StyledAlertDialogDescription>

                    <StyledActionsContainer>
                        {cancelAlertModal && (
                            <AlertDialog.Cancel asChild>
                                <button>Cancel</button>
                            </AlertDialog.Cancel>
                        )}
                        <AlertDialog.Action asChild>
                            {actionsAlertModal}
                        </AlertDialog.Action>
                    </StyledActionsContainer>
                </StyledAlertDialogContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default AlertModal

AlertModal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.element,
    actionsAlertModal: PropTypes.func,
    triggerAlertModal: PropTypes.element,
    cancelAlertModal: PropTypes.bool,
    canDismiss: PropTypes.bool,
}

import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useTheme } from 'styled-components'

import {
    AlertIcon,
    CloseIcon,
    InfoIcon,
    SuccessIcon,
} from '@/assets/icons/icons'
import { FAILURE, SUCCESS } from '@/utilities/constants'

import {
    StyledCloseIconWrapper,
    StyledContainer,
    StyledContent,
    StyledIcon,
    StyledMessage,
    StyledRoot,
    StyledTitle,
} from './styles'
const Toast = ({
    visible,
    title,
    message,
    actionCallback,
    dismissTimeout,
    canDismiss = true,
    dismissCallback,
    variant = FAILURE,
    closeIcon = <CloseIcon />,
    right,
    left,
    top,
    bottom,
}) => {
    const theme = useTheme()
    const getVariantStyle = (variant, theme) => {
        switch (variant) {
            case SUCCESS:
                return {
                    color: theme.palette.success.base.text,
                    backgroundColor: theme.palette.success.base.background,
                    closeIconColor: theme.palette.success.base.text,
                    icon: <SuccessIcon width={22} height={22} />,
                }
            case FAILURE:
                return {
                    color: theme.palette.danger.base.text,
                    backgroundColor: theme.palette.danger.base.background,
                    closeIconColor: theme.palette.danger.base.text,
                    icon: <AlertIcon width={22} height={22} />,
                }
            default:
                return {
                    color: theme.palette.warning.base.text,
                    backgroundColor: theme.palette.warning.base.background,
                    closeIconColor: theme.palette.warning.base.text,
                    icon: <InfoIcon width={22} height={22} />,
                }
        }
    }
    const variantStyle = getVariantStyle(variant, theme)

    useEffect(() => {
        if (dismissTimeout && visible) {
            const timeoutId = setTimeout(() => {
                closeHandler()
            }, +dismissTimeout)
            return () => {
                clearTimeout(timeoutId)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible])

    const closeHandler = () => {
        dismissCallback && dismissCallback()
    }

    return (
        <>
            <StyledRoot
                visible={visible}
                variantStyle={variantStyle}
                right={right}
                left={left}
                top={top}
                bottom={bottom}
            >
                <StyledContainer>
                    <StyledIcon>{variantStyle.icon}</StyledIcon>
                    <StyledContent>
                        {title && <StyledTitle>{title}</StyledTitle>}
                        {message && <StyledMessage>{message}</StyledMessage>}
                        {actionCallback && <span onClick={actionCallback} />}
                    </StyledContent>
                    {canDismiss && (
                        <StyledCloseIconWrapper
                            variantStyle={variantStyle}
                            onClick={closeHandler}
                        >
                            {' '}
                            {closeIcon}{' '}
                        </StyledCloseIconWrapper>
                    )}
                </StyledContainer>
            </StyledRoot>
        </>
    )
}

export default Toast

Toast.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    actionCallback: PropTypes.func,
    dismissTimeout: PropTypes.func,
    canDismiss: PropTypes.bool,
    dismissCallback: PropTypes.func,
    variant: PropTypes.oneOf(['fail', 'pending', 'success']),
    closeIcon: PropTypes.element,
    right: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
}

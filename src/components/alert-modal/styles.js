import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled, { css } from 'styled-components'

export const StyledAlertDialogOverlay = styled(AlertDialog.Overlay)`
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const StyledAlertDialogContent = styled(AlertDialog.Content)`
    ${({ theme }) => css`
        background-color: ${theme.palette.neutral.base[0]};
        border-radius: 6px;
        box-shadow: hsl(206 22% 7% / 35%) 0 10px 38px -10px,
            hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        max-width: 500px;
        max-height: 85vh;
        padding: ${theme.spacing * 3}px;
        animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1000;

        &:focus {
            outline: none;
        }
    `}
`

export const StyledAlertDialogTitle = styled(AlertDialog.Title)`
    margin: 0;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & svg {
        cursor: pointer;
    }
    & button {
        display: flex;
        align-items: center;
    }
`

export const StyledAlertDialogDescription = styled(AlertDialog.Description)`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacing * 3}px;
        font-size: 15px;
        line-height: 1.5;
    `}
`

export const StyledActionsContainer = styled(AlertDialog.Description)`
    ${({ theme }) => css`
        display: flex;
        gap: ${theme.spacing * 3}px;
        justify-content: flex-end;
    `}
`

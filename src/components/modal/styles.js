import * as Dialog from '@radix-ui/react-dialog'
import styled, { css, keyframes } from 'styled-components'

import Button from '@/components/button/Button.jsx'

const overlayShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const contentShow = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`

export const StyledIconButton = styled(Button)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
`

export const StyledDialogOverlay = styled(Dialog.Overlay)`
    ${({ theme }) => css`
        background-color: ${theme.palette.neutral.base[100]};
        position: fixed;
        inset: 0;
        animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    `}
`

export const StyledDialogContent = styled(Dialog.Content)`
    ${({ theme }) => css`
        background-color: ${theme.palette.neutral.base[0]};
        border-radius: ${theme.spacing}px;
        box-shadow: ${theme.shadows[80]};
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        max-width: 450px;
        max-height: 85vh;
        padding: ${theme.spacing * 3}px;
        animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
        &:focus {
            outline: none;
        }
    `}
`

export const StyledDialogTitle = styled(Dialog.Title)`
    ${({ theme }) => css`
        margin: 0;
        color: ${theme.palette.primary.base.text};
    `}
`

export const StyledDialogDescription = styled(Dialog.Description)`
    ${({ theme }) => css`
        margin: ${theme.spacing}px 0 ${theme.spacing * 2}px;
        color: ${theme.palette.secondary.base.text};
    `}
`

export const StyledDiv = styled.div`
    ${({ theme }) => css`
        display: flex;
        margin-top: ${theme.spacing * 3}px;
        justify-content: flex-end;
    `}
`

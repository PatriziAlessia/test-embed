import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled, { css } from 'styled-components'

export const StyledDropdownTrigger = styled(DropdownMenu.Trigger)`
    cursor: pointer;
`

export const StyledDropdownContent = styled(DropdownMenu.Content)`
    ${({ theme }) => css`
        min-width: 150px;
        padding: 4px;
        box-shadow: ${theme.shadows[60]};
        border: 1px solid ${theme.palette.neutral.base[300]};
        background-color: ${theme.palette.neutral.base[0]};
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing}px;
        &[data-side='top'] {
            animation-name: slideDownAndFade;
        }
        &[data-side='right'] {
            animation-name: slideLeftAndFade;
        }
        &[data-side='bottom'] {
            animation-name: slideUpAndFade;
        }
        &[data-side='left'] {
            animation-name: slideRightAndFade;
        }
        @keyframes slideUpAndFade {
            from {
                opacity: 0;
                transform: translateY(2px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideRightAndFade {
            from {
                opacity: 0;
                transform: translateX(-2px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideDownAndFade {
            from {
                opacity: 0;
                transform: translateY(-2px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideLeftAndFade {
            from {
                opacity: 0;
                transform: translateX(2px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `}
`

export const StyledDropdownItem = styled(DropdownMenu.Item)`
    ${({ theme }) => css`
        cursor: pointer;
        padding: 2px;
        border-radius: 8px;
        &[data-disabled] {
            color: ${theme.palette.secondary.base.text};
            pointer-events: none;
        }
        &[data-highlighted] {
            background-color: ${theme.palette.neutral.base[200]};
        }
    `}
`

export const StyledDropdownItemChild = styled.div`
    ${({ theme, isToDelete }) => css`
        cursor: pointer;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: ${theme.spacing}px;

        &.icon-container,
        svg {
            height: 10px;
            width: 10px;
        }

        & span {
            font-size: 12px;
            font-weight: 400;
            color: ${isToDelete
                ? theme.palette.danger.base.text
                : theme.palette.secondary.base.text};
        }
    `}
`

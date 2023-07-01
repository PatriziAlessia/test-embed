import * as Popover from '@radix-ui/react-popover'
import styled, { css } from 'styled-components'

export const StyledPopoverContent = styled(Popover.Content)`
    ${({ theme }) => css`
        border-radius: 4px;
        padding: 20px;
        width: 260px;
        background-color: ${theme.palette.neutral.base[0]};
        box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
            hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
        animation-duration: 400ms;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, opacity;
        &:focus {
            box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
                hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
                0 0 0 2px ${theme.palette.neutral.base[1000]};
        }
        &[data-state='open'][data-side='top'] {
            animation-name: slideDownAndFade;
        }
        &[data-state='open'][data-side='right'] {
            animation-name: slideLeftAndFade;
        }
        &[data-state='open'][data-side='bottom'] {
            animation-name: slideUpAndFade;
        }
        &[data-state='open'][data-side='left'] {
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

export const StyledPopoverContentContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-flow: column;
        gap: 16px;
        background: ${theme.palette.neutral.base[0]};
    `}
`

export const StyledPopoverArrow = styled(Popover.Arrow)`
    ${({ theme }) => css`
        fill: ${theme.palette.neutral.base[0]};
    `}
`

export const StyledPopoverClose = styled(Popover.Close)`
    ${({ theme }) => css`
        font-family: inherit;
        border-radius: 100%;
        height: 25px;
        width: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: ${theme.palette.primary.base.text};
        position: absolute;
        top: 5px;
        right: 5px;
        &:hover {
            background-color: ${theme.palette.neutral.base[300]};
        }
        &:focus {
            box-shadow: 0 0 0 2px ${theme.palette.neutral.base[100]};
        }
    `}
`

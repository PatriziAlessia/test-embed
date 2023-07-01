import * as Tabs from '@radix-ui/react-tabs'
import styled, { css } from 'styled-components'

export const StyledTabsRoot = styled(Tabs.Root)`
    ${({ theme, maxWidth }) => css`
        display: flex;
        flex-direction: column;
        max-width: ${maxWidth}px;
        box-shadow: ${theme.shadows[40]};
    `}
`

export const StyledTabsList = styled(Tabs.List)`
    ${({ theme }) => css`
        flex-shrink: 0;
        display: flex;
        border-bottom: 1px solid ${theme.palette.neutral.base[200]};
    `}
`

export const StyledTabsTrigger = styled(Tabs.Trigger)`
    ${({ theme, icon }) => css`
        background-color: ${theme.palette.neutral.base[0]};
        padding: ${theme.spacing / 2}px ${theme.spacing * 2.5}px;
        height: 45px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: ${theme.spacing / 4}px;
        color: ${theme.palette.primary.base.active};
        user-select: none;
        &:first-child {
            border-top-left-radius: ${theme.spacing}px;
        }
        &:last-child {
            border-top-right-radius: ${theme.spacing}px;
        }
        &:hover {
            color: ${theme.palette.primary.base.hover};
        }
        &[data-state='active'] {
            color: ${theme.palette.primary.base.text};
            ${!icon &&
            css`
                border-bottom: 1px solid ${theme.palette.primary.base.text};
            `}
            box-shadow: ${theme.shadows[60]};
            & svg {
                & path {
                    fill: ${theme.palette.primary.base.text} !important;
                }
            }
        }
        &:focus {
            position: relative;
            box-shadow: ${theme.shadows[60]};
        }
    `}
`

export const StyledTabsContent = styled(Tabs.Content)`
    ${({ theme }) => css`
        flex-grow: 1;
        padding: ${theme.spacing * 2.5}px;
        background-color: ${theme.palette.neutral.base[0]};
        border-bottom-left-radius: ${theme.spacing}px;
        border-bottom-right-radius: ${theme.spacing}px;
        outline: none;
        &:focus {
            box-shadow: ${theme.shadows[40]};
        }
        &[data-state='inactive'] {
            display: none;
        }
    `}
`

export const StyledTitle = styled.p`
    ${({ theme }) => css`
        margin-top: 0;
        margin-bottom: ${theme.spacing * 3}px;
        color: ${theme.palette.primary.base.text};
    `}
`

import * as ContextMenu from '@radix-ui/react-context-menu'
import styled, { css } from 'styled-components'

export const StyledContextMenuTrigger = styled(ContextMenu.Trigger)`
    ${({ theme }) => css`
        display: block;
        border: 2px ${theme.palette.neutral.base[1000]} dashed;
        color: ${theme.palette.neutral.base[1000]};
        border-radius: ${theme.spacing / 2};
        user-select: none;
        padding: ${theme.spacing * 6}px 0;
        width: 300px;
        text-align: center;
    `}
`

export const StyledContextMenuContent = styled(ContextMenu.Content)`
    ${({ theme }) => css`
        min-width: 220px;
        background-color: ${theme.palette.neutral.base[0]};
        border-radius: ${theme.spacing}px;
        overflow: hidden;
        padding: ${theme.spacing}px;
        box-shadow: ${theme.shadows[100]};
        cursor: pointer;
    `}
`

export const StyledSubContent = styled(ContextMenu.SubContent)`
    ${({ theme }) => css`
        min-width: 220px;
        background-color: ${theme.palette.neutral.base[0]};
        border-radius: ${theme.spacing}px;
        overflow: hidden;
        padding: ${theme.spacing}px;
        box-shadow: ${theme.shadows[100]};
        cursor: pointer;
    `}
`

export const StyledMenuItem = styled(ContextMenu.Item)`
    ${({ theme }) => css`
        color: ${theme.palette.primary.base.text};
        border-radius: ${theme.spacing / 2.5}px;
        display: flex;
        align-items: center;
        height: 26px;
        padding: 0 ${theme.spacing}px;
        position: relative;
        padding-left: ${theme.spacing * 3}px;
        user-select: none;
        outline: none;
        &[data-disabled] {
            color: ${theme.palette.primary.base.disabled};
            pointer-events: none;
        }
        &[data-highlighted] {
            background-color: ${theme.palette.primary.base.background};
            color: ${theme.palette.neutral.base[0]};
        }
    `}
`

export const StyledSubTrigger = styled(ContextMenu.SubTrigger)`
    ${({ theme }) => css`
        color: ${theme.palette.primary.base.text};
        border-radius: ${theme.spacing / 2}px;
        display: flex;
        align-items: center;
        height: 26px;
        padding: 0 ${theme.spacing}px;
        position: relative;
        padding-left: ${theme.spacing * 3}px;
        user-select: none;
        outline: none;
        &[data-disabled] {
            color: ${theme.palette.primary.base.disabled};
            pointer-events: none;
        }
        &[data-highlighted] {
            background-color: ${theme.palette.primary.base.background};
            color: ${theme.palette.neutral.base[0]};
        }
        &[data-state='open'] {
            color: ${theme.palette.primary.base.text};
            background-color: ${theme.palette.primary.base.background};
        }
    `}
`

export const StyledMenuLabel = styled(ContextMenu.Label)`
    ${({ theme }) => css`
        padding-left: ${theme.spacing * 3}px;
        color: ${theme.palette.neutral.base[400]};
    `}
`

export const StyledRightSlot = styled.div`
    ${({ theme }) => css`
        margin-left: auto;
        padding-left: ${theme.spacing * 2.5}px;
        color: ${theme.palette.neutral.base[400]};
        & svg {
            transform: rotate(-90deg);
            height: 10px;
            width: 10px;
        }
        &[data-highlighted] {
            color: ${theme.palette.neutral.base[0]};
        }
        &[data-disabled] {
            color: ${theme.palette.primary.base.disabled};
        }
    `}
`

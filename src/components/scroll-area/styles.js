import * as ScrollArea from '@radix-ui/react-scroll-area'
import styled, { css } from 'styled-components'

const ScrollBarSize = 10

export const StyledScrollAreaRoot = styled(ScrollArea.Root)`
    ${({ theme, width, height }) => css`
        width: ${width};
        height: ${height};
        border-radius: ${theme.spacing / 2}px;
        overflow: hidden;
        box-shadow: ${theme.shadows[100]};
        background-color: ${theme.palette.neutral.base[0]};
    `}
`
export const StyledViewport = styled(ScrollArea.Viewport)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`
export const StyledScrollbar = styled(ScrollArea.ScrollAreaScrollbar)`
    ${({ theme }) => css`
        display: flex;
        user-select: none;
        touch-action: none;
        padding: 2px;
        background: ${theme.palette.neutral.base[100]};
        transition: background 160ms ease-out;

        :hover {
            background: ${theme.palette.neutral.base[200]};
        }
        &[data-orientation='vertical'] {
            width: ${ScrollBarSize}px;
        }
        &[data-orientation='horizontal'] {
            flex-direction: column;
            height: ${ScrollBarSize}px;
        }
    `}
`

export const StyledScrollAreaThumb = styled(ScrollArea.Thumb)`
    ${({ theme }) => css`
        flex: 1;
        background: ${theme.palette.neutral.base[300]};
        border-radius: ${ScrollBarSize}px;
        position: relative;

        ::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            min-width: 44px;
            min-height: 44px;
        }
    `}
`

export const StyledScrollAreaCorner = styled(ScrollArea.ScrollAreaCorner)`
    ${({ theme }) => css`
        background: ${theme.palette.neutral.base[1000]};
    `}
`

export const StyledScrollAreaBox = styled.div`
    ${({ theme, boxWidth }) => css`
        width: ${boxWidth};
        padding: ${theme.spacing * 1.875}px ${theme.spacing * 2.5}px;
    `}
`

export const StyledScrollAreaText = styled.div`
    ${({ theme }) => css`
        color: ${theme.palette.primary.base.text};
    `}
`

export const StyledScrollAreaTag = styled.div`
    ${({ theme }) => css`
        color: ${theme.palette.neutral.base[500]};
        margin-top: ${theme.spacing * 1.25}px;
        border-top: 1px solid ${theme.palette.neutral.base[200]};
        padding-top: ${theme.spacing * 1.25}px;
    `}
`

import styled, { css } from 'styled-components'

export const StyledMediaThumbnailRoot = styled.label`
    ${({ theme, length }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 250px;
        min-width: 158px;
        border-radius: 12px;
        overflow: hidden;
        border: ${!length && ` 2px solid ${theme.palette.neutral.base[100]}`};
    `}
`

export const StyledMediaThumbnailOverlay = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-direction: column;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 2;
        background: linear-gradient(
            180deg,
            ${theme.palette.neutral.base[0]} 26.04%,
            ${theme.palette.secondary.base.background} 100%
        );
        padding: ${theme.spacing}px;
    `}
`
export const StyledMediaThumbnailButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
`
export const StyledMediaThumbnailMediaInfo = styled.div`
    ${({ theme }) => css`
        & p {
            font-size: 9px;
            font-weight: 400;
            color: ${theme.palette.neutral.base[0]};
        }
    `}
`

export const StyledButtonFix = styled.button`
    display: none;
`
export const StyledThumbnailButton = styled.button`
    ${({ theme }) => css`
        width: 24px;
        height: 24px;
        border-radius: 4px;
        background: ${theme.palette.primary.base.background};
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        padding: 1px 0;
    `}
`

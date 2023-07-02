import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
`

export const StyledOverlay = styled.div`
    ${({ overlayFullscreen, theme }) => css`
        z-index: 13;
        position: ${overlayFullscreen ? 'fixed' : 'none'};
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${theme.palette.neutral.base[200]};
    `}
`

export const StyledSvg = styled.svg`
    ${({ center, size, overlayFullscreen, isImage }) => css`
        z-index: 14;
        width: ${size}px;
        height: 200px;
        animation: ${rotate} 2s linear infinite;
        ${center &&
        css`
            position: ${overlayFullscreen ? 'fixed' : 'absolute'};
            left: 50%;
            margin-left: ${-size / 2}px;
            top: 50%;
            margin-top: ${-size / 2}px;
        `};
        & circle {
            animation: ${!isImage &&
            css`
                ${dash} 1.5s ease-in-out infinite
            `};
        }
    `}
`

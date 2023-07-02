import styled, { css, keyframes } from 'styled-components'

const slideLeft = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`
const slideRight = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(100%);
    }
`

export const StyledRoot = styled.div`
    ${({ theme, animation }) => css`
        z-index: 100000000;
        width: 570px;
        height: 100%;
        background-color: ${theme.palette.neutral.base[0]};
        display: grid;
        grid-template-rows: auto 3fr auto;
        padding: ${theme.spacing * 3}px;
        position: absolute;
        border-left: 1px solid ${theme.palette.neutral.base[200]};
        top: 0;

        right: 0;
        animation: ${animation
            ? css`
                  ${slideRight} 1s ease-in-out
              `
            : css`
                  ${slideLeft} 1s ease-in-out
              `};

        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0.5em;
        }
        &::-webkit-scrollbar-track {
            background-color: ${theme.palette.neutral.base[100]};
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.neutral.base[200]};
        }
    `}
`

export const StyledHeader = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        padding-bottom: ${theme.spacing * 4}px;

        & svg {
            cursor: pointer;
        }

        h3 {
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
        }
    `}
`

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledFooter = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-items: flex-end;
        gap: ${theme.spacing * 3}px;
        > button {
            height: 40px;
            border: none;
            border-radius: ${theme.spacing / 2}px;
        }
    `}
`

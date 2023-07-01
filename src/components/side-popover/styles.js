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
    ${({ theme, animation, width }) => css`
        width: ${width};
        height: 100%;
        background-color: ${theme.palette.neutral.base[0]};
        display: grid;
        grid-template-rows: auto 3fr auto;
        gap: ${theme.spacing * 2}px;
        padding: ${theme.spacing * 3}px;
        position: absolute;
        top: 0;
        right: 0;
        animation: ${animation
            ? css`
                  ${slideRight} 1s ease-in-out
              `
            : css`
                  ${slideLeft} 1s ease-in-out
              `};
    `}
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    & svg {
        cursor: pointer;
    }
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

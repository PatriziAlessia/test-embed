import styled, { css } from 'styled-components'

export const StyledAccordionRoot = styled.div`
    ${({ theme }) => css`
        width: 100%;
        background: ${theme.palette.neutral.base[0]};
        box-shadow: ${theme.shadows[100]};
        border-radius: ${theme.spacing * 3}px;
        padding: ${theme.spacing * 3}px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    `}
`

export const StyledAccordionHead = styled.div`
    ${({ theme, open, animated }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${theme.spacing * 2}px;
        cursor: pointer;
        div:nth-child(2) {
            & svg {
                transform: ${open ? 'rotate(180deg)' : 'rotate(0deg)'};
                transition: ${animated && `ease-in-out 400ms`};
            }
        }
    `}
`

export const StyledAccordionTitle = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacing}px;
        & h5 {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        & svg {
            width: 24px;
        }
    `}
`

export const StyledAccordionBody = styled.div`
    ${({ theme, open, bodyHeight, animated }) => css`
        height: ${open ? (animated ? bodyHeight : '100%') : 0}px;
        overflow: hidden;
        ${animated
            ? css`
                  transition: ease-in-out 400ms;
              `
            : null};
        & > div {
            padding: ${theme.spacing * 3}px;
            height: ${animated ? bodyHeight : '100%'};
            overflow: auto;
        }
    `}
`

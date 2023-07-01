import styled, { css } from 'styled-components'

export const StyledInpuSearchtWrapper = styled.div`
    ${({ theme }) => css`
        position: relative;
        margin: ${theme.spacing / 2}px 0;
        width: 100%;
        & input {
            height: 58px;
            &:hover {
                border-color: ${theme.palette.primary.base.text};
            }
        }
    `}
`

export const StyledInputSearch = styled.input`
    ${({ theme, rounded }) => css`
        border: 2px solid ${theme.palette.neutral.base[200]};
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        padding: ${theme.spacing * 2}px ${theme.spacing * 6}px;
        color: ${theme.palette.neutral.base[500]};
        background-color: ${theme.palette.neutral.base[0]};
        ${rounded &&
        css`
            border-radius: 100px;
        `};
        &:focus {
            outline: none;
        }
    `}
`

export const StyledSearchIcon = styled.span`
    ${({ theme, position, cursor }) => css`
        display: flex;
        align-items: center;
        justify-items: center;
        cursor: ${cursor};
        width: 24px;
        height: 24px;
        position: absolute;
        top: calc(50% - 12px);
        left: ${position === 'left' ? `${theme.spacing * 2}px` : 'inherit'};
        right: ${position === 'right' ? `${theme.spacing * 2}px` : 'inherit'};
        & svg {
            width: 24px;
            height: 24px;
        }
    `}
`

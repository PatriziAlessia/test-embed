import styled, { css } from 'styled-components'

export const StyledInputRoot = styled.div`
    position: relative;
`
export const StyledInputWrapper = styled.div`
    ${({ theme, hasError, isSuccess, touched, iconPosition }) => css`
        position: relative;
        margin: ${theme.spacing / 2}px 0;
        width: 100%;
        & input {
            height: 58px;
            padding-left: ${iconPosition === 'left'
                ? `${theme.spacing * 6}px`
                : `${theme.spacing * 2}px`};
            padding-right: ${touched
                ? `${theme.spacing * 10}px`
                : `${theme.spacing * 6}px`};
            border-radius: 12px;
            ${hasError &&
            css`
                border-color: ${theme.palette.danger.base.text} !important;
            `};
            ${isSuccess &&
            css`
                border-color: ${theme.palette.success.base.text} !important;
            `};
            &:hover {
                border-color: ${theme.palette.primary.base.text};
            }
        }
    `}
`
export const StyledIcons = styled.span`
    ${({ theme, iconPosition }) => css`
        position: absolute;
        top: 50%;
        ${iconPosition === 'left'
            ? css`
                  left: ${theme.spacing * 2}px;
              `
            : css`
                  right: ${theme.spacing * 2}px;
              `};
        transform: translateY(10%);
        display: flex;
        gap: ${theme.spacing}px;
        z-index: 1;
    `}
`

export const StyledIcon = styled.span`
    display: flex;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    & svg {
        width: 24px;
        height: 24px;
        cursor: initial;
    }
`
export const StyledStatusIcons = styled.span`
    ${({ theme }) => css`
        position: absolute;
        top: 50%;
        transform: translateY(10%);
        display: flex;
        gap: ${theme.spacing}px;
        z-index: 1;
        left: unset;
        right: ${theme.spacing * 2}px;
    `}
`

export const StyledErrorMessage = styled.small`
    ${({ theme }) => css`
        color: ${theme.palette.danger.base.text};
    `}
`
export const StyledInput = styled.input`
    ${({ theme, iconPosition, touched, rounded, hasError, isSuccess }) => css`
        border: 2px solid ${theme.palette.neutral.base[200]};
        width: 100%;
        font-size: 16px;
        line-height: 24px;
        padding: ${theme.spacing / 2}px 0;
        color: ${theme.palette.neutral.base[500]};
        background-color: ${theme.palette.neutral.base[0]};
        padding-left: ${iconPosition === 'left'
            ? `${theme.spacing * 6}px`
            : `${theme.spacing * 2}px`};
        padding-right: ${touched
            ? `${theme.spacing * 10}px`
            : `${theme.spacing * 6}px`};
        ${rounded &&
        css`
            border-radius: 100px;
        `};
        ${hasError &&
        css`
            border: 1px solid ${theme.palette.danger.base.text};
            background-color: ${theme.palette.danger.base.background};
        `};
        ${isSuccess &&
        css`
            border: 1px solid ${theme.palette.success.base.text};
            background-color: ${theme.palette.success.base.background};
        `};
        &:focus {
            outline: none;
        }
    `}
`

export const StyledLabel = styled.label`
    ${({ theme }) => css`
        display: block;
        margin-bottom: ${theme.spacing / 2}px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 700;
        color: ${theme.palette.neutral.base[400]};
    `}
`

export const StyledSmall = styled.small`
    ${({ theme }) => css`
        font-size: 12px;
        line-height: 16px;
        color: ${theme.palette.neutral.base[400]};
    `}
`

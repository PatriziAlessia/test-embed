import styled, { css } from 'styled-components'

export const StyledRoot = styled.label`
    ${({ theme, labelOn }) => css`
        display: grid;
        grid-auto-flow: ${!labelOn ? 'row' : 'column'};
        grid-column-gap: ${!labelOn ? undefined : theme.spacing / 2}px;
        align-content: center;
        align-items: center;
        position: relative;
        grid-template-columns: max-content;
    `}
`

export const StyledLabel = styled.span`
    ${({ theme, disabled, labelOn }) => css`
        font-size: 14px;
        margin-left: ${theme.spacing / 2}px;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        grid-column: ${!labelOn ? undefined : labelOn === 'left' ? 1 : 2};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `}
`

export const StyledInput = styled.input`
    ${({ theme, inputBgColor, disabled, isSmall }) => css`
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        padding: 0;
        &:checked + ${StyledSlider} {
            ${disabled &&
            css`
                background-color: ${theme.palette.neutral.base[300]};
            `}
            ${!disabled &&
            css`
                background-color: ${inputBgColor
                    ? inputBgColor
                    : theme.palette.primary.base.background};
            `}
        }
        &:checked + ${StyledSlider}:before {
            transform: ${isSmall ? 'translateX(10px)' : 'translateX(24px)'};
            left: ${isSmall ? 3 : 6}px;
        }
        &:disabled {
            background-color: ${theme.palette.neutral.base[300]};
        }
    `}
`

export const StyledSlider = styled.span`
    ${({ theme, isSmall, disabled, pointerBackground }) => css`
    position: relative;
    display: grid;
    align-items: center;
    width: ${isSmall ? 28 : 56}px;
    height: ${isSmall ? 16 : 28}px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${
        disabled
            ? theme.palette.neutral.base[300]
            : theme.palette.neutral.base[400]
    };
    transition: 0.5s;
    border-radius: 40px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    font-size: 10px;
    color: ${theme.palette.neutral.base[0]};
    padding: 0 6px;
    &::before {
        position: absolute;
        content: '';
        height: ${isSmall ? 12 : 24}px;
        width: ${isSmall ? 12 : 24}px;
        left: ${isSmall ? 3 : 2}px;
        bottom: 2px;
        background-color: ${theme.palette.neutral.base[0]};
        transition: 0.5s;
        border-radius: 50%;
        background-image:
            url(${pointerBackground});
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
},
`}
`

export const StyledErrorMessage = styled.small`
    ${({ theme }) => css`
        color: ${theme.palette.danger.base.text};
        letter-spacing: 0.5px;
        line-height: 1.4rem;
        font-weight: 400;
        font-size: 12px;
    `}
`

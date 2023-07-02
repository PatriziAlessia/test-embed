import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
    ${({ width }) => css`
        display: flex;
        width: ${width};
        flex-direction: column;
    `}
`

export const StyledInputWrapper = styled.div`
    ${({
        theme,
        iconPosition,
        hasError,
        isSuccess,
        disabled,
        size,
        width,
    }) => css`
        display: flex;
        align-items: center;
        width: ${width};
        flex-direction: ${iconPosition === 'right' ? 'row-reverse' : 'row'};
        border: 1px solid ${theme.palette.neutral.base[200]};
        border-radius: ${theme.spacing - 2}px;
        gap: ${theme.spacing}px;
        padding: 0 ${theme.spacing + 4}px;

        ${hasError &&
        css`
            border: 1px solid ${theme.palette.danger.base.text};
        `};

        ${isSuccess &&
        css`
            border: 1px solid ${theme.palette.success.base.text};
        `};

        &:focus-within {
            ${!hasError &&
            css`
                box-shadow: ${theme.shadows[20]};
                border: 1px solid ${theme.palette.primary.base.text};
            `}
        }

        ${disabled &&
        css`
            border: 1px solid ${theme.palette.neutral.base[200]};
            background-color: ${theme.palette.secondary.base.background};
            cursor: not-allowed;
        `};

        ${size === 'small' &&
        css`
            height: 24px;
        `}

        ${size === 'medium' &&
        css`
            height: 28px;
        `}

        ${size === 'large' &&
        css`
            height: 40px;
        `}
    `}
`

export const StyledInput = styled.input`
    ${({ theme, variant }) => css`
        flex: 1;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: ${variant === 'filled'
            ? theme.palette.neutral.base[0]
            : 'transparent'};

        &:focus {
            outline: none;
        }

        /* hide arrows for number */
        &[type='number']::-webkit-inner-spin-button,
        &[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    `}
`

export const StyledLabel = styled.label`
    ${({ theme: { spacing, palette, truncateText, typography } }) => css`
        display: block;
        margin-bottom: ${spacing}px;
        color: ${palette.neutral.base[500]};
        ${typography.heading4}

        ${truncateText}
    `}
`

export const StyledIcon = styled.div`
    display: flex;
    align-items: center;
`

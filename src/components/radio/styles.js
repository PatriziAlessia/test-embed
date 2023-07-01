import styled, { css } from 'styled-components'

export const StyledRoot = styled.div`
    width: max-content;
    max-width: 100%;
`
export const StyledRadioWrapper = styled.label`
    ${({ theme, disabled }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacing}px;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
    `}
`

export const StyledLabel = styled.span`
    ${({ labelPosition }) => css`
        ${labelPosition === 'right' &&
        css`
            order: 2;
        `}
    `}
`

export const StyledRadio = styled.input`
    ${({ theme, labelPosition, isSmall, disabled }) => css`
        ${labelPosition === 'right' &&
        css`
            order: 1;
        `}
        width:
        ${isSmall ? theme.spacing * 2 : theme.spacing * 2.5}px;
        height: ${isSmall ? theme.spacing * 2 : theme.spacing * 2.5}px;
        border: 1px solid ${theme.palette.neutral.base[200]};
        border-radius: 50%;
        appearance: none;
        padding: 2px;
        &:checked {
            background-color: ${theme.palette.neutral.base[0]};
            border-color: ${theme.palette.secondary.base.text};
            content: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='10' rx='5' fill='%236426E1'/%3E%3C/svg%3E");
        }
        ${disabled &&
        css`
            cursor: not-allowed;
            background: ${theme.palette.neutral.base[200]};
        `}
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

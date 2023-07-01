import styled, { css } from 'styled-components'

export const StyledCheckboxRoot = styled.div`
    width: max-content;
    max-width: 100%;
`
export const StyledCheckboxWrapper = styled.label`
    ${({ theme, disabled }) => css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacing}px;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
    `}
`

export const StyledCheckboxLabel = styled.span`
    ${({ labelPosition }) => css`
        ${labelPosition === 'right' &&
        css`
            order: 2;
        `};
    `}
`

export const StyledCheckBox = styled.input`
    ${({ labelPosition, isSmall, isSelectAll, disabled, theme }) => css`
        ${labelPosition === 'right' &&
        css`
            order: 1;
        `};
        width: ${isSmall ? `16px` : `20px`};
        min-width: ${isSmall ? `16px` : `20px`};
        height: ${isSmall ? `16px` : `20px`};
        border: 1px solid ${theme.palette.neutral.base[200]};
        border-radius: 4px;
        appearance: none;
        padding: 0;
        ${!disabled &&
        css`
            cursor: pointer;
            transition: ease-in-out 400ms;
        `};
        &:checked {
            border-color: ${theme.palette.secondary.base.background};
            background: ${theme.palette.secondary.base.background};
            content: ${isSelectAll
                ? `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewBox='0 0 24 24'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='minimize_black_24dp'%3E%3Cpolygon id='Path' points='0 0 24 0 24 24 0 24'%3E%3C/polygon%3E%3Cpolygon id='Path' fill='%23FFFFFF' fill-rule='nonzero' points='6 11 18 11 18 13 6 13'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                : `url("data:image/svg+xml,%3Csvg viewBox='-4 -4 18 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L4 7L9 1' stroke='white' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`};
            fill: ${theme.palette.neutral.base[0]};
        }
        ${disabled &&
        css`
            cursor: not-allowed;
            background: ${theme.palette.neutral.base[200]};
        `}
    `}
`

export const StyledCheckboxErrorMessage = styled.small`
    ${({ theme }) => css`
        color: ${theme.palette.danger.base.text};
        letter-spacing: 0.5px;
        line-height: 1.4rem;
        font-weight: 400;
        font-size: 12px;
    `}
`

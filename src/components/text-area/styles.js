import styled, { css } from 'styled-components'

export const StyledTextAreaContainer = styled.div`
    display: flex;
    align-items: center;
`
export const StyledTextAreaInput = styled.textarea`
    ${({ theme, iconPosition }) => css`
        resize: none;
        padding: ${theme.spacing}px;
        color: ${theme.palette.neutral.base[1000]};
        background-color: ${theme.palette.neutral.base[0]};
        border: 1px solid ${theme.palette.neutral.base[200]};
        padding-left: ${iconPosition === 'left'
            ? `${theme.spacing * 2}px`
            : '8px'};
        padding-right: ${iconPosition === 'right'
            ? `${theme.spacing * 2}px`
            : '8px'};
        border-radius: ${theme.spacing / 2}px;
        font-size: 16px;
        line-height: 24px;
        outline: none;
        transition: all 0.3s ease-in-out;
        &:focus {
            border: 1px solid ${theme.palette.primary.base.text};
        }
        &::placeholder {
            color: ${theme.palette.neutral.base[500]};
        }
    `}
`

import styled, { css } from 'styled-components'

export const StyledTextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledTextAreaInput = styled.textarea`
    ${({ theme, iconPosition, resize }) => css`
        width: 100%;
        resize: ${resize};
        padding: ${theme.spacing + 4}px;
        color: ${theme.palette.neutral.base[1000]};
        background-color: ${theme.palette.neutral.base[0]};
        border: 1px solid ${theme.palette.neutral.base[200]};
        padding-left: ${iconPosition === 'left'
            ? `${theme.spacing * 2}px`
            : `${theme.spacing + 4}px`};
        padding-right: ${iconPosition === 'right'
            ? `${theme.spacing * 2}px`
            : `${theme.spacing + 4}px`};
        border-radius: ${theme.spacing / 2}px;
        font-size: 16px;
        line-height: 24px;
        outline: none;
        transition: all 0.3s ease-in-out;
        &:focus {
            border: 1px solid ${theme.palette.primary.base.text};
        }
    `}
`

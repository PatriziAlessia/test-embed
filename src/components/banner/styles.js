import styled, { css } from 'styled-components'

export const StyledBannerRoot = styled.div`
    ${({ variant, height, iconSize, theme }) => css`
        display: grid;
        align-items: center;
        justify-content: center;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        text-align: left;
        grid-template-columns: auto 1fr 1fr;
        width: 100%;
        min-height: ${height ?? 56}px;
        padding: 0 ${theme.spacing * 2}px;
        border-radius: 12px;
        color: ${theme.palette.primary.base.text};
        background-color: ${theme.palette.primary.base.background};
        text-decoration: none;
        ${variant === 'error' &&
        css`
            color: ${theme.palette.danger.base.text};
            background-color: ${theme.palette.danger.base.background};
        `};
        font-size: 12px;
        & svg {
            height: ${iconSize}px;
        }
        & a {
            text-decoration: none;
            color: ${theme.palette.primary.base.text};
            font-weight: 400;
            cursor: pointer;
        }
    `}
`

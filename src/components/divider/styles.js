import styled, { css } from 'styled-components'

export const StyledDividerRoot = styled.div`
    ${({ margin, theme, height, width }) => css`
        position: relative;
        margin: ${margin ? `${margin}px 0` : '12px 0'};
        padding: 1px;
        display: grid;
        justify-content: center;
        height: ${height}px;
        background-color: ${theme.palette.neutral.base[300]};
        width: ${width}px;
        max-width: 1600px;
    `}
`

export const StyledDividerText = styled.div`
    ${({ theme }) => css`
        position: absolute;
        padding: 0 8px;
        background-color: ${theme.palette.neutral.base[0]};
        color: ${theme.palette.neutral.base[500]};
        left: 50%;
        top: 50%;
        transform: translate(-50%, 50%);
    `}
`

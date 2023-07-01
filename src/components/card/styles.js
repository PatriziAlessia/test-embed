import styled, { css } from 'styled-components'

export const StyledCardRoot = styled.div`
    ${({ theme, height, width }) => css`
        height: ${height}px;
        width: ${width}px;
        background: ${theme.palette.neutral.base[0]};
        box-shadow: ${theme.shadows[40]};
        border-radius: 12px;
        padding: ${theme.spacing * 2}px;
        position: relative;
        ${theme.mediaQueries.mUp} {
            padding: ${theme.spacing * 3}px;
        }
    `}
`

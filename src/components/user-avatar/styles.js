import styled, { css } from 'styled-components'

export const StyledOnlineDot = styled.span`
    ${({ theme, dotSize }) => css`
        position: absolute;
        width: ${dotSize}px;
        height: ${dotSize}px;
        border-radius: 50%;
        background-color: ${theme.palette.success.base.background};
        border: 2px solid ${theme.palette.neutral.base[0]};
    `}
`

export const StyledImg = styled.img`
    ${({ withBoxShadow, width, height, username, theme }) => css`
        box-shadow: ${withBoxShadow ? theme.shadows[40] : 'none'};
        width: ${width ?? 48}px;
        height: ${height ?? 48}px;
        border-radius: 50%;
        cursor: ${username ? 'pointer' : 'default'};
    `}
`

export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    & svg {
        width: 48px;
        height: 48px;
    }
`
export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

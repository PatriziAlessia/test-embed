import styled, { css } from 'styled-components'

export const StyledLoginFormRoot = styled.form`
    ${({ theme }) => css`
        display: grid;
        gap: ${theme.spacing * 2}px;
        width: 100%;
    `}
`

export const StyledLoginRoot = styled.div`
    padding: 16px 0;
    min-height: ${window.innerHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledLoginCard = styled.div`
    ${({ theme }) => css`
        width: 100%;
        padding: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        gap: ${theme.spacing * 10}px;
        ${theme.mediaQueries.mUp} {
            background: ${theme.palette.neutral.base[0]};
            box-shadow: ${theme.shadows[100]};
            border-radius: ${theme.spacing * 3}px;
            padding: ${theme.spacing * 3}px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            width: 600px;
            margin: auto;
        }
    `}
`

export const StyledLoginTitle = styled.h5`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacing}px;
        color: ${theme.palette.primary.base.text};
        font-size: 28px;
        letter-spacing: 0.25px;
        font-weight: 700;
    `}
`

export const StyledLoginSubtitle = styled.p`
    ${({ theme }) => css`
        color: ${theme.palette.neutral.base[300]};
        font-size: 16px;
        letter-spacing: 0.5px;
        font-weight: 400;
    `}
`

export const StyledLoginForgotPassword = styled.p`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacing * 2}px;
        cursor: pointer;
    `}
`

export const StyledLoginSpanLink = styled.span`
    font-weight: 700;
    cursor: pointer;
`

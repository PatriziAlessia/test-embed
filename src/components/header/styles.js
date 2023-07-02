import styled, { css } from 'styled-components'

export const StyledHeaderRoot = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1030;
        grid-template-columns: 1fr auto;
        padding: 0 ${theme.spacing * 2}px;
        height: 60px;
        box-shadow: ${theme.shadows[20]};
        background-color: ${theme.palette.neutral.base[0]};
        & img {
            max-width: 160px;
        }
        ${theme.mediaQueries.mUp} {
            padding: 0 72px;
        }
    `}
`

export const StyledHeaderLogo = styled.div`
    ${({ theme }) => css`
        cursor: pointer;
        color: ${theme.palette.primary.text};
        font-size: 3rem;
        font-weight: 700;
    `}
`
export const LoginLink = styled.span`
    font-weight: 600;
`
export const StyledHeaderInfo = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing * 2}px;
        & svg {
            cursor: pointer;
        }
    `}
`

export const StyledHeaderUserInfo = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.palette.neutral.base[200]};
        padding: 4px;
        border-radius: 100px;
        display: flex;
        gap: ${theme.spacing}px;
        align-items: center;
        color: ${theme.palette.neutral.base[500]};
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
    `}
`
export const StyledHeaderMobileRoot = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1030;
        grid-template-columns: 1fr auto;
        padding: 0 ${theme.spacing * 2}px;
        justify-content: center;
        height: 60px;
        box-shadow: ${theme.shadows[40]};
        background-color: ${theme.palette.neutral.base[0]};
        & img {
            max-width: 160px;
        }
        ${theme.mediaQueries.mUp} {
            padding: 0 ${theme.spacing * 9}px;
        }
    `}
`

export const StyledHeaderMobileUserInfo = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing * 2}px;
        & svg {
            cursor: pointer;
        }
    `}
`

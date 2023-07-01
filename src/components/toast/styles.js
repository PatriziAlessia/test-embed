import styled, { css } from 'styled-components'

export const StyledRoot = styled.div`
    ${({ variantStyle, theme, visible, right, left, top, bottom }) => css`
        position: absolute;
        pointer-events: auto;
        z-index: 1301;
        padding: 16px;
        max-width: 1156px;
        color: ${variantStyle.color};
        background-color: ${variantStyle.backgroundColor};
        border-radius: 12px;
        transition: transform 0.2s ease-in-out;
        will-change: transform;

        ${theme.mediaQueries.mUp} {
            right: ${right || 'auto'};
            left: ${left};
            top: ${top};
            bottom: ${bottom};
            padding: 16px 32px;
            max-width: 800px;
            min-width: 600px;
        }

        ${visible &&
        css`
            transform: translateY(0);
            ${theme.mediaQueries.sUp} {
                transform: translateY(calc(0));
                max-width: 600px;
                min-width: 400px;
            }
        `}

        ${!visible &&
        css`
            transform: translateY(-1000%);
            ${theme.mediaQueries.sUp} {
                transform: translateY(-1000%);
                max-width: 600px;
                min-width: 400px;
            }
        `}
    `}
`

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
`

export const StyledContent = styled.div`
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    justify-content: center;
`

export const StyledTitle = styled.span`
    font-weight: 700;
`

export const StyledMessage = styled.span`
    word-break: break-word;
`

export const StyledIcon = styled.span`
    display: flex;
    margin-right: 16px;
`

export const StyledCloseIconWrapper = styled.span`
    grid-column-start: 3;
    height: 24px;
    width: 24px;
    & svg {
        & path {
            fill: ${({ variantStyle }) => variantStyle.closeIconColor};
            stroke: ${({ variantStyle }) => variantStyle.closeIconColor};
        }
    }
`

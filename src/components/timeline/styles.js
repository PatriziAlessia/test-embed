import styled, { css } from 'styled-components'

export const StyledRoot = styled.div`
    ${({ theme, stepNames, height, direction }) => css`
        height: ${height};
        display: grid;
        align-items: center;
        justify-content: center;
        grid-auto-flow: column;
        ${direction === 'horizontal'
            ? css`
                  grid-template-columns: repeat(${stepNames.length}, 60px);
              `
            : css`
                  grid-template-rows: repeat(${stepNames.length}, 60px);
              `}
        grid-column-gap: ${theme.spacing * 6}px;
        ${theme.mediaQueries.xxsUp} {
            ${direction === 'horizontal'
                ? css`
                      grid-template-columns: repeat(${stepNames.length}, 70px);
                      grid-column-gap: ${theme.spacing * 8}px;
                  `
                : css`
                      grid-template-rows: repeat(${stepNames.length}, 70px);
                      grid-row-gap: ${theme.spacing * 8}px;
                  `}
        }
        ${theme.mediaQueries.xsUp} {
            ${direction === 'horizontal'
                ? css`
                      grid-template-columns: repeat(${stepNames.length}, 75px);
                      grid-column-gap: ${theme.spacing * 9}px;
                  `
                : css`
                      grid-template-rows: repeat(${stepNames.length}, 75px);
                      grid-row-gap: ${theme.spacing * 9}px;
                  `}
        }
        ${theme.mediaQueries.mUp} {
            ${direction === 'horizontal'
                ? css`
                      grid-template-columns: repeat(${stepNames.length}, 64px);
                  `
                : css`
                      grid-template-rows: repeat(${stepNames.length}, 64px);
                  `}
        }
    `}
`

export const StyledItem = styled.div`
    ${({ theme }) => css`
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        border-radius: 50%;
        & svg {
            width: 60px;
        }
        & > p {
            letter-spacing: -0.15px;
            font-weight: 500;
            color: ${theme.palette.secondary.base.text};
        }
        ${theme.mediaQueries.xxsUp} {
            & svg {
                width: 70px;
            }
        }
        ${theme.mediaQueries.xsUp} {
            & svg {
                width: 75px;
            }
        }
        ${theme.mediaQueries.mUp} {
            & svg {
                width: 80px;
            }
        }
    `}
`

export const StyledIconWrapper = styled.div`
    ${({ index, stepIndex }) => css`
        position: relative;
        cursor: ${index < stepIndex ? 'pointer' : 'normal'};
    `}
`
export const StyledProgressBar = styled.div`
    ${({ theme, index, stepNames, direction }) => css`
    position: absolute;
    left: ${direction === 'horizontal' ? '100%' : '30%'};
    top: ${direction === 'horizontal' ? '50%' : '300%'};
    transform: ${
        direction === 'horizontal' ? 'translateY(-50%)' : 'rotate(90deg)'
    };
    height: 2px;
    width: ${theme.spacing * 6};
    background-color: ${theme.palette.primary.base.background};
    place-self: center;
    ${theme.mediaQueries.xxsUp} {
        width: ${direction === 'horizontal' ? '64px' : '34px'} ;
    },
    ${theme.mediaQueries.xsUp} {
        width: ${direction === 'horizontal' ? '72px' : '32px'};
    },
    ${
        index < stepNames?.length - 1 &&
        css`
            background-color: ${theme.palette.primary.base.hover};
        `
    }
`}
`

export const StyledStep = styled.p`
    ${({ theme }) => css`
        color: ${theme.palette.primary.base.disabled} !important;
        font-weight: 600;
        font-size: 18px;
    `}
`

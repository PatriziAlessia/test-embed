import styled, { css } from 'styled-components'

const NEXT = 'next'

export const StyledCarouselRoot = styled.div`
    ${({ swipeDisabledForUser }) => css`
        position: relative;
        ${swipeDisabledForUser &&
        css`
            pointer-events: none;
        `};
        & button {
            opacity: 0;
        }
        &:hover {
            & button {
                opacity: 1;
            }
        }
    `}
`

export const StyledCarouselWrapper = styled.div`
    ${({ carouselHeight }) => css`
        width: 100%;
        height: ${carouselHeight}px;
        overflow: hidden;
    `}
`

export const StyledCarouselContainer = styled.div`
    ${({
        imagesGap,
        isSliding,
        slidingDuration,
        isChangingPosition,
        direction,
        imageWidth,
    }) => css`
        height: 100%;
        display: flex;
        gap: ${imagesGap}px;
        transform: ${isChangingPosition
            ? `translateX(calc(-${imageWidth} - ${imagesGap}))`
            : 'translateX(0)'};
        ${isSliding &&
        css`
            transform: ${direction === NEXT
                ? `translateX(calc(-${imageWidth} - ${imagesGap}))`
                : 'translateX(0)'};
            transition: transform ${slidingDuration}s ease-in-out;
        `}
    `}
`

export const StyledCarouselSlot = styled.div`
    ${({ imageWidth, position, list, index }) => {
        const indexDiff = index - position
        return css`
            flex: 1 0 100%;
            flex-basis: ${imageWidth};
            order: ${indexDiff < 0
                ? list.length - Math.abs(indexDiff)
                : indexDiff};
        `
    }}
`

export const StyledCarouselButton = styled.button`
    ${({ theme }) => css`
        position: absolute;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%);
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: ${theme.palette.neutral.base[200]};
        border-radius: 0.5rem;
        transition: ease-in-out 400ms;
        color: ${theme.palette.neutral.base[0]};
        font-size: 1rem;
        &:hover {
            background: ${theme.palette.neutral.base[300]};
        }
        &:focus {
            outline: 0;
        }
        &.prevButton {
            left: 1rem;
            cursor: pointer;
        }
        &.nextButton {
            right: 1rem;
            cursor: pointer;
        }
    `}
`

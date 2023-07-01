import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import {
    StyledCarouselRoot,
    StyledCarouselWrapper,
    StyledCarouselContainer,
    StyledCarouselSlot,
    StyledCarouselButton,
} from './styles'

const PREV = 'previous'
const NEXT = 'next'

const Carousel = ({
    list = [],
    slidingDelay = 0,
    slidingDuration = 1,
    slideNextOnTap = true,
    activatingSwipeDistance = 10,
    showButtons = true,
    carouselHeight = 400,
    imageWidth = '100%',
    imagesGap = '0px',
    autoplay = true,
    autoplayTimeout = 5,
    viewOnly = false,
    className,
    ...rest
}) => {
    const [state, setState] = useState({
        position: 0,
        isChangingPosition: false,
        isSliding: false,
        direction: NEXT,
    })
    const swipeDisabledForUser = state.isChangingPosition || state.isSliding

    useEffect(() => {
        if (autoplay) {
            const autoplayInterval = setInterval(() => {
                onChangeItem(NEXT)
            }, autoplayTimeout * 1000)

            return () => clearInterval(autoplayInterval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoplay, autoplayTimeout, state])

    const onChangeItem = direction => {
        switch (direction) {
            case PREV:
                setState(prevState => ({
                    ...prevState,
                    isChangingPosition: true,
                    position:
                        prevState.position === 0
                            ? list.length - 1
                            : prevState.position - 1,
                }))
                setTimeout(() => {
                    setState(prevState => ({
                        ...prevState,
                        isChangingPosition: false,
                        direction: PREV,
                        isSliding: true,
                    }))
                }, slidingDelay * 1000)

                setTimeout(() => {
                    setState(prevState => ({
                        ...prevState,
                        isSliding: false,
                    }))
                }, slidingDuration * 1000 + slidingDelay * 1000)

                break
            default:
                setTimeout(() => {
                    setState(prevState => ({
                        ...prevState,
                        direction: NEXT,
                        isSliding: true,
                    }))
                }, slidingDelay * 1000)

                setTimeout(() => {
                    setState(prevState => ({
                        ...prevState,
                        isSliding: false,
                        position:
                            prevState.position === list.length - 1
                                ? 0
                                : prevState.position + 1,
                    }))
                }, slidingDuration * 1000 + slidingDelay * 1000)
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => (viewOnly ? null : onChangeItem(NEXT)),
        onSwipedRight: () => (viewOnly ? null : onChangeItem(PREV)),
        onTap: () => (slideNextOnTap && !viewOnly ? onChangeItem(NEXT) : null),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: true,
        rotationAngle: 0,
        delta: activatingSwipeDistance,
    })

    return (
        <StyledCarouselRoot
            className={className}
            swipeDisabledForUser={swipeDisabledForUser}
        >
            <div {...handlers} {...rest}>
                <StyledCarouselWrapper carouselHeight={carouselHeight}>
                    <StyledCarouselContainer
                        slidingDuration={slidingDuration}
                        isChangingPosition={state.isChangingPosition}
                        imagesGap={imagesGap}
                        imageWidth={imageWidth}
                        direction={state.direction}
                        isSliding={state.isSliding}
                    >
                        {list.map((item, index) => (
                            <StyledCarouselSlot
                                imageWidth={imageWidth}
                                position={state.position}
                                list={list}
                                index={index}
                                key={index}
                            >
                                {item}
                            </StyledCarouselSlot>
                        ))}
                    </StyledCarouselContainer>
                </StyledCarouselWrapper>
            </div>
            {showButtons && !viewOnly && (
                <>
                    <StyledCarouselButton
                        className={'prevButton'}
                        onClick={() => onChangeItem(PREV)}
                        direction={state.direction}
                    >
                        ←
                    </StyledCarouselButton>
                    <StyledCarouselButton
                        className={'nextButton'}
                        onClick={() => onChangeItem(NEXT)}
                        direction={state.direction}
                    >
                        →
                    </StyledCarouselButton>
                </>
            )}
        </StyledCarouselRoot>
    )
}

export default Carousel

Carousel.propTypes = {
    list: PropTypes.array,
    carouselHeight: PropTypes.number,
    slidingDelay: PropTypes.number, //seconds
    slidingDuration: PropTypes.number, //seconds
    slideNextOnTap: PropTypes.bool,
    activatingSwipeDistance: PropTypes.number, //px
    showButtons: PropTypes.bool,
    CarouselHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //e.g. 400 | "400px" | "100%" | "25rem"
    imageWidth: PropTypes.string, //e.g. "320px" | "90%" | "20rem" (unity required)
    imagesGap: PropTypes.string, //e.g. "16px" | "5%" | "1rem" (unity required)
    autoplay: PropTypes.bool,
    autoplayTimeout: PropTypes.number, //seconds
    viewOnly: PropTypes.bool,
    className: PropTypes.string,
}

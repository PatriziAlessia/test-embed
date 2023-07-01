import PropTypes from 'prop-types'

import {
    StyledScrollAreaRoot,
    StyledViewport,
    StyledScrollbar,
    StyledScrollAreaThumb,
    StyledScrollAreaCorner,
    StyledScrollAreaBox,
    StyledScrollAreaText,
    StyledScrollAreaTag,
} from './styles'

const ScrollArea = ({
    orientation,
    title,
    type,
    scrollHideDelay,
    width,
    height,
    boxWidth,
    items = [],
}) => {
    return (
        <StyledScrollAreaRoot
            type={type}
            scrollHideDelay={scrollHideDelay}
            width={width}
            height={height}
        >
            <StyledViewport>
                <StyledScrollAreaBox boxWidth={boxWidth}>
                    <StyledScrollAreaText>{title}</StyledScrollAreaText>
                    {items.map(tag => (
                        <StyledScrollAreaTag key={tag}>
                            {tag}
                        </StyledScrollAreaTag>
                    ))}
                </StyledScrollAreaBox>
            </StyledViewport>
            <StyledScrollbar orientation={orientation}>
                <StyledScrollAreaThumb />
            </StyledScrollbar>
            <StyledScrollbar orientation={orientation}>
                <StyledScrollAreaThumb />
            </StyledScrollbar>
            <StyledScrollAreaCorner />
        </StyledScrollAreaRoot>
    )
}

export default ScrollArea

ScrollArea.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['auto', 'always', 'scroll', 'hover']),
    scrollHideDelay: PropTypes.number,
    boxWidth: PropTypes.string,
    items: PropTypes.array,
}

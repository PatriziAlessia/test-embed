import PropTypes from 'prop-types'
import { useState } from 'react'

import { StyledTooltipContainer, StyledTooltipContent } from './styles'

const Tooltip = ({ children, text, visibilityCondition, showPosition }) => {
    const [visible, setVisible] = useState(false)
    let timeout
    const showTip = () => {
        timeout = setTimeout(() => {
            setVisible(true)
        }, 400)
    }

    const hideTip = () => {
        clearInterval(timeout)
        setVisible(false)
    }

    return (
        <StyledTooltipContainer
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
            onClick={showTip}
        >
            {children}
            {visible && (
                <StyledTooltipContent
                    visibilityCondition={visibilityCondition}
                    showPosition={showPosition}
                >
                    {text}
                </StyledTooltipContent>
            )}
        </StyledTooltipContainer>
    )
}

export default Tooltip
Tooltip.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    visibilityCondition: PropTypes.bool,
    showPosition: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
}

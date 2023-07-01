import PropTypes from 'prop-types'

import { StyledOverlay } from './styles'
import { StyledSvg } from './styles'

const Spinner = ({
    className,
    size = 50,
    color = '#333',
    strokeLineCap = 'square',
    overlay = true,
    overlayFullscreen = false,
    center = true,
    ...props
}) => {
    return (
        <>
            {overlay && <StyledOverlay overlayFullscreen={overlayFullscreen} />}
            <StyledSvg
                className={className}
                center={center}
                size={size}
                overlayFullscreen={overlayFullscreen}
                viewBox="0 0 50 50"
                {...props}
            >
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap={strokeLineCap}
                />
            </StyledSvg>
        </>
    )
}

export default Spinner

Spinner.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    strokeLineCap: PropTypes.string,
    overlay: PropTypes.bool,
    overlayFullscreen: PropTypes.bool,
    center: PropTypes.bool,
}

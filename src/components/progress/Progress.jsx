import PropTypes from 'prop-types'

import { StyledProgressRoot, StyledProgressIndicator } from './style'

const Progress = ({ progressValue, className, width, height }) => {
    return (
        <StyledProgressRoot
            className={className}
            value={progressValue}
            width={width}
            height={height}
        >
            <StyledProgressIndicator
                className={className}
                progress={progressValue}
            />
        </StyledProgressRoot>
    )
}

export default Progress

Progress.propTypes = {
    progressValue: PropTypes.number,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

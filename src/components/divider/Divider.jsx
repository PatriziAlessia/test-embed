import PropTypes from 'prop-types'

import { StyledDividerRoot, StyledDividerText } from './styles'

const Divider = ({ text, className, margin, height = 1, width }) => {
    return (
        <StyledDividerRoot
            className={className}
            margin={margin}
            height={height}
            width={width}
        >
            {text && <StyledDividerText>{text}</StyledDividerText>}
        </StyledDividerRoot>
    )
}

export default Divider

Divider.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    margin: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
}

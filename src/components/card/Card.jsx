import PropTypes from 'prop-types'

import { StyledCardRoot } from './styles'

const Card = ({ children, classNames, height, width }) => {
    return (
        <StyledCardRoot className={classNames} height={height} width={width}>
            {children}
        </StyledCardRoot>
    )
}

export default Card

Card.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
}

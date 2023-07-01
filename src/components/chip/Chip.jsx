import PropTypes from 'prop-types'

import { StyledChipContainer } from './styles'

const Chip = ({
    className,
    color = 'primary',
    outlined,
    textOnly,
    size = 'medium',
    rounded,
    text,
    textUppercase,
    icon,
    isStrokeIcon,
    isPathFilledIcon,
    iconPosition = 'left',
    isClickable,
    fullWidth,
    disabled,
    ...rest
}) => {
    return (
        <StyledChipContainer
            className={className}
            title={text}
            {...rest}
            rounded={rounded}
            size={size}
            fullWidth={fullWidth}
            outlined={outlined}
            iconPosition={iconPosition}
            textOnly={textOnly}
            isStrokeIcon={isStrokeIcon}
            isPathFilledIcon={isPathFilledIcon}
            textUppercase={textUppercase}
            isClickable={isClickable}
            disabled={disabled}
            color={color}
        >
            {!!icon && <>{icon}</>}
            {!!text && <span>{text}</span>}
        </StyledChipContainer>
    )
}

export default Chip

Chip.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    outlined: PropTypes.bool,
    textOnly: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
    rounded: PropTypes.bool,
    text: PropTypes.string,
    textUppercase: PropTypes.bool,
    icon: PropTypes.element,
    isStrokeIcon: PropTypes.bool,
    isPathFilledIcon: PropTypes.bool,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    isClickable: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
}

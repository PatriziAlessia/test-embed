import PropTypes from 'prop-types'

import { StyledBaseButton } from './styles'

const Button = ({
    children,
    variant = 'filled',
    size = 'medium',
    color = 'primary',
    gradient = 'base',
    type = 'button',
    collapsed = false,
    disabled = false,
    onClick,
    className,
    ...props
}) => {
    return (
        <StyledBaseButton
            variant={variant}
            size={size}
            color={color}
            gradient={gradient}
            type={type}
            collapsed={collapsed}
            disabled={disabled}
            onClick={onClick}
            className={className}
            {...props}
        >
            {children}
        </StyledBaseButton>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['large', 'medium', 'small', 'fullWidth']),
    variant: PropTypes.oneOf([
        'filled',
        'ghost',
        'borderless',
        'round',
        'link',
    ]),
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
    ]),
    gradient: PropTypes.oneOf(['base', 'dark', 'light']),
    type: PropTypes.oneOf(['button', 'submit']),
    collapsed: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
}

import PropTypes from 'prop-types'
import React from 'react'

import {
    StyledIcon,
    StyledInput,
    StyledInputWrapper,
    StyledLabel,
    StyledContainer,
} from '@/components/input/styles.js'

const Input = React.forwardRef(
    (
        {
            label,
            name,
            type = 'text',
            placeholder,
            onChange,
            onBlur,
            icon,
            iconPosition = 'left',
            iconCallback,
            touched = false,
            required = false,
            errors,
            className,
            inputProps,
            disabled,
            size = 'small',
            width = '174px',
            variant = 'transparent',
            ...rest
        },
        ref
    ) => {
        return (
            <StyledContainer size={size} width={width} className={className}>
                {label && (
                    <StyledLabel htmlFor={name}>
                        {label}
                        {required && ' *'}
                    </StyledLabel>
                )}
                <StyledInputWrapper
                    iconPosition={iconPosition}
                    touched={touched}
                    hasError={!!errors}
                    isSuccess={!errors && touched}
                    disabled={disabled}
                    size={size}
                >
                    {icon && (
                        <StyledIcon onClick={iconCallback}>{icon}</StyledIcon>
                    )}
                    <StyledInput
                        ref={ref}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        variant={variant}
                        {...inputProps}
                        {...rest}
                    />
                </StyledInputWrapper>
            </StyledContainer>
        )
    }
)

export default Input

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    iconCallback: PropTypes.func,
    touched: PropTypes.bool,
    required: PropTypes.bool,
    errors: PropTypes.object,
    className: PropTypes.string,
    inputProps: PropTypes.object,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    width: PropTypes.string,
    variant: PropTypes.oneOf(['transparent', 'filled']),
}

Input.displayName = 'Input'

import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import {
    StyledCheckboxRoot,
    StyledCheckboxWrapper,
    StyledCheckboxLabel,
    StyledCheckBox,
    StyledCheckboxErrorMessage,
} from './styles'

const Checkbox = forwardRef(function Checkbox(
    {
        className,
        checkboxWrapperClassName,
        checkboxClassName,
        name,
        label,
        labelPosition = 'left',
        error,
        isSmall,
        isSelectAll = false,
        disabled,
        onChange,
        onBlur,
        inputProps,
        ...rest
    },
    ref
) {
    return (
        <StyledCheckboxRoot className={className} {...rest}>
            <StyledCheckboxWrapper
                id={name}
                className={checkboxWrapperClassName}
                disabled={disabled}
            >
                {!!label && (
                    <StyledCheckboxLabel labelPosition={labelPosition}>
                        {label}
                    </StyledCheckboxLabel>
                )}
                <StyledCheckBox
                    type={'checkbox'}
                    className={checkboxClassName}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    ref={ref}
                    labelPosition={labelPosition}
                    isSmall={isSmall}
                    isSelectAll={isSelectAll}
                    {...inputProps}
                />
            </StyledCheckboxWrapper>
            {error?.message && (
                <div>
                    <StyledCheckboxErrorMessage>
                        {error.message}
                    </StyledCheckboxErrorMessage>
                </div>
            )}
        </StyledCheckboxRoot>
    )
})

export default Checkbox

Checkbox.propTypes = {
    className: PropTypes.string,
    checkboxWrapperClassName: PropTypes.string,
    checkboxClassName: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    error: PropTypes.object,
    isSmall: PropTypes.bool,
    isSelectAll: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    inputProps: PropTypes.object,
}

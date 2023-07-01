import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import {
    StyledRoot,
    StyledErrorMessage,
    StyledLabel,
    StyledRadio,
    StyledRadioWrapper,
} from './styles'

const Radio = forwardRef(function Radio(
    {
        className,
        radioWrapperClassName,
        radioClassName,
        name,
        label,
        labelPosition = 'left',
        error,
        isSmall,
        disabled,
        onChange,
        onBlur,
        inputProps,
        ...rest
    },
    ref
) {
    return (
        <StyledRoot className={className} {...rest}>
            <StyledRadioWrapper
                id={name}
                className={radioWrapperClassName}
                disabled={disabled}
            >
                {!!label && (
                    <StyledLabel labelPosition={labelPosition}>
                        {label}
                    </StyledLabel>
                )}
                <StyledRadio
                    type={'radio'}
                    className={radioClassName}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    labelPosition={labelPosition}
                    isSmall={isSmall}
                    ref={ref}
                    {...inputProps}
                />
            </StyledRadioWrapper>
            {error?.message && (
                <div>
                    <StyledErrorMessage>{error.message}</StyledErrorMessage>
                </div>
            )}
        </StyledRoot>
    )
})

export default Radio

Radio.propTypes = {
    className: PropTypes.string,
    radioWrapperClassName: PropTypes.string,
    radioClassName: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    error: PropTypes.object,
    isSmall: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    inputProps: PropTypes.object,
}

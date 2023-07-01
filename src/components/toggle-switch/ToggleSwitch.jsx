import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import {
    StyledRoot,
    StyledSlider,
    StyledLabel,
    StyledInput,
    StyledErrorMessage,
} from './styles'

const ToggleSwitch = forwardRef(
    (
        {
            label,
            labelOn,
            errors,
            disabled,
            isSmall,
            defaultChecked,
            pointerBackground,
            hint,
            inputBgColor,
            inputType = 'checkbox',
            ...props
        },
        ref
    ) => {
        return (
            <>
                <StyledRoot labelOn={labelOn}>
                    {!!label && (
                        <StyledLabel
                            title={label}
                            labelOn={labelOn}
                            disabled={disabled}
                        >
                            {label}
                        </StyledLabel>
                    )}
                    <StyledInput
                        type={inputType}
                        ref={ref}
                        disabled={disabled}
                        defaultChecked={defaultChecked}
                        isSmall={isSmall}
                        inputBgColor={inputBgColor}
                        {...props}
                    />
                    <StyledSlider
                        id={props.name}
                        isSmall={isSmall}
                        disabled={disabled}
                        pointerBackground={pointerBackground}
                    >
                        {hint}
                    </StyledSlider>
                </StyledRoot>
                {errors?.message && (
                    <div>
                        <StyledErrorMessage>
                            {errors.message}
                        </StyledErrorMessage>
                    </div>
                )}
            </>
        )
    }
)

export default ToggleSwitch

ToggleSwitch.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    labelOn: PropTypes.oneOf(['right', 'left']),
    disabled: PropTypes.bool,
    errors: PropTypes.object,
    defaultChecked: PropTypes.bool,
    isSmall: PropTypes.bool,
    pointerBackground: PropTypes.string,
    hint: PropTypes.string,
    inputBgColor: PropTypes.string,
    inputType: PropTypes.string,
}

ToggleSwitch.displayName = 'ToggleSwitch'

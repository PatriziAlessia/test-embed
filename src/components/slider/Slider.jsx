import PropTypes from 'prop-types'

import {
    StyledSliderRoot,
    StyledSliderTrack,
    StyledSliderRange,
    StyledSliderThumb,
} from './styles'

const Slider = ({
    defaultValue,
    max,
    step,
    value,
    disabled,
    name,
    onValueChange,
    min,
    orientation,
    width,
    height,
}) => {
    return (
        <StyledSliderRoot
            defaultValue={defaultValue}
            max={max}
            step={step}
            min={min}
            value={value}
            onChange={onValueChange}
            name={name}
            disabled={disabled}
            orientation={orientation}
            width={width}
            height={height}
        >
            <StyledSliderTrack orientation={orientation} disabled={disabled}>
                <StyledSliderRange
                    orientation={orientation}
                    disabled={disabled}
                />
            </StyledSliderTrack>
            <StyledSliderThumb
                aria-label={name}
                orientation={orientation}
                disabled={disabled}
            />
        </StyledSliderRoot>
    )
}

export default Slider

Slider.propTypes = {
    defaultValue: PropTypes.array,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onValueChange: PropTypes.func,
    min: PropTypes.number,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    width: PropTypes.number,
    height: PropTypes.number,
}

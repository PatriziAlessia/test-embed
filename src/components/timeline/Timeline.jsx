import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

import { TwitchIcon, InfoCircle } from '@/assets/icons/icons'

import {
    StyledRoot,
    StyledIconWrapper,
    StyledItem,
    StyledProgressBar,
    StyledStep,
} from './styles'

const Timeline = ({
    stepNames = [],
    height = '100%',
    step = '',
    stepValues = [],
    className,
    direction = 'horizontal',
}) => {
    const stepIndex = stepValues.indexOf(step)
    const theme = useTheme()

    return (
        <StyledRoot
            className={className}
            stepNames={stepNames}
            height={height}
            direction={direction}
        >
            {stepNames?.map((item, index) => {
                return (
                    <StyledItem key={index}>
                        <StyledIconWrapper index={index} stepIndex={stepIndex}>
                            {index === stepIndex ? (
                                <TwitchIcon />
                            ) : (
                                <InfoCircle
                                    fill={theme.palette.neutral.base[300]}
                                />
                            )}
                            {index < stepNames.length - 1 && (
                                <StyledProgressBar
                                    stepNames={stepNames}
                                    index={index}
                                    direction={direction}
                                />
                            )}
                        </StyledIconWrapper>
                        <StyledStep>{stepNames[index]}</StyledStep>
                    </StyledItem>
                )
            })}
        </StyledRoot>
    )
}

export default Timeline

Timeline.propTypes = {
    stepNames: PropTypes.array,
    height: PropTypes.string,
    step: PropTypes.string,
    stepValues: PropTypes.array,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
}

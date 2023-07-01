import PropTypes from 'prop-types'

import { InfoCircle } from '@/assets/icons/icons'

import { StyledBannerRoot } from './styles'

const Banner = ({
    text,
    url,
    icon = <InfoCircle fill={'gray'} />,
    className,
    variant,
    iconSize,
    height,
}) => {
    return (
        <StyledBannerRoot
            className={className}
            variant={variant}
            iconSize={iconSize}
            height={height}
        >
            {icon}
            {text}
            {url && (
                <a href={url} target={'_blank'} rel="noopener noreferrer">
                    {url}
                </a>
            )}
        </StyledBannerRoot>
    )
}

export default Banner

Banner.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.element,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['normal', 'error']),
    iconSize: PropTypes.number,
    height: PropTypes.number,
}

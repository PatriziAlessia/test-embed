import PropTypes from 'prop-types'
import { useState } from 'react'

import { CloseSideBarRightIcon } from '@/assets/icons/icons'

import { StyledRoot, StyledHeader, StyledBody, StyledFooter } from './styles.js'

const SidePopover = ({ title, onClose, children, footer, width = '628px' }) => {
    const [animation, setAnimation] = useState(false)

    return (
        <StyledRoot animation={animation} width={width}>
            <StyledHeader>
                <h3>{title}</h3>
                <CloseSideBarRightIcon
                    onClick={() => {
                        setAnimation(true)
                        setTimeout(() => onClose(), 900)
                    }}
                />
            </StyledHeader>
            <StyledBody>{children}</StyledBody>
            <StyledFooter>{footer}</StyledFooter>
        </StyledRoot>
    )
}

export default SidePopover

SidePopover.propTypes = {
    width: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    footer: PropTypes.node,
    onClose: PropTypes.func,
}

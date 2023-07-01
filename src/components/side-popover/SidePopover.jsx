import PropTypes from 'prop-types'
import { useState } from 'react'

import { CircleCloseIcon } from '@/assets/icons/icons.jsx'

import { StyledRoot, StyledHeader, StyledBody, StyledFooter } from './styles.js'

const SidePopover = ({ title, setOpen, children, footer, width = '628px' }) => {
    const [animation, setAnimation] = useState(false)

    return (
        <StyledRoot animation={animation} width={width}>
            <StyledHeader>
                <h1>{title}</h1>
                <CircleCloseIcon
                    onClick={() => {
                        setAnimation(true)
                        setTimeout(() => setOpen(false), 900)
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
    setOpen: PropTypes.bool,
}

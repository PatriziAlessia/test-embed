import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { ArrowDownIcon } from '@/assets/icons/icons'

import {
    StyledAccordionRoot,
    StyledAccordionHead,
    StyledAccordionTitle,
    StyledAccordionBody,
} from './styles'

const Accordion = ({
    children,
    className,
    headClassName,
    bodyClassName,
    animated = true,
    defaultOpen = false,
    title,
    icon,
    ...rest
}) => {
    const [open, setOpen] = useState(defaultOpen)
    const bodyRef = useRef()
    const [bodyHeight, setBodyHeight] = useState(null)
    const theme = useTheme()

    useEffect(() => {
        setBodyHeight(bodyRef.current?.scrollHeight)
    }, [])
    return (
        <StyledAccordionRoot className={className} {...rest}>
            <StyledAccordionHead
                className={headClassName}
                open={open}
                animated={animated}
                onClick={() => setOpen(prevState => !prevState)}
            >
                <StyledAccordionTitle>
                    {icon}
                    <h5>{title}</h5>
                </StyledAccordionTitle>
                <ArrowDownIcon
                    width={16}
                    fill={theme.palette.neutral.base[1000]}
                />
            </StyledAccordionHead>
            <StyledAccordionBody
                className={bodyClassName}
                ref={bodyRef}
                open={open}
                animated={animated}
                bodyHeight={bodyHeight}
            >
                {children}
            </StyledAccordionBody>
        </StyledAccordionRoot>
    )
}

export default Accordion

Accordion.propTypes = {
    className: PropTypes.string,
    headClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    animated: PropTypes.bool,
    defaultOpen: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.element,
    children: PropTypes.element,
}

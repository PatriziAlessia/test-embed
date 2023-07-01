import * as Popover from '@radix-ui/react-popover'
import PropTypes from 'prop-types'

import { CloseIcon } from '@/assets/icons/icons'

import {
    StyledPopoverContent,
    StyledPopoverContentContainer,
    StyledPopoverArrow,
    StyledPopoverClose,
} from './styles'

// reference: https://www.radix-ui.com/docs/primitives/components/popover

const PopoverMenu = ({ cta, children, side }) => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>{cta}</Popover.Trigger>
            <Popover.Portal>
                <StyledPopoverContent side={side}>
                    <StyledPopoverContentContainer>
                        {children}
                    </StyledPopoverContentContainer>
                    <StyledPopoverClose aria-label="Close">
                        <CloseIcon />
                    </StyledPopoverClose>
                    <StyledPopoverArrow />
                </StyledPopoverContent>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default PopoverMenu

PopoverMenu.propTypes = {
    cta: PropTypes.element,
    children: PropTypes.element,
    side: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
}

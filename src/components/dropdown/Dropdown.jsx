import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'

import {
    StyledDropdownContent,
    StyledDropdownItem,
    StyledDropdownTrigger,
    StyledDropdownItemChild,
} from './styles'

// referece: https://www.radix-ui.com/docs/primitives/components/dropdown-menu

const Dropdown = ({ trigger, items, defaultOpen, side }) => {
    return (
        <DropdownMenu.Root defaultOpen={defaultOpen} modal={false}>
            <StyledDropdownTrigger asChild>{trigger}</StyledDropdownTrigger>

            <DropdownMenu.Portal>
                <StyledDropdownContent sideOffset={5} side={side}>
                    {items.map(({ label, onSelect, icon, isToDelete }) => (
                        <StyledDropdownItem
                            onSelect={onSelect}
                            key={label}
                            asChild
                        >
                            <StyledDropdownItemChild isToDelete={isToDelete}>
                                {icon && (
                                    <div className="icon-container">{icon}</div>
                                )}
                                <span>{label}</span>
                            </StyledDropdownItemChild>
                        </StyledDropdownItem>
                    ))}
                </StyledDropdownContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default Dropdown

Dropdown.propTypes = {
    defaultOpen: PropTypes.bool,
    side: PropTypes.string,
    trigger: PropTypes.element.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onSelect: PropTypes.func,
            icon: PropTypes.node,
            isToDelete: PropTypes.bool,
        }).isRequired
    ).isRequired,
}

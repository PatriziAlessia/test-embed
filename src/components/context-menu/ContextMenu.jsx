import * as ReactContextMenu from '@radix-ui/react-context-menu'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

import { ArrowDownIcon } from '@/assets/icons/icons'

import {
    StyledContextMenuTrigger,
    StyledContextMenuContent,
    StyledSubContent,
    StyledMenuItem,
    StyledSubTrigger,
    StyledRightSlot,
} from './styles'

const ContextMenu = ({
    onOpenChange,
    disabled,
    loop,
    open,
    trigger,
    menuItems = [],
    triggerItems = [],
}) => {
    const theme = useTheme()

    return (
        <ReactContextMenu.Root onOpenChange={onOpenChange}>
            <StyledContextMenuTrigger data-state>
                {trigger}
            </StyledContextMenuTrigger>
            <ReactContextMenu.Portal>
                <StyledContextMenuContent loop={loop}>
                    {menuItems.map((items, key) => {
                        return (
                            <StyledMenuItem disabled={disabled} key={key}>
                                {items} <StyledRightSlot>⌘+[</StyledRightSlot>
                            </StyledMenuItem>
                        )
                    })}
                    <ReactContextMenu.Sub onOpenChange={onOpenChange}>
                        {triggerItems.map((elements, key) => {
                            return (
                                <>
                                    <StyledSubTrigger
                                        disabled={disabled}
                                        key={key}
                                    >
                                        {elements.trigger}
                                        <StyledRightSlot>
                                            <ArrowDownIcon
                                                fill={
                                                    theme.palette.neutral
                                                        .base[400]
                                                }
                                            />
                                        </StyledRightSlot>
                                    </StyledSubTrigger>
                                    <ReactContextMenu.Portal>
                                        <StyledSubContent
                                            open={open}
                                            sideOffset={2}
                                            alignOffset={-5}
                                        >
                                            {elements.values.map(
                                                (value, key) => {
                                                    return (
                                                        <StyledMenuItem
                                                            disabled={disabled}
                                                            key={key}
                                                        >
                                                            {value.name}
                                                            <StyledRightSlot>
                                                                {value.icon}
                                                            </StyledRightSlot>
                                                        </StyledMenuItem>
                                                    )
                                                }
                                            )}
                                        </StyledSubContent>
                                    </ReactContextMenu.Portal>
                                </>
                            )
                        })}
                    </ReactContextMenu.Sub>
                </StyledContextMenuContent>
            </ReactContextMenu.Portal>
        </ReactContextMenu.Root>
    )
}

export default ContextMenu

ContextMenu.propTypes = {
    onOpenChange: PropTypes.func,
    disabled: PropTypes.bool,
    loop: PropTypes.bool,
    open: PropTypes.bool,
    trigger: PropTypes.element,
    menuItems: PropTypes.array,
    triggerItems: PropTypes.array,
}

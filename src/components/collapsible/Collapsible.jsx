import * as RadixCollapsible from '@radix-ui/react-collapsible'
import PropTypes from 'prop-types'

import { ArrowIcon, CloseIcon } from '@/assets/icons/icons'

import {
    StyledCollapsibleRoot,
    StyledContainer,
    StyledText,
    StyledButton,
    StyledRepository,
} from './styles'

const Collapsible = ({
    title,
    section,
    items,
    defaultOpen,
    onOpenChange,
    disabled,
    width,
    openCollapse,
    setOpenCollapse,
}) => {
    return (
        <StyledCollapsibleRoot
            open={openCollapse}
            onOpenChange={onOpenChange}
            defaultOpen={defaultOpen}
            disabled={disabled}
            width={width}
        >
            <StyledContainer>
                <StyledText>{title}</StyledText>
                <RadixCollapsible.Trigger asChild>
                    <StyledButton
                        onClick={() => setOpenCollapse(!openCollapse)}
                    >
                        {openCollapse ? <CloseIcon /> : <ArrowIcon />}
                    </StyledButton>
                </RadixCollapsible.Trigger>
            </StyledContainer>

            <StyledRepository>
                <StyledText>{section}</StyledText>
            </StyledRepository>

            <RadixCollapsible.Content>
                {items?.map((item, key) => (
                    <StyledRepository key={key}>
                        <StyledText>{item}</StyledText>
                    </StyledRepository>
                ))}
            </RadixCollapsible.Content>
        </StyledCollapsibleRoot>
    )
}

export default Collapsible

Collapsible.propTypes = {
    title: PropTypes.string,
    section: PropTypes.string,
    items: PropTypes.array,
    defaultOpen: PropTypes.bool,
    onOpenChange: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    openCollapse: PropTypes.bool,
    setOpenCollapse: PropTypes.bool,
}

import PropTypes from 'prop-types'

import {
    StyledTabsRoot,
    StyledTabsList,
    StyledTabsTrigger,
    StyledTabsContent,
    StyledTitle,
} from './styles'

const Tabs = ({
    triggers = [],
    defaultValue,
    onValueChange,
    disabled,
    label,
    maxWidth,
}) => (
    <StyledTabsRoot
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        maxWidth={maxWidth}
    >
        <StyledTabsList aria-label={label}>
            {triggers.map((trigger, key) => {
                return (
                    <StyledTabsTrigger
                        value={trigger.value}
                        disabled={disabled}
                        key={key}
                        icon={trigger.icon}
                    >
                        {trigger.icon}
                        {trigger.value}
                    </StyledTabsTrigger>
                )
            })}
        </StyledTabsList>
        {triggers.map((trigger, key) => {
            return (
                <StyledTabsContent value={trigger.value} key={key}>
                    <StyledTitle>{trigger.title}</StyledTitle>
                    {trigger.body}
                </StyledTabsContent>
            )
        })}
    </StyledTabsRoot>
)

export default Tabs

Tabs.propTypes = {
    triggers: PropTypes.array,
    defaultValue: PropTypes.string,
    onValueChange: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    maxWidth: PropTypes.number,
}

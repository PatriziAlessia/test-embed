import PropTypes from 'prop-types'
import { useCallback } from 'react'
import CreatableSelect, { components } from 'react-select'
import ReactSelect from 'react-select'
import { useTheme } from 'styled-components'

import {
    ArrowSelectIcon,
    CloseSelectIcon,
    RemoveIconMulti,
} from '@/assets/icons/icons'
import ErrorMessage from '@/components/error-message/ErrorMessage.jsx'
import SelectField from '@/components/select/SelectControlled.jsx'

import { StyledRoot, generalStyles, StyledLabel } from './styles'

const Select = ({
    className,
    control,
    name,
    options = [],
    label,
    placeholder,
    helpText,
    defaultValue,
    isSearchable = false,
    isClearable = false,
    isCreatable = false,
    required = false,
    addOptionMessage,
    maxItems = 100,
    isMulti,
    onChangeCallback,
    closeMenuOnSelect = !isMulti,
    customComponents,
    disabled,
    size = 'large',
    onChange,
    errors,
    isControlled = true,
    ...rest
}) => {
    const theme = useTheme()

    // Label for new item creation
    const createLabel = useCallback(
        value => (
            <span style={{ fontSize: 14 }}>
                {addOptionMessage}
                <span>{value}</span>
            </span>
        ),
        [addOptionMessage]
    )

    const selectProps = {
        options,
        closeMenuOnSelect,
        isSearchable,
        isClearable,
        isMulti,
        isDisabled: rest.readOnly || disabled,
        classNamePrefix: isCreatable ? 'creatable_select' : 'select',
        placeholder,
        disabled,
        errors,
        ...rest,
    }

    const components = {
        MultiValueRemove,
        DropdownIndicator,
        ClearIndicator,
        ...customComponents,
    }

    const controlledSelectProps = {
        ...selectProps,
        components,
        onChangeCallback,
        control,
        name,
        defaultValue,
        createLabel,
        placeholder,
        label,
        errors,
        maxItems,
        isDisabled: rest.readOnly || disabled,
    }

    const selectComponent = () => {
        switch (true) {
            case isControlled:
                return <SelectField {...controlledSelectProps} />
            case isCreatable:
                return (
                    <CreatableSelect
                        formatCreateLabel={createLabel}
                        onChange={onChange}
                        components={components}
                        {...selectProps} // from Component
                        styles={generalStyles(theme, size, errors, '')}
                    />
                )

            default:
                return (
                    <ReactSelect
                        onChange={onChange}
                        components={components}
                        {...selectProps}
                        styles={generalStyles(
                            theme,
                            size,
                            errors,
                            'react-select'
                        )}
                    />
                )
        }
    }

    return (
        <StyledRoot className={className}>
            {!!label && (
                <StyledLabel isDisabled={rest.readOnly || disabled}>
                    {label} {required && ' *'}
                </StyledLabel>
            )}
            {selectComponent()}
            <ErrorMessage errors={errors} helpText={helpText} />
        </StyledRoot>
    )
}

const MultiValueRemove = props => {
    return (
        <components.MultiValueRemove {...props}>
            <RemoveIconMulti />
        </components.MultiValueRemove>
    )
}

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrowSelectIcon />
        </components.DropdownIndicator>
    )
}

const ClearIndicator = props => {
    return (
        <components.ClearIndicator {...props}>
            <CloseSelectIcon />
        </components.ClearIndicator>
    )
}

export default Select

Select.propTypes = {
    className: PropTypes.string,
    control: PropTypes.object,
    name: PropTypes.string,
    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    helpText: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isSearchable: PropTypes.bool,
    isClearable: PropTypes.bool,
    isCreatable: PropTypes.bool,
    addOptionMessage: PropTypes.bool,
    maxItems: PropTypes.number,
    isMulti: PropTypes.bool,
    onChangeCallback: PropTypes.func,
    closeMenuOnSelect: PropTypes.bool,
    required: PropTypes.bool,
    customComponents: PropTypes.object,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'large']),
    onChange: PropTypes.func,
    isControlled: PropTypes.bool,
    errors: PropTypes.object,
}

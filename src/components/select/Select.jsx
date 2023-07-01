import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useController } from 'react-hook-form'
import { components } from 'react-select'
import { useTheme } from 'styled-components'

import { CloseIcon } from '@/assets/icons/icons'

import {
    StyledRoot,
    StyledErrorMessage,
    StyledCreatableSelect,
    StyledReactSelect,
} from './styles'

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
    addOptionMessage,
    maxItems = 100,
    isMulti,
    onChangeCallback,
    closeMenuOnSelect = !isMulti,
    customComponents,
    disabled,
    ...rest
}) => {
    const {
        field: { onChange, ...fieldProps },
        fieldState: { error, isTouched },
        formState,
    } = useController({
        name,
        control,
        defaultValue,
    })

    // This extends the default onChange
    const onChangeHandler = value => {
        if (typeof onChangeCallback === 'function') onChangeCallback(value)
        if (!isMulti || (isMulti && value.length <= maxItems)) onChange(value) // Limit multi select
    }

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
        error,
        isTouched,
        disabled,
        ...rest,
    }

    const components = {
        MultiValueRemove,
        ...customComponents,
    }

    return (
        <StyledRoot className={className}>
            {!!label && <label>{label}</label>}
            {isCreatable ? (
                <StyledCreatableSelect
                    formatCreateLabel={createLabel}
                    onChange={onChangeHandler}
                    components={components}
                    {...formState} // from Controller
                    {...fieldProps} // from Controller
                    {...selectProps} // from Component
                />
            ) : (
                <StyledReactSelect
                    onChange={onChangeHandler}
                    components={components}
                    {...formState}
                    {...fieldProps}
                    {...selectProps}
                />
            )}
            {!!error?.message && (
                <div>
                    <StyledErrorMessage>{error.message}</StyledErrorMessage>
                </div>
            )}
            {!!helpText && (
                <div>
                    <small>{helpText}</small>
                </div>
            )}
        </StyledRoot>
    )
}

const MultiValueRemove = props => {
    const theme = useTheme()
    return (
        <components.MultiValueRemove {...props}>
            <CloseIcon
                fill={theme.palette.primary.base.text}
                width={20}
                height={20}
            />
        </components.MultiValueRemove>
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
    customComponents: PropTypes.object,
    disabled: PropTypes.bool,
}

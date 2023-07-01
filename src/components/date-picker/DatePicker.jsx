/* eslint-disable no-extra-boolean-cast */
import * as locales from 'date-fns/locale'
import PropTypes from 'prop-types'
import { forwardRef, useMemo } from 'react'
import { useController } from 'react-hook-form'

import { AlertIconBanner, DoneIcon } from '@/assets/icons/icons'

// reference: https://reactdatepicker.com/

import {
    StyledErrorMessage,
    StyledIcon,
    StyledIcons,
    StyledInputWrapper,
    StyledLabel,
    StyledRoot,
    StyledStatusIcons,
    StyledDatePicker,
} from './styles'

const Datepicker = forwardRef(function InputCalendar(
    {
        control,
        defaultValue,
        label,
        name,
        placeholder,
        helpText,
        onChangeCb,
        icon,
        iconPosition = 'left',
        rounded,
        iconCallback,
        statusIcon,
        statusIconCallback,
        touched = false,
        errors,
        // rootClassName,
        inputProps,
        disabled = false,
        isClearable = true,
        closeOnScroll = false,
        calendarPlacement = 'bottom',
        dateFormat = 'yyyy-MM-dd hh:mm a',
        showTimeSelect = true,
        showTimeSelectOnly = false,
        showNativeInput,
        isRange = false,
        includeDates,
        includeDateIntervals,
        includeTimes,
        excludeDates,
        excludeDateIntervals,
        excludeTimes,
        filterTime,
        minDate,
        maxDate,
        closeOnSelect = true,
        openToDate,
        locale = 'en-US',
        showMonthDropdown,
        showYearDropdown,
        component,
        className,
        hasError,
        isSuccess,
        ...rest
    },
    ref
) {
    const parsedLocale = useMemo(() => {
        let foundLocale = null

        for (const [key, value] of Object.entries(locales)) {
            if (!!foundLocale) {
                break
            } else {
                if (value.code === locale) {
                    foundLocale = locales[key]
                }
            }
        }

        return foundLocale || locales.enUS
    }, [locale])

    const {
        field: { onChange, value, ...fieldProps },
        formState,
    } = useController({
        name,
        control,
        defaultValue,
    })

    const onChangeHandler = value => {
        !!onChangeCb ? onChangeCb(value) : onChange(value)
    }

    return (
        <StyledRoot>
            {!!label && (
                <StyledLabel htmlFor={name}>
                    {label}
                    {component}
                </StyledLabel>
            )}
            <StyledInputWrapper
                iconPosition={iconPosition}
                touched={touched}
                rounded={rounded}
                hasError={hasError}
                isSuccess={isSuccess}
            >
                <StyledIcons iconPosition={iconPosition}>
                    {icon && (
                        <StyledIcon
                            {...(iconCallback && { onClick: iconCallback })}
                        >
                            {icon}
                        </StyledIcon>
                    )}
                </StyledIcons>
                {showNativeInput ? (
                    <input
                        name={name}
                        type={
                            showTimeSelectOnly
                                ? 'time'
                                : showTimeSelect
                                ? 'datetime-local'
                                : 'date'
                        }
                        placeholder={placeholder}
                        onChange={e => onChangeHandler(e.target.value)}
                        disabled={disabled}
                        ref={ref}
                        {...fieldProps}
                        {...formState}
                        {...inputProps}
                    />
                ) : (
                    <StyledDatePicker
                        className={className}
                        onChange={onChangeHandler}
                        selected={isRange ? value?.[0] : value}
                        isClearable={isClearable}
                        placeholderText={placeholder}
                        closeOnScroll={closeOnScroll}
                        popperPlacement={calendarPlacement}
                        dateFormat={dateFormat}
                        showTimeSelect={showTimeSelect && !isRange}
                        showTimeSelectOnly={showTimeSelectOnly}
                        startDate={value?.[0]}
                        endDate={value?.[1]}
                        selectsRange={isRange}
                        includeDates={includeDates}
                        includeDateIntervals={includeDateIntervals}
                        includeTimes={includeTimes}
                        excludeDates={excludeDates}
                        excludeDateIntervals={excludeDateIntervals}
                        excludeTimes={excludeTimes}
                        filterTime={filterTime}
                        minDate={minDate}
                        maxDate={maxDate}
                        disabled={disabled}
                        shouldCloseOnSelect={closeOnSelect}
                        openToDate={openToDate}
                        locale={parsedLocale}
                        showMonthDropdown={showMonthDropdown}
                        showYearDropdown={showYearDropdown}
                        yearDropdownItemNumber={50}
                        scrollableYearDropdown
                        ref={ref}
                        {...fieldProps}
                        {...formState}
                        {...inputProps}
                        {...rest}
                    />
                )}
                <StyledStatusIcons>
                    {!!errors ? (
                        <StyledIcon errors={errors} touched={touched}>
                            <AlertIconBanner />
                        </StyledIcon>
                    ) : (
                        touched && (
                            <StyledIcon errors={errors} touched={touched}>
                                <DoneIcon data-color />
                            </StyledIcon>
                        )
                    )}
                    {statusIcon && (
                        <StyledIcon
                            {...(statusIconCallback && {
                                onClick: statusIconCallback,
                            })}
                        >
                            {statusIcon}
                        </StyledIcon>
                    )}
                </StyledStatusIcons>
            </StyledInputWrapper>
            {errors?.message && (
                <div>
                    <StyledErrorMessage>{errors.message}</StyledErrorMessage>
                </div>
            )}
            {helpText && (
                <div>
                    <small>{helpText}</small>
                </div>
            )}
        </StyledRoot>
    )
})

export default Datepicker

Datepicker.propTypes = {
    control: PropTypes.any.isRequired,
    defaultValue: PropTypes.any, //required if isRange
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    helpText: PropTypes.string,
    onChangeCb: PropTypes.func,
    icon: PropTypes.element,
    iconPosition: PropTypes.oneOf(['left', 'white']),
    rounded: PropTypes.bool,
    iconCallback: PropTypes.func,
    statusIcon: PropTypes.element,
    statusIconCallback: PropTypes.func,
    touched: PropTypes.bool,
    errors: PropTypes.object,
    rootClassName: PropTypes.string,
    inputProps: PropTypes.object,
    disabled: PropTypes.bool,
    isClearable: PropTypes.bool,
    closeOnScroll: PropTypes.bool,
    calendarPlacement: PropTypes.oneOf(['bottom', 'top']),
    dateFormat: PropTypes.string,
    showTimeSelect: PropTypes.bool,
    showTimeSelectOnly: PropTypes.bool,
    showNativeInput: PropTypes.bool,
    isRange: PropTypes.bool,
    includeDates: PropTypes.array,
    includeDateIntervals: PropTypes.array,
    includeTimes: PropTypes.array,
    excludeDates: PropTypes.array,
    excludeDateIntervals: PropTypes.array,
    excludeTimes: PropTypes.array,
    filterTime: PropTypes.bool,
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    closeOnSelect: PropTypes.bool,
    openToDate: PropTypes.string,
    locale: PropTypes.string,
    showMonthDropdown: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    component: PropTypes.any,
    className: PropTypes.any,
    hasError: PropTypes.bool,
    isSuccess: PropTypes.bool,
}

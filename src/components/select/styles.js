import CreatableSelect from 'react-select'
import ReactSelect from 'react-select'
import styled, { css } from 'styled-components'

export const StyledRoot = styled.div`
    position: relative;
`
export const StyledErrorMessage = styled.small`
    ${({ theme }) => css`
        color: ${theme.palette.danger.base.text};
    `}
`

export const StyledCreatableSelect = styled(CreatableSelect)`
    ${({
        isMulti,
        isCreatable,
        error,
        isTouched,
        theme,
        isDisabled,
        isFocused,
        isSelected,
    }) => css`
        padding: 10px;
        .creatable_select__placeholder {
            color: ${theme.palette.neutral.base[400]};
            font-weight: 400;
            font-size: 14px;
            margin: ${isMulti ? '0 10px' : '0'};
        }
        .creatable_select__value-container {
            font-size: 16px;
            padding: 0;
            gap: 4px;
        }
        .creatable_select__control--is-focused {
            border: 1px solid;
            border-color: ${theme.palette.primary.base.background} !important;
            box-shadow: 0 0 0 2px ${theme.palette.primary.base.background} !important;
        }
        .creatable_select__control {
            padding: ${isMulti ? '6px 16px 6px 6px' : '14px 16px'};
            cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
            border-color: ${theme.palette.neutral.base[300]} !important;
            ${isDisabled &&
            css`
                border-color: ${theme.palette.neutral.base[200]} !important;
            `};
            &:focus {
                border-color: ${theme.palette.secondary.base.text} !important;
            }
            ${error &&
            css`
                border-color: ${theme.palette.danger.base.text} !important;
                & svg {
                    fill: ${theme.palette.danger.base.background};
                }
            `});
            ${!error &&
            isTouched &&
            css`
                border-color: ${theme.palette.success.base.text} !important;
                svg {
                    fill: ${theme.palette.neutral.base[0]} !important;
                    stroke: ${theme.palette.neutral.base[0]} !important;
                }
            `}

            box-shadow: ${isFocused ? theme.shadows[40] : `none`};

            & .select__value-container {
                font-size: 16px;
                padding: 0;
                gap: 4px;
                background-color: ${theme.palette.danger.base.background};
            }
        }
        .creatable_select__option {
            color: ${isDisabled
                ? theme.palette.neutral.base[200]
                : theme.palette.primary.base.text};
            padding: 12px 16px;
            ${(isFocused || isSelected) &&
            css`
                background-color: ${theme.palette.secondary.base
                    .background} !important;
            `};
            ${isSelected &&
            css`
                font-weight: 700;
            `};
            font-size: 14px;
            border-radius: 4px;
            &:hover {
                background-color: ${theme.palette.primary.base.background};
            }
            &:focus {
                background-color: ${theme.palette.primary.base
                    .hover} !important;
            }
            &.css-tr4s17-option {
                background-color: ${theme.palette.primary.base.text};
                color: ${theme.palette.neutral.base[0]};
            }
        }
        .creatable_select__option--is-focused {
            background-color: ${theme.palette.primary.base.background};
        }
        .creatable_select__indicators-container {
            display: flex;
            align-items: start;
            background-color: ${theme.palette.danger.base.background};
            padding: ${isMulti ? '8px 0' : '0'};
            & svg {
                fill: ${theme.palette.neutral.base[300]};
            }
        }
        .creatable_select__indicator-separator {
            width: 0;
            padding: 0;
        }
        .creatable_select__menu {
            z-index: 20;
            border-radius: 10px;
            overflow: hidden;
            margin-right: 10px;
        }
        .creatable_select__menu-list {
            padding: 0;
            margin: 8px;
        }
        .creatable_select__dropdown-indicator {
            padding: 2px;
        }
        .creatable_select__clear-indicator {
            border-radius: 50px;
            margin-right: 4px;
            padding: 2px;
            background-color: transparent;
        }
        .creatable_select__multi-value__label {
            text-transform: ${isCreatable ? 'uppercase' : 'none'};
            padding: 0;
            color: ${theme.palette.primary.base.text};
            font-weight: 500;
            font-size: 14px;
            letter-spacing: 0.5px;
        }
        .creatable_select__multi-value {
            margin: 0;
            padding: 10px 4px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            background-color: ${theme.palette.primary.base.background};
        }
        .creatable_select__multi-value__remove {
            display: flex;
            align-items: center;
            padding: 0 4px;
            & svg {
                fill: ${theme.palette.neutral.base[0]} !important;
                stroke: ${theme.palette.neutral.base[0]} !important;
            }
            &:hover {
                background-color: ${theme.palette.primary.base.background};
            }
        }
    `}
`

export const StyledReactSelect = styled(ReactSelect)`
    ${({
        isMulti,
        isCreatable,
        error,
        isTouched,
        theme,
        isDisabled,
        isFocused,
        isSelected,
    }) => css`
        padding: 10px;

        .select__placeholder {
            color: ${theme.palette.neutral.base[400]};
            font-weight: 400;
            font-size: 14px;
            margin: ${isMulti ? '0 10px' : '0'};
        }
        .select__value-container {
            font-size: 16px;
            padding: 0;
            gap: 4px;
        }
        .select__control {
            padding: ${isMulti ? '6px 16px 6px 6px' : '14px 16px'};
            cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
            border-color: ${theme.palette.neutral.base[300]} !important;
            &:focus {
                border-color: ${theme.palette.primary.base.hover} !important;
            }
            &:active {
                border-color: ${theme.palette.primary.base.hover} !important;
            }
            ${isDisabled &&
            css`
                border-color: ${theme.palette.neutral.base[200]} !important;
            `};
            ${isFocused &&
            css`
                border-color: ${theme.palette.secondary.base.text} !important;
            `};
            ${error &&
            css`
                border-color: ${theme.palette.danger.base.text} !important;
                & svg {
                    fill: ${theme.palette.danger.base.background};
                }
            `};
            ${!error &&
            isTouched &&
            css`
                border-color: ${theme.palette.success.base.text} !important;
                svg {
                    fill: ${theme.palette.neutral.base[0]};
                    stroke: ${theme.palette.neutral.base[0]};
                }
            `}

            box-shadow: ${isFocused ? `${theme.shadows[60]}` : `none`};
            & .select__value-container {
                font-size: 16px;
                padding: 0;
                gap: 4px;
            }
        }
        .select__control--is-focused {
            border: 1px solid;
            border-color: ${theme.palette.primary.base.background} !important;
            box-shadow: 0 0 0 2px ${theme.palette.primary.base.background} !important;
        }
        .select__option {
            color: ${isDisabled
                ? theme.palette.neutral.base[200]
                : theme.palette.primary.base.text};
            padding: 12px 16px;
            ${(isFocused || isSelected) &&
            css`
                background-color: ${theme.palette.secondary.base
                    .background} !important;
            `}
            ${isSelected &&
            css`
                font-weight: 700;
            `};
            font-size: 14px;
            border-radius: 4px;
            &:hover {
                background-color: ${theme.palette.primary.base.background};
            }
            &:focus {
                background-color: ${theme.palette.primary.base
                    .hover} !important;
            }
            &.css-tr4s17-option {
                background-color: ${theme.palette.primary.base.text};
                color: ${theme.palette.neutral.base[0]};
            }
        }
        .select__option--is-focused {
            background-color: ${theme.palette.primary.base.background};
        }
        .select__indicators-container {
            display: flex;
            align-items: start;
            background-color: ${theme.palette.primary.base.background};
            padding: ${isMulti ? '8px 0' : '0'};
            & svg {
                fill: ${theme.palette.neutral.base[300]};
            }
        }
        .select__indicator-separator {
            width: 0;
            padding: 0;
        }
        .select__menu {
            z-index: 20;
            border-radius: 10px;
            overflow: hidden;
            margin-right: 10px;
        }
        .select__menu-list {
            padding: 0;
            margin: 8px;
        }
        .select__dropdown-indicator {
            padding: 2px;
        }
        .select__clear-indicator {
            border-radius: 50px;
            margin-right: 4px;
            padding: 2px;
            background-color: transparent;
        }
        .select__multi-value__label {
            text-transform: ${isCreatable ? 'uppercase' : 'none'};
            padding: 0;
            color: ${theme.palette.primary.base.text};
            font-weight: 500;
            font-size: 14px;
            letter-spacing: 0.5px;
        }
        .select__single-value {
            text-transform: ${isCreatable ? 'uppercase' : 'none'};
            padding: 0;
            color: ${theme.palette.primary.base.text};
            font-weight: 500;
            font-size: 14px;
            letter-spacing: 0.5px;
        }
        .select__multi-value {
            margin: 0;
            padding: 10px 4px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            background-color: ${theme.palette.primary.base.background};
        }
        .select__multi-value__remove {
            display: flex;
            align-items: center;
            padding: 0 4px;
            &:hover {
                background-color: ${theme.palette.primary.base.background};
            }
        }
    `}
`

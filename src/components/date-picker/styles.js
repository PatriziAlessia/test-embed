/* eslint-disable no-extra-boolean-cast */
import DatePicker from 'react-datepicker'
import styled, { css } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

export const StyledDatePicker = styled(DatePicker)`
    ${({ theme }) => css`
        padding: 8px;
        border: 1px solid ${theme.palette.neutral.base[300]};
        border-radius: 4px;
        font-size: 14px;
    `}
`
export const StyledStatusIcons = styled.span`
    ${({ theme }) => css`
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        gap: ${theme.spacing / 2}px;
        z-index: 1;
        left: unset;
        right: ${theme.spacing * 2}px;
    `}
`

export const StyledIcon = styled.span`
    ${({ theme, errors, touched }) => css`
        display: flex;
        align-items: center;
        justify-items: center;
        cursor: pointer;
        & svg {
            width: 24px;
            height: 24px;
            ${!!errors
                ? css`
                      cursor: initial;
                  `
                : touched &&
                  css`
                      cursor: initial;
                      fill: ${theme.palette.success.base.text};
                  `};
        }
    `}
`

export const StyledErrorMessage = styled.small`
    ${({ theme }) => css`
        color: ${theme.palette.danger.base.text};
    `}
`

export const StyledIcons = styled.span`
    ${({ theme, iconPosition }) => css`
        position: absolute;
        top: 50%;
        ${iconPosition === 'left'
            ? css`
                  left: ${theme.spacing * 2}px;
              `
            : css`
                  right: ${theme.spacing * 2}px;
              `};
        transform: translateY(-50%);
        display: flex;
        gap: ${theme.spacing / 2}px;
        z-index: 1;
    `}
`

export const StyledInputWrapper = styled.div`
    ${({ theme, iconPosition, touched, rounded, hasError, isSuccess }) => css`
    position: relative;
    width: 100%;
    
    margin: ${(theme.spacing / 2, 0)}px;
    & input {
        height: 38px;
        width: 100%; 
        border-radius: 12px;
        padding-left: ${
            iconPosition === 'left'
                ? `${theme.spacing * 6}px`
                : `${theme.spacing * 2}px`
        };
        padding-right: ${
            touched ? `${theme.spacing * 5}px` : `${theme.spacing * 6}px`
        };
        ${
            rounded &&
            css`
                border-radius: 100px;
            `
        };
        ${
            hasError &&
            css`
                border-color: ${theme.palette.danger.base.text} !important;
            `
        };
        ${
            isSuccess &&
            css`
                border-color: ${theme.palette.success.base.text} !important;
            `
        };
        &:hover { 
          border-color: ${theme.palette.primary.base.text}
        }
    },
`}
`

export const StyledLabel = styled.label`
    ${({ theme }) => css`
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr auto;
        margin-bottom: ${theme.spacing}px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 700;
        color: ${theme.palette.neutral.base[400]};
    `}
`

export const StyledRoot = styled.div`
    ${({ theme }) => css`
        position: relative;
        & .react-datepicker-popper {
            z-index: 2;
            inset: auto !important;
            transform: none !important;
        }
        & .react-datepicker__input-container {
            > input {
                border-color: ${theme.palette.neutral.base[200]};
                &:hover {
                    border-color: ${theme.palette.primary.base.text};
                }
            }
        }
        & .react-datepicker__close-icon {
            padding: 0 16px 0 0;
        }
        & .react-datepicker__close-icon::after {
            background-color: ${theme.palette.primary.base.text};
        }
        & .react-datepicker {
            font-family: inherit;
            background-color: ${theme.palette.neutral.base[0]};
            color: ${theme.palette.neutral.base[1000]};
            border: 1px solid ${theme.palette.neutral.base[200]};
            border-radius: 0;
            display: flex;

            & .react-datepicker__day--selected,
            .react-datepicker__day--in-selecting-range,
            .react-datepicker__day--in-range,
            .react-datepicker__month-text--selected,
            .react-datepicker__month-text--in-selecting-range,
            .react-datepicker__month-text--in-range,
            .react-datepicker__quarter-text--selected,
            .react-datepicker__quarter-text--in-selecting-range,
            .react-datepicker__quarter-text--in-range,
            .react-datepicker__year-text--selected,
            .react-datepicker__year-text--in-selecting-range,
            .react-datepicker__year-text--in-range {
                background-color: ${theme.palette.primary.base.background};
                color: ${theme.palette.primary.base.text};
            }
            &
                .react-datepicker__time-container
                .react-datepicker__time
                .react-datepicker__time-box
                ul.react-datepicker__time-list
                li.react-datepicker__time-list-item--selected {
                background-color: ${theme.palette.primary.base.background};
                color: ${theme.palette.primary.base.text};
            }
            & .react-datepicker__day--keyboard-selected,
            .react-datepicker__month-text--keyboard-selected,
            .react-datepicker__quarter-text--keyboard-selected,
            .react-datepicker__year-text--keyboard-selected {
                background-color: ${theme.palette.primary.base.background};
                color: ${theme.palette.primary.base.text} !important;
            }
            & .react-datepicker__header {
                background-color: ${theme.palette.primary.base.background};
                color: ${theme.palette.primary.base.text};
            }
            & .react-datepicker__current-month,
            .react-datepicker-time__header,
            .react-datepicker-year-header {
                background-color: ${theme.palette.primary.base.background};
                color: ${theme.palette.primary.base.text};
            }
            & .react-datepicker__year-read-view--down-arrow,
            .react-datepicker__month-read-view--down-arrow,
            .react-datepicker__month-year-read-view--down-arrow,
            .react-datepicker__navigation-icon::before {
                border-color: ${theme.palette.primary.base.text};
            }
        }
        &
            .react-datepicker-popper[data-placement^='top']
            .react-datepicker__triangle::before,
        .react-datepicker-popper[data-placement^='bottom']
            .react-datepicker__triangle::before,
        .react-datepicker-popper[data-placement^='top']
            .react-datepicker__triangle::after,
        .react-datepicker-popper[data-placement^='bottom']
            .react-datepicker__triangle::after {
            border-bottom-color: ${theme.palette.primary.base
                .background} !important;
        }
        & .react-datepicker__header {
            border-top-left-radius: 0;
            border-top-right-radius: 0 !important;
            border-bottom: none;
            padding: ${theme.spacing}px 0;
            color: ${theme.palette.primary.base.text};
            background-color: ${theme.palette.neutral.base[0]};
        }
        & .react-datepicker__header--has-time-select {
            border-top-right-radius: 0;
        }
    `}
`

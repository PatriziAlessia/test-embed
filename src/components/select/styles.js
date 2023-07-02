import styled, { css } from 'styled-components'

export const StyledRoot = styled.div`
    position: relative;
`

export const StyledLabel = styled.label`
    ${({ theme: { spacing, palette, truncateText }, isDisabled }) => css`
        display: block;
        margin-bottom: ${spacing}px;
        color: ${palette.neutral.base[500]};
        font-size: 20px;
        font-weight: 700;
        font-family: 'Mulish', sans-serif;
        ${truncateText}

        ${isDisabled &&
        css`
            color: ${palette.neutral.base[200]};
        `}
    `}
`

export const generalStyles = (theme, size, errors, type) => {
    return {
        control: (provided, state) => {
            return {
                ...provided,

                //border color
                ...(state.isDisabled && {
                    borderColor: theme.palette.neutral.base[100] + '!important',
                }),

                ...(state.isTouched &&
                    !errors && {
                        borderColor:
                            theme.palette.success.base.text + '!important',
                    }),

                ...(state.isFocused
                    ? {
                          borderColor:
                              theme.palette.primary.base.active + '!important',
                      }
                    : {
                          borderColor:
                              theme.palette.neutral.base[200] + '!important',
                      }),

                ...(!!errors && {
                    borderColor: theme.palette.danger.base.text + '!important',
                }),

                ...(size === 'medium' && {
                    padding: `${theme.spacing - 6}px ${theme.spacing + 4}px`,
                    minHeight: 28,
                }),

                ...(size === 'large' && {
                    padding: `${theme.spacing}px ${theme.spacing + 4}px`,
                    minHeight: 40,
                }),

                cursor: state.isDisabled ? 'not-allowed' : 'pointer',
                border: '1px solid',
                boxShadow: state.isFocused ? `${theme.shadows[20]}` : '',
                borderRadius: `${theme.spacing - 2}px`,
                backgroundColor: `${theme.palette.neutral.base[0]}`,
            }
        },
        option: (provided, state) => {
            return {
                ...provided,

                ...(state.isDisabled && {
                    color: theme.palette.neutral.base[400],
                    backgroundColor: theme.palette.neutral.base[200],
                }),

                ...(state.isFocused ||
                    (state.isSelected && {
                        backgroundColor: theme.palette.secondary.base.active,
                        color: theme.palette.neutral.base[0],
                    })),
                fontSize: `${theme.typography.paragraph.p14.regular}`,
                padding: `${theme.spacing / 2}px ${theme.spacing + 4}px`,
                borderRadius: `${theme.spacing - 2}px`,
            }
        },
        placeholder: (provided, state) => ({
            ...provided,
            margin: 0,
            ...theme.typography.paragraph.p14.regular,
            color: state.isDisabled
                ? `${theme.palette.neutral.base[200]}`
                : `${theme.palette.neutral.base[300]}`,
        }),

        valueContainer: provided => ({
            ...provided,
            padding: 0,
            gap: `${theme.spacing / 2}px`,
            margin: 0,
        }),

        indicatorsContainer: provided => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            '& svg': {
                fill: `${theme.palette.neutral.base[300]}`,
            },
        }),

        indicatorSeparator: provided => ({
            ...provided,
            width: 0,
            padding: 0,
        }),

        menu: provided => ({
            ...provided,
            borderRadius: `${theme.spacing - 2}px`,
            overflow: 'hidden',
            marginRight: `${theme.spacing}px`,
        }),

        menuList: provided => ({
            ...provided,
            padding: `${theme.spacing}px ${theme.spacing}px `,
        }),

        dropdownIndicator: (provided, state) => ({
            ...provided,
            padding: `${theme.spacing}px`,
            transform: state.selectProps.menuIsOpen
                ? 'rotate(180deg)'
                : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
        }),

        clearIndicator: provided => ({
            ...provided,
            borderRadius: '50%',
            marginRight: `${theme.spacing / 2}px`,
            padding: `${theme.spacing / 2}px`,
            backgroundColor: 'transparent',
        }),

        multiValueLabel: (provided, state) => ({
            ...provided,
            textTransform: state.isCreatable ? 'uppercase' : 'none',
            padding: 0,
            color: `${theme.palette.neutral.base[1000]}`,
        }),

        multiValue: provided => ({
            ...provided,
            margin: 0,
            padding: `${theme.spacing / 2}px`,
            borderRadius: `${theme.spacing / 2}px`,
            display: 'flex',
            alignItems: 'center',
            gap: `${theme.spacing / 2}px`,
            backgroundColor: `${theme.palette.neutral.base[100]}`,
        }),

        multiValueRemove: () => ({
            display: 'flex',
            alignItems: 'center',
        }),

        singleValue: (provided, state) => {
            if (type === 'react-select') {
                return {
                    ...provided,
                    textTransform: state.isCreatable ? 'uppercase' : 'none',
                    padding: 0,
                    color: state.isDisabled
                        ? `${theme.palette.neutral.base[200]}`
                        : `${theme.palette.neutral.base[1000]}`,
                    ...theme.typography.paragraph.p14.regular,
                }
            }
        },
    }
}

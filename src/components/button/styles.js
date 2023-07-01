import styled, { css } from 'styled-components'

export const StyledBaseButton = styled.button`
    ${({ ...props }) => {
        const { size, collapsed, variant, theme } = props
        return css`
            ${getVariant(variant)}
            ${getSize(size, collapsed)}
            border-radius: 12px;
            cursor: pointer;
            //children
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${theme.spacing}px;
            &:disabled {
                cursor: not-allowed;
            }
        `
    }}
`

const getSize = (size, collapsed) => {
    switch (size) {
        case 'small':
            return css`
                height: 40px;
                width: ${collapsed ? '40px' : '120px'};
                font-size: 12px;
                & svg {
                    width: 14px;
                    height: 14px;
                }
            `
        case 'medium':
            return css`
                height: 48px;
                width: ${collapsed ? '48px' : '160px'};
                font-size: 14px;
                & svg {
                    width: 14px;
                    height: 14px;
                }
            `
        case 'large':
            return css`
                height: 56px;
                width: ${collapsed ? '56px' : '200px'};
                font-size: 16px;
                & svg {
                    width: 16px;
                    height: 16px;
                }
            `
        case 'fullWidth':
            return css`
                height: 48px;
                width: 100%;
                font-size: 14px;
                & svg {
                    width: 14px;
                    height: 14px;
                }
            `
        default:
            return css`
                height: 40px;
                width: ${collapsed ? '40px' : '120px'};
                font-size: 12px;
                & svg {
                    width: 14px;
                    height: 14px;
                }
            `
    }
}

const getVariant = variant => {
    switch (variant) {
        case 'filled':
            return FilledVariant
        case 'ghost':
            return GhostVariant
        case 'borderless':
            return BorderlessVariant
        case 'round':
            return RoundVariant
        case 'link':
            return LinkVariant
        default:
            return FilledVariant
    }
}

const FilledVariant = ({ theme, color, gradient }) => {
    return css`
        color: ${theme.palette.neutral.base[100]};
        background-color: ${theme.palette[color][gradient].background};
        border: 2px solid ${theme.palette[color][gradient].background};
        &:hover {
            border-color: ${theme.palette[color][gradient]['hover']};
            color: ${theme.palette.neutral.base[0]};
            background-color: ${theme.palette[color][gradient]['hover']};
        }

        &:disabled {
            border-color: ${theme.palette.neutral.base[100]};
            color: ${theme.palette.neutral.base[100]};
            background-color: ${theme.palette.neutral.base[200]};

            & svg {
                fill: ${theme.palette.neutral.base[0]};
            }
        }
    `
}

const GhostVariant = ({ theme, color, gradient }) => {
    return css`
        background-color: transparent;
        color: ${theme.palette?.[color]?.[gradient].background};
        border: 2px solid ${theme.palette?.[color]?.[gradient].background};

        &:hover {
            background-color: ${theme.palette?.[color]?.[gradient].background};
            border-color: ${theme.palette?.[color]?.[gradient]['hover']};
            color: ${theme.palette?.[color]?.[gradient]['text']};
        }

        & svg {
            fill: ${theme.palette[color][gradient].background};
        }

        &:disabled {
            border-color: ${theme.palette.neutral.base[200]};
            color: ${theme.palette.neutral.base[200]};
            background-color: transparent;

            & svg {
                fill: ${theme.palette.neutral.base[200]};
            }
        }
    `
}

const BorderlessVariant = ({ theme, color, gradient }) => {
    return css`
        background-color: transparent;
        border: 0;
        color: ${theme.palette[color][gradient].background};

        & svg {
            fill: ${theme.palette[color][gradient].background};
        }

        &:hover {
            border: 1px solid ${theme.palette[color][gradient].background};
        }

        &:disabled {
            border-color: ${theme.palette.neutral.base[200]};
            color: ${theme.palette.neutral.base[200]};
            &:hover {
                border: none;
            }
            & svg {
                fill: ${theme.palette[color][gradient].background};
            }
        }
    `
}

const RoundVariant = ({ theme, color, gradient }) => {
    return css`
        border-radius: 100px;
        color: ${theme.palette.neutral.base[100]};
        background-color: ${theme.palette?.[color]?.[gradient].background};
        border: 2px solid ${theme.palette?.[color]?.[gradient].background};

        &:hover {
            border-color: ${theme.palette?.[color]?.[gradient]['hover']};
            color: ${theme.palette.neutral.base[0]};
            background-color: ${theme.palette?.[color]?.[gradient]['hover']};
        }

        &:disabled {
            border-color: ${theme.palette.neutral.base[100]};
            color: ${theme.palette.neutral.base[100]};
            background-color: ${theme.palette.neutral.base[200]};

            & svg {
                fill: ${theme.palette[color].base.background};
            }
        }
    `
}

const LinkVariant = ({ theme, color, gradient }) => {
    return css`
        background-color: transparent;
        color: ${theme.palette[color][gradient].background};

        & svg {
            fill: ${theme.palette[color][gradient].background};
        }

        &:hover {
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-underline-offset: 6px;
        }

        &:disabled {
            color: ${theme.palette.neutral.base[200]};
            & svg {
                fill: ${theme.palette[color][gradient].background};
            }
        }
    `
}

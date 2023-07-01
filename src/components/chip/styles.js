import styled, { css } from 'styled-components'

export const StyledChipContainer = styled.div`
    ${({
        theme,
        outlined,
        textOnly,
        size,
        rounded,
        isStrokeIcon,
        isPathFilledIcon,
        iconPosition,
        textUppercase,
        isClickable,
        fullWidth,
        disabled,
        color,
    }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing}px;
        flex-flow: ${iconPosition === 'left' ? 'row' : 'row-reverse'};
        ${size === 'small'
            ? css`
                  height: 16px !important;
              `
            : css`
                  height: 24px;
              `};
        ${size === 'big'
            ? css`
                  height: 32px;
              `
            : css`
                  height: 24px;
              `};
        width: ${fullWidth ? '100%' : 'max-content'};
        max-width: 100%;
        padding: 0 ${theme.spacing * 2}px;
        border-radius: ${rounded ? `${theme.spacing * 4}px` : '4px'};
        background: ${outlined || textOnly
            ? 'transparent'
            : `${theme.palette[color].base.background}`};
        border: ${textOnly
            ? 'none'
            : `1px solid ${theme.palette.secondary.base.background}`};
        ${outlined &&
        css`
            border: 1px solid ${theme.palette.primary.base.text};
        `};
        ${disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed !important;
        `};
        ${isClickable &&
        !disabled &&
        css`
            transition: ease-in-out 400ms;
            cursor: pointer;
        `}
        & svg {
            ${size === 'big'
                ? css`
                      height: 16px;
                  `
                : css`
                      height: 12px;
                  `};
            ${!isStrokeIcon &&
            css`
                fill: ${theme.palette.primary.base.text};
            `};
            & path {
                ${!isStrokeIcon &&
                css`
                    fill: ${theme.palette.primary.base.text};
                `};
                ${isPathFilledIcon && (outlined || textOnly)
                    ? css`
                          fill: ${theme.palette.primary.base.text};
                      `
                    : css`
                          fill: ${theme.palette.neutral.base[0]};
                      `};
            }
        }
        & span {
            font-size: ${size === 'big' ? '12px' : '10px'};
            font-weight: 700;
            text-transform: ${textUppercase ? 'uppercase' : 'inherit'};
            color: ${outlined || textOnly
                ? theme.palette.primary.base.text
                : theme.palette.neutral.base[0]};
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    `}
`

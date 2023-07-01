import styled, { css } from 'styled-components'

const RightTooltip = () => css`
    left: 120%;
    top: -27%;
    &::after {
        top: 10px;
        left: -12px;
        transform: rotate(90deg);
    }
`
const LeftTooltip = () => css`
    right: 120%;
    top: -27%;
    &::after {
        top: 10px;
        right: -12px;
        transform: rotate(-90deg);
    }
`
const BottomTooltip = () => css`
    top: 150%;
    left: 50%;
    margin-left: -82px;
    &::after {
        top: -8px;
        left: 45%;
        transform: rotate(180deg);
    }
`
const TopTooltip = () => css`
    bottom: 150%;
    left: 50%;
    margin-left: -82px;
    &::after {
        top: 100%;
        left: 50%;
        margin-left: -5px;
    }
`
export const StyledTooltipContent = styled.div`
    ${({ theme, visibilityCondition, showPosition }) => css`
        display: ${visibilityCondition ? 'block' : 'none'};
        position: absolute;
        border-radius: 4px;
        padding: 6px;
        font-size: 14px;
        z-index: 100;
        white-space: pre-wrap;
        background-color: ${theme.palette.primary.base.background};
        color: ${theme.palette.primary.base.text};
        min-width: 165px;
        text-align: center;
        &::after {
            content: '';
            position: absolute;
            border-top: 8px solid ${theme.palette.primary.base.background};
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
        }
        ${showPosition === 'right' && RightTooltip};
        ${showPosition === 'left' && LeftTooltip};
        ${showPosition === 'bottom' && BottomTooltip};
        ${showPosition === 'top' && TopTooltip};
    `}
`

export const StyledTooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

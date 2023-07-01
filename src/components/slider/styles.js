import * as Slider from '@radix-ui/react-slider'
import styled, { css } from 'styled-components'

export const StyledSliderRoot = styled(Slider.Root)`
    ${({ width, height }) => css`
        position: relative;
        display: flex;
        align-items: center;
        user-select: none;
        touch-action: none;
        width: ${width}px;
        height: ${height}px;
        &[data-orientation='vertical'] {
            flex-direction: column;
            width: ${width}px;
            height: ${width}px;
        }
    `}
`

export const StyledSliderTrack = styled(Slider.Track)`
    ${({ theme }) => css`
        background-color: ${theme.palette.primary.base.disabled};
        position: relative;
        flex-grow: 1;
        border-radius: 50px;
        height: 3px;
        &[data-orientation='vertical'] {
            width: 3px;
        }
    `}
`

export const StyledSliderRange = styled(Slider.Range)`
    ${({ theme }) => css`
        position: absolute;
        background-color: ${theme.palette.primary.base.text};
        border-radius: 50px;
        &[data-orientation='horizontal'] {
            height: 100%;
        }
        &[data-orientation='vertical'] {
            width: 100%;
        }
    `}
`

export const StyledSliderThumb = styled(Slider.Thumb)`
    ${({ theme }) => css`
        display: block;
        width: 20px;
        height: 20px;
        background-color: ${theme.palette.neutral.base[0]};
        box-shadow: ${theme.shadows[60]};
        border-radius: 10px;
        &:hover {
            background-color: ${theme.palette.primary.base.text};
        }
        &:focus {
            outline: none;
            box-shadow: ${theme.shadows[60]};
        }
    `}
`

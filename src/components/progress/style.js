import * as Progress from '@radix-ui/react-progress'
import styled, { css } from 'styled-components'

export const StyledProgressRoot = styled(Progress.Root)`
    ${({ theme, width, height }) => css`
        position: relative;
        overflow: hidden;
        background: ${theme.palette.primary.base.disabled};
        border-radius: 50px;
        width: ${width}px;
        height: ${height}px;
        transform: translateZ(0);
    `}
`

export const StyledProgressIndicator = styled(Progress.Indicator)`
    ${({ theme, progress }) => css`
        background-color: ${theme.palette.primary.base.text};
        width: 100%;
        height: 100%;
        transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
        transform: translateX(-${100 - progress}%);
    `}
`

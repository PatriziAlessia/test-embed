import { css } from 'styled-components'

import mediaQueries from './mediaQueries'
import { palette as mainPalette } from './palette'
import ResetStyles from './reset'
import { shadows } from './shadows'
import { typography } from './typography'

const GlobalStyles = ResetStyles
export const spacing = 8
const getAppTheme = ({ name = 'light' } = {}) => {
    const palette = mainPalette[name]

    const zIndex = {
        modal: 1300,
        modalOverlay: 1299,
        snackbar: 1400,
        tooltip: 1500,
    }

    const truncateText = css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    `

    const link = css`
        cursor: pointer;
        text-decoration: none;
        color: ${palette.primary.base.text};
        font-weight: 700;
        &:hover {
            color: ${palette.primary.base.text};
            text-decoration: none;
        }
        &:focus {
            color: ${palette.primary.base.text};
        }
        &:visited {
            color: ${palette.primary.base.text};
        }
        &:active {
            color: ${palette.primary.base.text};
        }
        &:link {
            color: ${palette.primary.base.text};
        }
    `

    return {
        spacing,
        zIndex,
        mediaQueries,
        palette,
        typography,
        shadows,
        truncateText,
        link,
    }
}

export { GlobalStyles, getAppTheme }

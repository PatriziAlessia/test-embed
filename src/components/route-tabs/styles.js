import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const StyledTabLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-transform: uppercase;
`

export const StyledNavLink = styled(NavLink)`
    ${({ theme }) => css`
        text-align: center;
        padding: 16px;
        font-size: 14px;
        border-bottom: 2px solid ${theme.palette.primary.base.text};
        cursor: pointer;
        text-decoration: none;
        color: ${theme.palette.primary.base.text};
        &.active {
            font-weight: 700 !important;
            color: ${theme.palette.primary.base.active} !important;
            border-bottom-color: ${theme.palette.primary.base.background};
            &:hover {
                color: ${theme.palette.primary.base.text} !important;
            }
        }
        &:hover {
            color: ${theme.palette.primary.base.active};
        }
    `}
`

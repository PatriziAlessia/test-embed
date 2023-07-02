import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
    border-collapse: collapse;
    min-width: 850px;
    margin-top: 20px;
`

export const StyledHead = styled.thead`
    ${({ theme }) => css`
        & th {
            padding: 8px;
            background-color: ${theme.palette.primary.base.hover};
            font-weight: 700;
            font-size: 16px;

            &:first-child {
                border-top-left-radius: 8px;
            }

            &:last-child {
                border-top-right-radius: 8px;
            }
        }
    `}
`

export const StyledBody = styled.tbody`
    & td {
        cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
        padding: 12px;
        background-color: white;
    }

    th,
    td {
        border-bottom: 1px solid #ddd;
    }
`

export const StyledTableContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 400px;
`

export const StyledPaginationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    margin-top: 16px;
    align-items: center;

    & svg {
        cursor: pointer;
        width: 16px;
        height: 16px;
    }

    & svg:first-child {
        transform: rotate(180deg);
        visibility: ${props => props.page === 1 && 'hidden'};
    }

    & svg:last-child {
        display: ${props => props.page === props.totalPages && 'none'};
    }
`

export const StyledPaginationButton = styled.div`
    margin: 0 4px;
    padding: 4px 8px;
    background-color: rgba(0, 71, 154, 0.3);
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    cursor: default;
`

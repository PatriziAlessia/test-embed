import * as Collapsible from '@radix-ui/react-collapsible'
import styled, { css } from 'styled-components'

import Button from '@/components/button/Button.jsx'

export const StyledCollapsibleRoot = styled(Collapsible.Root)`
    ${({ width }) => css`
        width: ${width}px;
    `}
`

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledText = styled.span`
    ${({ theme }) => css`
        color: ${theme.palette.neutral.base[1000]};
    `}
`
export const StyledButton = styled(Button)`
    ${({ theme }) => css`
        all: unset;
        border-radius: 100%;
        height: 25px;
        width: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: ${theme.palette.primary.base.text};
        box-shadow: ${theme.shadows[40]};
        cursor: pointer;

        &[data-state='closed'] {
            background-color: ${theme.palette.neutral.base[0]};
        }

        &[data-state='open'] {
            background-color: ${theme.palette.primary.base.disabled};
        }

        &:hover {
            background-color: ${theme.palette.primary.base.disabled};

            &[data-disabled] {
                background-color: ${theme.palette.neutral.base[300]};
            }
        }

        &:focus {
            box-shadow: ${theme.shadows[100]};
        }

        & svg {
            width: 12px;
        }
    `}
`

export const StyledRepository = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.palette.neutral.base[0]};
        border-radius: ${theme.spacing / 2}px;
        margin: ${theme.spacing * 1.25}px 0;
        padding: ${theme.spacing * 1.25}px;
        box-shadow: ${theme.shadows[60]};
    `}
`

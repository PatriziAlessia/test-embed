import styled, { css } from 'styled-components'

export const StyledHomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    height: ${'calc(100vh - 64px)'};

    & h1 {
        font-size: 32px;
        font-weight: 800;
        line-height: normal;
    }
`

export const StyledSubHeader = styled.div`
    ${({ theme }) => {
        return css`
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            background-color: ${theme.palette.neutral.base[0]};
            width: 100%;
            width: 850px;
        `
    }}
`

export const StyledBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;

    //maske it scrollable
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0.4rem;
    }
    max-height: 500px;
`

export const StyledContainerTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 23px 0;
    gap: 4px;
    width: 100%;
`

export const StyledBox2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div {
        max-width: 50%;
    }
`

export const StyledCreatedAt = styled.div`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.success.base.active};
            border-radius: 6px;
            padding: 4px 8px;
            font-size: 12px;
            font-weight: 600;
            color: ${theme.palette.neutral.base[0]};
        `
    }}
`

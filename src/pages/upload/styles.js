import styled, { css } from 'styled-components'

export const StyledContainerTextUpload = styled.div`
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;

    & span {
        font-size: 16px;
        font-weight: 700;
    }

    & p {
        font-size: 14px;
        font-weight: 300;
    }
`
export const StyledContainerUpload = styled.div`
    ${({ theme, isUploading, canStillUpload, isFocused, isDragActive }) => css`
        background-color: ${theme.palette.neutral[100]};
        min-height: 146px;
        min-width: 288px;
        border-radius: 8px 8px 0 0;
        padding: 48px 36px;
        ${theme.mediaQueries.mUp} {
            min-width: 386px;
            padding: ${isUploading ? '48px 56px' : '48px 86px;'};
        }
        gap: 16px;
        display: grid;
        grid-template-columns: ${isUploading || canStillUpload
            ? '1fr'
            : '48px 1fr'};
        grid-template-rows: 1fr;
        align-items: center;

        cursor: pointer;
        ${isFocused ||
        (isDragActive &&
            css`
                border: 2px dashed ${theme.palette.primary.base.background};
            `)}
    `}
`
export const StyledContainerUploadMoreText = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: start;
    cursor: default;
    text-align: center;
    font-size: 14px;

    & span {
        font-weight: 500;
    }

    & p {
        font-weight: 300;
    }
`

export const StyledStillUpload = styled.div`
    ${({ theme }) => css`
        display: flex;
        width: 385px;
        padding: 48px 0px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        flex-direction: column;

        background-color: ${theme.palette.neutral.base[200]};
        border-radius: 8px 8px 0px 0px;
    `}
`

export const StyledUploadIcon = styled.div`
    ${({ theme, canStillUpload }) => css`
        width: ${canStillUpload ? '24px' : '48px'};
        height: ${canStillUpload ? '24px' : '48px'};
        background: ${theme.palette.primary.base.background};
        border-radius: ${canStillUpload ? '4px' : '8px'};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `}
`

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    //put at the center

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`

export const StyledContainerCounter = styled.div`
    ${({ theme }) => css`
        display: flex;
        padding: 10px 16px 10px 10px;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        border-radius: 0px 0px 8px 8px;
        background-color: ${theme.palette.neutral.base[300]};
    `}
`

export const StyledScrollableItems = styled.div`
    ${({ theme }) => css`
        overflow-y: scroll;
        max-height: 140px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        align-items: center;
        gap: 8px;
        padding-right: 4px;

        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.neutral[500]};
            border-radius: 54px;
        }

        &::-webkit-scrollbar-track {
            background-color: ${theme.palette.neutral.white};
            border-radius: 54px;
        }
    `}
`

export const StyledContainerItem = styled.div`
    ${({ theme, canStillUpload }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        gap: ${canStillUpload ? '30px' : '10px'};
        max-width: 268px;
        min-height: 28px;
        background-color: ${theme.palette.neutral.base[100]};
        border-radius: 4px;

        width: 300px;

        & svg {
            cursor: pointer;
        }
    `}
`

export const StyledParagraph = styled.p`
    ${({ theme, canStillUpload }) => css`
        color: ${canStillUpload
            ? theme.palette.secondary.base.background
            : theme.palette.neutral[400]};
        font-size: 14px;
        ${canStillUpload &&
        `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
         width: 200px;
        `}
    `}
`

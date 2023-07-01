import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

import { CloseIcon, PlayIcon } from '@/assets/icons/icons'

import {
    StyledMediaThumbnailRoot,
    StyledMediaThumbnailOverlay,
    StyledMediaThumbnailButtonWrapper,
    StyledMediaThumbnailMediaInfo,
    StyledButtonFix,
    StyledThumbnailButton,
} from './styles'

const MediaThumbnail = ({
    children,
    type,
    count,
    fileName,
    fileSize,
    length,
    handleRemove,
    handlePlay,
    htmlFor,
}) => {
    const theme = useTheme()
    return (
        <StyledMediaThumbnailRoot htmlFor={htmlFor} lenght={length}>
            {length && (
                <StyledMediaThumbnailOverlay>
                    <StyledMediaThumbnailButtonWrapper>
                        <StyledButtonFix />
                        <StyledThumbnailButton
                            variant={'filled'}
                            collapsed={true}
                            icon={
                                <CloseIcon
                                    stroke={theme.palette.neutral.base[0]}
                                />
                            }
                            onClick={handleRemove}
                        />
                        {type === 'video' && (
                            <StyledThumbnailButton
                                variant={'filled'}
                                collapsed={true}
                                icon={<PlayIcon />}
                                onClick={handlePlay}
                            />
                        )}
                    </StyledMediaThumbnailButtonWrapper>
                    <StyledMediaThumbnailMediaInfo>
                        <p>
                            {count} OF {length}
                        </p>
                        <p>
                            {fileName} {fileSize}
                        </p>
                    </StyledMediaThumbnailMediaInfo>
                </StyledMediaThumbnailOverlay>
            )}
            {children}
        </StyledMediaThumbnailRoot>
    )
}

export default MediaThumbnail

MediaThumbnail.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    count: PropTypes.number,
    fileName: PropTypes.string,
    fileSize: PropTypes.number,
    length: PropTypes.number,
    handleRemove: PropTypes.func,
    handlePlay: PropTypes.func,
    htmlFor: PropTypes.string,
}

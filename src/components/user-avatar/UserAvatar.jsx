import PropTypes from 'prop-types'

import { AvatarImage } from '@/assets/icons/icons'

import {
    StyledOnlineDot,
    StyledImg,
    StyledDiv,
    StyledContainer,
} from './styles'

const UserAvatar = ({
    isOnline = false,
    avatar,
    width,
    height,
    dotSize = 12,
    withBoxShadow = true,
    username,
}) => {
    return (
        <>
            {avatar ? (
                <StyledContainer>
                    <StyledDiv>
                        <StyledImg
                            src={avatar}
                            width={width}
                            height={height}
                            withBoxShadow={withBoxShadow}
                            username={username}
                        />
                        {isOnline && <StyledOnlineDot dotSize={dotSize} />}
                    </StyledDiv>
                    {username}
                </StyledContainer>
            ) : (
                <StyledContainer>
                    <StyledDiv>
                        <AvatarImage />
                        {isOnline && <StyledOnlineDot dotSize={dotSize} />}
                    </StyledDiv>
                    {username}
                </StyledContainer>
            )}
        </>
    )
}

export default UserAvatar

UserAvatar.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    dotSize: PropTypes.number,
    withBoxShadow: PropTypes.bool,
    username: PropTypes.string,
}

import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuIcon, DoneIcon } from '@/assets/icons/icons'
import Button from '@/components/button/Button'
import UserAvatar from '@/components/user-avatar/UserAvatar'
import useUser from '@/hooks/useUser'
import { ROUTE_LOGIN, ROUTE_SIGNUP, ROUTE_HOME } from '@/utilities/constants'

import {
    StyledHeaderRoot,
    StyledHeaderLogo,
    StyledHeaderInfo,
    StyledHeaderUserInfo,
    LoginLink,
    StyledHeaderMobileRoot,
    StyledHeaderMobileUserInfo,
} from './styles'

const Header = ({ isMobile = false }) => {
    const { user } = useUser()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

    return isMobile ? (
        <StyledHeaderMobileRoot>
            <StyledHeaderMobileUserInfo>
                <DoneIcon />
                {user && (
                    <MenuIcon
                        onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                    />
                )}
            </StyledHeaderMobileUserInfo>
        </StyledHeaderMobileRoot>
    ) : (
        <StyledHeaderRoot>
            <StyledHeaderLogo>
                <Link to={ROUTE_HOME}>
                    <h3> Logo </h3>
                </Link>
            </StyledHeaderLogo>
            <StyledHeaderInfo>
                {user ? (
                    <>
                        <StyledHeaderUserInfo onClick={() => {}}>
                            <UserAvatar
                                avatar={user?.avatar?.[128]}
                                height={40}
                                width={40}
                                withBoxShadow={false}
                                username={user?.username}
                            />{' '}
                            {user?.username}
                        </StyledHeaderUserInfo>
                    </>
                ) : (
                    <>
                        <LoginLink>
                            <Link to={ROUTE_LOGIN}> Log In </Link>
                        </LoginLink>
                        <Button
                            width={140}
                            size={'medium'}
                            variant={'filled'}
                            onClick={() => {
                                ;<Link to={ROUTE_SIGNUP} />
                            }}
                        >
                            Sign-Up
                        </Button>
                    </>
                )}
            </StyledHeaderInfo>
        </StyledHeaderRoot>
    )
}

export default Header

Header.propTypes = {
    isMobile: PropTypes.bool,
}

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/components/header/Header.jsx'
import { useWindowSize } from '@/hooks/useWindowSize.jsx'

import { StyledBody } from './styles'

const PrivateLayout = ({ withHeader }) => {
    const { width } = useWindowSize()
    const [isMobile, setIsMobile] = useState(width <= 448)
    useEffect(() => {
        setIsMobile(width <= 448)
    }, [width])

    return (
        <>
            {withHeader && <Header isMobile={isMobile} />}
            <StyledBody withHeader={withHeader}>
                <Outlet />
            </StyledBody>
        </>
    )
}

export default PrivateLayout

PrivateLayout.propTypes = {
    withHeader: PropTypes.bool,
}

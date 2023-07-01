import { Outlet } from 'react-router-dom'

import PrivateLayout from '@/layouts/private-layout/PrivateLayout.jsx'
import PublicLayout from '@/layouts/public-layout/PublicLayout.jsx'

import config from '../../../config.js'

const SharedRoute = () => {
    const accessToken = config.isAuthenticated

    return accessToken ? (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    ) : (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    )
}

export default SharedRoute

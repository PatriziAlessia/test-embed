import { Navigate, Outlet } from 'react-router-dom'

import { ROUTE_HOME } from '@/utilities/constants'

import config from '../../../config.js'

const PublicRoute = () => {
    const accessToken = config.isAuthorized
    return accessToken ? <Navigate to={ROUTE_HOME} /> : <Outlet />
}

export default PublicRoute

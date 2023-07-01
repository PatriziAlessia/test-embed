import { Navigate, Outlet } from 'react-router-dom'

import { ROUTE_LOGIN } from '@/utilities/constants'

import config from '../../../config.js'

const PrivateRoute = () => {
    const accessToken = config.isAuthorized
    return accessToken ? <Outlet /> : <Navigate to={ROUTE_LOGIN} />
}

export default PrivateRoute

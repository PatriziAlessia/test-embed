import { createBrowserRouter } from 'react-router-dom'

import PrivateLayout from '@/layouts/private-layout/PrivateLayout.jsx'
import PublicLayout from '@/layouts/public-layout/PublicLayout.jsx'
import * as pages from '@/pages'
import PrivateRoute from '@/route-guards/private-route/PrivateRoute.jsx'
import PublicRoute from '@/route-guards/public-route/PublicRoute.jsx'
import SharedRoute from '@/route-guards/shared-route/SharedRoute.jsx'
import * as routeNames from '@/utilities/constants'

const router = createBrowserRouter(
    [
        {
            element: <PrivateRoute />, // authenticated user layout route
            children: [
                {
                    element: <PrivateLayout withHeader />,
                    children: [],
                },
            ],
        },
        {
            element: <PublicRoute />, // anonymous user layout route
            children: [
                {
                    element: <PublicLayout />,
                    children: [
                        {
                            exact: true,
                            path: routeNames.ROUTE_HOME,
                            element: <pages.Home />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_DETAILS,
                            element: <pages.Details />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_LOGIN,
                            element: <pages.Login />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_UPLOAD,
                            element: <pages.Upload />,
                        },
                    ],
                },
            ],
        },
        {
            element: <SharedRoute />,
            children: [],
        },
        {
            path: '*', // Not found route
            element: <pages.NotFound />,
        },
    ],
    {
        basename: '/',
    }
)

export default router

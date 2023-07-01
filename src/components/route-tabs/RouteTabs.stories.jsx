import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import RouteTabs from './RouteTabs.jsx'

export default {
    title: 'Components',
    component: RouteTabs,
    argTypes: {
        tabLinksClassName: {
            table: {
                disable: true,
            },
        },
    },
}

const RouteTabsFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MemoryRouter initialEntries={['/route-tabs']}>
                <RouteTabs {...args} />
            </MemoryRouter>
        </ThemeProvider>
    )
}

export const RouteTabsExample = RouteTabsFunction.bind({})

RouteTabsExample.args = {
    sections: [
        { title: 'home', route: 'home' },
        { title: 'Route Tabs', route: 'route-tabs' },
    ],
}

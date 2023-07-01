import { ThemeProvider } from 'styled-components'

import { InfoCircle } from '@/assets/icons/icons.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Banner from './Banner.jsx'

export default {
    title: 'Components',
    component: Banner,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const BannerFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Banner {...args}></Banner>
        </ThemeProvider>
    )
}

export const BannerExample = BannerFunction.bind({})

BannerExample.args = {
    icon: <InfoCircle fill={'gray'} />,
    text: 'I am a banner',
}

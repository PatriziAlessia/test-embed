import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import UserAvatar from './UserAvatar.jsx'

export default {
    title: 'Components',
    component: UserAvatar,
}

const UserAvatarFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <UserAvatar {...args}></UserAvatar>
        </ThemeProvider>
    )
}

export const UserAvatarExample = UserAvatarFunction.bind({})

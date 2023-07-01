import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import MediaThumbnail from './MediaThumbnail.jsx'

export default {
    title: 'Components',
    component: MediaThumbnail,
}

const MediaThumbnailFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MediaThumbnail {...args}></MediaThumbnail>
        </ThemeProvider>
    )
}

export const MediaThumbnailExample = MediaThumbnailFunction.bind({})

MediaThumbnailExample.args = {
    type: 'video',
    count: 2,
    length: 3,
}

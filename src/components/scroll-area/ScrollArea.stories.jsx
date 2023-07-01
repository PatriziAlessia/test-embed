import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import ScrollArea from './ScrollArea.jsx'

export default {
    title: 'Components',
    component: ScrollArea,
}

const ScrollAreaFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    const { orientation } = args
    const widthUpdated = orientation === 'vertical' ? '220px' : '100%'

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ScrollArea width={widthUpdated} {...args} />
        </ThemeProvider>
    )
}

export const ScrollAreaExample = ScrollAreaFunction.bind({})

ScrollAreaExample.args = {
    width: '220px',
    height: '225px',
    title: 'Items',
    boxWidth: '500px',
    items: ['text 1', 'text 2', 'text 3', 'text 4', 'text 5', 'text 6'],
    orientation: 'horizontal',
}

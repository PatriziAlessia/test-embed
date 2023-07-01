import { ThemeProvider } from 'styled-components'

import { getAppTheme, GlobalStyles } from '@/theme'

import Carousel from './Carousel.jsx'

export default {
    title: 'Components',
    component: Carousel,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
}

const CarouselFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Carousel {...args}></Carousel>
        </ThemeProvider>
    )
}

export const CarouselExample = CarouselFunction.bind({})

CarouselExample.args = {
    list: [
        <div
            key={1}
            style={{
                backgroundColor: '#F2F6FD',
                height: '100%',
                textAlign: 'center',
                fontSize: '10rem',
            }}
        >
            1
        </div>,
        <div
            key={2}
            style={{
                backgroundColor: '#C5CAD4',
                height: '100%',
                textAlign: 'center',
                fontSize: '10rem',
            }}
        >
            2
        </div>,
        <div
            key={3}
            style={{
                backgroundColor: '#8A909E',
                height: '100%',
                textAlign: 'center',
                fontSize: '10rem',
            }}
        >
            3
        </div>,
        <div
            key={4}
            style={{
                backgroundColor: '#6A707E',
                height: '100%',
                textAlign: 'center',
                fontSize: '10rem',
            }}
        >
            4
        </div>,
        <div
            key={5}
            style={{
                backgroundColor: '#464A53',
                height: '100%',
                textAlign: 'center',
                fontSize: '10rem',
            }}
        >
            5
        </div>,
    ],
}

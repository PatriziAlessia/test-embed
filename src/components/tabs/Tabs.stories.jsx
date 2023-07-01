import { ThemeProvider } from 'styled-components'

import Button from '@/components/button/Button.jsx'
import Input from '@/components/input/Input.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Tabs from './Tabs.jsx'

export default {
    title: 'Components',
    component: Tabs,
}

const TabsFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Tabs {...args} />
        </ThemeProvider>
    )
}

export const TabsExample = TabsFunction.bind({})

TabsExample.args = {
    triggers: [
        {
            value: 'Proggeto',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="27"
                    viewBox="0 0 24 27"
                    fill="none"
                >
                    <path
                        d="M21.3333 2.99992H15.76C15.2 1.45325 13.7333 0.333252 12 0.333252C10.2667 0.333252 8.8 1.45325 8.24 2.99992H2.66667C1.2 2.99992 0 4.19992 0 5.66658V24.3333C0 25.7999 1.2 26.9999 2.66667 26.9999H21.3333C22.8 26.9999 24 25.7999 24 24.3333V5.66658C24 4.19992 22.8 2.99992 21.3333 2.99992ZM12 2.99992C12.7333 2.99992 13.3333 3.59992 13.3333 4.33325C13.3333 5.06659 12.7333 5.66658 12 5.66658C11.2667 5.66658 10.6667 5.06659 10.6667 4.33325C10.6667 3.59992 11.2667 2.99992 12 2.99992ZM14.6667 21.6666H5.33333V18.9999H14.6667V21.6666ZM18.6667 16.3333H5.33333V13.6666H18.6667V16.3333ZM18.6667 10.9999H5.33333V8.33325H18.6667V10.9999Z"
                        fill="#B2B1B7"
                    />
                </svg>
            ),
            title: 'Update your account',
            body: (
                <div>
                    <span>Change your user account</span>
                    <Input placeholder={'username'}></Input>
                    <Button size={'small'}>Save</Button>
                </div>
            ),
        },
        {
            value: 'Cliente',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                >
                    <path
                        d="M21.8333 2.99992H16.26C15.7 1.45325 14.2333 0.333252 12.5 0.333252C10.7667 0.333252 9.3 1.45325 8.74 2.99992H3.16667C1.7 2.99992 0.5 4.19992 0.5 5.66658V24.3333C0.5 25.7999 1.7 26.9999 3.16667 26.9999H21.8333C23.3 26.9999 24.5 25.7999 24.5 24.3333V5.66658C24.5 4.19992 23.3 2.99992 21.8333 2.99992ZM12.5 2.99992C13.2333 2.99992 13.8333 3.59992 13.8333 4.33325C13.8333 5.06659 13.2333 5.66658 12.5 5.66658C11.7667 5.66658 11.1667 5.06659 11.1667 4.33325C11.1667 3.59992 11.7667 2.99992 12.5 2.99992ZM12.5 8.33325C14.7133 8.33325 16.5 10.1199 16.5 12.3333C16.5 14.5466 14.7133 16.3333 12.5 16.3333C10.2867 16.3333 8.5 14.5466 8.5 12.3333C8.5 10.1199 10.2867 8.33325 12.5 8.33325ZM20.5 24.3333H4.5V22.4666C4.5 19.7999 9.83333 18.3333 12.5 18.3333C15.1667 18.3333 20.5 19.7999 20.5 22.4666V24.3333Z"
                        fill="#B2B1B7"
                    />
                </svg>
            ),
            title: 'Update your password',
        },
        {
            value: 'Storica',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                >
                    <path
                        d="M16.3333 0C9.70665 0 4.33331 5.37333 4.33331 12H0.333313L5.51998 17.1867L5.61331 17.3733L11 12H6.99998C6.99998 6.84 11.1733 2.66667 16.3333 2.66667C21.4933 2.66667 25.6666 6.84 25.6666 12C25.6666 17.16 21.4933 21.3333 16.3333 21.3333C13.76 21.3333 11.4266 20.28 9.74665 18.5867L7.85331 20.48C10.0266 22.6533 13.0133 24 16.3333 24C22.96 24 28.3333 18.6267 28.3333 12C28.3333 5.37333 22.96 0 16.3333 0ZM15 6.66667V13.3333L20.7066 16.72L21.6666 15.1067L17 12.3333V6.66667H15Z"
                        fill="#B2B1B7"
                    />
                </svg>
            ),
            body: <h6>Storica</h6>,
        },
    ],
    defaultValue: 'Proggeto',
    label: 'Manage your account',
    maxWidth: 500,
}

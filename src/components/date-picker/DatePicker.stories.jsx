import { useForm } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'

import { CalendarIcon } from '@/assets/icons/icons.jsx'
import { getAppTheme, GlobalStyles } from '@/theme'

import Datepicker from './DatePicker.jsx'

export default {
    title: 'Components',
    component: Datepicker,
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        rootClassName: {
            table: {
                disable: true,
            },
        },
        component: {
            table: {
                disable: true,
            },
        },
        inputProps: {
            table: {
                disable: true,
            },
        },
    },
}

const DatepickerFunction = args => {
    const themeName = 'light'
    const theme = getAppTheme({ name: themeName })
    const { control: formControl } = useForm()

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Datepicker
                name={args.name}
                control={formControl || args.control}
                label={args.label}
                defaultValue={args.defaultValue}
                placeholder={args.placeholder}
                helpText={args.helpText}
                icon={args.icon}
                errors={args.errors}
                args={args}
            />
        </ThemeProvider>
    )
}

export const DatepickerExample = DatepickerFunction.bind({})

DatepickerExample.args = {
    name: 'DatePicker',
    label: 'Label',
    placeholder: 'I am a datepicker',
    helpText: 'sample help text',
    errors: { message: 'error message' },
    icon: <CalendarIcon fill={'#242136'} />,
}

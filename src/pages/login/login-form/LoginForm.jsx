import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { MailIcon, LockIcon, EyeOpenIcon, HideIcon } from '@/assets/icons/icons'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import AuthAPI from '@/services/auth/auth.http.js'

import { StyledLoginFormRoot } from '../styles'

import { LOGIN_MODEL, validationSchema } from './LoginModel'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const methods = useForm({
        shouldUnregister: false,
        mode: 'onChange',
        reValidateMode: 'onChange',
        nativeValidation: false,
        shouldFocusError: true,
        resolver: yupResolver(validationSchema),
    })

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = methods

    const onSubmit = async () => {
        try {
            const { data } = await AuthAPI.login.send()
            console.log(
                'auth is:',
                data,
                sessionStorage.getItem('is-authenticated')
            )
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <>
            <StyledLoginFormRoot onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type={'email'}
                    label={'Email address'}
                    placeholder={'Enter your email'}
                    touched={touchedFields[LOGIN_MODEL.email]}
                    errors={errors[LOGIN_MODEL.email]}
                    {...register(LOGIN_MODEL.email)}
                    icon={<MailIcon />}
                />
                <Input
                    type={showPassword ? 'text' : 'password'}
                    label={'Password'}
                    placeholder={'Enter your password'}
                    touched={touchedFields[LOGIN_MODEL.password]}
                    errors={errors[LOGIN_MODEL.password]}
                    {...register(LOGIN_MODEL.password)}
                    icon={<LockIcon />}
                    statusIcon={showPassword ? <EyeOpenIcon /> : <HideIcon />} // TODO: find new icon "EyeOpenIcon"
                    statusIconCallback={() => setShowPassword(!showPassword)}
                />
                <Button type={'submit'} width={'100%'}>
                    Login
                </Button>
            </StyledLoginFormRoot>
        </>
    )
}

export default LoginForm

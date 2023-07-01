import { Link } from 'react-router-dom'

import * as routeNames from '@/utilities/constants'

import LoginForm from './login-form/LoginForm.jsx'
import {
    StyledLoginRoot,
    StyledLoginCard,
    StyledLoginTitle,
    StyledLoginSubtitle,
    StyledLoginForgotPassword,
    StyledLoginSpanLink,
} from './styles'

const Login = () => {
    return (
        <StyledLoginRoot>
            <StyledLoginCard>
                <div>
                    <StyledLoginTitle>Login</StyledLoginTitle>
                    <StyledLoginSubtitle>Enter data</StyledLoginSubtitle>
                </div>
                <LoginForm />
                <div>
                    <StyledLoginForgotPassword>
                        <Link to={routeNames.ROUTE_FORGOT_PASSWORD}>
                            Forgot password ?
                        </Link>
                    </StyledLoginForgotPassword>
                    <p>
                        Don&apos;t have an account?
                        <Link to={routeNames.ROUTE_SIGNUP}>
                            {' '}
                            <StyledLoginSpanLink>Sign Up</StyledLoginSpanLink>
                        </Link>
                    </p>
                </div>
            </StyledLoginCard>
        </StyledLoginRoot>
    )
}

export default Login

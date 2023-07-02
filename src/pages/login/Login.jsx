import LoginForm from './login-form/LoginForm.jsx'
import {
    StyledLoginRoot,
    StyledLoginCard,
    StyledLoginTitle,
    StyledLoginSubtitle,
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
            </StyledLoginCard>
        </StyledLoginRoot>
    )
}

export default Login

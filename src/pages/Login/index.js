import React, { useState,  } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import {
    Card,
    CardBody,
    Title,
    SmallText,
    CardMsgs,
    Form,
    FormGroup,
    Input,
    Button,
    LoginContainer,
    MuteLink,
    BoldLink
} from './Login.Styles'


const Login = () => {

    const { login } = useAuth();

    const [isError, setIsError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            history.push("/clientes")
            
        } catch (error) {
            setIsError('Wrong Credentials');
            setTimeout(() => setIsError(''), 1500);
        }
        
        setLoading(false);
    }

    return (
        <LoginContainer>
            <Card>
                <CardMsgs>
                    <Title> Login </Title>
                    <SmallText>Please enter your data</SmallText>
                    {isError && <p className='error' >{isError}</p>}
                </CardMsgs>
                <CardBody>
                    <Form onSubmit={handleSubmit} >
                        <FormGroup id="email">
                            <Input
                                value={ email }
                                type="email"
                                name="email"
                                placeholder="Enter your Email adrress"
                                onChange={handleEmail} />
                        </FormGroup>   

                        <FormGroup id="password">
                            <Input
                                value={ password }
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handlePassword} />
                        </FormGroup>   

                        <Button> Login </Button>
                    </Form>
                </CardBody>

                <MuteLink> 
                    Don't have an account? 
                    <BoldLink to='/signUp'> Sign Up </BoldLink>
                </MuteLink>
            </Card>
        </LoginContainer>
    )
}

export default Login

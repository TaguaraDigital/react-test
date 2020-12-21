import React, { useState,  } from 'react';
import { useHistory } from 'react-router-dom';


import { useAuth } from '../../contexts/AuthContext';

import {
    Card,
    CardBody,
    CardMsgs,
    Form,
    FormGroup,
    Button,
    LoginContainer,

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
                    <h2> Login </h2>
                    {isError && <p className='error' >{isError}</p>}
                </CardMsgs>
                <CardBody>
                    <Form onSubmit={handleSubmit} >
                        <FormGroup id="email">
                            <label htmlFor="email">Email</label>
                            <input
                                value={ email }
                                type="email"
                                name="email"
                                placeholder="Enter your Email adrress"
                                onChange={handleEmail} />
                        </FormGroup>   

                        <FormGroup id="password">
                            <label htmlFor="password">Password</label>
                            <input
                                value={ password }
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handlePassword} />
                        </FormGroup>   

                        <Button> Login </Button>
                    </Form>
                </CardBody>
                <div>
                    Already have an a account? Log In    
                </div>   
            </Card>
        </LoginContainer>
    )
}

export default Login

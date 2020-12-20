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
    SignUpContainer,

} from './SignUp.Styles'


const SignUp = () => {

    const { signup } = useAuth();

    const [isError, setIsError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handlePasswordConf = e => setPasswordConf(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password !== passwordConf) {
            setIsError('Passwords do not match');
            setTimeout(() => setIsError(''), 1500);
        } else {
            try {
                await signup(email, password);
                history.push("/clientes")

            } catch (error) {
                setIsError('Wrong Credentials');
                setTimeout(() => setIsError(''), 1500);
            }
        }
        setLoading(false);
      }

    return (
        <SignUpContainer>
            <Card>
                <CardMsgs>
                    {isError && <p className='error' >{isError}</p>}
                    <h2 className="title"> Sign Up</h2>
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

                        <FormGroup id="passwordConf">
                            <label htmlFor="passwordConf">Confirm Password</label>
                            <input
                                value={ passwordConf }
                                type="password"
                                name="passwordConf"
                                placeholder="Confirm your password"
                                onChange={handlePasswordConf} />
                        </FormGroup>   

                        <Button>Submit</Button>
                    </Form>
                </CardBody>
                <div>
                    Already have an a account? Log In    
                </div>   
            </Card>
        </SignUpContainer>
    )
}

export default SignUp

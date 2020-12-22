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
    SignUpContainer,
    MuteLink,
    BoldLink
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
                    <Title> Sign Up </Title>
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

                        <FormGroup id="passwordConf">
                            <Input
                                value={ passwordConf }
                                type="password"
                                name="passwordConf"
                                placeholder="Confirm your password"
                                onChange={handlePasswordConf} />
                        </FormGroup>   

                        <Button>Sign Up</Button>
                    </Form>
                </CardBody>
                <MuteLink> 
                    Already have an a account? 
                    <BoldLink to='/login'> Login </BoldLink>
                </MuteLink>

            </Card>
        </SignUpContainer>
    )
}

export default SignUp

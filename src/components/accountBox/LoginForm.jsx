import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MuteLink, SubmitButton, } from './common';
import { Marginer } from '../../components/marginers';
import { AccountContext } from '../../contexts/AccountContext';


const LoginForm = (props) => {

    const { switchToSignUp} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Marginer direction="vertical" margin=".1rem" />
                <MuteLink href="#"> Forget your password? </MuteLink>
                <Marginer direction="vertical" margin=".75rem" />
                <SubmitButton type="submit"> Login </SubmitButton>
                <Marginer direction="vertical" margin=".5rem" />
                <MuteLink> 
                    Don't have an account? 
                    <BoldLink onClick={switchToSignUp}> Sign Up </BoldLink>
                </MuteLink>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm

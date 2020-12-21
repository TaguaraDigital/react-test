import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MuteLink, SubmitButton, } from './common';
import { Marginer } from '../../components/marginers';
import { AccountContext } from '../../contexts/AccountContext';


const SignUpForm = (props) => {

    const { switchToLogin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Marginer direction="vertical" margin=".1rem" />
                <SubmitButton type="submit"> SignUp </SubmitButton>
                <Marginer direction="vertical" margin=".5rem" />
                <MuteLink> 
                    You have an account? 
                    <BoldLink onClick={switchToLogin}> Login </BoldLink>
                </MuteLink>
            </FormContainer>
        </BoxContainer>
    )
}

export default SignUpForm
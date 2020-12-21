import React, { useState, useContext } from 'react';

import { AccountContext } from "../../contexts/AccountContext";

import {
    LoginContainer,
    BoxContainer,
    TopContainer,
    BackDrow,
    HeaderContainer,
    Title,
    SmallText,
    InnerContainer,

} from './AccountBox.Styles';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const backdropVariants = {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)",
    },
};
  
const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

const AccountBox = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isActive, setIsActive] = useState("Login");

    const playExpandingAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setIsActive('SignUp');
        }, 400);
    };

    const switchToLogin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setIsActive('Login');
        }, 400);
    };

    const contextValue = { switchToSignUp, switchToLogin };

    return (
    <AccountContext.Provider
        value={contextValue}
    >

        <LoginContainer>
            <BoxContainer   >
                <TopContainer>
                    <BackDrow
                        initial={ false }
                        animate={ isExpanded ? "expanded" : "collapsed" }
                        variants={backdropVariants}
                    />
                    {isActive === "Login" && 
                        <HeaderContainer>
                            <Title>Login</Title>
                            <SmallText>Please sign in to continue</SmallText>
                        </HeaderContainer>
                    }
                    {isActive === "SignUp" && 
                        <HeaderContainer>
                            <Title>Registrarse </Title>
                            <SmallText>Please enter your data</SmallText>
                        </HeaderContainer>
                    }
                </TopContainer>
                <InnerContainer>
                    {isActive === "Login" && <LoginForm /> }
                    {isActive === "SignUp" && <SignUpForm /> }
                </InnerContainer>
            </BoxContainer>
        </LoginContainer>
    </AccountContext.Provider>
    )

}

export default AccountBox;
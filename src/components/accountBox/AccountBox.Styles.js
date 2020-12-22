import styled from 'styled-components';
import { motion } from 'framer-motion';


export const LoginContainer = styled.div`
    width: 100%;
    min-height: 100%;
    margin: 2rem 0;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* text-align: center; */
    border-radius: 19px;

    background-color: var(--lightClr);
    box-shadow: 0 0 2px rgba( 15,15,15, 0.3);
`;

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    padding: 0 1.8em; 
    padding-bottom: 5em; 

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    text-align: center;

`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;
`;

export const Title = styled.h2`
    font-size: 2rem;
    color: red;
`;

export const SmallText = styled.p`
    font-size: .75rem;
    color: red;
`;

export const BackDrow = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    top: -290px;
    left: -70px;

    display: flex;
    flex-direction: column;

    border-radius: 50%;
    background: rgb(190,219,187);
    background: linear-gradient(60deg,
        var(--mainClr) 20%,
        var(--mainClr) 100%);

    transform: rotate(60deg);
    

`;
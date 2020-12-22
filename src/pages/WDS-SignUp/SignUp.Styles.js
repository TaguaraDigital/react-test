import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpContainer = styled.section`
    height: 100%;
    width: 100%;
    padding: 1rem 0;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    background-color: var(--mainClr); `;

export const Card = styled.article`
    height: 550px;
    width: 320px;
    padding: 1rem;

    border-radius: 19px;
    background-color: var(--lightClr);
    box-shadow: 0 0 2px rgba(0,0,0, .5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 2rem;
    color: red;
`;

export const SmallText = styled.h2`
    font-size: .75rem;
    color: red;
`;

export const CardMsgs = styled.div`
    margin: 1rem 0;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
`;

export const Form = styled.form`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const FormGroup = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    margin-bottom: 0;
    padding: 0 1rem;
    
    outline: none;
    border: 1px solid rgba(200,200,200, .3);
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    
    box-shadow: none;

    transition: all .5s ease-in-out;

    &::placeholder {
        color: rgba(200,200,200, .9);
    }

    &:not(:last-of-type) {
        border-bottom: 2px solid rgba(200,200,200,.3);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid var(--mainClr);
    }
`;

export const MuteLink = styled.p`
    font-size: .7rem;
    color: var(--darkClr);
    text-decoration: none;
`;

export const BoldLink = styled(Link)`
    font-size: .7rem;
    color: var(--ctaClr);
    text-decoration: none;
    cursor: pointer;
`;

export const Button = styled.button`
    width: 100%;
    font-size: 1rem;
    margin: 1rem 0;

    padding: .75rem 20%;
    background-color: var(--ctaClr);
    color: var(--lightClr);
 
    border: none;
    cursor: pointer;
    
    transition: all .3s ease-in-out;
 
    &:hover {
        background-color: var(--ctaInvClr);
    }
`;
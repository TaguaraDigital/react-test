import styled from 'styled-components';

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MuteLink = styled.a`
    font-size: .7rem;
    color: var(--darkClr);
    text-decoration: none;
`;

export const BoldLink = styled.a`
    font-size: .7rem;
    color: var(--ctaClr);
    text-decoration: none;
`;

export const Input = styled.input`
    width: 100%;
    height: 2.53rem;
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

export const SubmitButton = styled.button`
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;    
    padding: .7rem 40%;
    
    background-color: var(--mainClr);
    color: var(--lightClr);

    cursor: pointer;
    transition: all .3s ease-in-out;
    border-radius: 50px;

    &:hover {
        filter: brightness(1.08 );
    }

`;  
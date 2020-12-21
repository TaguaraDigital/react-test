import styled from 'styled-components';

export const LoginContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: var(--mainClr);
    /* background-color: var(--darkClr);     */
 `;

export const Card = styled.article`
    height: 500px;
    width: 400px;
    
    padding: 2rem;
    background-color: var(--lightClr);
    box-shadow: 2px 2px 3px rgba(0,0,0, .5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
`;

export const CardMsgs = styled.div`
    margin: 2rem 0;
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

export const Button = styled.button`
    padding: .75rem 1.5rem;
    background-color: var(--ctaClr);
    color: #fff;
 
    border: none;
    margin: 1rem 2rem 0;
    cursor: pointer;
    
    z-index: 100;

    &:hover {
        background-color: var(--ctaInvClr);
    }
`;
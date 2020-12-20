import styled from 'styled-components';

export const SignUpContainer = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: var(--mainClr);
 `;

export const Card = styled.article`
    height: 600px;
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
    margin: 3rem 0;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    

    margin-bottom: 2rem;
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
    background-color: blue;
    color: #fff;
 
    border: none;
    margin: 2rem;
    cursor: pointer;

    &:hover {
        background-color: red;
    }
`;
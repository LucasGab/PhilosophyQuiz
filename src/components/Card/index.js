import styled from 'styled-components';

const Card = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border-radius: 4px;
    overflow:hidden;

    h1 , h2, h3{
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        color: ${({ theme }) => theme.colors.contrastTextPrimary};
        margin-bottom: 0;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.contrastTextPrimary};
    }
`;

Card.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};
    * {
        margin: 0;
    }
`;

Card.SubCard = styled.div`
    width: 100%;
    padding: 2px 0;
    margin: 10px 0;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    *{
        text-align: center;
    }
`;

Card.Content = styled.div`
    padding: 24px 32px 32px 32px;
    & > *:first-child {
        margin-top: 0;
    }
    & > *:last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
`;

Card.Input = styled.input`
    width:100%;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0 20px 0;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastTextPrimary};
    
    &:focus{
        background-color: ${({ theme }) => theme.colors.secondaryBg};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.contrastTextPrimary};
    }
`;

Card.Button = styled.button`
    width:100%;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 1px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.contrastTextPrimary};
    background-color: ${({ theme }) => theme.colors.secondary};

    &:focus{
        outline:none;
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors.secondaryDarker};
    }

    &:disabled{
        background-color: ${({ theme }) => theme.colors.disabled};
    }
`;

export default Card;

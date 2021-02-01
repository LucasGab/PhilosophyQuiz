import styled from 'styled-components';

const Card = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    min-width: 400px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow:hidden;

    h1 , h2, h3 {
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

    @media screen and (max-width: 500px) {
        min-width: 200px;
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
    padding: 12px 0;
    margin: 10px 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    * {
        text-align: center;
    }

    p {
        margin: 0;
    }

    &:hover {
        cursor: pointer;
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

    h1,h2,h3 {
        margin: 0 0 1em;
    }
`;

Card.Input = styled.input`
    width:100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 14px;
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
    margin: 10px 0;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 1px;
    padding: 10px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastTextPrimary};
    background-color: ${({ theme }) => theme.colors.secondary};

    &:focus{
        outline:none;
    }

    &:enabled:hover{
        background-color: ${({ theme }) => theme.colors.secondaryDarker};
        cursor: pointer;
    }

    &:disabled{
        cursor:not-allowed;
        background-color: ${({ theme }) => theme.colors.disabled};
    }
`;

Card.Alternative = styled.a`
    display:block;
    text-align: center;
    color: ${({ theme }) => theme.colors.contrastTextPrimary};
    padding: 12px 0;
    margin: 10px 0;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    outline: 0;
    transition: .3s;
    text-decoration:none;
    
    &:hover {
        opacity: .5;
    }

    & ~ input[type=radio]{
        display: none;
    }

    &[data-selected="true"] {
        background-color: ${({ theme }) => theme.colors.secondary};
      
        &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        }
      
        &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        }
    }
    
`;

export default Card;

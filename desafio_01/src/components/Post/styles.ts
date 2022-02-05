import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    padding: 20px;
    margin: 25px 0;

    background-color: ${({ theme }) => theme.colors.primary_font};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(19, 19, 31, .1);
`;

export const HeaderPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 10px;
`; 

export const Date = styled.span`
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.tertiary_font};
`;

export const Image = styled.img`
    max-width: 100%;
    width: 3%;

    @media (max-width: 415px) { width: 5%; };
`;

export const Title = styled.h2`
    margin-bottom: 10px;

    font: 400 normal 20px/1em ${({ theme }) => theme.font.primary}, sans-serif;
    color: ${({ theme }) => theme.colors.secondary_font};

    @media (max-width: 415px) { line-height: 1.4em; };
`;

export const Description  = styled.span`
    font: 400 normal 14px/1.6em ${({ theme }) => theme.font.primary}, sans-serif;
    color: ${({ theme }) => theme.colors.tertiary_font};
`;

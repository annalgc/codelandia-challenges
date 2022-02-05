import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    min-height: 100vh;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 40px 0;

    background: linear-gradient(to right, ${({ theme }) => theme.colors.gradient_dark}, ${({ theme }) => theme.colors.gradient_light});
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;

    width: 50%;
    margin-bottom: 50px;

    @media (max-width: 415px) { width: 90%; };
`;

export const Text = styled.span`
    font-family: ${({ theme }) => theme.font.primary}, sans-serif;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary_font};
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 50%;
    padding: 10px 15px;

    background: linear-gradient(to left, rgba(255, 255, 255, .3), rgba(255,255,255, .2));
    border-radius: 5px;

    @media (max-width: 415px) { width: 90%; };

    .iw__input {
        width: 100%;

        padding: 10px;
        margin-left: 10px;

        font-family: ${({ theme }) => theme.font.secondary};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary_font};

        background-color: transparent;
        border: none;

        outline: none;

        ::placeholder { color: ${({ theme }) => theme.colors.primary_font}; opacity: .5; }
    }
`;

export const Content = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListPosts = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;

    @media (max-width: 415px) { width: 90%; };
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        scrollbar-width: thin;
        scrollbar-color: #ddd #333;
    }

    *::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    *::-webkit-scrollbar-track {
        background: #ddd;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.gradient_dark};
        border-radius: 5px;
        /* border: 1px solid #010467; */
    }
`

export default GlobalStyle;
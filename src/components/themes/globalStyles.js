import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
    .btn-primary {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.body};
        padding: 0.5rem 1.5rem; 
    };
    .text-info {
      color: ${({ theme }) => theme.primary};
      font-style: italic;
    }
}

input, select, textarea{
    color: ${({ theme }) => theme.text};
    }
`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#808080",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#bb86fc",
};

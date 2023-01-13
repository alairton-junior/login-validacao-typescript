import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-body: #141318;
        --background: #222428;
        --bg-secundary: #2C2C30;
        --blue-color: #478CF8;
        --font-color: #fff;
        --font-gray: #6F7175;
    }

    body{
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
        width: 100%;
        background: var(--bg-body);
        color: var(--font-color);
        font-family: 'Poppins', sans-serif;

        display: flex;
        align-items: center !important;;
        justify-content: center;
    }

    * {
        margin: 0;
        padding: 0;
    }
`

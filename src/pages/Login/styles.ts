import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    max-width: 325px;
    background-color: var(--background);

    padding: 24px;
    border-radius: 16px;
    border: var(--bg-secundary) solid 2px;

    form {
        width: 100%;
    }

    h2 {
        color: var(--font-gray);
        font-size: 16px;
        letter-spacing: 1px;
    }

    h1 {
        color: var(--font-color);
        font-weight: 500;
        font-size: 28px;
        margin-bottom: 16px;
    }


`
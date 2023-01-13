import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 16px;

    span {
        color: red;
        font-size: 12px;
    }

`

export const TextContainer = styled.p`
    color: var(--font-color);
    font-size: 14px;
    margin-bottom: 4px;
`

export const InputText = styled.input`
    color: var(--font-color);

    font-family: Poppins, sans-serif;
    width: 90%;
    padding: 12px;
    background-color: var(--background);
    border: var(--bg-secundary) solid 2px;
    border-radius: 8px;
`

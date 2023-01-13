import styled, { css } from 'styled-components';

import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    padding: 12px;
    background-color: var( --blue-color);
    color: var(--font-color);
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    opacity: 0.5;

    ${({variant}) => variant === "secondary" && css`        
        opacity: 1;
        cursor: pointer;
    `
    }
`
import { ButtonContainer } from "./styles";
import { IButton } from './types'

export default function Button({ variant = "primary", onClick } : IButton) {
    return(
        <>
        <ButtonContainer variant={variant} onClick={onClick}>
            Entrar
        </ButtonContainer>
        </>
    )
}
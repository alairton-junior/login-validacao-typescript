export interface IButtonStyled {
    variant: string;
}

export interface IButton {
    variant?: string;
    onClick?: () => void;
}
import { Control, Controller } from 'react-hook-form';
import { IFormLogin } from '../../pages/Login/types';
import { InputContainer, InputText, TextContainer } from './styles'


interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    textInput: string;
    name: 'email' | 'password';
    control: Control<IFormLogin, any>;
    errorMenssage?: string;

}

export default function Input ({textInput, control, errorMenssage, name, ...rest} : IInput) {

    return (
        <>
            <InputContainer>
                <TextContainer>{textInput}</TextContainer>
                    <Controller
                        control={control}
                        name={name}
                        render={({ field: { onChange, onBlur} }) => <InputText { ...rest } onChange={onChange} onBlur={onBlur}/>}
                    />
                { errorMenssage ? <span>{errorMenssage}</span> : null }
            </InputContainer>
            
        </>
    );
}
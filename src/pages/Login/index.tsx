import { useState } from 'react'

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { defaultValues, IFormLogin } from './types';


const schema = yup.object({
    email: yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório!')
}).required()

export default function Login() {
    
    const navigate = useNavigate();

    const {
        control,
        formState: { errors, isValid } 
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        defaultValues,
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    console.log(isValid);

    const handleClickHome = () => {
        if(isValid)
            navigate('/home')
    }


    return(
        <>
        <Container>
            <h2>BEM-VINDO</h2>
            <h1>Acesse a sua conta</h1>
            <form>
                <Input name="email" textInput="E-mail" errorMenssage={errors?.email?.message} control={ control }/>
                <Input name="password" textInput="Senha" type="password" control={ control } errorMenssage={errors?.password?.message}/>
            </form>
            <Button variant={isValid ? 'secondary' : ''} onClick={handleClickHome}/>
        </Container>
        </>
    )
}
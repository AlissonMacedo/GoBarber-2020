import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import  Input from '../../components/Input';
import  Button  from '../../components/Button';

import { Container, Content, Background } from './styles';

export const SignIn: React.FC = () => {
  return (


    <Container>
      <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
      <h1>Faça seu logon</h1>

      <Input name="email" placeholder="E-mail" icon={FiMail} />
      <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
      <Button type="submit">Entrar</Button>

      <a href="forgot">Esqueci minha senha</a>

      </form>
      <a href="/">
        <FiLogIn />
        Criar uma conta</a>
      </Content>
      <Background />
    </Container>
  )
}
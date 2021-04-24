import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

export const SignIn: React.FC = () => {
  return (


    <Container>
      <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
      <h1>Faça seu logon</h1>

      <input placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button type="submit">Entrar</button>

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
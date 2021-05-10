import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles  } from '@unform/core'

import logoImg from '../../assets/logo.svg';

import  Input from '../../components/Input';
import  Button  from '../../components/Button';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import * as Yup from 'yup';

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
        .required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string()
        .min(6, 'No mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {
      console.log({err});

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors)
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
      <img src={logoImg} alt="Gobarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
      <h1>Faça seu cadastro</h1>

      <Input name="name" placeholder="Nome" icon={FiUser} />
      <Input name="email" placeholder="E-mail" icon={FiMail} />
      <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
      <Button type="submit">Cadastrar</Button>

      </Form>
      <a href="/">
        <FiArrowLeft />
        Voltar para logon</a>
      </Content>
     
    </Container>
  )
}
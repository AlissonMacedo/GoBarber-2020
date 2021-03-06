import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';

import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })

  }, [fieldName, registerField])


  const handleInputBlur = useCallback(() => {
    setFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, [])

  const handleInputFocus = useCallback(() => {
    setFocused(true)
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused} >
      { Icon && <Icon size={20} /> }
      <input 
      onFocus={handleInputFocus} 
      onBlur={handleInputBlur}
      defaultValue={defaultValue}  
      ref={inputRef} 
      {...rest} 
      />
      {error}
    </Container>
  )
};


export default Input;
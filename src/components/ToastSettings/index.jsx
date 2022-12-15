import React from 'react';
import { useState } from 'react';

import toaster from '@assets/toaster.svg';
import {
  ToastAnimation,
  ToastDescription,
  ToastDuration,
  ToastGap,
  ToastPosition,
  ToastTitle,
  ToastType,
} from '../FormData';
import { ButtonSubmit, Form, FormWrapper, ToasterWrapper } from '@styles';
import { toast } from '@utils/ToastService';

export const Settings = () => {
  const [options, setOptions] = useState({
    toastType: 'success',
    toastTitle: '',
    toastDescription: '',
    duration: '5000',
    position: 'left',
    gap: '20',
    animationStatus: 'xSlide',
  });

  const handleChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toast.generateToast(options);
    setOptions({
      ...options,
      toastTitle: '',
      toastDescription: '',
    });
  };

  return (
    <>
      <ToasterWrapper>
        <img alt="toaster" src={toaster} />
      </ToasterWrapper>
      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <ToastType handleChange={handleChange} value={options.toastType} />
          <ToastTitle handleChange={handleChange} value={options.toastTitle} />
          <ToastDescription
            handleChange={handleChange}
            value={options.toastDescription}
          />
          <ToastDuration handleChange={handleChange} />
          <ToastPosition handleChange={handleChange} />
          <ToastGap handleChange={handleChange} />
          <ToastAnimation handleChange={handleChange} />
          <ButtonSubmit>Add Toast</ButtonSubmit>
        </Form>
      </FormWrapper>
    </>
  );
};

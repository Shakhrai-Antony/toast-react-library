import styled from 'styled-components';

import { baseTheme } from '/src/theme';

export const ToasterWrapper = styled.div`
  position: absolute;
  top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  img {
    width: ${({ theme }) => (theme.width = 200)}px;
    height: ${({ theme }) => (theme.height = 200)}px;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: ${baseTheme.spaces[9]}px;
`;
export const Form = styled.form`
  width: ${({ theme }) => (theme.width = 400)}px;
  text-align: center;
`;
export const ButtonSubmit = styled.button`
  margin-top: ${baseTheme.spaces[4]}px;
  padding: ${baseTheme.spaces[3]}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: transparent;
  border-radius: ${({ theme }) => (theme.sizes.borderRadius = 10)}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

import styled, { keyframes } from 'styled-components';

import { baseTheme } from '/src/theme';

export const slide = {
  leftSlide: keyframes`
        from { transform: translateX(-75%) }
        to { transform: translateX(0) }
    `,
  topSlide: keyframes`
        from {transform: translateY(-75%)};
        to {transform: translateY(0)};
    `,
  leftSlideExit: keyframes`
        from {transform: translateX(0)};
        to {transform: translateX(-130%)};
    `,
  topSlideExit: keyframes`
        from {transform: translateY(0)};
        to {transform: translateY(-130%)};
    `,
};

export const ToastWrapper = styled.div`
  z-index: 3;
  width: ${({ theme }) => (theme.width = 400)}px;
  max-width: ${({ theme }) => (theme.width = 400)}px;
  background-color: ${({ theme, type }) =>
    type === 'success' || type[0] === 'success'
      ? theme.colors.forestGreen
      : type === 'warning' || type[0] === 'warning'
      ? theme.colors.tomato
      : theme.colors.fireBrick};
  margin-top: ${({ gap }) => (gap === '20' ? '20px' : '40px')};
  position: relative;
  left: ${({ position }) =>
    position === 'left' || position[0] === 'left' ? '5%' : '70%'};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  cursor: grab;
  word-wrap: break-word;
  animation-name: ${({ animation, animationDirection }) =>
    (animation === 'xSlide' || animation[0] === 'xSlide') && animationDirection
      ? slide.leftSlide
      : (animation === 'ySlide' || animation[0] === 'ySlide') &&
        animationDirection
      ? slide.topSlide
      : (animation === 'xSlide' || animation[0] === 'xSlide') &&
        !animationDirection
      ? slide.leftSlideExit
      : slide.topSlideExit};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
`;

export const Toast = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #fff;
  span {
    cursor: pointer;
    padding: ${baseTheme.spaces[2]}px;
    position: absolute;
    top: 3px;
    right: 10px;
  }
  span:hover {
    transform: scale(1.1);
  }
`;
export const ToastType = styled.p`
  margin-top: ${baseTheme.spaces[2]}px;
  text-align: center;
  width: 100%;
`;

export const ToastTitle = styled.p`
  margin-top: ${baseTheme.spaces[2]}px;
  text-align: center;
  width: 100%;
`;
export const ToastDescription = styled.p`
  margin-top: ${baseTheme.spaces[6]}px;
  margin-bottom: ${baseTheme.spaces[6]}px;
  padding-bottom: ${baseTheme.spaces[7]}px;
  padding-top: ${baseTheme.spaces[5]}px;
  text-align: center;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.colors.defaultWhite};
`;

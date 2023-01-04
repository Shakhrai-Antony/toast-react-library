import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import {
  Toast,
  ToastDescription,
  ToastTitle,
  ToastType,
  ToastWrapper,
} from './styles';

const Toasts = (props) => {
  const {
    duration,
    id,
    removeToast,
    toastDescription,
    toastTitle,
    toastType,
    position,
    gap,
    animationStatus,
  } = props;

  const [animationDirection, setAnimationDirection] = useState(true);

  useEffect(() => {
    const autoClose = (id) => {
      setTimeout(() => {
        setAnimationDirection(false);
      }, duration - 800);
      setTimeout(() => {
        removeToast(id);
        setAnimationDirection(true);
      }, duration);
    };
    autoClose(id);
    return () => {
      clearTimeout(duration);
    };
  }, []);

  const handleDelete = (id) => () => {
    setAnimationDirection(false);
    setTimeout(() => {
      removeToast(id);
      setAnimationDirection(true);
    }, 800);
  };

  return (
    <ToastWrapper
      id={'toastWrapper'}
      draggable={true}
      onDragEnd={handleDelete(id)}
      position={position}
      gap={gap}
      type={toastType}
      animation={animationStatus}
      animationDirection={animationDirection}
    >
      <Toast>
        <ToastType>{toastType}</ToastType>
        <span onClick={handleDelete(id)}>X</span>
      </Toast>
      <ToastTitle>{toastTitle}</ToastTitle>
      <ToastDescription>{toastDescription}</ToastDescription>
    </ToastWrapper>
  );
};

Toasts.propTypes = {
  duration: PropTypes.string,
  id: PropTypes.string,
  removeToast: PropTypes.func,
  toastDescription: PropTypes.string,
  toastTitle: PropTypes.string,
  toastType: PropTypes.string,
  position: PropTypes.string,
  gap: PropTypes.string,
  animationStatus: PropTypes.string,
};

export default React.memo(Toasts);

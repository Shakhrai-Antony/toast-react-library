import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { ToastWrapper } from '@styles';

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

  const handleClose = (id) => {
    setTimeout(() => {
      setAnimationDirection(false);
    }, duration - 800);
    setTimeout(() => {
      removeToast(id);
      setAnimationDirection(true);
    }, duration);
  };

  useEffect(() => {
    handleClose(id);
  }, []);

  const handleDragDelete = (id) => () => {
    setAnimationDirection(false);
    setTimeout(() => {
      removeToast(id);
      setAnimationDirection(true);
    }, 800);
  };

  const handleOnClickDelete = (id) => () => {
    setAnimationDirection(false);
    setTimeout(() => {
      removeToast(id);
      setAnimationDirection(true);
    }, 800);
  };

  return (
    <ToastWrapper
      draggable={true}
      onDragEnd={handleDragDelete(id)}
      position={position}
      gap={gap}
      type={toastType}
      animation={animationStatus}
      animationDirection={animationDirection}
    >
      <div>
        <p>{toastType}</p>
        <span onClick={handleOnClickDelete(id)}>X</span>
      </div>
      <p>{toastTitle}</p>
      <p>{toastDescription}</p>
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

export default Toasts;

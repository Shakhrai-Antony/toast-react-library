import { selectOptions } from '@constants';
import PropTypes from 'prop-types';
import React from 'react';

import {
  DescriptionWrapper,
  TitleWrapper,
  ToastAnimationWrapper,
  ToastDurationWrapper,
  ToastGapWrapper,
  ToastPositionWrapper,
  ToastSelect,
} from './styles';

export const ToastType = React.memo(({ handleChange, value }) => {
  return (
    <ToastSelect
      value={value}
      name="toastType"
      onChange={handleChange}
      id={'toastType'}
    >
      {selectOptions.map(({ value, description, id }) => (
        <option key={id} value={value}>
          {description}
        </option>
      ))}
    </ToastSelect>
  );
});
ToastType.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export const ToastTitle = React.memo(({ handleChange, value }) => {
  return (
    <TitleWrapper>
      <input
        type="text"
        name="toastTitle"
        value={value}
        placeholder="Toast Title"
        id={'toastTitle'}
        onChange={handleChange}
      />
    </TitleWrapper>
  );
});
ToastTitle.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export const ToastDescription = React.memo(({ handleChange, value }) => {
  return (
    <DescriptionWrapper>
      <input
        name="toastDescription"
        type="text"
        value={value}
        placeholder="Toast Description"
        id={'toastDescription'}
        onChange={handleChange}
      />
    </DescriptionWrapper>
  );
});
ToastDescription.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export const ToastDuration = React.memo(({ handleChange }) => {
  return (
    <ToastDurationWrapper>
      <input
        type="radio"
        name="duration"
        value="5000"
        id="5000"
        onChange={handleChange}
        defaultChecked="5000"
      />
      <label htmlFor="5000">5 seconds</label>
      <input
        type="radio"
        name="duration"
        value="10000"
        id="10000"
        onChange={handleChange}
      />
      <label htmlFor="10000">10 seconds</label>
      <input
        type="radio"
        name="duration"
        value="15000"
        id="15000"
        onChange={handleChange}
      />
      <label htmlFor="15000">15 seconds</label>
    </ToastDurationWrapper>
  );
});

ToastDuration.propTypes = {
  handleChange: PropTypes.func,
};

export const ToastPosition = React.memo(({ handleChange }) => {
  return (
    <ToastPositionWrapper>
      <input
        type="radio"
        name="position"
        value="left"
        id="left"
        defaultChecked="left"
        onChange={handleChange}
      />
      <label htmlFor="left">left</label>
      <input
        type="radio"
        name="position"
        value="right"
        id="right"
        onChange={handleChange}
      />
      <label htmlFor="right">right</label>
    </ToastPositionWrapper>
  );
});

ToastPosition.propTypes = {
  handleChange: PropTypes.func,
};

export const ToastGap = React.memo(({ handleChange }) => {
  return (
    <ToastGapWrapper>
      <input
        type="radio"
        name="gap"
        value="20"
        id="20"
        defaultChecked="20"
        onChange={handleChange}
      />
      <label htmlFor="20">gap: 20px</label>
      <input
        type="radio"
        name="gap"
        value="40"
        id="40"
        onChange={handleChange}
      />
      <label htmlFor="40">gap: 40px</label>
    </ToastGapWrapper>
  );
});

ToastGap.propTypes = {
  handleChange: PropTypes.func,
};

export const ToastAnimation = React.memo(({ handleChange }) => {
  return (
    <ToastAnimationWrapper>
      <input
        type="radio"
        name="animationStatus"
        id="xSlide"
        value="xSlide"
        defaultChecked="xSlide"
        onChange={handleChange}
      />
      <label htmlFor="xSlide">X slide</label>
      <input
        type="radio"
        name="animationStatus"
        id="ySlide"
        value="ySlide"
        onChange={handleChange}
      />
      <label htmlFor="ySlide">Y slide</label>
    </ToastAnimationWrapper>
  );
});
ToastAnimation.propTypes = {
  handleChange: PropTypes.func,
};

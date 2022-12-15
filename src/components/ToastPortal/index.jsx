import PropTypes from 'prop-types';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

import Toasts from '../Toasts';
import { uuid } from '@constants';
import { toast } from '@utils/ToastService';

const portalId = `toast-portal-${uuid()}`;
// eslint-disable-next-line no-empty-pattern
export const ToastsPortal = forwardRef(({}, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [, forceUpdate] = useReducer(() => ({}), {});

  useImperativeHandle(ref, () => ({
    refresh: forceUpdate,
  }));

  const toasts = toast.getAllToasts();

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;
    const element = document.getElementsByTagName('body')[0];
    element.prepend(div);
    setLoaded(true);

    return () => element.removeChild(div);
  }, [portalId]);

  return loaded ? (
    ReactDOM.createPortal(
      <div>
        {toasts.map((props) => (
          <Toasts key={props.id} {...props} />
        ))}
      </div>,
      document.getElementById(portalId),
    )
  ) : (
    <></>
  );
});
ToastsPortal.propTypes = {
  id: PropTypes.string,
};

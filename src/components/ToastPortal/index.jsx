import Toasts from '@components/Toasts';
import { uuid } from '@constants';
import { toast } from '@utils/ToastService';
import PropTypes from 'prop-types';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

const portalId = `toast-portal-${uuid()}`;
export const ToastsPortal = forwardRef(({}, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [, update] = useState(false);

  useImperativeHandle(ref, () => ({
    refresh: () => update((prev) => !prev),
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
      <div id={'toastPortal'}>
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

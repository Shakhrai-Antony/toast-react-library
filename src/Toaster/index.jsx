import React, { useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '../theme';
import ErrorBoundary from '@components/ErrorBoundary';
import { ToastsPortal } from '@components/ToastPortal';
import { toast } from '@utils/ToastService';
import { ToastSettings } from '@components/ToastSettings';

export const Toaster = () => {
  const toastRef = useRef();

  useLayoutEffect(() => {
    toast.init(toastRef.current);
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <ErrorBoundary>
        <ToastSettings />
        <ToastsPortal ref={toastRef} />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

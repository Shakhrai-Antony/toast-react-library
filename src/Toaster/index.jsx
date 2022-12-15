import React, { useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '../theme';
import ErrorBoundary from '@components/ErrorBoundary';
import { ToastsPortal } from '@components/ToastPortal';
import { Settings } from '@components/ToastSettings';
import { toast } from '@utils/ToastService';

export const Toaster = () => {
  const toastRef = useRef();

  useLayoutEffect(() => {
    toast.init(toastRef.current);
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <ErrorBoundary>
        <Settings />
        <ToastsPortal ref={toastRef} />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

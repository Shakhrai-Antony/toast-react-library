import ErrorBoundary from '@components/ErrorBoundary';
import { ToastsPortal } from '@components/ToastPortal';
import { ToastSettings } from '@components/ToastSettings';
import { toast } from '@utils/ToastService';
import React, { useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../globalStyle';
import { baseTheme } from '../theme';

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
      <GlobalStyle />
    </ThemeProvider>
  );
};

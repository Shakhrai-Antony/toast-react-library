import { uuid } from '@constants';

class ToastService {
  constructor() {
    this.toasts = [];
    this.toastRef = { refresh: () => {} };
  }
  init = (ref) => {
    this.toastRef = ref;
  };

  getAllToasts = () => {
    return this.toasts;
  };

  addToast = (toast) => {
    if (this.toasts.length < 3) {
      this.toasts.push(toast);
      this.toastRef?.refresh();
    }
  };

  removeToast = (toastId) => {
    this.toasts = this.toasts.filter((toast) => toast.id !== toastId);
    this.toastRef?.refresh();
  };

  generateToast = (toastOptions) => {
    const toast = {
      id: uuid(),
      ...toastOptions,
      removeToast: (toastId) => this.removeToast(toastId),
    };
    this.addToast(toast);
    return toast;
  };
}

export const toast = new ToastService();

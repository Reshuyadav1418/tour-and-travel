import React, { createContext, useContext, useState, useCallback } from 'react';
import './toast.css';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success', // 'success', 'error', 'info', 'warning'
    title: ''
  });

  const showToast = useCallback((message, type = 'success', title = '') => {
    let defaultTitle = 'Notification';
    if (type === 'success') defaultTitle = 'Success!';
    if (type === 'error') defaultTitle = 'Oops! Error';
    if (type === 'warning') defaultTitle = 'Warning';
    if (type === 'info') defaultTitle = 'Information';

    setToast({
      show: true,
      message,
      type,
      title: title || defaultTitle
    });

    // Auto dismiss after 3.5 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3500);
  }, []);

  const hideToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast.show && (
        <div className={`colorful-toast-container colorful-toast-${toast.type}`}>
          <div className="colorful-toast-card">
            <div className="colorful-toast-icon">
              {toast.type === 'success' && <i className="ri-checkbox-circle-fill"></i>}
              {toast.type === 'error' && <i className="ri-close-circle-fill"></i>}
              {toast.type === 'warning' && <i className="ri-alert-fill"></i>}
              {toast.type === 'info' && <i className="ri-information-fill"></i>}
            </div>
            <div className="colorful-toast-content">
              <h5 className="colorful-toast-title">{toast.title}</h5>
              <p className="colorful-toast-message">{toast.message}</p>
            </div>
            <button className="colorful-toast-close" onClick={hideToast}>
              <i className="ri-close-line"></i>
            </button>
            <div className="colorful-toast-progress"></div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

import { useEffect, useCallback } from 'react';
import { baseUrl } from '../utils/baseUrl';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, config: any) => void;
          prompt: () => void;
        };
      };
    };
  }
}

interface GoogleCredentialResponse {
  credential: string;
  select_by: string;
}

interface UseGoogleAuthProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export const useGoogleAuth = ({ onSuccess, onError }: UseGoogleAuthProps) => {
  const handleCredentialResponse = useCallback(async (response: GoogleCredentialResponse) => {
    try {
      const result = await fetch(`${baseUrl}/oauth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          credential: response.credential,
        }),
      });

      const data = await result.json();

      if (result.ok) {
        onSuccess();
      } else {
        onError(data.message || 'Google login failed');
      }
    } catch (error) {
      onError('Network error. Please try again.');
    }
  }, [onSuccess, onError]);

  const initializeGoogleAuth = useCallback(() => {
    if (window.google?.accounts?.id) {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '635785475426-hrd1u9rj4ua52flnkta6gcp106pdamg0.apps.googleusercontent.com';
      
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });
    }
  }, [handleCredentialResponse]);

  const renderGoogleButton = useCallback((element: HTMLElement) => {
    if (window.google?.accounts?.id && element) {
      window.google.accounts.id.renderButton(element, {
        theme: 'outline',
        size: 'large',
        width: '100%',
        text: 'continue_with',
        shape: 'rectangular',
      });
    }
  }, []);

  useEffect(() => {
    // Check if Google script is already loaded
    if (window.google?.accounts?.id) {
      initializeGoogleAuth();
    } else {
      // Wait for Google script to load
      const checkGoogleLoaded = () => {
        if (window.google?.accounts?.id) {
          initializeGoogleAuth();
        } else {
          setTimeout(checkGoogleLoaded, 100);
        }
      };
      checkGoogleLoaded();
    }
  }, [initializeGoogleAuth]);

  return { renderGoogleButton };
};

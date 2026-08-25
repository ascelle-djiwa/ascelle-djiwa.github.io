import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const submitForm = useCallback(async (formData) => {
    setIsSubmitting(true);
    setStatus(null);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', text: 'Message envoyé avec succès !' });
      return true;
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', text: 'Erreur lors de l\'envoi. Veuillez réessayer.' });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { isSubmitting, status, submitForm };
};
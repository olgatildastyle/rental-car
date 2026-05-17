'use client';

import { useState } from 'react';

import { createBookingRequest } from '@/lib/api';

import css from './RentalForm.module.css';

interface RentalFormProps {
  carId: string;
}

export default function RentalForm({ carId }: RentalFormProps) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setMessage('');

    try {
      const comment = String(formData.get('comment') || '').trim();

      await createBookingRequest(carId, {
        name: String(formData.get('name')),
        email: String(formData.get('email')),
        ...(comment && { comment }),
      });

      setMessage('Booking request sent successfully!');

      form.reset();
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your car now</h2>

      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.fields}>
        <input
          className={css.input}
          name="name"
          placeholder="Name*"
          autoComplete="name"
          required
        />

        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
          autoComplete="name"
          required
        />

        <textarea
          className={css.textarea}
          name="comment"
          placeholder="Comment"
        />
      </div>

      <button className={css.button} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>

      {message && <p className={css.message}>{message}</p>}
    </form>
  );
}

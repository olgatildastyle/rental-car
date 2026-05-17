'use client';

import css from './error.module.css';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Something went wrong</h2>

      <p className={css.text}>
        We couldn&apos;t load the requested information.
      </p>

      <button className={css.button} type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

import Link from 'next/link';

import css from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.code}>404</h1>

      <h2 className={css.title}>Page not found</h2>

      <p className={css.text}>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link className={css.link} href="/">
        Back to home
      </Link>
    </div>
  );
}

import Link from 'next/link';

import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero} aria-label="Hero section">
      <div className={`${css.content} container`}>
        <h1 className={css.title}>Find your perfect rental car</h1>

        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>

        <Link className={css.link} href="/catalog">
          View Catalog
        </Link>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <Link className={css.logo} href="/" aria-label="RentalCar home">
          <Image
            src="/logo.svg"
            alt="RentalCar logo"
            width={104}
            height={16}
            priority
          />
        </Link>

        <nav className={css.nav} aria-label="Main navigation">
          <Link
            className={clsx(css.link, {
              [css.active]: pathname === '/',
            })}
            href="/"
          >
            Home
          </Link>

          <Link
            className={clsx(css.link, {
              [css.active]: pathname === '/catalog',
            })}
            href="/catalog"
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}

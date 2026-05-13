import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="RentalCar logo"
            width={104}
            height={16}
            priority
          />
        </Link>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

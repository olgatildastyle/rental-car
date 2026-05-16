import Image from 'next/image';
import Link from 'next/link';

import { type Car } from '@/types/car';

import css from './CarCard.module.css';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const location = `${car.location.city}, ${car.location.country}`;

  const mileage = car.mileage.toLocaleString('en-US').replace(',', ' ');

  return (
    <article className={css.card}>
      <Image
        className={css.image}
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        width={276}
        height={268}
      />

      <div className={css.top}>
        <h2 className={css.title}>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h2>

        <p className={css.price}>${car.rentalPrice}</p>
      </div>

      <p className={css.info}>
        {location} | {car.rentalCompany} | {car.type}
      </p>

      <p className={css.info}>Mileage: {mileage} km</p>

      <Link className={css.link} href={`/catalog/${car.id}`} target="_blank">
        Read more
      </Link>
    </article>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import { type Car } from '@/types/car';

import css from './CarCard.module.css';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const mileage = car.mileage.toLocaleString('uk-UA');

  return (
    <article className={css.card}>
      <Image
        className={css.image}
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        width={276}
        height={268}
        loading="eager"
      />

      <div className={css.top}>
        <h2 className={css.title}>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h2>

        <p className={css.price}>${car.rentalPrice}</p>
      </div>

      <div className={css.info}>
        <p>
          <span>{car.location.city}</span>
          <span>{car.location.country}</span>
          <span>{car.rentalCompany}</span>
        </p>

        <p>
          <span>{car.type}</span>
          <span>{mileage} km</span>
        </p>
      </div>

      <Link className={css.link} href={`/catalog/${car.id}`} target="_blank">
        Read more
      </Link>
    </article>
  );
}

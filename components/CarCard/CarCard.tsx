'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { type Car } from '@/types/car';

import css from './CarCard.module.css';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window === 'undefined') return false;

    const savedFavorites = JSON.parse(
      localStorage.getItem('favoriteCars') || '[]'
    ) as string[];

    return savedFavorites.includes(car.id);
  });

  const mileage = car.mileage.toLocaleString('uk-UA');

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favoriteCars') || '[]'
    ) as string[];

    const updatedFavorites = savedFavorites.includes(car.id)
      ? savedFavorites.filter(id => id !== car.id)
      : [...savedFavorites, car.id];

    localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites));
    setIsFavorite(updatedFavorites.includes(car.id));
  };

  return (
    <article className={css.card}>
      <button
        className={`${css.favorite} ${isFavorite ? css.favoriteActive : ''}`}
        type="button"
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg width="16" height="16">
          <use
            href={
              isFavorite
                ? '/icons/sprite.svg#icon-heart-active'
                : '/icons/sprite.svg#icon-heart-default'
            }
          />
        </svg>
      </button>

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

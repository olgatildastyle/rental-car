import Image from 'next/image';

import { type Car } from '@/types/car';
import RentalForm from '@/components/RentalForm/RentalForm';

import css from './CarDetails.module.css';

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  const features = Array.isArray(car.features) ? car.features : [];

  const location = `${car.location.city}, ${car.location.country}`;
  const mileage = car.mileage.toLocaleString('en-US').replace(',', ' ');

  return (
    <section className={css.section}>
      <div className={`${css.container} container`}>
        <div className={css.left}>
          <Image
            className={css.image}
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            width={640}
            height={512}
            priority
          />

          <RentalForm carId={car.id} />
        </div>

        <div className={css.right}>
          <h1 className={css.title}>
            {car.brand} {car.model}, {car.year}
            <span className={css.id}>Id: {car.id.slice(0, 4)}</span>
          </h1>

          <div className={css.meta}>
            <div className={css.metaItem}>
              <svg className={css.icon} width="16" height="16">
                <use href="/icons/sprite.svg#icon-location" />
              </svg>

              <p>{location}</p>
            </div>

            <p>Mileage: {mileage} km</p>
          </div>

          <p className={css.price}>${car.rentalPrice}</p>

          <p className={css.description}>{car.description}</p>

          <div className={css.block}>
            <h2 className={css.subtitle}>Rental Conditions:</h2>

            <ul className={css.list}>
              {car.rentalConditions.map(condition => (
                <li className={css.listItem} key={condition}>
                  <svg className={css.icon} width="16" height="16">
                    <use href="/icons/sprite.svg#icon-check-circle" />
                  </svg>

                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.block}>
            <h2 className={css.subtitle}>Car Specifications:</h2>

            <ul className={css.list}>
              <li className={css.listItem}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/icons/sprite.svg#icon-car" />
                </svg>
                Year: {car.year}
              </li>

              <li className={css.listItem}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/icons/sprite.svg#icon-gear" />
                </svg>
                Type: {car.type}
              </li>

              <li className={css.listItem}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/icons/sprite.svg#icon-fuel-pump" />
                </svg>
                Fuel Consumption: {car.fuelConsumption}
              </li>

              <li className={css.listItem}>
                <svg className={css.icon} width="16" height="16">
                  <use href="/icons/sprite.svg#icon-car" />
                </svg>
                Engine Size: {car.engine}
              </li>
            </ul>
          </div>

          <div className={css.block}>
            <h2 className={css.subtitle}>Accessories and functionalities:</h2>

            <ul className={css.list}>
              {features.map(item => (
                <li className={css.listItem} key={item}>
                  <svg className={css.icon} width="16" height="16">
                    <use href="/icons/sprite.svg#icon-check-circle" />
                  </svg>

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

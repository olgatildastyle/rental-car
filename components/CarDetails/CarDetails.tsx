import Image from 'next/image';

import { type Car } from '@/types/car';
import RentalForm from '@/components/RentalForm/RentalForm';

import css from './CarDetails.module.css';

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
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
          </h1>

          <div className={css.meta}>
            <p>{car.address}</p>
            <p>Mileage: {car.mileage} km</p>
          </div>

          <p className={css.id}>Id: {car.id}</p>

          <p className={css.price}>{car.rentalPrice}</p>

          <p className={css.description}>{car.description}</p>

          <div className={css.block}>
            <h2 className={css.subtitle}>Rental Conditions:</h2>

            <ul className={css.list}>
              {car.rentalConditions.map(condition => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </div>

          <div className={css.block}>
            <h2 className={css.subtitle}>Car Specifications:</h2>

            <ul className={css.list}>
              <li>Year: {car.year}</li>
              <li>Type: {car.type}</li>
              <li>Fuel Consumption: {car.fuelConsumption}</li>
              <li>Engine Size: {car.engineSize}</li>
            </ul>
          </div>

          <div className={css.block}>
            <h2 className={css.subtitle}>Accessories and functionalities:</h2>

            <ul className={css.list}>
              {[...car.accessories, ...car.functionalities].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchCarBrands } from '@/lib/api';

import css from './Filters.module.css';

export interface FilterValues {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

interface FiltersProps {
  onSubmit: (filters: FilterValues) => void;
}

const prices = ['30', '40', '50', '60', '70', '80'];

export default function Filters({ onSubmit }: FiltersProps) {
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchCarBrands,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onSubmit({
      brand: String(formData.get('brand') || ''),
      rentalPrice: String(formData.get('rentalPrice') || ''),
      minMileage: String(formData.get('minMileage') || ''),
      maxMileage: String(formData.get('maxMileage') || ''),
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.field}>
        <span className={css.label}>Car brand</span>

        <select className={css.select} name="brand" defaultValue="">
          <option value="">Choose a brand</option>

          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      <label className={css.field}>
        <span className={css.label}>Price/ 1 hour</span>

        <select className={css.priceSelect} name="rentalPrice" defaultValue="">
          <option value="">Choose a price</option>

          {prices.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </label>

      <label className={css.field}>
        <span className={css.label}>Сar mileage / km</span>

        <div className={css.mileageBox}>
          <input
            className={css.inputFrom}
            name="minMileage"
            type="text"
            placeholder="From"
          />
          <input
            className={css.inputTo}
            name="maxMileage"
            type="text"
            placeholder="To"
          />
        </div>
      </label>

      <button className={css.button} type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
}

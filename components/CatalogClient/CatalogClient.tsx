'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchCars } from '@/lib/api';
import CarList from '@/components/CarList/CarList';
import Filters, { type FilterValues } from '@/components/Filters/Filters';

import css from './CatalogClient.module.css';

export default function CatalogClient() {
  const [filters, setFilters] = useState<FilterValues>({
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  });

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', filters],
    queryFn: ({ pageParam }) =>
      fetchCars({
        page: pageParam,
        perPage: 12,
        brand: filters.brand || undefined,
        price: filters.rentalPrice || undefined,
        minMileage: filters.minMileage ? Number(filters.minMileage) : undefined,
        maxMileage: filters.maxMileage ? Number(filters.maxMileage) : undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const nextPage = lastPage.page + 1;

      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
  });

  const cars = data?.pages.flatMap(page => page.cars) ?? [];

  if (isLoading) return <p>Loading cars...</p>;
  if (isError) return <p>Failed to load cars.</p>;

  return (
    <section className={css.section}>
      <div className="container">
        <Filters onSubmit={setFilters} />

        <div className={css.listWrap}>
          <CarList cars={cars} />
        </div>

        {hasNextPage && (
          <button
            className={css.loadMore}
            type="button"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </button>
        )}
      </div>
    </section>
  );
}

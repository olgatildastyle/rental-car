'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchCars } from '@/lib/api';
import CarList from '@/components/CarList/CarList';

import css from './CatalogClient.module.css';

export default function CatalogClient() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars'],
    queryFn: ({ pageParam }) =>
      fetchCars({
        page: pageParam,
        limit: 12,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const loadedCars = allPages.reduce(
        (total, page) => total + page.cars.length,
        0
      );

      return loadedCars < lastPage.totalCars ? allPages.length + 1 : undefined;
    },
  });

  const cars = data?.pages.flatMap(page => page.cars) ?? [];

  if (isLoading) return <p>Loading cars...</p>;
  if (isError) return <p>Failed to load cars.</p>;

  return (
    <section className={css.section}>
      <div className="container">
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

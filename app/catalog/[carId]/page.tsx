import type { Metadata } from 'next';

import { fetchCarById } from '@/lib/api';
import CarDetails from '@/components/CarDetails/CarDetails';

interface CarDetailsPageProps {
  params: Promise<{ carId: string }>;
}

export const metadata: Metadata = {
  title: 'Car Details | RentalCar',
  description:
    'View detailed information about the selected rental car and submit a booking request.',
};

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { carId } = await params;
  const car = await fetchCarById(carId);
  return (
    <main>
      {' '}
      <CarDetails car={car} />{' '}
    </main>
  );
}

import { fetchCarById } from '@/lib/api';

import CarDetails from '@/components/CarDetails/CarDetails';

interface CarDetailsPageProps {
  params: Promise<{
    carId: string;
  }>;
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { carId } = await params;

  const car = await fetchCarById(carId);

  return (
    <main>
      <CarDetails car={car} />
    </main>
  );
}

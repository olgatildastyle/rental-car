import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';

export const metadata: Metadata = {
  title: 'RentalCar | Reliable Car Rental',
  description: 'Find reliable and budget-friendly rental cars for any journey.',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}

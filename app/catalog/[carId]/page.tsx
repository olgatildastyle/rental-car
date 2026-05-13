interface CarDetailsPageProps {
  params: Promise<{
    carId: string;
  }>;
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { carId } = await params;

  return (
    <main>
      <h1>Car Details Page</h1>
      <p>Car ID: {carId}</p>
    </main>
  );
}

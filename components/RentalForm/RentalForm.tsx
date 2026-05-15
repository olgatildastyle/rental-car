interface RentalFormProps {
  carId: string;
}

export default function RentalForm({ carId }: RentalFormProps) {
  return (
    <form>
      <h2>Book your car now</h2>
      <p>Stay connected! We are always ready to help you.</p>

      <input type="text" name="name" placeholder="Name*" />
      <input type="email" name="email" placeholder="Email*" />
      <input type="text" name="bookingDate" placeholder="Booking date" />
      <textarea name="comment" placeholder="Comment" />

      <button type="submit">Send</button>

      <input type="hidden" name="carId" value={carId} />
    </form>
  );
}

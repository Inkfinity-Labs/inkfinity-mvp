import { PastAppointments } from "@/components/appointments/past-appointments";

// TODO: Replace with actual data fetching from your backend/blockchain
const mockAppointments = [
  {
    id: "1",
    artistId: "artist1",
    artistName: "John Doe",
    date: new Date("2024-03-15"),
    status: "completed" as const,
    hasReview: false,
  },
  {
    id: "2",
    artistId: "artist2",
    artistName: "Jane Smith",
    date: new Date("2024-03-10"),
    status: "completed" as const,
    hasReview: true,
  },
];

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Past Appointments</h1>
      <PastAppointments appointments={mockAppointments} />
    </div>
  );
}

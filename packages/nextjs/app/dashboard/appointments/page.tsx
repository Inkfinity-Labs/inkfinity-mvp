"use client";

import { useEffect, useState } from "react";
import { PastAppointments } from "@/components/appointments/past-appointments";
import { appointmentSchema, type Appointment } from "@/lib/schemas/appointment";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
    review: {
      rating: 5,
      comment: "Great experience!",
      date: new Date("2024-03-11"),
    },
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Validate the mock data
        const validatedAppointments = mockAppointments.map((appointment) => {
          try {
            return appointmentSchema.parse(appointment);
          } catch (err) {
            console.error("Invalid appointment data:", err);
            throw new Error("Invalid appointment data received from server");
          }
        });

        setAppointments(validatedAppointments);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch appointments");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Past Appointments</h1>
      <PastAppointments appointments={appointments} />
    </div>
  );
}

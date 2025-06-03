"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewForm } from "@/components/reviews/review-form";
import { format } from "date-fns";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  rating: number;
  comment: string;
  date: Date;
}

interface Appointment {
  id: string;
  artistId: string;
  artistName: string;
  date: Date;
  status: "completed" | "cancelled";
  hasReview: boolean;
  review?: Review;
}

interface PastAppointmentsProps {
  appointments: Appointment[];
}

export function PastAppointments({ appointments }: PastAppointmentsProps) {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [localAppointments, setLocalAppointments] =
    useState<Appointment[]>(appointments);

  const handleSubmitReview = async (review: {
    rating: number;
    comment: string;
  }) => {
    try {
      // TODO: Implement smart contract call to submit review
      // This will be implemented when the smart contract is ready
      console.log("Submitting review:", {
        appointmentId: selectedAppointment?.id,
        artistId: selectedAppointment?.artistId,
        ...review,
      });

      // Update local state to mark the appointment as reviewed
      if (selectedAppointment) {
        setLocalAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === selectedAppointment.id
              ? {
                  ...appointment,
                  hasReview: true,
                  review: {
                    ...review,
                    date: new Date(),
                  },
                }
              : appointment,
          ),
        );
      }

      // Return to appointments list
      setSelectedAppointment(null);
    } catch (error) {
      console.error("Error submitting review:", error);
      throw error;
    }
  };

  const completedAppointments = localAppointments.filter(
    (appointment) => appointment.status === "completed",
  );

  if (completedAppointments.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">
            No past appointments found.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {selectedAppointment ? (
        <Card>
          <CardHeader>
            <CardTitle>
              Submit Review for {selectedAppointment.artistName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewForm
              appointmentId={selectedAppointment.id}
              artistId={selectedAppointment.artistId}
              onSubmit={handleSubmitReview}
              onCancel={() => setSelectedAppointment(null)}
            />
          </CardContent>
        </Card>
      ) : (
        completedAppointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{appointment.artistName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {format(appointment.date, "PPP")}
                    </p>
                  </div>
                  {!appointment.hasReview && (
                    <Button
                      variant="outline"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      Submit Review
                    </Button>
                  )}
                </div>

                {appointment.hasReview && appointment.review && (
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const rating = appointment.review?.rating ?? 0;
                          return (
                            <StarIcon
                              key={star}
                              className={cn(
                                "h-4 w-4",
                                star <= rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300",
                              )}
                            />
                          );
                        })}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {format(appointment.review.date, "PPP")}
                      </span>
                    </div>
                    <p className="text-sm">{appointment.review.comment}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

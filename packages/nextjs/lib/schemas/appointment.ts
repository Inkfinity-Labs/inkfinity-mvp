import { z } from "zod";

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(1),
  date: z.date(),
});

export const appointmentSchema = z.object({
  id: z.string(),
  artistId: z.string(),
  artistName: z.string(),
  date: z.date(),
  status: z.enum(["completed", "cancelled"]),
  hasReview: z.boolean(),
  review: reviewSchema.optional(),
});

export type Appointment = z.infer<typeof appointmentSchema>;
export type Review = z.infer<typeof reviewSchema>; 
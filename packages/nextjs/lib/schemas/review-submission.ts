import { z } from "zod";

export const reviewSubmissionSchema = z.object({
  appointmentId: z.string(),
  artistId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().max(500),
});

export type ReviewSubmissionParams = z.infer<typeof reviewSubmissionSchema>; 
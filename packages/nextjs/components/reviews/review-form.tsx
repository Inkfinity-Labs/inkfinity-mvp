"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { reviewSubmissionSchema, type ReviewSubmissionParams } from "@/lib/schemas/review-submission";

interface ReviewFormProps {
  appointmentId: string;
  artistId: string;
  onSubmit: (review: { rating: number; comment: string }) => Promise<void>;
  onCancel: () => void;
}

export function ReviewForm({
  appointmentId,
  artistId,
  onSubmit,
  onCancel,
}: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Validate inputs using Zod schema
      const reviewData = reviewSubmissionSchema.parse({
        appointmentId,
        artistId,
        rating,
        comment,
      });

      setIsSubmitting(true);
      await onSubmit({ rating: reviewData.rating, comment: reviewData.comment });
      toast.success("Review submitted successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError("Failed to submit review. Please try again.");
        toast.error("Failed to submit review. Please try again.");
      }
      console.error("Review submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={`Rate ${star} out of 5 stars`}
              aria-pressed={star <= rating}
            >
              <StarIcon
                className={cn(
                  "h-6 w-6 transition-colors",
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300",
                )}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="comment" className="text-sm font-medium">
            Your Review
          </label>
          <span className="text-xs text-muted-foreground">
            {comment.length}/500 characters
          </span>
        </div>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this artist..."
          className="min-h-[100px]"
          maxLength={500}
        />
      </div>

      {error && (
        <div className="text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </div>
    </form>
  );
}

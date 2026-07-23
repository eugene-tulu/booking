ALTER TYPE "booking_status" ADD VALUE 'unconfirmed';--> statement-breakpoint
ALTER TYPE "booking_status" ADD VALUE 'confirmed';--> statement-breakpoint
ALTER TYPE "booking_status" ADD VALUE 'cancelled';--> statement-breakpoint
ALTER TYPE "booking_status" ADD VALUE 'rejected';--> statement-breakpoint
ALTER TYPE "operating_status" ADD VALUE 'open';--> statement-breakpoint
ALTER TYPE "operating_status" ADD VALUE 'closed';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'physiotherapy consultation';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'home physiotherapy';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'hydrotherapy';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'post-operative rehabilitation';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'back or neck pain';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'sports injury rehabilitation';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'neurological rehabilitation';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'geriatric physiotherapy';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'corporate wellness';--> statement-breakpoint
ALTER TYPE "service_type" ADD VALUE 'other';--> statement-breakpoint
ALTER TYPE "user_role" ADD VALUE 'client';--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "type" SET DEFAULT 'physiotherapy consultation';--> statement-breakpoint
ALTER TABLE "bookings" ALTER COLUMN "status" SET DEFAULT 'unconfirmed';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "monday_status" SET DEFAULT 'open';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "tuesday_status" SET DEFAULT 'open';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "wednesday_status" SET DEFAULT 'open';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "thursday_status" SET DEFAULT 'open';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "friday_status" SET DEFAULT 'open';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "saturday_status" SET DEFAULT 'open';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "sunday_status" SET DEFAULT 'closed';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "monday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "tuesday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "wednesday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "thursday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "friday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "saturday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "sunday_opening" SET DEFAULT '08:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "saturday_closing" SET DEFAULT '13:00';--> statement-breakpoint
ALTER TABLE "business_hours" ALTER COLUMN "sunday_closing" SET DEFAULT '13:00';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'client';
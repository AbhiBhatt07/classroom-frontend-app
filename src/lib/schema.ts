import * as z from "zod";

export const facultySchema = z.object({
 name: z.string().min(2, "Name must atleast have 2 characters"),
 emails: z.string().email(),
 role: z.enum(["faculty", "admin", "student"]),
 department: z.string(),
 image: z.string().optional(),
 imageCldPubId: z.string().optional(),
});

export const subjectSchema = z.object({
 name: z.string().min(3, "Subject Name must atleast have 3 characters"),
 code: z.string().min(5, "Subject code must atleast have 3 characters"),
 department: z
  .string()
  .min(2, "Subject department must atleast have 3 characters"),
 description: z
  .string()
  .min(2, "description Name must atleast have 3 characters"),
});

export const scheduleSchema = z.object({
 day: z.string().min(1, "Day is required"),
 startTime: z.string().min(1, "Start time is required"),
 endTime: z.string().min(1, "End time is required"),
});

export const classSchema = z.object({
 name: z
  .string()
  .min(2, "Name must be at least 2 characters long")
  .max(50, "Name must be at most 50 characters long"),
 description: z
  .string({required_error: "Description is required"})
  .min(5, "Description must be at least 5 characters long"),
  subjectId: z.coerce.number({
    required_error: "Subject is required",
    invalid_type_error: "Subject is required",
  })
  .min(1, "Subject is required"),
  teacherId: z.string().min(1, "Teacher is required"),
  capacity: z.coerce.number({
    required_error: "Capacity is required",
    invalid_type_error: "Capacity is required",
  })
  .min(1, "Capacity must be at least 1"),
  status: z.enum(["active", "inactive"]),
  bannerUrl: z
  .string({required_error: "Class banner is required"})
  .min(1, "Class banner is required"),
  bannerCldPubId: z
  .string({required_error: "Class banner is required"})
  .min(1, "Banner reference is required"),
  inviteCode: z.string().optional(),
  schedules: z.array(scheduleSchema).optional(),
});

export const enrollmentSchema = z.object({
  classId: z.coerce.number({
    required_error: "Class ID is required",
    invalid_type_error: "Class ID is required",
  })
})

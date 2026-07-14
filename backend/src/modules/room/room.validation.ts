import { z } from "zod";

export const createRoomSchema = z.object({
  name: z.string().min(3),
  language: z.string().min(2),
});
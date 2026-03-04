import {z} from "zod"

export const activitySchema = z.object({
    title: z.string({error: "Title is required"}).min(1, {error: "Title is required"}),
})

export type ActivitySchema = z.infer<typeof activitySchema>;
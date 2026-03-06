import {z} from "zod"

const requiredString = (fieldName: string) => z
        .string({error: `${fieldName} is required`})
        .min(1, {error: `${fieldName} is required`})

export const activitySchema = z.object({
    title: requiredString('Title'),
    description: requiredString('Description'),
    category: requiredString('Category'),
    date: z.instanceof(Date, {message: 'Date is required'}),
    location: z.object({
        venue: requiredString('Venue'),
        city: z.string().optional(),
        latitude: z.number().optional(),
        longitude: z.number().optional(),
    })
})

export type ActivitySchema = z.infer<typeof activitySchema>;
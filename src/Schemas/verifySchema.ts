import {z } from "zod"

export const verfiSchema = z.object({
    code: z.string().length(6, "verfication code must be 6 digit")
})
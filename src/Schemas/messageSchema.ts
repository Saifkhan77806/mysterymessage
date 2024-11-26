import {z } from "zod"

export const messageSchema = z.object({
    content: z.string().min(5, {message: "content must be atleast of 5 character"}).max(300, {message: "content connot be longer than of 300 character"})
})
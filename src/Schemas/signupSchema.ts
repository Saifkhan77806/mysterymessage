import {z} from "zod"


export const userNameValidation = z
    .string()
    .min(2, "username must be aleast 2 character")
    .max(20, "usermname must not be more than  20")
    .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])[^\s]+$/, "username must contain a special character")
    

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: "invalid email address" }),
    password: z.string().min(6, {message: "password must be atleast 6 character"})

})
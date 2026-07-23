import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_dummydummykeyforbuild"

export const resend = new Resend(RESEND_API_KEY)

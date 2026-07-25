import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_dummydummykeyforbuild"

export const resend = new Resend(RESEND_API_KEY)

export const EMAIL_FROM = process.env.RESEND_EMAIL_FROM || "noreply@brianoduorphysiotherapy.com"
export const EMAIL_TO = process.env.RESEND_EMAIL_TO || "bookings@brianoduorphysiotherapy.com"

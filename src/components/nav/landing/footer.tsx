import Link from "next/link"
import { getBusinessHours } from "@/actions/availability"

import { type BusinessHours } from "@/db/schema"
import { DAY_MAPPINGS, DAYS_OF_WEEK } from "@/data/constants"

interface FooterProps {
  address: string
  phone_1: string
  phone_2: string
}

export async function Footer({
  address,
  phone_1,
  phone_2,
}: FooterProps): Promise<JSX.Element> {
  const businessHours = await getBusinessHours()
  const DAYS_OF_WEEK_REARRANGED = [...DAYS_OF_WEEK.slice(1), DAYS_OF_WEEK[0]]

  return (
    <footer
      className="w-full max-w-[2560px] bg-softSage bg-[url('/images/svg/team-section-background.svg')] bg-cover bg-center bg-no-repeat text-darkCharcoal"
      id="footer"
    >
      <div className="w-full">
        <img
          src="/images/svg/footer-top-wave.svg"
          className=""
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto mt-9 w-full max-w-[1440px] px-5 md:px-6 lg:px-7 xl:mt-6">
        <div className="flex flex-col-reverse items-center gap-16 md:grid md:grid-cols-2 md:gap-6 xl:h-[560px]">
          <div className="flex h-full flex-col items-center justify-center w-1400:px-[194px]">
            <h2 className="mb-6 bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.05] xl:mb-[42px]">
              <span className="whitespace-nowrap text-[clamp(64px,22vw,96px)] text-transparent md:text-[5.8vw] w-1400:text-[96px]">
                Contact
              </span>
              <br />
              <span className="text-[clamp(32px,9vw,40px)] text-transparent md:whitespace-nowrap md:text-[3.71vw] w-1400:text-[40px]">
                Information
              </span>
            </h2>

            <div className="flex flex-col gap-4 px-[16%]">
              <p className="text-center text-[clamp(16px,4.8vw,16px)] font-extrabold md:px-[16%] md:text-[1.8vw] w-1400:text-[16px]">
                Brian Oduor Physiotherapy
              </p>

              <div className="text-center text-[clamp(16px,4.8vw,18px)] md:text-[1.7vw] w-1400:text-[18px]">
                <p>Oduor Brian Wamanya, BSc. Physiotherapy</p>
                <p>Physiotherapy | Rehabilitation | Hydrotherapy | Movement & Wellness</p>
              </div>

              <div className="text-center text-[clamp(16px,4.8vw,18px)] md:text-[1.7vw] w-1400:text-[18px]">
                <p>📍 {address}</p>
                <p>Currently serving patients at Dahlia Wellness Centre, Westlands, Nairobi</p>
              </div>

              <div className="mt-2 flex flex-col items-center justify-center gap-1 text-center text-[clamp(16px,4.8vw,18px)] font-extrabold md:text-[1.7vw] w-1400:text-[18px]">
                <p>📞 {phone_1}</p>
                <p>📞 {phone_2}</p>
              </div>
            </div>
          </div>

          <div className="flex size-full flex-col items-center justify-center px-[10%] md:mt-[-38px] md:px-[16%] w-1400:px-[194px]">
            <h2 className="mb-6 bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.05] xl:mb-[42px]">
              <span className="whitespace-nowrap text-[clamp(48px,16vw,80px)] text-transparent md:text-[5.8vw] w-1400:text-[80px]">
                Opening
              </span>
              <br />
              <span className="text-[clamp(40px,14.6vw,72px)] text-transparent md:whitespace-nowrap md:text-[3.71vw] w-1400:text-[72px]">
                Hours
              </span>
            </h2>

            <div className="grid w-full grid-cols-2 justify-between text-[clamp(16px,4.8vw,18px)] md:text-[1.7vw] w-1400:text-[18px]">
              <div className="flex flex-col gap-2 font-extrabold">
                {DAYS_OF_WEEK_REARRANGED.map((day) => (
                  <span key={day}>
                    {(DAY_MAPPINGS as { [key: string]: string })[day as string]}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-end gap-2">
                {DAYS_OF_WEEK_REARRANGED.map((day) => (
                  <div key={day}>
                    {businessHours?.[`${day}Status` as keyof BusinessHours] ===
                    "open" ? (
                      <div>
                        {businessHours?.[
                          `${day}Opening` as keyof BusinessHours
                        ]?.toString()}{" "}
                        -{" "}
                        {businessHours?.[
                          `${day}Closing` as keyof BusinessHours
                        ]?.toString()}
                      </div>
                    ) : (
                      <div className="uppercase">closed</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-full border-DEFAULT border-black bg-black opacity-20" />
          <p className="pt-8 text-center text-[clamp(18px,4.8vw,20px)] md:pt-6 md:text-[1.7vw] w-1400:text-[18px]">
            <Link
              href="/hydrotherapy"
              className="font-[BalooTamma] text-[clamp(20px,5.2vw,20px)] font-bold md:text-[2.1vw] w-1400:text-[20px]"
            >
              Hydrotherapy
            </Link>{" | "}
            <Link
              href="/home-physiotherapy"
              className="font-[BalooTamma] text-[clamp(20px,5.2vw,20px)] font-bold md:text-[2.1vw] w-1400:text-[20px]"
            >
              Home Physiotherapy
            </Link>{" | "}
            <Link
              href="/corporate-wellness"
              className="font-[BalooTamma] text-[clamp(20px,5.2vw,20px)] font-bold md:text-[2.1vw] w-1400:text-[20px]"
            >
              Corporate Wellness
            </Link>{" | "}
            <Link
              href="/resources"
              className="font-[BalooTamma] text-[clamp(20px,5.2vw,20px)] font-bold md:text-[2.1vw] w-1400:text-[20px]"
            >
              Resources
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
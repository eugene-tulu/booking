import { getClinic } from "@/actions/clinic"
import {
  getBusinessHours,
} from "@/actions/availability"

import { Footer } from "@/components/nav/landing/footer"
import { SubPageHeader } from "@/components/nav/landing/sub-page-header"

import { Shell } from "@/components/shells/shell"

export default async function HydrotherapyPage(): Promise<JSX.Element> {
  const clinic = await getClinic()

  return (
    <main className="mx-auto h-auto w-full max-w-[2560px] overflow-x-hidden">
      <SubPageHeader />
      <Shell>
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-6 lg:px-7">
        <h1 className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold text-transparent">
          <span className="text-[12vw] md:text-[6vw] lg:text-[4vw] 2xl:text-[48px]">
            Hydrotherapy & Aquatic Rehabilitation
          </span>
        </h1>

        <p className="mt-8 text-center text-[5vw] leading-[150%] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px]">
          Water can provide a supportive environment for movement and rehabilitation.
          Hydrotherapy may help individuals exercise with reduced impact on the joints
          while taking advantage of the properties of water to support movement and
          rehabilitation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-xl bg-softSage p-6">
            <h2 className="mb-4 text-[6vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
              Hydrotherapy may be useful for:
            </h2>
            <ul className="ml-4 list-inside list-disc text-[4.5vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[18px]">
              <li>Joint pain</li>
              <li>Arthritis</li>
              <li>Post-operative rehabilitation</li>
              <li>Musculoskeletal rehabilitation</li>
              <li>Reduced mobility</li>
              <li>Strength and conditioning</li>
              <li>Movement retraining</li>
            </ul>
          </div>

          <div className="rounded-xl bg-softSage p-6">
            <h2 className="mb-4 text-[6vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
              Services may include:
            </h2>
            <ul className="ml-4 list-inside list-disc text-[4.5vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[18px]">
              <li>Therapeutic aquatic exercises</li>
              <li>Water-based rehabilitation</li>
              <li>Water massage</li>
              <li>Contrast therapy</li>
              <li>Ice bath recovery</li>
              <li>Functional aquatic exercises</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[5vw] font-medium italic md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px]">
            Move with less impact. Build strength with confidence. Recover through movement.
          </p>
        </div>
        </section>
      </Shell>
      <Footer
        address={clinic?.address || "Dahlia Wellness Centre, 8 School Lane, Westlands, Nairobi, Kenya"}
        phone_1={clinic?.phone_1 || "+254 726 017 063"}
        phone_2={clinic?.phone_2 || "+254 117 889 911"}
      />
    </main>
  )
}
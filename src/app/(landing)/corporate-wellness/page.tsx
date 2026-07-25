import { getClinic } from "@/actions/clinic"

import { Footer } from "@/components/nav/landing/footer"
import { SubPageHeader } from "@/components/nav/landing/sub-page-header"

import { Shell } from "@/components/shells/shell"

export default async function CorporateWellnessPage(): Promise<JSX.Element> {
  const clinic = await getClinic()

  return (
    <main className="mx-auto h-auto w-full max-w-[2560px] overflow-x-hidden">
      <SubPageHeader />
      <Shell>
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-6 lg:px-7">
        <h1 className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold text-transparent">
          <span className="text-[12vw] md:text-[6vw] lg:text-[4vw] 2xl:text-[48px]">
            Workplace Wellness & Ergonomics
          </span>
        </h1>

        <p className="mt-8 text-center text-[5vw] leading-[150%] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px]">
          Healthy workplaces support healthy employees. I provide physiotherapy-based
          workplace wellness services designed to help organizations understand
          movement, posture, ergonomics and physical health in the workplace.
        </p>

        <div className="mt-12 rounded-xl bg-softSage p-6">
          <h2 className="mb-4 text-[6vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
            Services include:
          </h2>
          <ul className="ml-4 list-inside list-disc text-[4.5vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[18px]">
            <li>Workplace ergonomic assessments</li>
            <li>Workstation assessment and modification</li>
            <li>Ergonomics training</li>
            <li>Employee wellness education</li>
            <li>Workplace injury prevention</li>
            <li>On-site physiotherapy consultations</li>
            <li>Gym ergonomics and exercise assessments</li>
            <li>Policy and programme development</li>
            <li>Professional report writing</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[5vw] font-medium italic md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px]">
            Better workplace movement. Healthier employees. More productive organizations.
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
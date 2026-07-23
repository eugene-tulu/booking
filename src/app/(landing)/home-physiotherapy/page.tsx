import { Shell } from "@/components/shells/shell"

export default function HomePhysiotherapyPage(): JSX.Element {
  return (
    <Shell>
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-6 lg:px-7">
        <h1 className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold text-transparent">
          <span className="text-[12vw] md:text-[6vw] lg:text-[4vw] 2xl:text-[48px]">
            Physiotherapy at Home
          </span>
        </h1>

        <p className="mt-8 text-center text-[5vw] leading-[150%] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px]">
          Some patients find it difficult or unsafe to travel to a clinic for treatment.
          Home physiotherapy allows treatment and rehabilitation to take place within
          your own environment.
        </p>

        <div className="mt-12 rounded-xl bg-softSage p-6">
          <h2 className="mb-4 text-[6vw] font-bold md:text-[3vw] lg:text-[2vw] 2xl:text-[24px]">
            Suitable for:
          </h2>
          <ul className="ml-4 list-inside list-disc text-[4.5vw] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[18px]">
            <li>Bedridden patients</li>
            <li>Elderly patients</li>
            <li>Patients recovering from surgery</li>
            <li>Patients with mobility limitations</li>
            <li>Patients requiring long-term rehabilitation</li>
            <li>Patients who require assistance with movement and function</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/rezerwacja"
            className="inline-block rounded-full bg-emeraldPrimary px-8 py-3 text-[5vw] font-bold text-white transition-all hover:scale-105 md:text-[2vw] lg:text-[1.5vw] 2xl:text-[18px]"
          >
            Need physiotherapy at home? Book a home assessment today.
          </a>
        </div>
      </section>
    </Shell>
  )
}
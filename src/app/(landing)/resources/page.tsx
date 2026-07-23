import { Shell } from "@/components/shells/shell"

export default function ResourcesPage(): JSX.Element {
  return (
    <Shell>
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-6 lg:px-7">
        <h1 className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold text-transparent">
          <span className="text-[12vw] md:text-[6vw] lg:text-[4vw] 2xl:text-[48px]">
            Resources & Blog
          </span>
        </h1>

        <p className="mt-8 text-center text-[5vw] leading-[150%] md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px]">
          Educational resources on physiotherapy, movement, wellness and rehabilitation.
          Stay informed about best practices for maintaining your physical health.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl bg-softSage p-6">
            <h2 className="mb-2 text-[5vw] font-bold md:text-[2.5vw] lg:text-[2vw] 2xl:text-[24px]">
              Understanding Back Pain
            </h2>
            <p className="text-[4vw] leading-[150%] md:text-[1.8vw] lg:text-[1.4vw] 2xl:text-[18px]">
              Learn about the common causes of back pain and effective physiotherapy
              approaches for relief and recovery.
            </p>
          </article>

          <article className="rounded-xl bg-softSage p-6">
            <h2 className="mb-2 text-[5vw] font-bold md:text-[2.5vw] lg:text-[2vw] 2xl:text-[24px]">
              Benefits of Hydrotherapy
            </h2>
            <p className="text-[4vw] leading-[150%] md:text-[1.8vw] lg:text-[1.4vw] 2xl:text-[18px]">
              Discover how water-based rehabilitation can accelerate your recovery
              while reducing stress on joints.
            </p>
          </article>

          <article className="rounded-xl bg-softSage p-6">
            <h2 className="mb-2 text-[5vw] font-bold md:text-[2.5vw] lg:text-[2vw] 2xl:text-[24px]">
              Ergonomics in the Workplace
            </h2>
            <p className="text-[4vw] leading-[150%] md:text-[1.8vw] lg:text-[1.4vw] 2xl:text-[18px]">
              Tips for maintaining proper posture and preventing injuries while
              working.
            </p>
          </article>
        </div>
      </section>
    </Shell>
  )
}
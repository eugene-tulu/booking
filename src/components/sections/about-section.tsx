import Balancer from "react-wrap-balancer"

import { aboutSectionParagraphs } from "@/data/promo-text"

export function AboutSection(): JSX.Element {
  return (
    <section id="about" className="w-full max-w-[2560px]">
      <div className="mx-auto mt-12 flex w-full max-w-[1440px] flex-col-reverse overflow-hidden px-5 md:my-8 md:grid md:grid-cols-2 md:px-6 lg:px-7">
        <div className="flex items-center justify-center">
          <div
            className="my-6 size-full rounded-3xl bg-softSage md:my-0 md:scale-[0.85]"
            style={{ minHeight: "320px", maxHeight: "560px", maxWidth: "480px" }}
          >
            <span className="flex h-full w-full items-center justify-center text-lg text-muted-foreground">
              Physiotherapist photo
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-6">
            <h2 className="w-[90%] bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.05] text-transparent md:text-start">
              <span className="text-[clamp(36px,12vw,80px)] text-transparent md:text-[5.8vw] w-1400:text-[80px]">
                Meet Your
              </span>
              <br />
              <span className="text-[clamp(28px,11vw,43px)] text-transparent md:text-[3.1vw] w-1400:text-[43px]">
                Physiotherapist
              </span>
            </h2>

          <div className="flex w-[74%] flex-col gap-8 text-center md:ml-[20%] md:w-[90%] md:gap-6 md:pr-[23%] md:text-start lg:pr-[25%] xl:pr-[28%] w-1400:pr-[34%]">
            {aboutSectionParagraphs?.map((paragraph, index) => (
              <p
                key={index}
                className="text-[clamp(18px,4.8vw,22px)] leading-[150%] text-lightSectionText md:text-[1.7vw] w-1400:text-[22px]"
              >
                <Balancer>{paragraph.content}</Balancer>
              </p>
            ))}
            <p className="font-[BalooTamma] text-[clamp(28px,7.6vw,56px)] font-medium md:text-[4vw] w-1400:text-[56px]">
              <span className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-transparent">
                Oduor Brian Wamanya, BSc. Physiotherapy
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/images/svg/about-bottom-wave.svg"
          className="size-full object-cover"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

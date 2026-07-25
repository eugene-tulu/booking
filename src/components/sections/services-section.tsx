import Balancer from "react-wrap-balancer"

import { servicesSectionParagraphs } from "@/data/promo-text"
import { services } from "@/data/services"

import { ServiceCard } from "@/components/service-card"

export function ServicesSection(): JSX.Element {
  return (
    <section
      id="services"
      className="w-full max-w-[2560px] bg-[url('/images/svg/radial-background.svg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 md:px-6 lg:px-7">
        <div className="mt-12 flex flex-col md:mt-[-64px] md:grid md:grid-cols-2 lg:mt-[-96px]">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-6">
            <h2 className="w-[90%] bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.05] text-transparent md:text-start">
              <span className="whitespace-nowrap text-[clamp(36px,12vw,80px)] md:text-[5.8vw] w-1400:text-[80px]">
                Physiotherapy &
              </span>
              <br />
              <span className="text-[clamp(28px,7.6vw,51px)] md:whitespace-nowrap md:text-[3.71vw] w-1400:text-[51.2px]">
                Rehabilitation Services
              </span>
            </h2>

            {servicesSectionParagraphs?.map((paragraph, index) => (
              <p
                key={index}
                 className="w-[86%] text-center text-[clamp(18px,4.8vw,22px)] leading-[150%] text-darkSectionText opacity-60 md:w-[90%] md:pr-[14.5%] md:text-start md:text-[1.7vw] xl:pr-[16%] w-1400:pr-[23%] w-1400:text-[22px]"
              >
                <Balancer>{paragraph.content}</Balancer>
              </p>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div
              className="mb-8 ml-[9%] mt-4 size-full rounded-3xl bg-softSage md:mb-0 md:ml-0 md:scale-125 2xl:scale-[1.35]"
              style={{ minHeight: '320px', maxHeight: '480px', maxWidth: '480px' }}
            >
              <span className="flex h-full w-full items-center justify-center text-lg text-muted-foreground">
                Physiotherapy services illustration
              </span>
            </div>
          </div>
        </div>

        <div className="z-[4] gap-x-[48px] gap-y-[56px] md:grid md:w-[97%] md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

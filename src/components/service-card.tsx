import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

interface ServiceCardProps {
  service: {
    title: string
    description?: string
    bulletPoints?: string[]
  }
}

export function ServiceCard({ service }: ServiceCardProps): JSX.Element {
  return (
    <Card className="rounded-xl border-none bg-transparent p-4 pr-[18%] shadow-none md:mb-0 md:pr-[12%] lg:pr-[2%] lg:hover:scale-[1.02] lg:hover:shadow-xl">
      <CardHeader className="flex flex-row gap-4">
        <Icons.plaster className="hidden min-h-[32px] min-w-[32px] text-darkCharcoal md:inline-flex" />
        <CardTitle className="text-[clamp(20px,6.3vw,22px)] font-bold tracking-wider text-darkCharcoal md:text-[2.2vw] lg:text-[1.6vw] w-1400:text-[22px]">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-[12px] text-[clamp(16px,4.8vw,16px)] leading-[150%] text-darkCharcoal md:pl-[48px] md:text-[1.8vw] w-1400:text-[16px]">
        {service.bulletPoints ? (
          <ul className="flex list-outside list-[square] flex-col gap-4 pl-4 pr-[4%] md:gap-2 md:pr-0">
            {service.bulletPoints?.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
        ) : (
          <p>{service.description}</p>
        )}
      </CardContent>
    </Card>
  )
}

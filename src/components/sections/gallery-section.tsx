import Image from "next/image"

export function GallerySection(): JSX.Element {
  const images = [
    { src: "/images/screenshots/screenshot_1.png", alt: "Clinic treatment room" },
    { src: "/images/screenshots/screenshot_2.png", alt: "Physiotherapy equipment" },
    { src: "/images/screenshots/screenshot_3.png", alt: "Patient consultation" },
    { src: "/images/screenshots/screenshot_4.png", alt: "Rehabilitation session" },
    { src: "/images/screenshots/screenshot_5.png", alt: "Hydrotherapy pool" },
    { src: "/images/screenshots/screenshot_6.png", alt: "Wellness facility" },
  ]

  return (
    <section id="gallery" className="w-full max-w-[2560px]">
      <div>
        <img
          src="/images/svg/gallery-top-wave.svg"
          alt=""
          className="w-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 md:px-6 lg:px-7">
        <div className="mb-8 flex items-center justify-center md:justify-start">
          <h2 className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.05] text-transparent md:text-start">
            <span className="whitespace-nowrap text-[12vw] md:text-[5.8vw] w-1400:text-[80px]">
              Gallery
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-softSage shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <img
          src="/images/svg/gallery-bottom-wave.svg"
          alt=""
          className="w-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

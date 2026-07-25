export function TeamSection(): JSX.Element {
  return (
    <section
      id="physiotherapist"
      className="w-full max-w-[2560px] bg-[url('/images/svg/team-section-background.svg')] bg-cover bg-no-repeat"
    >
      <div>
        <img
          src="/images/svg/team-top-wave.svg"
          alt=""
          className="w-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div
        className="mx-auto mt-[48px] min-h-[680px] w-full max-w-[1440px] px-5 md:px-6 lg:px-7"
      >
        <div className="flex items-center justify-center md:grid md:grid-cols-2 md:gap-8 lg:gap-[48px]">
            <h2 className="bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.2] text-transparent md:col-start-2 md:col-end-3">
              <span className="whitespace-nowrap text-[clamp(32px,8.6vw,70px)] md:text-[4.8vw] w-1400:text-[70px]">
                Restoring Movement.
              </span>
              <br />
              <span className="text-[clamp(28px,7vw,57px)] md:whitespace-nowrap md:text-[4vw] w-1400:text-[57px]">
                Rebuilding Strength. Enhancing Life.
              </span>
            </h2>
        </div>

        <div className="flex min-h-[600px] flex-col justify-center gap-[12vw] md:grid md:grid-cols-2 md:gap-[32px] lg:gap-[48px]">
          <div className="flex items-center justify-center">
            <div
              className="size-full max-w-md rounded-3xl bg-softSage"
              style={{ minHeight: "320px", maxHeight: "480px" }}
            >
              <span className="flex h-full w-full items-center justify-center text-lg text-muted-foreground">
                Physiotherapist photo
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-start">
            <h3 className="text-[clamp(24px,6vw,36px)] font-bold md:text-[2.5vw] w-1400:text-[36px]">
              Oduor Brian Wamanya, BSc. Physiotherapy
            </h3>
            <p className="text-[clamp(18px,4.5vw,20px)] leading-[150%] md:text-[1.5vw] w-1400:text-[20px]">
              I am a qualified physiotherapist with a Bachelor&apos;s Degree in
              Physiotherapy, passionate about helping individuals restore
              movement, manage pain and regain independence.
            </p>
            <p className="text-[clamp(18px,4.5vw,20px)] leading-[150%] md:text-[1.5vw] w-1400:text-[20px]">
              My clinical approach combines evidence-informed physiotherapy,
              functional rehabilitation, patient education and personalized
              exercise programs.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/images/svg/team-bottom-wave.svg"
          alt=""
          className="w-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
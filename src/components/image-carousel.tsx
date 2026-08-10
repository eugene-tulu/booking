"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: { src: string; alt?: string }[]
  aspectRatio?: number
  autoPlay?: boolean
  interval?: number
}

export function ImageCarousel({
  images,
  aspectRatio = 3 / 4,
  autoPlay = false,
  interval = 5000,
  className,
  ...props
}: ImageCarouselProps) {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
  const count = images.length

  const paginate = React.useCallback(
    (dir: number) => {
      setDirection(dir)
      setCurrent((prev) => (prev + dir + count) % count)
    },
    [count]
  )

  React.useEffect(() => {
    if (!autoPlay || count <= 1) return
    const timer = setInterval(() => paginate(1), interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, count, paginate, current])

  if (count === 0) return null

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border bg-muted",
        className
      )}
      style={{ aspectRatio: String(aspectRatio) }}
      {...props}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]!.src}
            alt={images[current]!.alt ?? `Image ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => paginate(-1)}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "absolute left-2 top-1/2 z-10 size-9 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
            )}
          >
            <Icons.chevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => paginate(1)}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "absolute right-2 top-1/2 z-10 size-9 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
            )}
          >
            <Icons.chevronRight className="size-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  i === current
                    ? "bg-background"
                    : "bg-background/50 hover:bg-background/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

import { Link } from "wouter"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { homeSkillPreview, identity } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const profileImageSrc = "/profile.png"

export function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center py-10 md:py-16">
      <section className="relative mx-auto w-full max-w-2xl px-4">
        <div className="relative border border-border/60 bg-card/40 px-7 pt-16 pb-10 backdrop-blur-sm sm:px-12 sm:pt-20 sm:pb-12">
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="size-[8.5rem] overflow-hidden rounded-full bg-background p-0.5 shadow-[0_0_0_1px_var(--color-border)] sm:size-40 md:size-44">
              <img
                src={profileImageSrc}
                alt=""
                className="size-full rounded-full object-cover object-top"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-9 text-center">
            <header className="space-y-4 pt-1">
              <h1 className="text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
                {identity.name}
              </h1>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {identity.tagline}
              </p>
            </header>

            <Separator className="max-w-sm bg-border/80" />

            <div className="w-full space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Skills snapshot
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {homeSkillPreview.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="h-6 px-2.5 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <Link
                href="/skills"
                className="inline-block text-sm text-primary underline-offset-4 hover:underline"
              >
                See all skills
              </Link>
            </div>

            <Separator className="max-w-sm bg-border/80" />

            <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                View my work
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

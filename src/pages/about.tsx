import { Link } from "wouter"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { about, education } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-12">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          About me
        </h1>
      </div>

      {/* Professional Summary */}
      <section className="space-y-4">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          {about.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <Separator className="bg-border/80" />

      {/* Education */}
      <section className="space-y-5">
        <h2 className="font-heading text-xl font-medium tracking-tight">
          Education
        </h2>
        <Card className="py-5 text-sm/relaxed">
          <CardContent className="space-y-5 text-sm/relaxed">
            {education.map((e) => (
              <div
                key={`${e.school}-${e.period}`}
                className="border-b border-border/60 pb-4 last:border-0 last:pb-0"
              >
                <p className="font-medium text-foreground">{e.school}</p>
                <p className="text-muted-foreground">
                  {e.location} · {e.period}
                </p>
                <p className="mt-1 text-muted-foreground">{e.credential}</p>
                <p className="text-muted-foreground">{e.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <Link href="/resume" className={cn(buttonVariants({ size: "lg" }))}>
          View Resume
        </Link>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}

import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { experience, projects } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-14">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Open source contributions and personal systems work.
        </p>
      </div>

      <section className="space-y-5">
        <h2 className="border-b border-border pb-2 text-center font-heading text-base font-medium tracking-tight sm:text-left">
          Open source
        </h2>
        <ul className="grid w-full gap-7">
          {experience.map((item) => (
            <li key={item.org}>
              <Card className="py-5 text-sm/relaxed">
                <CardHeader className="border-b border-border/80">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">{item.org}</CardTitle>
                      <CardDescription className="mt-1.5">
                        {item.role} · {item.period}
                      </CardDescription>
                    </div>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "gap-1.5"
                        )}
                      >
                        Github
                        <ExternalLink className="size-4 shrink-0" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
                {item.prUrl ? (
                  <CardFooter className="justify-end border-t border-border/80">
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "gap-1.5"
                      )}
                    >
                      View PR
                      <ExternalLink className="size-4 shrink-0" aria-hidden />
                    </a>
                  </CardFooter>
                ) : null}
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="border-b border-border pb-2 text-center font-heading text-base font-medium tracking-tight sm:text-left">
          Personal projects
        </h2>
        <ul className="grid w-full gap-7">
          {projects.map((project) => (
            <li key={project.title}>
              <Card className="py-5 text-sm/relaxed">
                <CardHeader className="border-b border-border/80">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">
                        {project.title}
                      </CardTitle>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {project.period}
                      </p>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "gap-1.5"
                      )}
                    >
                      GitHub
                      <ExternalLink className="size-4 shrink-0" aria-hidden />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="h-6 px-2.5 text-sm"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-end border-t border-border/80">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "gap-1.5"
                    )}
                  >
                    View on GitHub
                    <ExternalLink className="size-4 shrink-0" aria-hidden />
                  </a>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

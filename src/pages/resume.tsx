import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { education, resumePdfPath } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Resume
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Preview or download my CV
        </p>
        <div className="mt-5 flex justify-center sm:justify-start">
          <a
            href={resumePdfPath}
            download
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="overflow-hidden border border-border ring-1 ring-foreground/10">
        <iframe
          title="Resume PDF"
          src={resumePdfPath}
          className="min-h-[80vh] w-full bg-muted"
        />
      </div>
      {/* Fallback: some browsers handle PDFs better via <object>; iframe is standard for in-page preview. */}

      <Card className="py-5 text-sm/relaxed">
        <CardHeader>
          <CardTitle className="text-lg">Education</CardTitle>
          <CardDescription className="text-sm">
            Academic background
          </CardDescription>
        </CardHeader>
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
    </div>
  )
}

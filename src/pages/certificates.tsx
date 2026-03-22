import { ExternalLink } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { certificates } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function CertificatesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Certificates
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Course credentials and professional learning.
        </p>
      </div>

      <ul className="mx-auto grid w-full max-w-2xl gap-5 sm:max-w-none sm:grid-cols-2">
        {certificates.map((c) => (
          <li key={`${c.title}-${c.issuer}`}>
            <Card className="flex h-full flex-col py-5 text-sm/relaxed">
              <CardHeader>
                <CardTitle className="text-balance text-base leading-snug">
                  {c.title}
                </CardTitle>
                <CardDescription className="text-sm">{c.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{c.date}</p>
              </CardContent>
              {c.verifyUrl ? (
                <CardFooter className="border-t border-border/80">
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "gap-1.5"
                    )}
                  >
                    Verify credential
                    <ExternalLink className="size-4 shrink-0" aria-hidden />
                  </a>
                </CardFooter>
              ) : null}
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

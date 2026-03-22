import type { ReactNode } from "react"

import { SiteHeader } from "@/components/site-header"
import { identity } from "@/data/portfolio"

export function SiteLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear()

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-12 md:py-16">
        {children}
      </main>
      <footer className="border-t border-border/80">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted-foreground">
          © {year} {identity.name}
        </div>
      </footer>
    </div>
  )
}

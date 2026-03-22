import { useState } from "react"
import { Link, useLocation } from "wouter"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/data/portfolio"
import { cn } from "@/lib/utils"

function pathMatches(path: string, href: string) {
  const normalized = path.replace(/\/$/, "") || "/"
  const target = href.replace(/\/$/, "") || "/"
  if (target === "/") {
    return normalized === "/"
  }
  return normalized === target || normalized.startsWith(`${target}/`)
}

const linkClass =
  "text-muted-foreground hover:text-foreground transition-colors"
const linkActiveClass = "text-foreground font-medium"

export function SiteHeader() {
  const [location] = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = (href: string) =>
    cn(linkClass, pathMatches(location, href) && linkActiveClass)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-backdrop-filter:backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-5">
        <nav
          className="hidden flex-wrap items-center justify-center gap-x-1 gap-y-1.5 md:flex"
          aria-label="Main"
        >
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={cn("px-2.5 py-2 text-sm", navLinkClass(href))}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="absolute top-1/2 right-5 -translate-y-1/2 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" aria-label="Open menu" />
              }
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 p-4 pt-2"
                aria-label="Mobile main"
              >
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className={cn(
                        "block rounded-none px-2 py-3 text-base",
                        navLinkClass(href)
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

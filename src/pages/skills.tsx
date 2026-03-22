import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/data/portfolio"

export function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Skills
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Languages, systems, and tools I use to ship backend-heavy software.
        </p>
      </div>

      <ul className="space-y-10">
        {skillGroups.map((group) => (
          <li key={group.title}>
            <h2 className="mb-4 border-b border-border pb-2 text-center font-heading text-base font-medium sm:text-left">
              {group.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="h-6 px-2.5 text-sm"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

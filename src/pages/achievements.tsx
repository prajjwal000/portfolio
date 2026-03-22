import { Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { achievements } from "@/data/portfolio"

export function AchievementsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Achievements
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Milestones, competition results, and academic recognition.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <Card className="flex h-full flex-col py-5 text-sm/relaxed">
              <CardHeader className="flex flex-row items-start gap-3 pb-2">
                <Trophy
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <CardTitle className="text-base leading-snug font-normal text-balance">
                  {achievement.text}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pl-10">
                <Badge variant="outline" className="h-5 px-2 text-xs">
                  {achievement.category}
                </Badge>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { Route, Router, Switch } from "wouter"

import { SiteLayout } from "@/components/site-layout"
import { AchievementsPage } from "@/pages/achievements"
import { CertificatesPage } from "@/pages/certificates"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { ProjectsPage } from "@/pages/projects"
import { ResumePage } from "@/pages/resume"
import { SkillsPage } from "@/pages/skills"

export function App() {
  return (
    <Router>
      <SiteLayout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/certificates" component={CertificatesPage} />
          <Route path="/achievements" component={AchievementsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
          <Route>
            <div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
              <div className="max-w-md px-4">
                <h1 className="font-heading text-2xl font-medium">
                  Page not found
                </h1>
                <p className="mt-3 text-base text-muted-foreground">
                  That route does not exist.
                </p>
              </div>
            </div>
          </Route>
        </Switch>
      </SiteLayout>
    </Router>
  )
}

export default App

import { useState, type FormEvent } from "react"
import { Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { identity } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!subject.trim() || !message.trim()) {
      return
    }

    const body = [
      name.trim() && `Name: ${name.trim()}`,
      email.trim() && `Reply-to: ${email.trim()}`,
      "",
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n")

    const mailto = `mailto:${identity.email}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl space-y-12">
      <div className="text-center sm:text-left">
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Send a message through your mail client, or reach me on LinkedIn and
          GitHub.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
        <a
          href={identity.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          )}
        >
          <Linkedin className="size-5 shrink-0" aria-hidden />
          LinkedIn
        </a>
        <a
          href={identity.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          )}
        >
          <Github className="size-5 shrink-0" aria-hidden />
          GitHub
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2.5">
          <Label htmlFor="contact-name" className="text-sm">
            Name
          </Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="h-9 text-sm md:text-sm"
          />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="contact-email" className="text-sm">
            Your email
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-9 text-sm md:text-sm"
          />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="contact-subject" className="text-sm">
            Subject
          </Label>
          <Input
            id="contact-subject"
            name="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What is this about?"
            className="h-9 text-sm md:text-sm"
          />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="contact-message" className="text-sm">
            Message
          </Label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={cn(
              "w-full resize-y rounded-none border border-input bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 dark:bg-input/30"
            )}
            placeholder="Your message…"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg">
            Open in email app
          </Button>
          <Button type="button" variant="outline" size="lg" onClick={copyEmail}>
            {copied ? "Copied" : "Copy my email"}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground">{identity.email}</span>
          {" · "}
          {identity.phone}
        </p>
      </form>
    </div>
  )
}

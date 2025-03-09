"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <section id="contact" className="relative metallic-bg py-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-xl text-center mb-12 bg-[rgba(10,10,10,0.8)] p-6 rounded-lg border-2 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-[#f1f5f9] text-lg">
            Have a project in mind? Contact us to discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="content-card bg-[#080808] border-2 border-[#2dd4bf] relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <CardContent className="p-6 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(45,212,191,0.1)] mb-4 group-hover:bg-[rgba(45,212,191,0.2)] transition-colors">
                  <Mail className="h-6 w-6 text-[#2dd4bf]" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
                  Email Us
                </h3>
                <p className="mt-2 text-[#cbd5e1]">Our friendly team is here to help.</p>
                <a href="mailto:info@kryptoxotis.com" className="mt-2 text-[#2dd4bf] hover:text-white">
                  info@kryptoxotis.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="content-card bg-[#080808] border-2 border-[#2dd4bf] relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <CardContent className="p-6 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(45,212,191,0.1)] mb-4 group-hover:bg-[rgba(45,212,191,0.2)] transition-colors">
                  <MapPin className="h-6 w-6 text-[#2dd4bf]" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
                  Visit Us
                </h3>
                <p className="mt-2 text-[#cbd5e1]">Come say hello at our office.</p>
                <address className="mt-2 text-[#f1f5f9] not-italic">
                  123 Innovation Drive
                  <br />
                  Tech City, TC 10101
                </address>
              </div>
            </CardContent>
          </Card>

          <Card className="content-card bg-[#080808] border-2 border-[#2dd4bf] relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <CardContent className="p-6 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(45,212,191,0.1)] mb-4 group-hover:bg-[rgba(45,212,191,0.2)] transition-colors">
                  <Phone className="h-6 w-6 text-[#2dd4bf]" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
                  Call Us
                </h3>
                <p className="mt-2 text-[#cbd5e1]">Mon-Fri from 8am to 6pm.</p>
                <a href="tel:+11234567890" className="mt-2 text-[#2dd4bf] hover:text-white">
                  +1 (123) 456-7890
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="content-card bg-[#080808] border-2 border-[#2dd4bf] relative overflow-hidden shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <CardContent className="p-6 sm:p-8 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="form-input bg-[#050505] border-[#2dd4bf] text-white placeholder:text-[#64748b]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="form-input bg-[#050505] border-[#2dd4bf] text-white placeholder:text-[#64748b]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="form-input bg-[#050505] border-[#2dd4bf] text-white placeholder:text-[#64748b]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] form-input bg-[#050505] border-[#2dd4bf] text-white placeholder:text-[#64748b]"
                  />
                </div>

                <Button type="submit" className="w-full teal-button">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


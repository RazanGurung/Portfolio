import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Download, Mail, Github, Linkedin, MapPin, CheckCircle } from 'lucide-react'
import { personalInfo, metrics } from '../data/portfolio'

export default function Hero() {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume/rajan_gurung_resume.pdf'
    link.download = 'Rajan-Gurung-Data-Scientist-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const scrollToContact = () => {
  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section id="hero" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {personalInfo.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {metrics.experience} Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {metrics.projects} Delivered
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {metrics.certifications}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {metrics.impact}
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" onClick={downloadResume}>
                <Download className="h-4 w-4" />
                 Download Resume
              </Button>

              <Button variant="outline" size="lg" className="gap-2" onClick={scrollToContact}>
                <Mail className="h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Recruiter Panel */}
          <Card className="lg:sticky lg:top-24 animate-slide-in-left">
            <CardContent className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-32 h-32 mx-auto">
                  <img
                    src="/profile.jpg" // 👈 your image file in /public
                    alt={personalInfo.name}
                    className="w-32 h-32 rounded-full object-cover border-2 border-primary/30 shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-lg">{personalInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{personalInfo.workAuth}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full gap-2 justify-start"
                  onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank', 'noopener,noreferrer')}
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2 justify-start"
                  onClick={() => window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer')}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2 justify-start"
                  onClick={() => window.open(personalInfo.github, '_blank', 'noopener,noreferrer')}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>

              <Button className="w-full gap-2" onClick={downloadResume}>
                <Download className="h-4 w-4" />
                 Download Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



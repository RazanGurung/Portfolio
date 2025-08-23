import React from 'react'
import { Button } from './ui/button'
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      label: 'View GitHub Profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      label: 'Connect on LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      label: 'Send Email'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data Scientist passionate about building AI solutions that create real-world impact. 
              Specializing in NLP, MLOps, and scalable data pipelines.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(link.url, '_blank')}
                  aria-label={link.label}
                  className="hover:text-primary transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{personalInfo.location}</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="block hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs pt-2">
                Available for full-time opportunities and interesting projects
              </p>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>Built with</span>
                <Heart className="h-3 w-3 text-red-500" />
                <span>using</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                <span>Next.js • TypeScript • Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Building2, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'
import { Button } from './ui/button'

export default function Experience() {
  // Track which jobs are expanded
  const [expandedJobs, setExpandedJobs] = useState<number[]>([])

  const toggleJob = (index: number) => {
    setExpandedJobs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index) // collapse
        : [...prev, index]              // expand
    )
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building AI-driven solutions that deliver measurable business impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((job, index) => {
            const isExpanded = expandedJobs.includes(index)
            const visibleHighlights = isExpanded
              ? job.highlights
              : job.highlights.slice(0, 3) // show only first 3 bullets if not expanded

            return (
              <Card
                key={index}
                className="animate-fade-in hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Job Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="gap-1 w-fit">
                      <Calendar className="h-3 w-3" />
                      {job.period}
                    </Badge>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {visibleHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Read More / Show Less toggle */}
                  {job.highlights.length > 3 && (
                    <div className="pt-3">
                      <Button
                        variant="link"
                        className="text-sm text-primary"
                        onClick={() => toggleJob(index)}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

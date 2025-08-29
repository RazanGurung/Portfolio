import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Brain, Database, Server, LineChart, Code } from 'lucide-react'


type Skill = { name: string; level: number; years?: string; note?: string }
type Group = { title: string; Icon: React.ComponentType<any>; summary: string; skills: Skill[] }



const groups: Group[] = [
  {
    title: 'Data Engineering',
    Icon: Database,
    summary: 'Ingest, clean, and prepare data for robust ML pipelines.',
    skills: [
      { name: 'SQL', level: 90, years: '4+ yrs' },
      { name: 'PySpark', level: 80, years: '2+ yrs' },
      { name: 'Pandas', level: 90, years: '4+ yrs' },
      { name: 'Airflow / Orchestration', level: 70, years: '2 yrs' },
      { name: 'ETL / Data Modeling', level: 80 }
    ]
  },
  {
    title: 'Modeling & ML',
    Icon: Brain,
    summary: 'Classical ML to Deep Learning with production-ready rigor.',
    skills: [
      { name: 'Scikit-learn', level: 90, years: '4+ yrs' },
      { name: 'TensorFlow / Keras', level: 80, years: '2–3 yrs' },
      { name: 'PyTorch', level: 75, years: '~2 yrs' },
      { name: 'NLP (BERT / RNNs)', level: 80, note: 'fine-tuning & pipelines' },
      { name: 'Feature Engineering', level: 85 }
    ]
  },
  {
    title: 'MLOps & Deployment',
    Icon: Server,
    summary: 'Ship, monitor, and scale models that drive business outcomes.',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 80 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 70 },
      { name: 'FastAPI / Flask', level: 85 },
      { name: 'Monitoring (metrics, p95)', level: 70 }
    ]
  },
  {
    title: 'Analytics & Visualization',
    Icon: LineChart,
    summary: 'Translate signals into decisions stakeholders trust.',
    skills: [
      { name: 'Python (Matplotlib/Plotly)', level: 85 },
      { name: 'Power BI / Tableau', level: 75 },
      { name: 'Experimentation (A/B)', level: 70 },
      { name: 'Statistics', level: 80 }
    ]
  },
  {
    title: 'Programming & Systems',
    Icon: Code,
    summary: 'Solid engineering for reliable, maintainable ML systems.',
    skills: [
      { name: 'Python', level: 95, years: '5+ yrs' },
      { name: 'TypeScript / JS', level: 70 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Linux / Shell', level: 75 }
    ]
  }
]

function levelLabel(n: number) {
  if (n >= 90) return 'Expert'
  if (n >= 80) return 'Advanced'
  if (n >= 70) return 'Proficient'
  if (n >= 60) return 'Intermediate'
  return 'Familiar'
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills • End-to-End ML Lifecycle</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Not just tools — a production mindset. From data to deployment, with measurable impact.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-14 rounded-full bg-primary/80 inline-block" /> Expert
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-12 rounded-full bg-primary/70 inline-block" /> Advanced
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-10 rounded-full bg-primary/60 inline-block" /> Proficient
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-8 rounded-full bg-primary/50 inline-block" /> Intermediate
            </span>
          </div>
        </div>

        {/* Cards: flex-wrap + justify-center => only the last partial row centers */}
        <div className="mx-auto max-w-7xl flex flex-wrap gap-6 justify-center">
          {groups.map((group, i) => (
            <Card
              key={group.title}
              // flex-basis ~22rem keeps ~3 per row on large; partial last row will center
              className="flex-[1_1_22rem] max-w-[28rem] w-full animate-fade-in hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <group.Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{group.summary}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {group.skills.map((s) => (
                  <div key={s.name} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{s.name}</span>
                        {s.years && (
                          <Badge variant="secondary" className="text-[10px] py-0 px-2">
                            {s.years}
                          </Badge>
                        )}
                        {s.note && (
                          <span className="text-[10px] text-muted-foreground">• {s.note}</span>
                        )}
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {levelLabel(s.level)}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 w-full rounded-full bg-secondary/70 overflow-hidden">
                      <div
                        className="h-2 bg-primary rounded-full transition-all duration-700"
                        style={{ width: `${s.level}%` }}
                        aria-label={`${s.name} proficiency ${s.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

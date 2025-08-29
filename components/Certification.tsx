"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Script from 'next/script'


// Credential badges (Credly, Coursera, etc.)
const credlyBadges = [
  { id: '998b8b4a-4cbd-42b4-a682-a395d9cd16c6' }, 
  { id: '3c00e02d-4467-4d20-83d3-d2756162af09' },
  { id: '0c2771e7-b0b9-4e9f-bfce-8d9ca0e46d14' },
]

const courseraCerts = [
  {
    name: "Big Data with Spark and Hadoop",
    issuer: "Coursera",
    url: "https://coursera.org/share/27a407d022523e2327c577973241a96c",
    img: "/cert/big_data.png",
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Coursera",
    url: "https://coursera.org/share/240a8ab9979fa88cb82e6c521e03db41",
    img: "/cert/data_analytics.png",
  },
  {
    name: "Introduction to Finance and Accounting",
    issuer: "Coursera",
    url: "https://coursera.org/share/e8dc31c0c8cfc9e6c0970fac5efc9dac",
    img: "/cert/finance.png",
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Google / Coursera",
    url: "https://coursera.org/share/fa1460a3cdab1d5065aed943cdededdf",
    img: "/cert/google.png",
  },
  {
    name: "U.S. Federal Taxation",
    issuer: "Coursera",
    url: "https://coursera.org/share/5e98c1b7330dd66675869629270e6f67",
    img: "/cert/Us_tax.png",
  },
]


export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Badges</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified credentials via Credly. Click any badge to view the official record.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-10">
          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle className="text-lg text-center">Credly</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Flex wrap so rows fill normally; last partial row centers */}
              <div className="flex flex-wrap gap-6 justify-center">
                {credlyBadges.map((b) => (
                  <div key={b.id} className="w-[350px]">
                    <div
                      data-iframe-width="300"
                      data-iframe-height="380"
                      data-share-badge-id={b.id}
                      data-share-badge-host="https://www.credly.com"
                    />
                  </div>
                ))}
              </div>

              {/* Load Credly script once on the page */}
              <Script
                src="https://cdn.credly.com/assets/utilities/embed.js"
                strategy="afterInteractive"
              />
            </CardContent>
          </Card>
        </div>
        {/* Coursera (image tiles that link to verify pages) */}
        {courseraCerts.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <Card className="bg-card/70">
              <CardHeader>
                <CardTitle className="text-lg text-center">Coursera Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-8 justify-center">
                  {courseraCerts.map((c) => (
                    <a
                    key={c.url}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-[350px] h-[380px] flex flex-col items-center justify-center rounded-xl border bg-card/80 p-6 shadow-sm hover:shadow-md transition"
                    >
                    <img
                        src={c.img}
                        alt={c.name}
                        className="h-48 w-auto object-contain mb-4"
                    />
                    <div className="text-center">
                        <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
                        {c.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                        <span className="block text-[11px] text-primary mt-2 group-hover:underline">
                        View Certificate
                        </span>
                    </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
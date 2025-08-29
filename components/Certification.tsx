// "use client"
// import React from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { Badge } from "./ui/badge"
// import Script from 'next/script'
// import { Award, ExternalLink, Calendar, CheckCircle, TrendingUp } from 'lucide-react'

// // Keep your original Credly badge IDs - these should show the actual badges
// const credlyBadges = [
//   { id: '998b8b4a-4cbd-42b4-a682-a395d9cd16c6' }, 
//   { id: '3c00e02d-4467-4d20-83d3-d2756162af09' },
//   { id: '0c2771e7-b0b9-4e9f-bfce-8d9ca0e46d14' },
// ]

// const courseraCerts = [
//   {
//     name: "Big Data with Spark and Hadoop",
//     issuer: "Coursera",
//     category: "Big Data",
//     url: "https://coursera.org/share/27a407d022523e2327c577973241a96c",
//     img: "/cert/big_data.png",
//     skills: ["Apache Spark", "Hadoop", "Big Data Processing"]
//   },
//   {
//     name: "Introduction to Data Analytics",
//     issuer: "Coursera", 
//     category: "Analytics",
//     url: "https://coursera.org/share/240a8ab9979fa88cb82e6c521e03db41",
//     img: "/cert/data_analytics.png",
//     skills: ["Data Analysis", "Python", "Statistics"]
//   },
//   {
//     name: "Introduction to Finance and Accounting",
//     issuer: "Coursera",
//     category: "Finance",
//     url: "https://coursera.org/share/e8dc31c0c8cfc9e6c0970fac5efc9dac",
//     img: "/cert/finance.png",
//     skills: ["Financial Analysis", "Accounting", "Business"]
//   },
//   {
//     name: "Google Advanced Data Analytics",
//     issuer: "Google / Coursera",
//     category: "Data Science",
//     url: "https://coursera.org/share/fa1460a3cdab1d5065aed943cdededdf",
//     img: "/cert/google.png",
//     skills: ["Machine Learning", "Python", "R", "Tableau"]
//   },
//   {
//     name: "U.S. Federal Taxation",
//     issuer: "Coursera",
//     category: "Finance",
//     url: "https://coursera.org/share/5e98c1b7330dd66675869629270e6f67",
//     img: "/cert/Us_tax.png",
//     skills: ["Tax Law", "Compliance", "Regulations"]
//   },
// ]

// export default function Certifications() {
//   return (
//     <section id="certifications" className="py-20 bg-gradient-to-br from-background to-muted/20">
//       <div className="container mx-auto px-4">
//         <div className="text-center space-y-4 mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">Certifications & Badges</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Industry-recognized credentials validating expertise across data science, cloud computing, and business domains
//           </p>
//         </div>

//         {/* Stats Summary */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border text-sm">
//             <TrendingUp className="h-4 w-4 text-green-500" />
//             <span><strong>{credlyBadges.length + courseraCerts.length}</strong> Certificates</span>
//           </div>
//           <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border text-sm">
//             <CheckCircle className="h-4 w-4 text-blue-500" />
//             <span><strong>All Verified</strong></span>
//           </div>
//           <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border text-sm">
//             <Calendar className="h-4 w-4 text-purple-500" />
//             <span><strong>2024</strong> Updated</span>
//           </div>
//         </div>

//         {/* Credly Badges - Keep Original Structure */}
//         <div className="max-w-7xl mx-auto mb-10">
//           <Card className="bg-card/70">
//             <CardHeader>
//               <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
//                 <Award className="h-5 w-5 text-primary" />
//                 Credly Verified Badges
//               </CardTitle>
//               <p className="text-center text-sm text-muted-foreground">
//                 Click any badge to view the official credential record
//               </p>
//             </CardHeader>
//             <CardContent>
//               {/* Keep your original working structure */}
//               <div className="flex flex-wrap gap-6 justify-center">
//                 {credlyBadges.map((b) => (
//                   <div key={b.id} className="w-[350px]">
//                     <div
//                       data-iframe-width="300"
//                       data-iframe-height="380"
//                       data-share-badge-id={b.id}
//                       data-share-badge-host="https://www.credly.com"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Load Credly script */}
//               <Script
//                 src="https://cdn.credly.com/assets/utilities/embed.js"
//                 strategy="afterInteractive"
//               />
//             </CardContent>
//           </Card>
//         </div>

//         {/* Coursera Certificates - Fixed Layout */}
//         {courseraCerts.length > 0 && (
//           <div className="max-w-7xl mx-auto">
//             <Card className="bg-card/70">
//               <CardHeader>
//                 <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
//                   <CheckCircle className="h-5 w-5 text-green-500" />
//                   Coursera Certificates
//                 </CardTitle>
//                 <p className="text-center text-sm text-muted-foreground">
//                   Comprehensive programs covering data science, analytics, and business skills
//                 </p>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {courseraCerts.map((cert) => (
//                     <div
//                       key={cert.url}
//                       className="group bg-background/80 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
//                     >
//                       {/* Category Badge - Top Right */}
//                       <div className="relative">
//                         <div className="absolute top-3 right-3 z-10">
//                           <Badge 
//                             variant="secondary" 
//                             className={`text-xs ${
//                               cert.category === 'Data Science' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
//                               cert.category === 'Big Data' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
//                               cert.category === 'Analytics' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
//                               'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
//                             }`}
//                           >
//                             {cert.category}
//                           </Badge>
//                         </div>

//                         {/* Certificate Image - Larger */}
//                         <div className="p-6 pb-4">
//                           <img
//                             src={cert.img}
//                             alt={cert.name}
//                             className="h-40 w-full object-contain group-hover:scale-105 transition-transform duration-300"
//                           />
//                         </div>
//                       </div>

//                       {/* Certificate Content - Better Layout */}
//                       <div className="px-6 pb-6">
//                         <div className="space-y-3">
//                           {/* Title and Issuer */}
//                           <div>
//                             <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
//                               {cert.name}
//                             </h3>
//                             <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
//                           </div>

//                           {/* Skills - Color-coded to Match Category */}
//                           <div className="space-y-2">
//                             <p className="text-xs font-medium text-muted-foreground">Key Skills:</p>
//                             <div className="flex flex-wrap gap-1 justify-center">
//                               {cert.skills.map((skill) => (
//                                 <span 
//                                   key={skill}
//                                   className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                     cert.category === 'Data Science' 
//                                       ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200' :
//                                     cert.category === 'Big Data' 
//                                       ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' :
//                                     cert.category === 'Analytics' 
//                                       ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200' :
//                                     cert.category === 'Finance'
//                                       ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200' :
//                                       'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200'
//                                   }`}
//                                 >
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>

//                           {/* View Certificate Link - Centered */}
//                           <div className="pt-3 border-t border-border/30">
//                             <a
//                               href={cert.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center justify-center gap-2 text-xs text-primary group-hover:underline"
//                             >
//                               <ExternalLink className="h-3 w-3" />
//                               View Certificate
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Simple Call to Action */}
//         <div className="text-center mt-12">
//           <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-center gap-6 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Award className="h-4 w-4 text-primary" />
//                   <span><strong>Continuous Learning</strong> Commitment</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   <span><strong>100%</strong> Completion Rate</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import Script from 'next/script'
import { Award, ExternalLink, Calendar, CheckCircle, TrendingUp } from 'lucide-react'

// Keep your original Credly badge IDs - these should show the actual badges
const credlyBadges = [
  { id: '998b8b4a-4cbd-42b4-a682-a395d9cd16c6' }, 
  { id: '3c00e02d-4467-4d20-83d3-d2756162af09' },
  { id: '0c2771e7-b0b9-4e9f-bfce-8d9ca0e46d14' },
]

const courseraCerts = [
  {
    name: "Big Data with Spark and Hadoop",
    issuer: "Coursera",
    category: "Big Data",
    url: "https://coursera.org/share/27a407d022523e2327c577973241a96c",
    img: "/cert/big_data.png",
    skills: ["Apache Spark", "Hadoop", "Big Data Processing"]
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Coursera", 
    category: "Analytics",
    url: "https://coursera.org/share/240a8ab9979fa88cb82e6c521e03db41",
    img: "/cert/data_analytics.png",
    skills: ["Data Analysis", "Python", "Statistics"]
  },
  {
    name: "Introduction to Finance and Accounting",
    issuer: "Coursera",
    category: "Finance",
    url: "https://coursera.org/share/e8dc31c0c8cfc9e6c0970fac5efc9dac",
    img: "/cert/finance.png",
    skills: ["Financial Analysis", "Accounting", "Business"]
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Google / Coursera",
    category: "Data Science",
    url: "https://coursera.org/share/fa1460a3cdab1d5065aed943cdededdf",
    img: "/cert/google.png",
    skills: ["Machine Learning", "Python", "R", "Tableau"]
  },
  {
    name: "U.S. Federal Taxation",
    issuer: "Coursera",
    category: "Finance",
    url: "https://coursera.org/share/5e98c1b7330dd66675869629270e6f67",
    img: "/cert/Us_tax.png",
    skills: ["Tax Law", "Compliance", "Regulations"]
  },
]

// helper: pick color classes based on category
const categoryBg = (cat: string) => (
  cat === 'Data Science'
    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    : cat === 'Big Data'
    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    : cat === 'Analytics'
    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    : cat === 'Finance'
    ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
)

const chipBg = (cat: string) => (
  cat === 'Data Science'
    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
    : cat === 'Big Data'
    ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
    : cat === 'Analytics'
    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
    : cat === 'Finance'
    ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200'
    : 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200'
)

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Badges</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise across data science, cloud computing, and business domains
          </p>
        </div>

        {/* Stats Summary */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border text-sm">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span><strong>{credlyBadges.length + courseraCerts.length}</strong> Certificates</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border text-sm">
            <CheckCircle className="h-4 w-4 text-blue-500" />
            <span><strong>All Verified</strong></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border text-sm">
            <Calendar className="h-4 w-4 text-purple-500" />
            <span><strong>2024</strong> Updated</span>
          </div>
        </div>

        {/* Credly Badges */}
        <div className="max-w-7xl mx-auto mb-10">
          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Credly Verified Badges
              </CardTitle>
              <p className="text-center text-sm text-muted-foreground">
                Click any badge to view the official credential record
              </p>
            </CardHeader>
            <CardContent>
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

              {/* Load Credly script */}
              <Script
                src="https://cdn.credly.com/assets/utilities/embed.js"
                strategy="afterInteractive"
              />
            </CardContent>
          </Card>
        </div>

        {/* Coursera Certificates - Your preferred layout + color coding */}
        {courseraCerts.length > 0 && (
          <div className="max-w-7xl mx-auto ">
            <Card className="bg-card/70">
              <CardHeader>
                <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Coursera Certificates
                </CardTitle>
                <p className="text-center text-sm text-muted-foreground">
                  Comprehensive programs covering data science, analytics, and business skills
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-8 justify-center">
                  {courseraCerts.map((cert) => (
                    <div
                      key={cert.url}
                      className="group w-[350px] bg-background/90 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {/* Category Badge - Color Coded */}
                        <div className="relative p-4 pb-2">
                          <div className="absolute top-2 right-2">
                            <Badge
                              variant="secondary"
                              className={`text-xs px-2 py-1 bg-background/80 backdrop-blur-sm ${categoryBg(cert.category)}`}
                            >
                              {cert.category}
                            </Badge>
                          </div>

                          {/* Certificate Image */}
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <img
                              src={cert.img}
                              alt={cert.name}
                              className="h-48 w-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Certificate Content */}
                        <div className="p-4 pt-2">
                          {/* Title & Issuer */}
                          <div className="mb-3">
                            <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors mb-1">
                              {cert.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>

                          {/* Skills - Color coded chips */}
                          <div className="mb-4">
                            <p className="text-xs font-medium text-muted-foreground mb-2">Skills Covered:</p>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 rounded-md text-xs font-medium ${chipBg(cert.category)}`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* View Certificate */}
                          <div className="pt-3 border-t border-border/50">
                            <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium group-hover:underline">
                              <ExternalLink className="h-4 w-4" />
                              View Certificate
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}

                  {/* Optional placeholders to keep even rows if you like */}
                  {courseraCerts.length % 3 !== 0 && (
                    <>
                      {Array(3 - (courseraCerts.length % 3)).fill(0).map((_, index) => (
                        <div key={`placeholder-${index}`} className="w-[350px] invisible" />
                      ))}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Simple Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span><strong>Continuous Learning</strong> Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span><strong>100%</strong> Completion Rate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

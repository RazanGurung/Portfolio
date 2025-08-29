// import React, { useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
// import { Button } from './ui/button'
// import { Input } from './ui/input'
// import { Textarea } from './ui/textarea'
// import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react'
// import { personalInfo } from '../data/portfolio'
// import emailjs from '@emailjs/browser'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault()
//   setIsSubmitting(true)
  
//     try {
//       const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })
      
//       if (response.ok) {
//         setIsSubmitted(true)
//         setTimeout(() => {
//           setIsSubmitted(false)
//           setFormData({ name: '', email: '', subject: '', message: '' })
//         }, 3000)
//       } else {
//         throw new Error('Failed to send')
//       }
//     } catch (error) {
//       alert('Failed to send message. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }))
//   }

  
//   return (
//     <section id="contact" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Ready to discuss opportunities or collaborate on exciting data science projects? Let&apos;s connect!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <div className="space-y-6 animate-fade-in">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <MapPin className="h-5 w-5 text-primary" />
//                   <span>{personalInfo.location}</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Mail className="h-5 w-5 text-primary" />
//                   <a 
//                     href={`mailto:${personalInfo.email}`}
//                     className="hover:text-primary transition-colors"
//                   >
//                     {personalInfo.email}
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Connect With Me</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <Button 
//                   variant="outline" 
//                   className="w-full justify-start gap-3"
//                   onClick={() => window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer')}
//                 >
//                   <Linkedin className="h-4 w-4" />
//                   LinkedIn Profile
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   className="w-full justify-start gap-3"
//                   onClick={() => window.open(personalInfo.github, '_blank', 'noopener,noreferrer')}
//                 >
//                   <Github className="h-4 w-4" />
//                   GitHub Portfolio
//                 </Button>
//                 <Button 
//                   className="w-full justify-start gap-3"
//                   onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank', 'noopener,noreferrer')}
//                 >
//                   <Mail className="h-4 w-4" />
//                   Send Email
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             <CardHeader>
//               <CardTitle>Send Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {isSubmitted ? (
//                 <div className="text-center py-8 space-y-4">
//                   <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
//                   <h3 className="text-lg font-semibold">Message Sent!</h3>
//                   <p className="text-muted-foreground">
//                     Your email client should open shortly. Thank you for reaching out!
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} 
//                   name="contact" 
//                   method="POST"
//                   data-netlify="true"
//                   netlify-honeypot="bot-field"
//                   className="space-y-4"
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium">Name</label>
//                       <Input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Your name"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium">Email</label>
//                       <Input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Subject</label>
//                     <Input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Job Opportunity / Collaboration / General Inquiry"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Message</label>
//                     <Textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={4}
//                       placeholder="Tell me about the opportunity or project you have in mind..."
//                       required
//                     />
//                   </div>
//                   <Button 
//                     type="submit" 
//                     className="w-full gap-2"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="h-4 w-4" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // honeypot (bots will fill this, humans won't)
    'bot-field': ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const encode = (data: Record<string, string>) =>
    new URLSearchParams(data).toString()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    try {
      // Must include form-name for Netlify
      const payload = encode({ 'form-name': 'contact', ...formData })

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      })

      if (!res.ok) throw new Error('Network response was not ok')
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
      setTimeout(() => setIsSubmitted(false), 3500)
    } catch (err) {
      setErrorMsg('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting data science projects? Let&apos;s connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  onClick={() =>
                    window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer')
                  }
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  onClick={() =>
                    window.open(personalInfo.github, '_blank', 'noopener,noreferrer')
                  }
                >
                  <Github className="h-4 w-4" />
                  GitHub Portfolio
                </Button>
                <Button
                  className="w-full justify-start gap-3"
                  onClick={() =>
                    window.open(`mailto:${personalInfo.email}`, '_blank', 'noopener,noreferrer')
                  }
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="text-lg font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  // optional native fallback:
                  action="/__forms.html"
                  method="POST"
                >
                  {/* must match the static stub */}
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Honeypot (hidden from users, helps reduce spam) */}
                  <input
                    type="text"
                    name="bot-field"
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                    onChange={handleChange}
                    value={formData['bot-field']}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Collaboration / General Inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about the opportunity or project you have in mind..."
                      required
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  )}

                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

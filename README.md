Rajan Gurung - Data Scientist Portfolio
A modern, responsive portfolio showcasing data science projects, professional experience, and technical skills. Built with Next.js 15, TypeScript, and Tailwind CSS.
Show Image
🚀 Features

Modern Design: Clean, professional interface with dark/light theme support
Responsive: Optimized for all device sizes
Performance: Server-side rendering with Next.js App Router
SEO Optimized: Complete meta tags and structured data
Interactive: Smooth animations and transitions
Accessible: WCAG compliant with proper ARIA labels

🛠️ Tech Stack

Framework: Next.js 15 with App Router
Language: TypeScript
Styling: Tailwind CSS with custom design system
Components: Custom UI components with Radix UI primitives
Icons: Lucide React
Animations: CSS animations with Intersection Observer
Deployment: Vercel (recommended)

📁 Project Structure
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Reusable UI components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── data/
│   └── portfolio.ts  # Portfolio data configuration
├── lib/
│   └── utils.ts     # Utility functions
└── public/          # Static assets
🚦 Getting Started
Prerequisites

Node.js 18+
npm, yarn, or pnpm

Installation

Clone the repository
bashgit clone https://github.com/rajangurung/portfolio
cd portfolio

Install dependencies
bashnpm install
# or
yarn install
# or
pnpm install

Run the development server
bashnpm run dev
# or
yarn dev
# or
pnpm dev

Open your browser
Navigate to http://localhost:3000

⚙️ Configuration
Personal Information
Update your personal information in data/portfolio.ts:
typescriptexport const personalInfo = {
  name: "Your Name",
  title: "Your Title", 
  location: "Your Location",
  email: "your.email@example.com",
  // ... other fields
}
Projects & Experience
Add your projects and experience in the same file:
typescriptexport const projects = [
  {
    title: "Your Project",
    description: "Project description",
    // ... other fields
  }
]

export const experience = [
  {
    role: "Your Role",
    company: "Company Name",
    // ... other fields
  }
]
🎨 Customization
Colors & Themes
Modify the color scheme in app/globals.css:
css:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
Fonts
Change fonts in app/layout.tsx:
typescriptimport { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
📱 Responsive Design
The portfolio is fully responsive with breakpoints:

Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px

🔍 SEO & Analytics

Complete meta tags and Open Graph support
Structured data for better search visibility
Google Analytics ready (add your tracking ID)
Sitemap generation included

🚀 Deployment
Vercel (Recommended)

Push your code to GitHub
Connect your repo to Vercel
Deploy with zero configuration

Other Platforms
The app can be deployed to any platform supporting Node.js:

Netlify
Railway
Render
AWS Amplify

📊 Performance

100/100 Lighthouse Performance Score
< 3s First Contentful Paint
< 1s Time to Interactive
Optimized images and fonts

🤝 Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
💬 Contact
Rajan Gurung

Email: rajan.gurung@example.com
LinkedIn: linkedin.com/in/rajangurung
GitHub: github.com/rajangurung


⭐ Star this repo if you found it helpful!
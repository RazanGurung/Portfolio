"use client"

import React from 'react'
import { Brain, Database, Cpu, BarChart3, GitBranch, Zap } from 'lucide-react'

export default function FloatingElements() {
  const elements = [
    { Icon: Brain, delay: '0s', position: 'top-1/4 left-1/4', message: 'AI/ML' },
    { Icon: Database, delay: '1s', position: 'top-1/3 right-1/4', message: 'Big Data' },
    { Icon: Cpu, delay: '2s', position: 'bottom-1/4 left-1/4', message: 'Deep Learning' },
    { Icon: BarChart3, delay: '1.5s', position: 'bottom-1/3 right-1/3', message: 'Analytics' },
    { Icon: GitBranch, delay: '0.5s', position: 'top-1/2 left-1/2', message: 'MLOps' },
    { Icon: Zap, delay: '2.5s', position: 'top-2/3 right-1/4', message: 'Performance' },
  ]

  return (
    <div className="fixed inset-0 -z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000 pointer-events-none"></div>

      {/* Floating tech icons */}
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} group cursor-pointer pointer-events-auto`}
          style={{ 
            animation: `float 6s ease-in-out infinite`,
            animationDelay: element.delay 
          }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
              <element.Icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-border/50 whitespace-nowrap">
              {element.message}
            </div>

            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-75"></div>
          </div>
        </div>
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-green-500/30 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/2 left-20">
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-purple-500/30 animate-pulse"></div>
      </div>

      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        
        {/* Animated flowing lines */}
        <path
          d="M 100 200 Q 400 100 800 300 Q 1200 400 1500 200"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-dash"
        />
        <path
          d="M 0 400 Q 300 300 600 500 Q 900 600 1200 400"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-dash-reverse"
        />
      </svg>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes dash {
          0% { stroke-dasharray: 0 100; }
          50% { stroke-dasharray: 50 100; }
          100% { stroke-dasharray: 100 100; }
        }
        
        @keyframes dash-reverse {
          0% { stroke-dasharray: 100 100; }
          50% { stroke-dasharray: 50 100; }
          100% { stroke-dasharray: 0 100; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 4s ease-in-out infinite;
        }
        
        .animate-dash-reverse {
          animation: dash-reverse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
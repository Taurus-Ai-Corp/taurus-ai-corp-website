'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Sparkles, 
  BarChart3, 
  MessageSquare, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Brain,
  Search,
  Calendar,
  FileText,
  TrendingUp,
  Shield
} from 'lucide-react'

interface Tool {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ReactNode
  status: 'ready' | 'demo'
}

export default function YQGIntegrationDemo() {
  const [mounted, setMounted] = useState(false)
  const [activeTool, setActiveTool] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tools: Tool[] = [
    {
      id: 'content-generator',
      name: 'AI Content Generator',
      description: 'Generate SEO blog posts from keywords. 4 posts/month included.',
      features: [
        'SEO-optimized articles',
        'Keyword research integration',
        'Brand voice matching',
        'Auto-publish to WordPress'
      ],
      icon: <Bot className="w-6 h-6" />,
      status: 'ready'
    },
    {
      id: 'social-scheduler',
      name: 'Social Media Scheduler',
      description: 'Auto-generate 16 posts/month + auto-post to Instagram & Facebook.',
      features: [
        'AI caption generation',
        'Hashtag optimization',
        'Best time scheduling',
        'Multi-platform sync'
      ],
      icon: <Calendar className="w-6 h-6" />,
      status: 'ready'
    },
    {
      id: 'reporting-dashboard',
      name: 'Client Reporting Dashboard',
      description: 'Auto-pull Google Analytics & GSC data, generate PDF reports.',
      features: [
        'Real-time metrics',
        'White-label branding',
        'Automated scheduling',
        'Competitor benchmarking'
      ],
      icon: <BarChart3 className="w-6 h-6" />,
      status: 'ready'
    },
    {
      id: 'competitor-bot',
      name: 'Competitor Intelligence Bot',
      description: 'Weekly competitive intel: keywords, ads, traffic insights.',
      features: [
        'Keyword gap analysis',
        'Ad copy tracking',
        'Traffic estimation',
        'Weekly PDF reports'
      ],
      icon: <Search className="w-6 h-6" />,
      status: 'ready'
    }
  ]

  const benefits = [
    { label: 'Zero upfront cost', value: '$0' },
    { label: 'Deploy in 24 hours', value: '24h' },
    { label: 'Your branding', value: '100%' },
    { label: 'Increase margins', value: '+40%' }
  ]

  const partnershipTiers = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Start testing with overflow clients',
      features: [
        '3 client projects',
        'All 4 AI tools included',
        'Basic support',
        '70/30 revenue split'
      ]
    },
    {
      name: 'Growth',
      price: '$997/mo',
      description: 'Scale with dedicated AI infrastructure',
      features: [
        '15 client projects',
        'White-label dashboard',
        'Priority support',
        '60/40 revenue split'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,497/mo',
      description: 'Full AI backend for your agency',
      features: [
        'Unlimited clients',
        'Custom AI agents',
        'Dedicated manager',
        '50/50 revenue split'
      ]
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1520A6] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#1520A6]">TAURUS AI</h1>
              <p className="text-xs text-[#606060]">Powered by Gemini 1.5 + Hedera</p>
            </div>
          </div>
          <a 
            href="#contact"
            className="px-5 py-2 bg-[#1520A6] text-white text-sm font-semibold rounded-full hover:bg-[#2B37D0] transition-colors"
          >
            Book Demo Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#1520A6]/10 text-[#1520A6] text-sm font-medium rounded-full mb-6">
              Zero-Cost Integration for YQG Digital Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1520A6] mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Scale Your Agency Without<br />
              <span className="text-[#CC3366]">Losing Your Personal Touch</span>
            </h2>
            <p className="text-xl text-[#606060] mb-10 max-w-2xl mx-auto">
              We handle the AI execution. You keep the client relationships. 
              Deploy production-ready AI tools in 24 hours — at zero cost to you.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="bg-white p-4 rounded-2xl border border-[#E8E6E1]"
              >
                <p className="text-2xl font-bold text-[#1520A6]">{benefit.value}</p>
                <p className="text-sm text-[#606060]">{benefit.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#tools"
              className="px-8 py-4 bg-[#1520A6] text-white font-semibold rounded-full inline-flex items-center gap-2 hover:bg-[#2B37D0] transition-colors"
            >
              See the Tools <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#partnership"
              className="px-8 py-4 bg-white text-[#1520A6] font-semibold rounded-full border-2 border-[#1520A6] inline-flex items-center gap-2 hover:bg-[#1520A6]/5 transition-colors"
            >
              Partnership Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1520A6] mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Production-Ready AI Tools
            </h3>
            <p className="text-[#606060] max-w-xl mx-auto">
              Four integrated AI systems — fully configured, white-label ready, deployable in 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`bg-[#F8F7F4] rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                  activeTool === tool.id 
                    ? 'border-[#1520A6] shadow-lg' 
                    : 'border-transparent hover:border-[#E8E6E1]'
                }`}
                onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1520A6]/10 text-[#1520A6] flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-[#1520A6]">{tool.name}</h4>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Ready
                      </span>
                    </div>
                    <p className="text-sm text-[#606060]">{tool.description}</p>
                  </div>
                </div>

                {activeTool === tool.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-[#E8E6E1]"
                  >
                    <ul className="space-y-2">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#606060]">
                          <CheckCircle2 className="w-4 h-4 text-[#1520A6]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 px-6 bg-[#1520A6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Why This Matters for Your Clients
            </h3>
            <p className="text-white/70 max-w-xl mx-auto">
              Every piece of work includes quantum-grade security — a selling point for legal & financial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'PQC Security',
                description: 'ML-KEM-768 encryption on every deliverable. Future-proof your clients\' data.'
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Gemini 1.5 Pro',
                description: 'Latest AI model for highest quality content. Not basic GPT-3.5.'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Hedera Audit Trail',
                description: 'Blockchain-verified proof of work. Impress compliance-focused clients.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="partnership" className="py-20 px-6 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1520A6] mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Partnership Model
            </h3>
            <p className="text-[#606060] max-w-xl mx-auto">
              You keep the client relationship. We deliver the AI execution. Simple, transparent economics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnershipTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`bg-white rounded-2xl p-8 border-2 ${
                  tier.popular ? 'border-[#1520A6] relative' : 'border-[#E8E6E1]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1520A6] text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h4 className="text-xl font-bold text-[#1520A6] mb-2">{tier.name}</h4>
                <p className="text-3xl font-bold text-[#1520A6] mb-1">{tier.price}</p>
                <p className="text-sm text-[#606060] mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#606060]">
                      <CheckCircle2 className="w-4 h-4 text-[#1520A6]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 font-semibold rounded-full transition-colors ${
                  tier.popular 
                    ? 'bg-[#1520A6] text-white hover:bg-[#2B37D0]' 
                    : 'bg-[#F8F7F4] text-[#1520A6] border-2 border-[#1520A6] hover:bg-[#E8E6E1]'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#1520A6] mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Ready to Scale?
          </h3>
          <p className="text-[#606060] mb-8">
            Book a 15-minute demo. We&apos;ll show you exactly how the integration works — no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:tim@yqgdigital.ca?subject=TAURUS AI Partnership Demo"
              className="px-8 py-4 bg-[#1520A6] text-white font-semibold rounded-full inline-flex items-center gap-2 hover:bg-[#2B37D0] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Message Tim Directly
            </a>
            <a 
              href="tel:226-344-3685"
              className="px-8 py-4 bg-[#F8F7F4] text-[#1520A6] font-semibold rounded-full inline-flex items-center gap-2 hover:bg-[#E8E6E1] transition-colors"
            >
              <Zap className="w-4 h-4" />
              Call (226) 344-3685
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#F8F7F4] border-t border-[#E8E6E1]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1520A6] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-[#1520A6]">TAURUS AI Corp</span>
          </div>
          <p className="text-sm text-[#606060]">
            Windsor-Essex AI Partner • PIPEDA Compliant • Hedera Network
          </p>
        </div>
      </footer>
    </div>
  )
}
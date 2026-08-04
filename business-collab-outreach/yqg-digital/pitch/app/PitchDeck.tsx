'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Phone
} from 'lucide-react'

const faqs = [
  {
    q: "How does this work with my existing clients?",
    a: "You keep 100% of client relationships. We handle the execution. Simple as that."
  },
  {
    q: "What's the commitment?",
    a: "Start with our pilot: 3 overflow clients, free for 30 days. If you like the results, we formalize. If not, walk away."
  },
  {
    q: "Will my clients know about TAURUS AI?",
    a: "Zero. Everything is white-label. Your clients think it's you."
  },
  {
    q: "What if I need human support?",
    a: "Direct line to our team. Tim Warnholtz gets my personal cell. No offshore support."
  }
]

export default function PitchDeck() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1520A6] to-[#CC3366] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">TAURUS AI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#offer" className="text-sm text-white/70 hover:text-white transition-colors">
              The Offer
            </a>
            <a href="#faq" className="text-sm text-white/70 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-[#1520A6]/30 text-[#2B37D0] text-xs font-medium rounded-full mb-6">
              Partnership Proposal
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Scale Your Agency<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1520A6] to-[#CC3366]">
                Without Losing Your Touch
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-2xl">
              Your results speak for themselves. Let us handle the execution so you can take on more clients — without working more hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#offer"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                See The Offer <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:226-344-3685"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Tim
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-500 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <p className="text-white/60 mb-6">
                You&apos;re winning. But you can&apos;t scale because:
              </p>
              <ul className="space-y-3">
                {[
                  "You're the bottleneck on every project",
                  "More clients = more hours = less life",
                  "No recurring revenue — always chasing new deals",
                  "Enterprise clients want security you can't offer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-white/60 mb-6">
                Partner with TAURUS AI as your AI backend:
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 AI agents handle execution — you stay strategic",
                  "Unlimited capacity without hiring staff",
                  "Recurring revenue model — same clients, monthly value",
                  "Enterprise security as a selling point"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section id="offer" className="py-20 px-6 bg-[#1520A6]/20 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-[#CC3366]/30 text-[#CC3366] text-xs font-medium rounded-full mb-4">
              Zero-Risk Pilot
            </span>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Your Next 3 Clients — Free
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Give us 3 clients you&apos;re thinking of turning away. We&apos;ll deliver their work for free. If you like what we build, we formalize. If not, you walk away with $4,200 in free value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "4 SEO Blogs/Month",
                value: "$400",
                desc: "Keyword-optimized, brand-voice matched"
              },
              {
                title: "16 Social Posts/Month",
                value: "$320",
                desc: "AI captions + hashtag optimization"
              },
              {
                title: "Client Dashboard",
                value: "$200",
                desc: "White-label, auto-updating reports"
              },
              {
                title: "Weekly Competitor Intel",
                value: "$180",
                desc: "Keywords, ads, traffic analysis"
              },
              {
                title: "Bi-weekly Strategy Calls",
                value: "$300",
                desc: "Your team + our AI team"
              },
              {
                title: "PQC Security",
                value: "PRICELESS",
                desc: "Quantum encryption on everything"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <p className="text-2xl font-bold text-[#CC3366] mb-1">{item.value}</p>
                <p className="text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-xs text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/60 mb-4">No credit card. No contract. No risk.</p>
            <a 
              href="mailto:tim@yqgdigital.ca?subject=Free Pilot - 3 Clients"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#CC3366] text-white font-bold rounded-full hover:bg-[#DD4477] transition-colors text-lg"
            >
              <Sparkles className="w-5 h-5" />
              Start Free Pilot Now
            </a>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Why This Matters for Your Clients
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Every deliverable includes security features that legal & financial clients pay premium for.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Post-Quantum Security",
                desc: "ML-KEM-768 encryption. Future-proof your clients' data against quantum threats."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Gemini 1.5 Pro",
                desc: "Latest AI model. Not basic GPT-3.5. Higher quality output your clients notice."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Hedera Audit Trail",
                desc: "Blockchain-verified proof of work. Stand out from every other agency in Windsor."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1520A6]/30 text-[#2B37D0] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1520A6] to-[#CC3366]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "AI Agents" },
              { value: "70%", label: "Revenue You Keep" },
              { value: "0%", label: "Risk for You" },
              { value: "100%", label: "Your Branding" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Questions?
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-white/50" /> : <ChevronDown className="w-5 h-5 text-white/50" />}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="px-6 pb-4 text-white/60"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Ready to Scale?
          </h2>
          <p className="text-white/60 mb-8">
            Book 15 minutes. We&apos;ll show you exactly how it works — no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:tim@yqgdigital.ca?subject=Partnership Chat"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Message Tim
            </a>
            <a 
              href="tel:226-344-3685"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (226) 344-3685
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1520A6] to-[#CC3366] flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold">TAURUS AI Corp</span>
          </div>
          <p className="text-xs text-white/40">
            Windsor-Essex Partner • PIPEDA Compliant • Hedera Network
          </p>
        </div>
      </footer>
    </div>
  )
}
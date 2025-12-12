'use client'

import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send, Instagram, Linkedin, Github, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sahilmane74' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/sahilmane69' },
]

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedback('EmailJS keys are missing. Please add them to your env file.')
      return
    }

    try {
      await emailjs.send(serviceId, templateId, form, publicKey)
      setStatus('success')
      setFeedback('Message sent successfully. I will get back to you soon!')
      setForm(INITIAL_FORM)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setFeedback('Unable to send right now. Please try again in a moment.')
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 contact-gradient" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/55 to-white/40 dark:from-black/25 dark:via-black/20 dark:to-black/15 backdrop-blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-700/70 dark:text-gray-100/70">
              Let&apos;s Connect
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Tell me about your next idea.
            </h1>
            <p className="text-base text-gray-700/80 dark:text-gray-200/80 leading-relaxed max-w-xl">
              Fill out the form and I&apos;ll respond within one business day. Whether it&apos;s a product,
              portfolio, or consultation request, I’d love to hear the details.
            </p>

            <div className="rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg p-5 space-y-4">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                  <Mail size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:sahilmanecode@gmail.com"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  >
                    sahilmanecode@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                  <Phone size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+91-9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                  <MapPin size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Based In</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Pune, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 text-sm text-gray-900 dark:text-white shadow-sm hover:shadow-md transition"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-3xl border border-white/80 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-2xl shadow-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2.5 text-sm text-gray-900 dark:text-white focus:border-black focus:ring-2 focus:ring-black/10 dark:focus:border-white dark:focus:ring-white/10 transition"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2.5 text-sm text-gray-900 dark:text-white focus:border-black focus:ring-2 focus:ring-black/10 dark:focus:border-white dark:focus:ring-white/10 transition"
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Subject</span>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project, collaboration, or inquiry"
                className="w-full rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2.5 text-sm text-gray-900 dark:text-white focus:border-black focus:ring-2 focus:ring-black/10 dark:focus:border-white dark:focus:ring-white/10 transition"
              />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Share the details, timelines, and any links that help."
                className="w-full rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-3 text-sm text-gray-900 dark:text-white focus:border-black focus:ring-2 focus:ring-black/10 dark:focus:border-white dark:focus:ring-white/10 transition resize-none"
              />
            </label>

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-gray-600 dark:text-gray-300">
                I aim to respond within 24 hours.
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium shadow-lg shadow-black/10 dark:shadow-white/10 hover:-translate-y-[1px] transition disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Send size={16} className="animate-pulse" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>
            </div>

            {feedback && (
              <div
                className={`rounded-xl px-3 py-2 text-sm ${
                  status === 'success'
                    ? 'bg-green-500/15 text-green-800 dark:text-green-200'
                    : 'bg-red-500/15 text-red-800 dark:text-red-200'
                }`}
                aria-live="polite"
              >
                {feedback}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  )
}


'use client'

import { motion, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import {
  heroContent,
  aboutContent,
  experienceContent,
  testimonialsContent,
  contactContent,
  type Experience,
  type Testimonial
} from '@/content'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white" ref={containerRef}>
        {/* Hero Section - Apple-inspired clean design */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ y: heroY, opacity: heroOpacity }}
          aria-label="Hero section with introduction"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30" />

          {/* Floating geometric elements - very subtle */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
          </div>

          <div className="container text-center relative z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-gray-900 mb-6 leading-[0.9]">
                {heroContent.name}
              </h1>
              <motion.p
                className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {heroContent.tagline}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-32"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <a
                  href={heroContent.socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-label={heroContent.socialLinks.linkedin.label}
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={heroContent.socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={heroContent.socialLinks.github.label}
                  >
                    <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <button
                    onClick={() => window.location.href = `mailto:${atob(heroContent.socialLinks.email.encoded)}`}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={heroContent.socialLinks.email.label}
                  >
                    <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll indicator - Apple style */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <motion.div
                className="flex flex-col items-center text-gray-400"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm mb-2 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section - Apple-inspired layout */}
        <section className="py-24 sm:py-32 bg-white" aria-label="About Vinny Carpenter">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            >
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
                  {aboutContent.title}
                </h2>
                <div className="space-y-6">
                  {aboutContent.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-xl text-gray-600 leading-relaxed font-light"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>

              <motion.div
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={aboutContent.image.src}
                    alt={aboutContent.image.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Subtle floating element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section - Apple-inspired clean cards */}
        <section className="py-24 sm:py-32 bg-gray-50/30">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                {experienceContent.title}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {experienceContent.experiences.map((exp: Experience, index: number) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                          {exp.period}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
                          {exp.role}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          {exp.company}
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {exp.description.map((desc: string, i: number) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <p className="text-lg text-gray-600 leading-relaxed font-light">{desc}</p>
                        </div>
                      ))}
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Apple-inspired clean design */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                {testimonialsContent.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {testimonialsContent.subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {testimonialsContent.testimonials.map((testimonial: Testimonial, index: number) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="bg-gray-50/50 rounded-3xl p-8 lg:p-10 hover:bg-gray-50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    {/* Subtle quote mark */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-light relative z-10">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-gray-600 font-medium">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Apple-inspired final CTA */}
        <section className="py-24 sm:py-32 bg-gray-50/30">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
                {contactContent.title}
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                {contactContent.description}
              </p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={contactContent.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={contactContent.cta.label}
                >
                  {contactContent.cta.text}
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <div className="flex items-center gap-4">
                  <a
                    href={heroContent.socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label={heroContent.socialLinks.github.label}
                  >
                    <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <button
                    onClick={() => window.location.href = `mailto:${atob(heroContent.socialLinks.email.encoded)}`}
                    className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label={heroContent.socialLinks.email.label}
                  >
                    <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  )
}

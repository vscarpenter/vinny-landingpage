'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { heroContent, aboutContent, contactContent } from '@/content'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-32 sm:w-64 h-32 sm:h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </motion.div>

        <div className="container text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heroContent.name}
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroContent.tagline}
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 mb-16 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={heroContent.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-secondary hover:text-accent hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md text-lg sm:text-xl"
              aria-label={heroContent.socialLinks.linkedin.label}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={heroContent.socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-secondary hover:text-accent hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md text-lg sm:text-xl"
              aria-label={heroContent.socialLinks.github.label}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <button
              onClick={() => {
                const email = atob(heroContent.socialLinks.email.encoded);
                window.location.href = `mailto:${email}`;
              }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-secondary hover:text-accent hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md text-lg sm:text-xl cursor-pointer"
              aria-label={heroContent.socialLinks.email.label}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
              Email
            </button>
          </motion.div>
          <motion.div
            className="absolute bottom-[-100px] left-0 right-0 mx-auto w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ opacity, scale }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-secondary">Scroll to explore</span>
              <motion.div
                className="w-6 h-10 border-2 border-secondary rounded-full p-1"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mx-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">{aboutContent.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <Image
                  src={aboutContent.image.src}
                  alt={aboutContent.image.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">{contactContent.title}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
              {contactContent.description}
            </p>
            <motion.a
              href={contactContent.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-full text-base sm:text-lg font-medium hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={contactContent.cta.label}
            >
              {contactContent.cta.text}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

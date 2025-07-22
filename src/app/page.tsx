'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Vinny Carpenter
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-light">
                Leading with humility, driving with purpose.
              </p>
            </div>

            {/* Narrative */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">I build engineering organizations that deliver business value with speed, scale with confidence, and thrive on trust.</strong>
              </p>

              <p>
                I currently serve as Vice President of Engineering at a Fortune 100 company, leading Cloud, Platform & DevOps teams that power mission-critical platforms. With over 30 years of experience across education, manufacturing, financial services, investment management, and insurance, I've learned how to turn complex technology challenges into opportunities that drive business outcomes.
              </p>

              <p>
                Learning fuels everything I do. I stay on the edge of technology through books, podcasts, hands-on coding, and contributions to open-source projects. I speak at industry conferences and maintain coding skills in Java, JavaScript, and Python, as staying close to the craft helps me become a better leader.
              </p>

              <p>
                I've guided organizations through significant transformations, including migrating from legacy systems to modern cloud architectures, embedding DevOps culture within engineering teams, and mentoring developers who have grown into technical leaders themselves. These efforts have unlocked faster delivery, higher reliability, and better business outcomes.
              </p>

              <p>
              I believe in servant leadership - my job is to clear roadblocks and help my teams grow. I focus on building a culture where people treat each other with kindness and respect. When you lead with trust and integrity, teams not only perform well, but they also stay together. We've maintained a retention rate of over 95% because people feel genuinely supported and empowered to do their best work.</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="https://linkedin.com/in/vinnycarpenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/vscarpenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="mailto:vscarpenter@gmail.com"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                Email
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/vinnycarpenter-headshot.png"
                alt="Vinny Carpenter - Cloud & DevOps Engineering Leader"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

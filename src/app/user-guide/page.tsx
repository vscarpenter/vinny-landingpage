'use client'

import { motion } from 'framer-motion'
import { userGuideContent } from '@/content/userGuide'

export default function UserGuide() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-light text-blue-600 mb-4">
            {userGuideContent.title}
          </h1>
          <p className="text-lg text-gray-600 italic">
            {userGuideContent.subtitle}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {userGuideContent.sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white"
            >
              <h2 className="text-2xl font-medium text-blue-600 mb-6 pb-2 border-b-2 border-gray-200">
                {section.title}
              </h2>
              
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold mt-1 flex-shrink-0">•</span>
                    <div className="flex-grow">
                      {item.label ? (
                        <>
                          <strong className="text-gray-900">{item.label}</strong>
                          {item.description && (
                            <span className="text-gray-700"> – {item.description}</span>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-700">{item.description}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        {/* Final Thought */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: userGuideContent.sections.length * 0.1 }}
          className="mt-12 bg-gray-50 p-6 border-l-4 border-blue-600 rounded-r-lg"
        >
          <p className="text-gray-700 italic">
            <strong className="text-blue-600">Final Thought:</strong> {userGuideContent.finalThought.text}
          </p>
        </motion.div>

        {/* Navigation back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: (userGuideContent.sections.length + 1) * 0.1 }}
          className="mt-12 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.8 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  'Strategic media partnerships',
  'Compelling content creation',
  'Impactful social media engagement',
  'Effective media buying',
  'Trusted international media agency services',
  'Targeted digital advertising',
  'Full-scale event management',
]

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-flow relative py-16 px-6 md:px-12"
    >
      {/* Accent blur background */}
      <div
        aria-hidden="true"
        className="absolute left-0 max-w-7xl h-72 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: 'var(--color-accent)', opacity: 0.1 }}
      />

      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="font-heading text-3xl md:text-5xl font-extrabold mb-8"
          variants={itemVariants}
          style={{ color: 'var(--color-primary)' }}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="leading-relaxed text-lg md:text-xl mb-14"
          variants={itemVariants}
          style={{ color: 'var(--color-primary)' }}
        >
          PAL Trading Plc is a vibrant and forward-thinking media and entertainment company at
          the forefront of Ethiopia’s rapidly evolving media landscape. Built on a foundation of
          bold ideas and a passion for storytelling, we are here to shape the future of media.
        </motion.p>
      </motion.div>

      {/* Services Panels */}
      <motion.div
        className="max-w-3xl mx-auto space-y-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="border-l-8 rounded-md bg-white p-6 shadow-sm cursor-default"
            style={{
              borderColor: idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
              color: 'var(--color-primary)',
            }}
          >
            <p className="text-lg font-semibold">{service}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission, Vision, Core Values, Competitive Advantage Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {[
          {
            title: 'Mission Statement',
            content:
              'To create and deliver compelling media experiences that ENTERTAIN, INFORM, and CONNECT audiences while driving value for our partners and stakeholders.',
            bgColor: 'var(--color-primary)',
          },
          {
            title: 'Vision Statement',
            content:
              'To be the premier media and entertainment company in Ethiopia, recognized for innovation, creativity, and excellence in content creation and delivery.',
            bgColor: 'var(--color-accent)',
          },
          {
            title: 'Core Values',
            content: (
              <ul className="list-disc list-inside space-y-1 text-lg font-medium text-white">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Quality</li>
                <li>Collaboration</li>
                <li>Community Engagement</li>
              </ul>
            ),
            bgColor: 'var(--color-primary)',
          },
          {
            title: 'Competitive Advantage',
            content:
              'Diverse revenue model, commitment to high-quality content, and leveraging cutting-edge digital platforms, supported by an experienced management team with deep understanding of the Ethiopian media landscape.',
            bgColor: 'var(--color-accent)',
          },
        ].map(({ title, content, bgColor }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="rounded-lg p-8 shadow-lg cursor-default"
            style={{ backgroundColor: bgColor }}
          >
            <h3 className="font-semibold text-2xl mb-4 text-white">{title}</h3>
            {typeof content === 'string' ? (
              <p className="text-white text-lg">{content}</p>
            ) : (
              content
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

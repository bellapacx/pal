'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'FinTech Investment Handover',
    client: 'EthioFin',
    objective: 'Capture and produce event coverage for a high-profile handover ceremony.',
    result: 'Delivered multi-angle video, drone shots, and interviews within 24 hours.',
    image: '/images/projects/fintech-event.jpg',
  },
  {
    title: 'Brand Launch Documentary',
    client: 'Shine FM',
    objective: 'Create a brand reveal and behind-the-scenes storytelling video.',
    result: 'Boosted audience engagement by 60% in first month.',
    image: '/images/projects/shine-launch.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <section className="px-4 md:px-16 py-16 bg-swirl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Work & Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow hover:border-accent transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-accent text-sm mb-2">Client: {project.client}</p>
              <p className="text-sm text-white/90 mb-2">
                <span className="font-semibold">Objective:</span> {project.objective}
              </p>
              <p className="text-sm text-white/80">
                <span className="font-semibold">Result:</span> {project.result}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Keystone Group Investment Plc', logo: '/images/partners/keystone.png' },
  { name: 'Dasoma Technologies', logo: '/images/partners/dasoma.png' },
]

const testimonials = [
  {
    name: 'Amanuel K.',
    title: 'CEO, Keystone Group',
    quote:
      'PAL Trading transformed our media presence. Their production quality and professionalism are unmatched.',
  },
  {
    name: 'Sara M.',
    title: 'Project Manager, Dasoma',
    quote:
      'Working with PAL was seamless. They captured our vision perfectly and delivered ahead of schedule.',
  },
  {
    name: 'Yonatan B.',
    title: 'Director, Digital Lottery',
    quote:
      'From event coverage to branding, PAL Trading handled it all with excellence.',
  },
]

export default function ClientsPage() {
  return (
    <main className="px-6 py-16 bg-gray-50 text-primary bg-grayBg">
      <section className="max-w-6xl mx-auto">
        {/* Partners Logos */}
        <h2 className="text-3xl font-bold text-center mb-10">Our Clients & Partners</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-semibold text-center mt-20 mb-6">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md"
            >
              <p className="italic text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.title}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Eyob Hailemariam',
    role: 'Founder & Managing Director',
    photo: '/images/team/eyob.jpg',
  },
  {
    name: 'Mekdes Getachew',
    role: 'Head of Creative',
    photo: '/images/team/mekdes.jpg',
  },
  {
    name: 'Abel L.',
    role: 'Technical Lead',
    photo: '/images/team/abel.jpg',
  },
  {
    name: 'Yordanos T.',
    role: 'Media & PR Coordinator',
    photo: '/images/team/yordanos.jpg',
  },
]

export default function TeamPage() {
  return (
    <main className="px-6 py-12 bg-flow text-primary">
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Leadership Team</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10">
          At PAL Trading plc, our strength lies in our people. Meet the creative minds and strategic thinkers behind our media innovations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-md"
            >
              <div className="w-60 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full text-black"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

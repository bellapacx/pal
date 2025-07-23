'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-swirl flex flex-col items-center justify-center text-center px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-heading font-bold text-white"
      >
        Crafting Stories. Defining the Future.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl font-subheading text-accent"
      >
        Innovative Media and Entertainment Solutions for Ethiopia&apos;s Dynamic Market.
      </motion.p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <button className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
          Explore Our Services
        </button>
        <button className="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-md font-semibold transition">
          Partner With Us
        </button>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition">
          Watch Our Latest Show
        </button>
      </div>
    </section>
  )
}

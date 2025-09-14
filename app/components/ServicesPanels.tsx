'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '../content/services'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function ServicesPanels() {
  return (
    <section className="py-20 bg-grayBg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Core Services
        </h2>

        {/* Desktop grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map(({ Icon, title, description, slug, cta }, index) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-xl relative overflow-hidden"
              style={{
                borderLeftWidth: '8px',
                borderStyle: 'solid',
                borderImageSlice: 1,
                borderImageSource:
                  'linear-gradient(180deg, #F26522, #0B2240)',
              }}
              whileHover={{ borderImageSource: 'linear-gradient(90deg, #F26522, #0B2240, #F26522)' }}
            >
              <div className="flex items-center mb-4 text-accent group">
                <Icon
                  size={28}
                  className="mr-3 text-gradient transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
                />
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{description}</p>
              <Link
                href={`../${slug}`}
                className="text-accent font-semibold hover:underline"
              >
                {cta} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-16">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
          >
            {services.map(({ Icon, title, description, slug, cta }) => (
              <SwiperSlide key={slug}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-md cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-xl relative overflow-hidden"
                  style={{
                    borderLeftWidth: '8px',
                    borderStyle: 'solid',
                    borderImageSlice: 1,
                    borderImageSource:
                      'linear-gradient(180deg, #F26522, #0B2240)',
                  }}
                >
                  <div className="flex items-center mb-4 text-accent group">
                    <Icon
                      size={28}
                      className="mr-3 text-gradient transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
                    />
                    <h3 className="text-xl font-semibold text-primary">{title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{description}</p>
                  <Link
                    href={`/services/${slug}`}
                    className="text-accent font-semibold hover:underline"
                  >
                    {cta} &rarr;
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">What Our Clients Say</h3>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="italic text-gray-700 text-lg max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg cursor-default"
          >
            “PAL Trading Plc has transformed our media presence with their innovative solutions and dedicated service. Their team is professional, creative, and truly understands our needs.”
            <footer className="mt-4 font-semibold text-primary">- Keystone Group Investment Plc</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}

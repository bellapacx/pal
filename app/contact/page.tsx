'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)

    try {
      // TODO: Replace with actual API call (e.g., EmailJS, Resend)
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-12 bg-white text-primary bg-swirl">
      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-200">Contact Us</h2>
        <p className="text-gray-200 text-center mb-10">
          We'd love to hear from you! Fill out the form below and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </main>
  )
}

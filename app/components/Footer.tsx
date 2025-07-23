import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-heading font-bold">PAL Trading plc</h2>
          <p className="mt-2 text-sm opacity-90">Crafting Stories. Defining the Future.</p>
          <p className="mt-4 text-sm">
            Email:{' '}
            <a href="mailto:paltradingplc@gmail.com" className="underline hover:text-accent">
              paltradingplc@gmail.com
            </a>
          </p>
          <p className="text-sm">Mobile: +251911652730, +251911161481</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 pt-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-accent transition-colors">
              <FaTiktok />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-accent transition-colors">
              <FaTelegramPlane />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} PAL Trading plc. All rights reserved.
      </div>
    </footer>
  )
}

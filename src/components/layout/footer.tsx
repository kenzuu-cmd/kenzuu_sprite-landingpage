'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/icons/social-icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-sprite-green-dark border-t border-gray-200">
      <div className="container mx-auto py-16 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="group">
            <img
              src="/assets/sprite-logo2.png"
              alt="Sprite logo"
              className="footer-logo h-[26px] w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="#"
              className="text-sprite-green-dark hover:text-sprite-green transition-colors duration-300 font-semibold"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sprite-green-dark hover:text-sprite-green transition-colors duration-300 font-semibold"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sprite-green-dark hover:text-sprite-green transition-colors duration-300 font-semibold"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sprite-green-dark hover:text-sprite-green transition-colors duration-300 font-semibold"
            >
              Terms of Use
            </Link>
          </nav>

          {/* Social Icons - Perfectly Centered */}
          <div className="footer-socials flex justify-center items-center gap-8">
            <motion.a
              href="https://x.com/sprite"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="footer-icon-link"
            >
              <XIcon className="footer-icon w-7 h-7 text-sprite-green-dark hover:text-sprite-green transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://instagram.com/sprite"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="footer-icon-link"
            >
              <InstagramIcon className="footer-icon w-7 h-7 text-sprite-green-dark hover:text-sprite-green transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://facebook.com/sprite"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="footer-icon-link"
            >
              <FacebookIcon className="footer-icon w-7 h-7 text-sprite-green-dark hover:text-sprite-green transition-colors duration-300" />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-600">
            © {currentYear} The Coca-Cola Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

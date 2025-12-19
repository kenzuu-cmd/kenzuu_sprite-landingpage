'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SpriteLogo } from '@/components/icons/sprite-logo'
import {
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/icons/social-icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 text-muted-foreground border-t border-sprite-green/20">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center group"
            >
              <SpriteLogo
                width={473}
                height={347}
                className="h-8 max-w-[70px] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,214,100,0.6)]"
              />
            </Link>
            <p className="text-center text-sm md:text-left text-foreground/60">
              © {currentYear} The Coca-Cola Company. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="#"
              className="hover:text-sprite-green transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:text-sprite-green transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:text-sprite-green transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-sprite-green transition-colors duration-300 font-medium"
            >
              Terms of Use
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              aria-label="X"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <XIcon className="h-6 w-6 text-foreground/60 hover:text-sprite-green transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon className="h-6 w-6 text-foreground/60 hover:text-sprite-green transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Facebook"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon className="h-6 w-6 text-foreground/60 hover:text-sprite-green transition-colors duration-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { motion } from 'framer-motion'
import { SpriteLogo } from '@/components/icons/sprite-logo'
import { Button } from '@/components/ui/button'
import {
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/icons/social-icons'
import type { DrinkConfig } from '@/lib/config'

interface HeroSectionProps {
  drinkConfig: DrinkConfig
}

export function HeroSection({ drinkConfig }: HeroSectionProps) {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <video
          src="/assets/sprite-hero.webm"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/sprite-hero-fallback.webp"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Sprite hero video animation"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-r from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-xl text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <SpriteLogo
                  width={473}
                  height={347}
                  className="w-[24vw] min-w-[100px] max-w-[200px] drop-shadow-[0_0_20px_rgba(0,214,100,0.5)]"
                />
              </motion.div>

              <motion.h1
                className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none sprite-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {drinkConfig.name}
              </motion.h1>

              <motion.p
                className="mt-4 text-2xl md:text-3xl font-semibold text-sprite-green-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {drinkConfig.subtitle}
              </motion.p>

              <motion.p
                className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {drinkConfig.description}
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Button
                  size="lg"
                  className="bg-sprite-green hover:bg-sprite-green-light text-black font-bold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,214,100,0.6)] animate-pulse-green"
                >
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-sprite-green text-sprite-green hover:bg-sprite-green hover:text-black font-bold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Buy Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="#" aria-label="X" className="group">
            <XIcon className="h-7 w-7 text-white/60 group-hover:text-sprite-green transition-all duration-300 group-hover:scale-110" />
          </a>
          <a href="#" aria-label="Instagram" className="group">
            <InstagramIcon className="h-7 w-7 text-white/60 group-hover:text-sprite-green transition-all duration-300 group-hover:scale-110" />
          </a>
          <a href="#" aria-label="Facebook" className="group">
            <FacebookIcon className="h-7 w-7 text-white/60 group-hover:text-sprite-green transition-all duration-300 group-hover:scale-110" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import type { DrinkConfig } from '@/lib/config'

interface HeroSectionProps {
  drinkConfig: DrinkConfig
}

export function HeroSection({ drinkConfig }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-sprite-green"
    >
      <div className="absolute inset-0 h-full w-full">
        <video
          src="/assets/sprite-hero.webm"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/sprite-hero-fallback.webp"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          aria-label="Sprite hero video animation"
        />
        {/* Gradient overlay for improved text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/assets/sprite-logo.png"
                  alt="Sprite logo"
                  className="w-[32vw] min-w-[140px] max-w-[280px] drop-shadow-2xl"
                />
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl font-bold text-white drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {drinkConfig.subtitle}
              </motion.p>

              <motion.p
                className="mt-6 text-lg md:text-xl text-white leading-relaxed max-w-xl drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {drinkConfig.description}
              </motion.p>

              <motion.div
                className="mt-12 flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-sprite-green-dark font-bold rounded-lg px-10 py-7 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-3 border-white bg-transparent text-white hover:bg-white hover:text-sprite-green-dark font-bold rounded-lg px-10 py-7 text-lg transition-all duration-300 hover:scale-105"
                >
                  Buy Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

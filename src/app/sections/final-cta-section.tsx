'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function FinalCtaSection() {
  const bgImage = PlaceHolderImages.find((p) => p.id === 'final-cta-bg')
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-40 bg-secondary overflow-hidden"
    >
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          data-ai-hint={bgImage.imageHint}
          fill
          className="object-cover z-0 opacity-5"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-sprite-green/5 via-transparent to-sprite-green/10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl sm:text-7xl font-black tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sprite-green sprite-glow">Ready for a</span>
            <br />
            <span className="text-sprite-green-light">Refreshment?</span>
          </motion.h2>

          <motion.p
            className="mt-8 text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Don't wait. Grab a{' '}
            <span className="text-sprite-green font-bold">
              crisp, clean, and refreshing
            </span>{' '}
            Sprite today and experience the ultimate lemon-lime soda.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full bg-sprite-green hover:bg-sprite-green-light text-black font-bold px-10 py-7 text-xl shadow-2xl hover:shadow-[0_0_50px_rgba(0,214,100,0.8)] transition-all duration-300 animate-pulse-green"
              >
                Find a Store
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-3 border-sprite-green text-sprite-green hover:bg-sprite-green hover:text-black font-bold px-10 py-7 text-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,214,100,0.5)]"
              >
                Shop Online
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

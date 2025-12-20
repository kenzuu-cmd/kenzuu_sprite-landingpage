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
      className="relative py-40 sm:py-48 bg-sprite-green overflow-hidden"
    >
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          data-ai-hint={bgImage.imageHint}
          fill
          className="object-cover z-0 opacity-30"
        />
      )}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl sm:text-7xl font-black tracking-tighter text-white leading-tight drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready for a Refreshment?
          </motion.h2>

          <motion.p
            className="mt-10 text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't wait. Grab a{' '}
            <span className="font-bold">crisp, clean, and refreshing</span>{' '}
            Sprite today and experience the ultimate lemon-lime soda.
          </motion.p>

          <motion.div
            className="mt-14 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="rounded-lg bg-white hover:bg-gray-100 text-sprite-green-dark font-bold px-12 py-7 text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Find a Store
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-3 border-white bg-transparent text-white hover:bg-white hover:text-sprite-green-dark font-bold px-12 py-7 text-xl transition-all duration-300 shadow-lg"
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

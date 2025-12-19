'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-image')

  return (
    <section id="product" className="py-32 sm:py-40 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-sprite-green-dark leading-tight">
              Crisp. Clean.{' '}
              <span className="text-sprite-green">Refreshing.</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Sprite is the iconic lemon-lime soda that has been quenching
              thirsts for decades. Its signature sharp, citrusy taste provides
              an instant{' '}
              <span className="text-sprite-green font-bold">
                burst of refreshment
              </span>{' '}
              without any of the heaviness.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Made with{' '}
              <span className="text-sprite-green font-bold">
                100% natural flavors
              </span>
              , every sip of Sprite is a moment of pure, clean enjoyment. It's
              the perfect companion for any meal, a refreshing mixer, or a crisp
              pick-me-up on its own.
            </p>
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-sprite-green/15 rounded-lg border-2 border-sprite-green/40 shadow-sm"
              whileHover={{
                scale: 1.03,
                borderColor: 'rgba(0, 200, 80, 0.7)',
                boxShadow: '0 4px 12px rgba(0, 200, 80, 0.2)',
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sprite-green-dark font-bold text-xl">
                ✓ 100% Natural Flavors
              </span>
            </motion.div>
          </motion.div>
          {aboutImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

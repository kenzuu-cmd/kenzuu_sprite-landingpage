'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-image')

  return (
    <section
      id="product"
      className="py-24 sm:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter">
              <span className="text-sprite-green">Crisp.</span>{' '}
              <span className="text-sprite-green-light">Clean.</span>{' '}
              <span className="text-white">Refreshing.</span>
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Sprite is the iconic lemon-lime soda that has been quenching
              thirsts for decades. Its signature sharp, citrusy taste provides
              an instant{' '}
              <span className="text-sprite-green font-semibold">
                burst of refreshment
              </span>{' '}
              without any of the heaviness.
            </p>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Made with{' '}
              <span className="text-sprite-green-light font-semibold">
                100% natural flavors
              </span>
              , every sip of Sprite is a moment of pure, clean enjoyment. It's
              the perfect companion for any meal, a refreshing mixer, or a crisp
              pick-me-up on its own.
            </p>
            <motion.div
              className="inline-block px-6 py-3 glass-effect rounded-full border-2 border-sprite-green/30"
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(0, 214, 100, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sprite-green font-bold text-lg">
                ✓ 100% Natural Flavors
              </span>
            </motion.div>
          </motion.div>
          {aboutImage && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-2xl border-2 border-sprite-green/20 hover:border-sprite-green/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,214,100,0.3)]">
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

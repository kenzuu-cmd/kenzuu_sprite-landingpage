'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const ingredients = [
  'Carbonated Water',
  'High Fructose Corn Syrup',
  'Citric Acid',
  'Natural Flavors',
  'Sodium Citrate',
  'Sodium Benzoate (to Protect Taste)',
]

const highlights = [
  { text: '100% Natural Flavors', icon: CheckCircle2 },
  { text: 'No Caffeine', icon: CheckCircle2 },
  { text: 'Crisp Lemon-Lime Taste', icon: CheckCircle2 },
]

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      className="relative py-32 sm:py-40 bg-sprite-green overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      >
        <Image
          src="/assets/sprite-hand-left.png"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.25 }}
          aria-hidden="true"
        />
      </div>

      <div
        className="container mx-auto px-6 sm:px-8 lg:px-12 relative"
        style={{ zIndex: 10 }}
      >
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white drop-shadow-lg">
            What's Inside?
          </h2>
          <p className="mt-8 text-xl text-white font-medium">
            Simple, quality ingredients for that signature{' '}
            <span className="font-bold">crisp taste</span>.
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="white-card p-10 rounded-2xl space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-sprite-green-dark">
              Ingredient List
            </h3>
            <ul className="space-y-5">
              {ingredients.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-lg text-gray-800"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="h-3 w-3 rounded-full bg-sprite-green mr-4"></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="white-card p-10 rounded-2xl space-y-8 border-2 border-sprite-green/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-sprite-green">
              Benefit Highlights
            </h3>
            <ul className="space-y-6">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-xl text-gray-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <item.icon className="h-8 w-8 text-sprite-green mr-4" />
                  <span className="font-semibold">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

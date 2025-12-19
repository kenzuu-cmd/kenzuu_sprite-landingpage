'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

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
    <section id="ingredients" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter">
            What's <span className="text-sprite-green">Inside?</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Simple, quality ingredients for that signature{' '}
            <span className="text-sprite-green-light font-semibold">
              crisp taste
            </span>
            .
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="glass-effect p-8 rounded-2xl space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-sprite-green">
              Ingredient List
            </h3>
            <ul className="space-y-4">
              {ingredients.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-sprite-green mr-4 animate-pulse"></span>
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="glass-effect p-8 rounded-2xl space-y-6 border-2 border-sprite-green/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-sprite-green-light">
              Benefit Highlights
            </h3>
            <ul className="space-y-5">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <item.icon className="h-8 w-8 text-sprite-green mr-4 animate-pulse" />
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

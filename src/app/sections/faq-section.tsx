'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is there caffeine in Sprite?',
    answer:
      'No, Sprite is caffeine-free, making it a great choice for any time of day or night.',
  },
  {
    question: 'What flavors are used in Sprite?',
    answer:
      'Sprite is made with 100% natural lemon and lime flavors to give it its signature crisp and clean taste.',
  },
  {
    question: 'Is Sprite available in a zero sugar version?',
    answer:
      'Yes! For the same great taste without the sugar, you can enjoy Sprite Zero Sugar.',
  },
  {
    question: 'What is the shelf life of a can of Sprite?',
    answer:
      'For the best taste and crispness, we recommend consuming Sprite by the date printed on the bottom of the can.',
  },
]

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter">
            Frequently Asked{' '}
            <span className="text-sprite-green">Questions</span>
          </h2>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-effect border-2 border-sprite-green/20 px-6 rounded-xl hover:border-sprite-green/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-lg text-left font-semibold hover:text-sprite-green transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

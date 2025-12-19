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
    <section id="faq" className="py-32 sm:py-40 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-sprite-green-dark">
            Frequently Asked{' '}
            <span className="text-sprite-green">Questions</span>
          </h2>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="white-card border border-gray-200 px-8 py-2 rounded-xl hover:border-sprite-green/40 transition-all duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="text-lg text-left font-bold text-sprite-green-dark hover:text-sprite-green transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
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

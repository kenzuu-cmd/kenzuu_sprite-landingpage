'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const FactRow = ({
  label,
  value,
  isBold = false,
  indent = false,
}: {
  label: string
  value: string
  isBold?: boolean
  indent?: boolean
}) => (
  <div
    className={`flex justify-between border-t border-gray-300 py-1 text-gray-800 ${
      isBold ? 'font-bold' : ''
    } ${indent ? 'pl-4' : ''}`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </div>
)

export function NutritionSection() {
  return (
    <section id="nutrition" className="py-32 sm:py-40 bg-sprite-green">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white drop-shadow-lg">
            Nutrition Facts
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge className="bg-white text-sprite-green-dark border-none px-6 py-3 text-lg font-bold shadow-md">
              Zero Fat
            </Badge>
            <Badge className="bg-white text-sprite-green-dark border-none px-6 py-3 text-lg font-bold shadow-md">
              No Caffeine
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="w-full max-w-md p-6 border-2 border-gray-100 shadow-2xl font-mono hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 bg-white">
            <CardContent className="p-3 space-y-2 text-sm">
              <h3 className="text-4xl font-extrabold mb-2 text-sprite-green-dark">
                Nutrition Facts
              </h3>
              <p className="border-t border-gray-300 pt-2 text-base text-gray-800">
                1 serving per container
              </p>
              <p className="flex justify-between font-bold text-base text-gray-800">
                <span>Serving size</span>
                <span>1 can (12 oz)</span>
              </p>
              <div className="border-t-8 border-sprite-green my-2"></div>
              <p className="text-right font-bold text-xs text-gray-600">
                % Daily Value*
              </p>
              <div className="border-t border-gray-300"></div>
              <FactRow label="Calories" value="140" isBold />
              <FactRow label="Total Fat" value="0g" isBold />
              <FactRow label="Sodium" value="65mg" isBold />
              <FactRow label="Total Carbohydrate" value="38g" isBold />
              <FactRow label="Total Sugars" value="38g" indent />
              <FactRow label="Includes 38g Added Sugars" value="76%" indent />
              <FactRow label="Protein" value="0g" isBold />
              <div className="border-t-4 border-sprite-green my-2"></div>
              <p className="text-xs text-gray-600 leading-relaxed">
                *The % Daily Value (DV) tells you how much a nutrient in a
                serving of food contributes to a daily diet. 2,000 calories a
                day is used for general nutrition advice.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

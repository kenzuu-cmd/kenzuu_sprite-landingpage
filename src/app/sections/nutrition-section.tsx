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
    className={`flex justify-between border-t border-sprite-green/20 py-1 ${
      isBold ? 'font-bold' : ''
    } ${indent ? 'pl-4' : ''}`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </div>
)

export function NutritionSection() {
  return (
    <section
      id="nutrition"
      className="py-24 sm:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter">
            <span className="text-sprite-green">Nutrition</span> Facts
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Badge className="bg-sprite-green/20 text-sprite-green border-sprite-green/50 px-4 py-2 text-base font-semibold">
              Zero Fat
            </Badge>
            <Badge className="bg-sprite-green-light/20 text-sprite-green-light border-sprite-green-light/50 px-4 py-2 text-base font-semibold">
              No Caffeine
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="w-full max-w-md p-6 border-3 border-sprite-green/40 shadow-2xl font-mono hover:shadow-[0_0_50px_rgba(0,214,100,0.3)] transition-all duration-500 glass-effect">
            <CardContent className="p-3 space-y-2 text-sm">
              <h3 className="text-4xl font-extrabold mb-2 text-sprite-green">
                Nutrition Facts
              </h3>
              <p className="border-t border-sprite-green/30 pt-2 text-base">
                1 serving per container
              </p>
              <p className="flex justify-between font-bold text-base">
                <span>Serving size</span>
                <span>1 can (12 oz)</span>
              </p>
              <div className="border-t-8 border-sprite-green my-2"></div>
              <p className="text-right font-bold text-xs text-muted-foreground">
                % Daily Value*
              </p>
              <div className="border-t border-sprite-green"></div>
              <FactRow label="Calories" value="140" isBold />
              <FactRow label="Total Fat" value="0g" isBold />
              <FactRow label="Sodium" value="65mg" isBold />
              <FactRow label="Total Carbohydrate" value="38g" isBold />
              <FactRow label="Total Sugars" value="38g" indent />
              <FactRow label="Includes 38g Added Sugars" value="76%" indent />
              <FactRow label="Protein" value="0g" isBold />
              <div className="border-t-4 border-sprite-green my-2"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
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

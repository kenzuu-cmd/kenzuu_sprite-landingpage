'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const reviews = [
  {
    name: 'Alex R.',
    avatarId: 'review-avatar-1',
    rating: 5,
    text: 'The absolute best for a hot day. That lemon-lime kick is unbeatable. Nothing else compares!',
  },
  {
    name: 'Samantha K.',
    avatarId: 'review-avatar-2',
    rating: 5,
    text: "My go-to drink forever. It's so crisp and clean, never too sweet. Perfect for any occasion.",
  },
  {
    name: 'Mike T.',
    avatarId: 'review-avatar-3',
    rating: 4,
    text: 'A classic for a reason. Always reliable for a refreshing boost. Great as a mixer too.',
  },
]

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating
              ? 'text-sprite-green fill-sprite-green'
              : 'text-muted-foreground'
          }`}
        />
      </motion.div>
    ))}
  </div>
)

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-32 sm:py-40 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-sprite-green-dark">
            Don't Just Take <span className="text-sprite-green">Our Word</span>
          </h2>
          <p className="mt-8 text-xl text-gray-700">
            See what our fans have to say about their favorite{' '}
            <span className="text-sprite-green font-bold">
              crisp refreshment
            </span>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => {
            const avatar = PlaceHolderImages.find(
              (p) => p.id === review.avatarId
            )
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card className="flex flex-col h-full white-card border border-gray-200 hover:border-sprite-green/30 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="border-2 border-sprite-green/40">
                          {avatar && (
                            <AvatarImage
                              src={avatar.imageUrl}
                              alt={review.name}
                              data-ai-hint={avatar.imageHint}
                            />
                          )}
                          <AvatarFallback className="bg-sprite-green/10 text-sprite-green font-bold">
                            {review.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg font-bold text-sprite-green-dark">
                          {review.name}
                        </CardTitle>
                      </div>
                      <Rating rating={review.rating} />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 text-base leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

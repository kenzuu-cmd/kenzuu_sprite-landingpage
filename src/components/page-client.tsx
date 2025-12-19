'use client'

import { useState, useEffect } from 'react'
import { defaultConfig } from '@/lib/config'
import { LoadingScreen } from '@/components/layout/loading-screen'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/app/sections/hero-section'
import { AboutSection } from '@/app/sections/about-section'
import { IngredientsSection } from '@/app/sections/ingredients-section'
import { NutritionSection } from '@/app/sections/nutrition-section'
import { ReviewsSection } from '@/app/sections/reviews-section'
import { FaqSection } from '@/app/sections/faq-section'
import { FinalCtaSection } from '@/app/sections/final-cta-section'

export default function PageClient() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // When the component mounts, set a timeout to mark loading as complete.
    const timer = setTimeout(() => {
      setProgress(100)
      setIsLoading(false)
    }, 500) // A small delay to allow the initial render to complete.

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen progress={progress} />
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection drinkConfig={defaultConfig.drink} />
        <AboutSection />
        <IngredientsSection />
        <NutritionSection />
        <ReviewsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}

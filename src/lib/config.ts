export interface DrinkConfig {
  name: string
  subtitle: string
  description: string
}

export interface ThemeConfig {
  color: string
}

export interface SiteConfig {
  brandName: string
  brandDescription: string
  drink: DrinkConfig
  theme: ThemeConfig
}

export const defaultConfig: SiteConfig = {
  brandName: 'Sprite',
  brandDescription:
    'A crisp, refreshing lemon-lime soda known for its clean taste and sharp citrus bite.',
  drink: {
    name: 'Sprite',
    subtitle: 'Lemon-Lime Soda',
    description:
      'Crisp, clean, and instantly refreshing!A sharp burst of lemon and lime with zero heaviness.',
  },
  theme: {
    color: '#00C850',
  },
}

export const navLinks = [
  { name: 'Product', id: 'product' },
  { name: 'Ingredients', id: 'ingredients' },
  { name: 'Nutrition', id: 'nutrition' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' },
]

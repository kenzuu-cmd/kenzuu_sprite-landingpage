'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SpriteLogo } from '@/components/icons/sprite-logo'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/config'

export function Header() {
  const sectionIds = navLinks.map((link) => link.id)
  const activeSection = useActiveSection(sectionIds)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-sprite-green/10'
          : 'bg-background/60 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center mr-8 group"
        >
          <SpriteLogo
            width={473}
            height={347}
            className="h-8 max-w-[80px] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,214,100,0.5)]"
          />
        </Link>
        <nav className="hidden items-center space-x-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              asChild
              className={cn(
                'font-semibold transition-all duration-300 relative overflow-hidden',
                activeSection === link.id
                  ? 'text-sprite-green hover:text-sprite-green-light after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sprite-green'
                  : 'text-foreground/70 hover:text-sprite-green'
              )}
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}

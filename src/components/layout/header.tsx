'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center mr-8 group"
        >
          <img
            src="/assets/sprite-logo2.png"
            alt="Sprite logo"
            className="navbar-logo h-8 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </Link>
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              asChild
              className={cn(
                'font-semibold transition-all duration-300 relative px-4 py-2 rounded-lg',
                activeSection === link.id
                  ? 'bg-sprite-green text-white hover:bg-sprite-green-dark'
                  : 'text-sprite-green hover:bg-sprite-green/10'
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

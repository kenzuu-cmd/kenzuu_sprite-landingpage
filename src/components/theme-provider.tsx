'use client'

import * as React from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  return <>{children}</>
}

export const useTheme = () => {
  return { theme: 'dark' as const }
}

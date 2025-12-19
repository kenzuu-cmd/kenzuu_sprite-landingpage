'use client'

import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import type { SiteConfig } from '@/lib/config'

interface SettingsPanelProps {
  config: SiteConfig
  onConfigChange: (newConfig: Partial<SiteConfig>) => void
  onThemeColorChange: (color: string) => void
}

export function SettingsPanel({
  config,
  onConfigChange,
  onThemeColorChange,
}: SettingsPanelProps) {
  const handleDrinkChange = (
    field: keyof SiteConfig['drink'],
    value: string
  ) => {
    onConfigChange({
      drink: {
        ...config.drink,
        [field]: value,
      },
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="rounded-full shadow-lg">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Open Settings</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Customize Your Site</SheetTitle>
            <SheetDescription>
              Change the content and appearance of the page in real-time.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Hero Content</h3>
              <div className="space-y-2">
                <Label htmlFor="drinkName">Drink Name</Label>
                <Input
                  id="drinkName"
                  value={config.drink.name}
                  onChange={(e) => handleDrinkChange('name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="drinkSubtitle">Subtitle</Label>
                <Input
                  id="drinkSubtitle"
                  value={config.drink.subtitle}
                  onChange={(e) =>
                    handleDrinkChange('subtitle', e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="drinkDescription">Description</Label>
                <Textarea
                  id="drinkDescription"
                  value={config.drink.description}
                  onChange={(e) =>
                    handleDrinkChange('description', e.target.value)
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Theme</h3>
              <div className="space-y-2">
                <Label htmlFor="themeColor">Theme Color</Label>
                <Input
                  id="themeColor"
                  type="color"
                  value={config.theme.color}
                  onChange={(e) => onThemeColorChange(e.target.value)}
                  className="p-1 h-10"
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

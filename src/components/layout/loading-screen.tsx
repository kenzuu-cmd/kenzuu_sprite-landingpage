'use client'

import { SpriteLogo } from '@/components/icons/sprite-logo'
import { Progress } from '@/components/ui/progress'

interface LoadingScreenProps {
  progress: number
}

export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sprite-green transition-opacity duration-500">
      <div className="flex flex-col items-center justify-center space-y-8">
        <SpriteLogo
          width={473}
          height={347}
          className="w-40"
          style={{ marginBottom: '24px' }}
        />
        <div className="w-64">
          <Progress value={progress} className="h-2 bg-white/30" />
          <p className="text-center text-base text-white font-semibold mt-6">
            Loading {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  )
}

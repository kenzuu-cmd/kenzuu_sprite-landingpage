import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SpriteLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
}

export function SpriteLogo({
  className,
  width = 473,
  height = 347,
  ...props
}: SpriteLogoProps) {
  return (
    <div className={cn('inline-block', className)} {...props}>
      <Image
        src="/assets/sprite-logo.png"
        alt="Sprite logo"
        width={width}
        height={height}
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  )
}

import data from './placeholder-images.json'

/**
 * Represents a placeholder image with metadata for AI image generation.
 */
export type ImagePlaceholder = {
  id: string
  description: string
  imageUrl: string
  imageHint: string
}

/**
 * Collection of placeholder images used throughout the application.
 */
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages

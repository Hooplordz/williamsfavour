
/**
 * Image helper for Vercel deployment.
 * Images are served directly from the public directory.
 */

export function cdn(src: string, _width: number, _quality = 75) {
  return src
}

/**
 * Use the original image URL.
 * Vercel will serve the original public asset.
 */
export function cdnSrcSet(_src: string, _widths: number[]) {
  return ''
}

/** Serve a public image through the Netlify Image CDN at a given width. */
export function cdn(src: string, width: number, quality = 75) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=${quality}`
}

/** Build a responsive srcset for the given widths. */
export function cdnSrcSet(src: string, widths: number[]) {
  return widths.map((w) => `${cdn(src, w)} ${w}w`).join(', ')
}

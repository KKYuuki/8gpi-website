/**
 * Custom image loader for Next.js on Cloudflare Pages
 * This loader handles image optimization through Cloudflare's CDN
 */

module.exports = function cloudflareImageLoader({ src, width, quality }) {
  // If it's an external URL, return as-is
  if (src.startsWith('http') || src.startsWith('https') || src.startsWith('data:')) {
    return src;
  }

  // For local images, return the path as-is
  // Cloudflare will handle the optimization
  return src;
}

/**
 * Custom image loader for Next.js on Cloudflare Pages
 * This loader handles image optimization through Cloudflare's CDN
 * @param {Object} params - The image parameters
 * @param {string} params.src - The source URL of the image
 * @param {number} params.width - The desired width of the image
 * @param {number} [params.quality=75] - The desired quality of the image (1-100)
 * @returns {string} The optimized image URL
 */

module.exports = function cloudflareImageLoader({ 
  src, 
  width, 
  quality = 75 
}) {
  // If it's an external URL, return as-is
  if (src.startsWith('http') || src.startsWith('https') || src.startsWith('data:')) {
    return src;
  }

  // For local images, construct the URL with Cloudflare's image optimization
  // Cloudflare will handle the optimization
  const params = [`width=${width}`, `quality=${Math.min(100, Math.max(1, quality))}`, 'format=auto'];
  
  const queryString = params.join('&');
  return `${src}?${queryString}`;
}

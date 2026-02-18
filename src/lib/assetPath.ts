// Helper to get the base path for assets
export const getAssetPath = (path: string): string => {
  // Set your base path directly for Cloudflare deployment
  const basePath = "/";
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};

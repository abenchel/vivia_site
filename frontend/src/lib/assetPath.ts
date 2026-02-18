// Helper to get the base path for assets
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL;
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};

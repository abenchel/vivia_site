import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get WebP image path, falling back to original format if WebP not available
 * @param path - Image path (e.g., "/services/automation.webp")
 * @returns WebP path if available, otherwise original path
 */
export function getOptimizedImagePath(path: string): string {
  if (!path) return path;
  const withoutExt = path.substring(0, path.lastIndexOf('.'));
  return `${withoutExt}.webp`;
}

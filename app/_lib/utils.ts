const BASE_PATH = "/Portfolio_Jessica_Borda";

export function getAssetPath(path: string): string {
  // Only apply BASE_PATH in production
  const basePath = process.env.NODE_ENV === "production" ? BASE_PATH : "";

  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return path;
}

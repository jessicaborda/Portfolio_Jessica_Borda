const BASE_PATH = "/Portfolio_Jessica_Borda";

export function getAssetPath(path: string): string {
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }
  return path;
}

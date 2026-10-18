/** Matches `basePath` in next.config.ts. Public files are served under this prefix. */
export const basePath = "/portfolio";

/** Turn a public-folder path such as `/avatar.jpg` into `/portfolio/avatar.jpg`. */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

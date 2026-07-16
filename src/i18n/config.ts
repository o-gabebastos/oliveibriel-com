// i18n core: locale list, detection, and path helpers.
// EN is the default locale and lives at the root (no prefix). PT lives under /pt.

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

// Normalize whatever Astro.currentLocale gives us into a known Locale.
export function getLocale(current: string | undefined | null): Locale {
  return current === "pt" ? "pt" : "en";
}

// Build an internal href for a locale. EN → "/path"; PT → "/pt/path".
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  return clean === "/" ? "/pt" : `/pt${clean}`;
}

// Strip the locale prefix from a pathname to get the "bare" (EN) path.
export function barePath(pathname: string): string {
  if (pathname === "/pt") return "/";
  if (pathname.startsWith("/pt/")) return pathname.slice(3);
  return pathname;
}

// Given the current pathname, return the equivalent path in the target locale.
export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(target, barePath(pathname));
}

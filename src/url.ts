/**
 * Builds a link to a page or public file, respecting the site's base path.
 * The live site is served from the root ("/"), but the GitHub Pages review copy
 * lives under "/camper-sales-site/", so every internal link goes through here.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** The current path with the base removed, e.g. "/builds/" on either host. */
export function pathWithoutBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return path.replace(/\/?$/, '/');
}

/** True when building the GitHub Pages review copy, where the Enquiry form can't send. */
export const IS_REVIEW_COPY = import.meta.env.PUBLIC_REVIEW_COPY === 'true';

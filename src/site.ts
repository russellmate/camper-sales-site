/** Business details, used across the site. Edit here, not in individual pages. */
export const business = {
  name: 'JR Camper Conversions',
  email: 'jrcampervans@gmail.com',
  phone: {
    display: '07753 498677',
    href: 'tel:+447753498677',
  },
  address: ['12 Harpur Industrial Estate', 'Buxton', 'Derbyshire', 'SK17 8EF'],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Harpur+Industrial+Estate+Buxton+SK17+8EF',
} as const;

/**
 * While the copy is still draft, search engines are asked not to index the site.
 * Set to false when John has approved the wording and the site goes live.
 */
export const SITE_IS_DRAFT = true;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/conversions/', label: 'Conversions' },
  { href: '/builds/', label: 'Builds' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

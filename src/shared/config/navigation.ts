export const NAV_MENU = [
  { href: '/', title: 'About' },
  { href: '/skills', title: 'Skills' },
  { href: '/projects', title: 'Projects' },
  { href: '/experience', title: 'Experience' },
] as const;

export type NavMenu = (typeof NAV_MENU)[number];

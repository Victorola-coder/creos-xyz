import { nanoid } from 'nanoid';

export const navLinks = [
  {
    id: nanoid(),
    route: 'Product',
    path: '/products',
  },
  {
    id: nanoid(),
    route: 'Events',
    path: '/events',
  },
  {
    id: nanoid(),
    route: 'Team',
    path: '/team',
  },
  {
    id: nanoid(),
    route: 'Contact',
    path: '/contact',
  },
];

export const company = [
  {
    id: nanoid(),
    name: 'Home',
    path: '/',
  },
  {
    id: nanoid(),
    name: 'Products',
    path: '/products',
  },
  {
    id: nanoid(),
    name: 'Teams',
    path: '/teams',
  },
];

export const events = [
  { id: nanoid(), name: 'Creos Events', path: '/events/creos' },
  { id: nanoid(), name: 'Create Events', path: '/events/create' },
  { id: nanoid(), name: 'Browse Events', path: '/events/browse' },
];

export const products = [
  { id: nanoid(), name: 'Creos Edu', path: '/creos-edu' },
  {
    id: nanoid(),
    name: 'Creos Lab',
    path: '/creos-lab',
  },
  {
    id: nanoid(),
    name: 'Creos Token',
    path: '/creos-token',
  },
];

export const resources = [
  {
    id: nanoid(),
    name: 'Career',
    path: '/career',
  },
  {
    id: nanoid(),
    name: 'contact us',
    path: '/contact-us',
  },
  {
    id: nanoid(),
    name: 'blog',
    path: '/blog',
  },
  {
    id: nanoid(),
    name: 'partners',
    path: '/partner',
  },
];

export const legal = [
  {
    id: nanoid(),
    name: 'Terms and Conditions',
    path: '/terms-and-conditions',
  },
  {
    id: nanoid(),
    name: 'Privacy policy',
    path: '/privacy-policy',
  },
];

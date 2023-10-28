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

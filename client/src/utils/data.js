import { nanoid } from 'nanoid';
import hero1 from '../assets/images/img-pix.png';
import hero2 from '../assets/images/img-pix-1.png';
import hero3 from '../assets/images/img-pix-2.png';
import hero4 from '../assets/images/img-pix-3.png';
import hero5 from '../assets/images/img-pix-4.png';
import hero6 from '../assets/images/img-pix-5.png';
import hero7 from '../assets/images/img-pix-6.png';
import hero8 from '../assets/images/img-pix-7.png';
import hero9 from '../assets/images/img-pix-8.png';
import hero10 from '../assets/images/img-pix-9.png';
import hero11 from '../assets/images/img-pix-10.png';
import hero12 from '../assets/images/img-pix-11.png';
import hero13 from '../assets/images/img-pix-12.png';
import hero14 from '../assets/images/img-pix-13.png';
import hero15 from '../assets/images/img-pix-14.png';
import hero16 from '../assets/images/img-pix-15.png';

export const navLinks = [
  {
    id: nanoid(),
    route: 'Products',
    path: '/products',
  },
  // {
  //   id: nanoid(),
  //   route: 'Creos Token',
  //   path: '/creos-token',
  // },
  // {
  //   id: nanoid(),
  //   route: 'eVents',
  //   path: '/events',
  // },
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
  { id: nanoid(), name: 'Creos Events', path: '/events/' },
  { id: nanoid(), name: 'Create Events', path: '/events/create' },
  { id: nanoid(), name: 'Browse Events', path: '/events/browse' },
];

export const products = [
  {
    id: nanoid(),
    name: 'Alphie',
    background: 'bg-creos',
    subtitle: 'AI powered learning for Web3 tech talents.',
    description: `A social network built and driven through Artificial General Intelligence to 
    control relative content on users preferences for useful and more relevant educative 
    information and aid users evolution on prefered disruptive technologies skill while on a subsequent rewarding system.`,
    path: '/creos-edu'
  },
  {
    id: nanoid(),
    name: 'BuildL',
    background: 'bg-primary',
    subtitle: 'AI powered freelancing for Web3 Job hunters.',
    description: `Freelancing powered by AI. Access gigs with your own choices, and comforts. 
    Creos Buidl enables creators to source gigs in thier preferences while getting rewards.`,
    path: '/creos-lab',
  },
  {
    id: nanoid(),
    name: 'Hillock',
    background: 'bg-brown',
    subtitle: 'Save, Invest & Staking System powered by AI.',
    description: `Transforming the conventional banking system. The need for a wallet consistently 
    inflating a long and short term saving yet periodically creating a multi rewarding system regardless market dynamics. 
    Hillock is built to power the future of banking to enable savings.`,
    path: '/creos-token',
  },
];

export const genders = ['Male', 'Female'];

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

export const imgSlider = [
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero1,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero2,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero3,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero4,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero5,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero6,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero7,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero8,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero9,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero10,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero11,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero12,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero13,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero14,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero15,
  },
  {
    id: nanoid(),
    alt: 'user_Illustration',
    src: hero16,
  },
];


export const teamMembersData = [
  {
    id: nanoid(),
    name: 'Daniel O. Lumiere',
    role: 'Chief Executive Officer',
    img: '/images/team-1.svg',
    linkedInURL: 'https://www.linkedin.com/in/daniellumiere',
    instagramURL: 'https://www.instagram.com/web3creo',
    twitterURL: 'https://x.com/web3creo'
  },
  {
    id: nanoid(),
    name: 'Stephen O. Elufisan',
    role: 'Head of Products Design',
    img: '/images/team-2.svg',
    linkedInURL: 'https://www.linkedin.com/in/stephenelufisan',
    instagramURL: 'https://www.instagram.com/stephenelufisan',
    twitterURL: 'https://x.com/se_theuxboss'
  },
  {
    id: nanoid(),
    name: 'Joy Ngwolo',
    role: 'Public Relations Officer',
    img: '/images/team-3.svg',
    linkedInURL: 'https://www.instagram.com/ngwolojoy',
    instagramURL: 'https://www.linkedin.com/in/joy-ngwolo-anipr-53671679',
    twitterURL: 'https://x.com/joyngwolo'
  },
  {
    id: nanoid(),
    name: 'Okoye Chinelo',
    role: 'Chief of Private Membership',
    img: '/images/cpm.jpg',
    linkedInURL: 'https://www.linkedin.com/in/okoye-chinelo',
    instagramURL: 'https://www.instagram.com/jessyfabulous',
    twitterURL: 'https://x.com/queen_of_dealss'
  },
  {
    id: nanoid(),
    name: 'Deborah Ojengbede',
    role: 'Special advisory',
    img: '/images/team-4.svg',
    linkedInURL: 'https://www.linkedin.com/in/deborah-ojengbede',
    instagramURL: 'https://www.instagram.com/debb.i.e',
    twitterURL: 'https://x.com/deborahofafen'
  },
]

import type {
  NavLink,
  PropertyHighlight,
  FeatureItem,
  PointOfInterest,
} from '@/types';

/* ─────────────────────────────  BRAND / SITE  ───────────────────────────── */

export const SITE_NAME = 'BlackOak Real Estate';
export const PROJECT_NAME = 'Villa Sfiora';
export const LOCATION_NAME = 'Jumeirah Park';
export const CITY = 'Dubai';
export const TAGLINE = 'Not renovated. Reconstructed.';
export const SUBTAGLINE =
  'A fully rebuilt four-bedroom villa in Jumeirah Park — designed from the inside out for the way a family actually lives.';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://villa-sfiora.blackoak-re.com';

// BlackOak wordmark — dark for light backgrounds, light (white) for navy backgrounds.
export const LOGO_DARK = '/images/logo/blackoak-dark.webp';
export const LOGO_LIGHT = '/images/logo/blackoak-light.webp';
export const LOGO_ASPECT = 800 / 184; // ≈ 4.35

/* ─────────────────────────────  CONTACT  ───────────────────────────── */

export const AGENT_NAME = 'Riad Gohar';
export const AGENT_EMAIL = 'riad@blackoak-re.com';
export const AGENT_PHONE_DISPLAY = '+971 55 956 1231';
export const AGENT_PHONE_E164 = '+971559561231';
export const AGENT_WHATSAPP = '971559561231';
export const AGENT_PROPTREE = 'https://proptr.ee/RiadGohar';

/* ─────────────────────────────  REGULATORY  ───────────────────────────── */

export const DLD_PERMIT_NUMBER = '6513772800';
export const DLD_PERMIT_QR = '/images/legal/dld-permit-qr.jpeg';

/* ─────────────────────────────  NAVIGATION  ───────────────────────────── */

export const NAV_LINKS: NavLink[] = [
  { label: 'The Villa', href: '#introduction' },
  { label: 'Tour', href: '#video' },
  { label: 'Living', href: '#living' },
  { label: 'Bedrooms', href: '#bedrooms' },
  { label: 'Outdoor', href: '#outdoor' },
  { label: 'Specification', href: '#specification' },
  { label: 'Floor Plans', href: '#floorplans' },
  { label: 'Enquire', href: '#contact' },
];

/* ─────────────────────────────  HERO  ───────────────────────────── */

export const HERO_METADATA = [
  'Jumeirah Park',
  '4 Ensuite Bedrooms',
  '~5,000 sq.ft BUA',
  '~8,000 sq.ft Plot',
];

/* ─────────────────────────────  INTRODUCTION  ───────────────────────────── */

export const INTRO_HEADLINE = 'A study in how a Jumeirah Park villa should be rebuilt.';

export const INTRO_BODY: string[] = [
  'Villa Sfiora is not a renovation. It is a reconstruction — designed from the inside out, with an uncompromising eye on how a family actually lives.',
  'In this tour we did not simply walk through the house. We questioned the architecture, the flow, the functionality, and the outdoor experience — and whether the work genuinely elevates the way the home is lived in.',
  'The architecture has been rebuilt. The flow has been reconsidered. The outdoor experience has been designed for real use, not visual effect. The answer is always in the details.',
];

export const PROPERTY_HIGHLIGHTS: PropertyHighlight[] = [
  { label: 'Bedrooms', value: '4 Ensuite', icon: 'BedDouble' },
  { label: 'Plus', value: 'Study', icon: 'BookOpen' },
  { label: 'Built-Up Area', value: '~5,000 sq.ft', icon: 'Home' },
  { label: 'Plot Size', value: '~8,000 sq.ft', icon: 'Maximize' },
  { label: 'Outdoor', value: 'Pool & Jacuzzi', icon: 'Waves' },
  { label: 'Condition', value: 'Fully Rebuilt', icon: 'Sparkles' },
];

/* ─────────────────────────────  VIDEO  ───────────────────────────── */

export const VIDEO_YOUTUBE_ID = 'sKKpYrC8CYw';
export const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_YOUTUBE_ID}`;

/* ─────────────────────────────  GALLERY SECTION COPY  ───────────────────────────── */

export const SECTION_COPY: Record<
  string,
  { label: string; title: string; body: string }
> = {
  living: {
    label: 'Living & Reception',
    title: 'Living spaces that work for real life.',
    body: 'Formal and informal living areas flow from the entrance into the heart of the home, with a large dedicated dining area and a ground-floor ensuite guest bedroom. There is volume, openness, and a natural connection to the outdoors — the space feels intentional, not staged.',
  },
  kitchen: {
    label: 'The Kitchen',
    title: 'A show kitchen built to be used.',
    body: 'Newly built and fitted with Miele and Siemens appliances, including an integrated wine fridge. Workflow, storage, and durability — a kitchen that survives breakfast, late dinners, guests, and real cooking, without losing its composure.',
  },
  dining: {
    label: 'Dining',
    title: 'Proportioned for real gatherings.',
    body: 'A dedicated dining area sits in dialogue with the living spaces and kitchen — sized for the way a family actually hosts, with a clean, current finish that carries the standard of the rest of the home.',
  },
  bedrooms: {
    label: 'Bedrooms & Study',
    title: 'Every bedroom ensuite.',
    body: 'The first floor holds three ensuite bedrooms, a study or multipurpose room, a pantry, and two balconies — alongside the ground-floor guest suite. Secondary bedrooms are clean, flexible, and respected, not sacrificed to the master.',
  },
  master: {
    label: 'Master Suite',
    title: 'A private suite, properly resolved.',
    body: 'Walk-in closets, customised joinery, and an ensuite finished to the same standard as the rest of the house. After the social spaces below, the master gives the owner their own quiet zone — privacy, comfort, and separation.',
  },
};

/* ─────────────────────────────  STATEMENT  ───────────────────────────── */

export const STATEMENT_QUOTE =
  'Villa Sfiora is not about renovation. It is about reconstruction, proportion, comfort, and the rare ability to make a family home feel both highly functional and quietly luxurious.';

/* ─────────────────────────────  INTERIOR FEATURES  ───────────────────────────── */

export const INTERIOR_FEATURES: FeatureItem[] = [
  {
    title: 'Formal & Informal Living',
    description:
      'Distinct living spaces that carry both the social life of the home and the quiet routine of every day.',
    icon: 'Sofa',
  },
  {
    title: 'Large Dining Area',
    description:
      'A dedicated dining space proportioned for real gatherings, not just a table squeezed against a wall.',
    icon: 'Utensils',
  },
  {
    title: 'Ground-Floor Guest Bedroom',
    description:
      'An ensuite bedroom on the ground floor — for parents, guests, or anyone who would rather avoid the stairs.',
    icon: 'DoorOpen',
  },
  {
    title: 'Show Kitchen',
    description:
      'A newly built kitchen fitted with Miele and Siemens appliances, including an integrated wine fridge.',
    icon: 'ChefHat',
  },
  {
    title: 'Study / Multipurpose Room',
    description:
      'A first-floor study that adapts to work, reading, or a private retreat — privacy, light, and separation.',
    icon: 'BookOpen',
  },
  {
    title: 'Smart Home Integration',
    description:
      'Whole-home automation paired with new AC technology, false ceilings, and a system built for daily use.',
    icon: 'Cpu',
  },
  {
    title: 'Bespoke Joinery',
    description:
      'Customised furniture, bespoke cupboards, and walk-in closets fitted to the rhythm of the home.',
    icon: 'Hammer',
  },
  {
    title: 'Every Bedroom Ensuite',
    description:
      'Four ensuite bedrooms plus a maid’s room and laundry room — privacy carried through the whole house.',
    icon: 'Bath',
  },
  {
    title: 'Two Balconies',
    description:
      'First-floor balconies and a pantry extend the upstairs living beyond the bedrooms themselves.',
    icon: 'Building2',
  },
];

/* ─────────────────────────────  OUTDOOR FEATURES  ───────────────────────────── */

export const OUTDOOR_FEATURES: FeatureItem[] = [
  { title: 'Temperature-Controlled Pool', description: 'A large pool built for year-round use.', icon: 'Waves' },
  { title: 'Jacuzzi', description: 'A dedicated jacuzzi within the outdoor sequence.', icon: 'Droplets' },
  { title: 'Waterfalls', description: 'Water features that bring movement and calm to the plot.', icon: 'Droplet' },
  { title: 'Outdoor Shower', description: 'A poolside shower for resort-level convenience.', icon: 'ShowerHead' },
  { title: 'Sunken BBQ & Entertainment', description: 'A fully equipped sunken area designed for real use.', icon: 'Flame' },
  { title: 'Automated Lighting', description: 'Programmed exterior lighting across the plot.', icon: 'Lightbulb' },
  { title: 'Automated Irrigation', description: 'Hands-off irrigation keeping the landscaping precise.', icon: 'Sprout' },
  { title: 'Gated Plot & AC Garage', description: 'A gated plot opening to an automated, air-conditioned garage.', icon: 'Warehouse' },
];

/* ─────────────────────────────  FULL SPECIFICATION  ───────────────────────────── */

export const INTERIOR_SPEC: string[] = [
  '4 ensuite bedrooms',
  '~5,000 sq.ft built-up area',
  '~8,000 sq.ft plot size',
  'Study or multipurpose room',
  'Two balconies',
  'Formal and informal living spaces',
  'Large dedicated dining area',
  'Ground-floor guest bedroom',
  'Maid’s room + laundry room',
  'Smart home integration',
  'New AC technology throughout',
  'False ceilings',
  'Walk-in closets & customised furniture',
  'Bespoke cupboards',
  'Show kitchen — Miele & Siemens appliances',
  'Integrated wine fridge',
];

export interface SpecGroup {
  index: string;
  category: string;
  title: string;
  items: string[];
}

// Grouped into elegant "postcards" for the Specification section.
export const SPEC_GROUPS: SpecGroup[] = [
  {
    index: '01',
    category: 'Scale & Layout',
    title: 'Proportion',
    items: [
      '4 ensuite bedrooms + study',
      '~5,000 sq.ft built-up area',
      '~8,000 sq.ft plot',
      'Two balconies',
      'Formal & informal living',
      'Large dedicated dining',
    ],
  },
  {
    index: '02',
    category: 'Comfort & Storage',
    title: 'The Everyday',
    items: [
      'Ground-floor guest bedroom',
      'Maid’s room + laundry',
      'Walk-in closets',
      'Customised furniture & joinery',
      'Bespoke cupboards',
      'False ceilings throughout',
    ],
  },
  {
    index: '03',
    category: 'Kitchen',
    title: 'The Show Kitchen',
    items: ['Newly built kitchen', 'Miele & Siemens appliances', 'Integrated wine fridge'],
  },
  {
    index: '04',
    category: 'Systems',
    title: 'Smart & Climate',
    items: ['Smart home integration', 'New AC technology throughout'],
  },
  {
    index: '05',
    category: 'Pool & Water',
    title: 'The Resort',
    items: ['Temperature-controlled pool', 'Jacuzzi', 'Waterfalls', 'Outdoor shower'],
  },
  {
    index: '06',
    category: 'Grounds & Entertaining',
    title: 'Outside',
    items: [
      'Gated plot',
      'Automated AC garage',
      'Sunken BBQ area',
      'Entertainment space',
      'Automated lighting & irrigation',
    ],
  },
];

export const OUTDOOR_SPEC: string[] = [
  'Temperature-controlled swimming pool',
  'Jacuzzi',
  'Waterfalls',
  'Outdoor shower',
  'Automated lighting',
  'Automated irrigation',
  'Gated plot',
  'Automated AC garage',
  'Sunken BBQ area',
  'Entertainment space',
];

/* ─────────────────────────────  LOCATION  ───────────────────────────── */

export const LOCATION_HEADLINE =
  'Jumeirah Park — an established, low-rise community of family villas.';

export const LOCATION_BODY =
  'You can rebuild a house, but you cannot rebuild the neighbourhood around it. Jumeirah Park is a settled, green, villa-only community with mature landscaping and easy access to Dubai’s key arteries — context the home carries before you reach the door.';

// Approximate Jumeirah Park coordinates (used for the embedded map & schema).
export const LOCATION_LAT = 25.0489;
export const LOCATION_LNG = 55.1556;
export const LOCATION_MAP_QUERY = 'Jumeirah+Park,+Dubai';

export const POINTS_OF_INTEREST: PointOfInterest[] = [
  { name: 'Sheikh Zayed Road', distance: 'Direct access', type: 'transport' },
  { name: 'Dubai Marina & JBR', distance: '~10 min', type: 'lifestyle' },
  { name: 'Jumeirah Park Pavilion', distance: 'In community', type: 'lifestyle' },
  { name: 'Dubai Internet & Media City', distance: '~12 min', type: 'landmark' },
  { name: 'Reputable Schools', distance: 'Nearby', type: 'school' },
  { name: 'Palm Jumeirah', distance: '~15 min', type: 'landmark' },
];

/* ─────────────────────────────  CONTACT COPY  ───────────────────────────── */

export const CONTACT_HEADLINE = 'Arrange a private viewing.';
export const CONTACT_BODY =
  'Villa Sfiora is best understood in person. Contact BlackOak Real Estate to arrange a viewing or request more details.';

/* ─────────────────────────────  FOOTER  ───────────────────────────── */

export const DISCLAIMER_TEXT =
  'All measurements and areas are approximate and provided for guidance only. Particulars are believed correct at the time of publication but do not form part of any offer or contract and are subject to change without prior notice.';

export const SOCIAL_LINKS = {
  proptree: AGENT_PROPTREE,
};

export interface NavLink {
  label: string;
  href: string;
}

export interface PropertyHighlight {
  label: string;
  value: string;
  icon: string; // lucide-react icon name
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface RoomGalleryData {
  id: string;
  name: string;
  description?: string;
  images: GalleryImage[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PointOfInterest {
  name: string;
  distance: string;
  type: 'lifestyle' | 'landmark' | 'school' | 'transport';
}

export interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  message?: string;
  consent: boolean;
  source: string;
  utm?: Record<string, string>;
  // honeypot
  website?: string;
}

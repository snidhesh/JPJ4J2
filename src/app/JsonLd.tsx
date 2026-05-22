import {
  PROJECT_NAME,
  LOCATION_NAME,
  CITY,
  SITE_NAME,
  SITE_URL,
  SUBTAGLINE,
  AGENT_EMAIL,
  AGENT_PHONE_E164,
  LOCATION_LAT,
  LOCATION_LNG,
} from '@/lib/constants';

export default function JsonLd() {
  const residence = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: PROJECT_NAME,
    description: SUBTAGLINE,
    url: SITE_URL,
    numberOfBedrooms: 4,
    numberOfBathroomsTotal: 5,
    floorSize: { '@type': 'QuantitativeValue', value: 5000, unitCode: 'FTK' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCATION_NAME,
      addressRegion: CITY,
      addressCountry: 'AE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: LOCATION_LAT, longitude: LOCATION_LNG },
    image: `${SITE_URL}/images/hero/cover.webp`,
  };

  const agent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE_NAME,
    email: AGENT_EMAIL,
    telephone: AGENT_PHONE_E164,
    areaServed: CITY,
    url: SITE_URL,
  };

  // Escape "<" so a value can never close the <script> tag or inject markup.
  const toJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(residence) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(agent) }}
      />
    </>
  );
}

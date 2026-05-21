import imageMap from '@/data/image-map.json';
import type { GalleryImage, RoomGalleryData } from '@/types';

/**
 * Gallery data is derived from src/data/image-map.json so there is a single
 * source of truth shared with scripts/process-images.mjs. Until photos are
 * mapped (sources arrays filled in), galleries resolve to empty arrays and the
 * sections fall back gracefully.
 *
 * Output naming convention produced by the image pipeline:
 *   /images/<section>/<section>-<n>.webp   (n starts at 1)
 *   /images/hero/cover.webp
 *   /images/divider/divider.webp
 */

type GallerySection = { name?: string; alt?: string; sources?: string[] };
type SingleSection = { source?: string; alt?: string };

const sections = imageMap as unknown as Record<string, GallerySection & SingleSection>;

function buildGallery(id: string): RoomGalleryData {
  const section = sections[id];
  const sources = section?.sources ?? [];
  const images: GalleryImage[] = sources.map((_, i) => ({
    src: `/images/${id}/${id}-${i + 1}.webp`,
    alt: section?.alt ?? '',
  }));
  return { id, name: section?.name ?? id, images };
}

// Hero / divider single images (empty string until a source is mapped).
export const heroImage = sections.hero?.source ? '/images/hero/cover.webp' : '';
export const heroAlt = sections.hero?.alt ?? '';
export const dividerImage = sections.divider?.source ? '/images/divider/divider.webp' : '';

export const LIVING_IMAGES = buildGallery('living');
export const KITCHEN_IMAGES = buildGallery('kitchen');
export const DINING_IMAGES = buildGallery('dining');
export const BEDROOM_IMAGES = buildGallery('bedrooms');
export const MASTER_IMAGES = buildGallery('master');
export const OUTDOOR_IMAGES = buildGallery('outdoor');

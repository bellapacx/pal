// content/services.ts
import { IconType } from 'react-icons'

import { MdHandshake, MdLiveTv, MdShare, MdAccessTime, MdPublic, MdInsertChart, MdEvent } from 'react-icons/md'

export const services: { 
  title: string; 
  slug: string; 
  description: string; 
  cta: string; 
  Icon: IconType
}[] = [
  {
    title: 'Media Partnerships',
    slug: 'media-partnerships',
    description: 'Strategic collaborations with key media stakeholders to expand reach and impact.',
    cta: 'Learn More',
    Icon: MdHandshake,
  },
  {
    title: 'TV Talk Show Production',
    slug: 'tv-talk-show-production',
    description: 'High-quality, engaging talk shows with strong advertising and partnership potential.',
    cta: 'View Case Studies',
    Icon: MdLiveTv,
  },
  {
    title: 'Social Media Engagement',
    slug: 'social-media-engagement',
    description: 'Content creation and management across platforms like TikTok, Instagram, YouTube, and Telegram.',
    cta: 'Request a Quote',
    Icon: MdShare,
  },
  {
    title: 'Media Time Buying',
    slug: 'media-time-buying',
    description: 'Strategic acquisition and effective utilization of TV and radio airtime.',
    cta: 'Learn More',
    Icon: MdAccessTime,
  },
  {
    title: 'International Media Agency Services',
    slug: 'international-media-agency-services',
    description: 'Facilitating content production for global media companies operating in Ethiopia.',
    cta: 'View Case Studies',
    Icon: MdPublic,
  },
  {
    title: 'Digital Advertising',
    slug: 'digital-advertising',
    description: 'Website ads, cookies, and pop-ups for digital monetization and outreach.',
    cta: 'Request a Quote',
    Icon: MdInsertChart,
  },
  {
    title: 'Event Operations & Management',
    slug: 'event-operations-and-management',
    description: 'Planning, execution, and management of corporate, entertainment, and social events.',
    cta: 'Learn More',
    Icon: MdEvent,
  },
]

export const deckSections = [
  {
    id: 'hero',
    title: 'Dubai Mall',
    subtitle: 'The World\'s Largest by Area',
    type: 'hero',
    description: 'Discover the global destination for retail, dining, entertainment, and unlimited possibilities',
    color: 'from-neutral-900 to-neutral-950',
  },
  {
    id: 'why',
    title: 'Why Dubai Mall?',
    type: 'why',
    highlights: [
      {
        label: '7.7M',
        value: 'Square Feet',
        description: 'World\'s largest shopping mall by area'
      },
      {
        label: '200M+',
        value: 'Annual Visitors',
        description: 'Global audience from 195+ countries'
      },
      {
        label: '1,200+',
        value: 'Retail Brands',
        description: 'From luxury flagships to emerging concepts'
      },
      {
        label: '$1.2B+',
        value: 'Annual Revenue',
        description: 'Proven commercial success'
      }
    ]
  },
  {
    id: 'retail',
    title: 'Retail Excellence',
    type: 'retail',
    description: 'From luxury flagships to cutting-edge pop-ups, Dubai Mall is the premier destination for retail in the Middle East',
    categories: [
      { name: 'Luxury', count: 150, brands: ['Louis Vuitton', 'Gucci', 'Hermès'] },
      { name: 'Fashion', count: 320, brands: ['Nike', 'Zara', 'H&M'] },
      { name: 'Tech & Electronics', count: 85, brands: ['Apple', 'Samsung'] },
      { name: 'Lifestyle & Home', count: 240, brands: ['IKEA', 'Crate & Barrel'] },
    ]
  },
  {
    id: 'luxury',
    title: 'The Luxury Collection',
    type: 'luxury',
    description: 'An elevated experience curated for the world\'s most discerning shoppers',
    features: [
      'Dedicated luxury concierge',
      'VIP shopping experiences',
      'Exclusive brand partnerships',
      'High-touch service model'
    ]
  },
  {
    id: 'dining',
    title: 'Culinary Destination',
    type: 'dining',
    description: 'World-class dining experiences from Michelin-starred chefs to casual excellence',
    highlights: [
      { name: 'Michelin-starred restaurants', count: 8 },
      { name: 'Global cuisines', count: 150 },
      { name: 'Casual dining concepts', count: 200 },
      { name: 'Premium cafés', count: 45 }
    ]
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Attractions',
    type: 'entertainment',
    description: 'Beyond shopping: world-class attractions that drive foot traffic and engagement',
    attractions: [
      {
        name: 'Burj Khalifa',
        type: 'Observation Deck',
        visitors: '1.9M+ annually'
      },
      {
        name: 'Dubai Aquarium',
        type: 'Aquatic Experience',
        visitors: '1.2M+ annually'
      },
      {
        name: 'Gold Souk',
        type: 'Iconic Experience',
        visitors: 'Integrated into mall'
      },
      {
        name: 'Cineplex',
        type: 'Premium Entertainment',
        visitors: '500K+ annually'
      }
    ]
  },
  {
    id: 'events',
    title: 'Global Events Platform',
    type: 'events',
    description: 'Host your brand activation, product launch, or live event to a world audience',
    capabilities: [
      {
        name: 'Performing Arts Center',
        capacity: '2,000+',
        type: 'Concerts & Shows'
      },
      {
        name: 'Exposition Space',
        capacity: '50,000 sq ft',
        type: 'Trade & Expos'
      },
      {
        name: 'Activation Zones',
        capacity: 'Variable',
        type: 'Brand Experiences'
      },
      {
        name: 'Convention Center',
        capacity: '3,000+',
        type: 'Corporate Events'
      }
    ]
  },
  {
    id: 'cta',
    title: 'Ready to Elevate Your Brand?',
    type: 'cta',
    description: 'Whether you\'re looking to lease retail space, activate a sponsorship, or book our venues, let\'s talk about your opportunity.',
    buttons: [
      { text: 'Leasing Inquiry', action: 'leasing', color: 'primary' },
      { text: 'Event Booking', action: 'events', color: 'secondary' },
      { text: 'Sponsorship', action: 'sponsorship', color: 'secondary' }
    ]
  }
];

export type DeckSection = typeof deckSections[0];

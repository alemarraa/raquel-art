export interface Artwork {
  id: string
  title: string
  medium: string
  year?: string
  size?: string
  description: string
  image: string
  available: boolean
  sold?: boolean
  price?: number
  category: 'oil' | 'charcoal' | 'mixed' | 'fabric'
  featured?: boolean
}

export const artworks: Artwork[] = [
  {
    id: 'dual-faces',
    title: 'Duality',
    medium: 'Oil on canvas',
    year: '2022',
    description: 'Two female faces emerge from a monochromatic silver-black ground — one cracked, one shadowed — with a Roman numeral XII above. A meditation on identity, time, and the multiplicity of self.',
    image: '/artwork/dual-faces.png',
    available: false,
    sold: true,
    category: 'oil',
    featured: true,
  },
  {
    id: 'tiger-woman',
    title: 'The Guardian',
    medium: 'Oil on canvas',
    year: '2019',
    description: 'A woman and a resting tiger share a burnt-orange surrealist landscape — hidden eyes watch from the shadows behind them. Strength and intuition as one.',
    image: '/artwork/tiger-woman.png',
    available: false,
    sold: true,
    category: 'oil',
    featured: true,
  },
  {
    id: 'cubist-still-life',
    title: 'Table of Abundance',
    medium: 'Oil on canvas',
    year: '2020',
    description: 'A Cubist celebration of colour — wine, fruit, and flower arranged in bold geometric planes. A face hides in the composition; find it.',
    image: '/artwork/cubist-still-life.png',
    available: false,
    sold: true,
    category: 'oil',
    featured: true,
  },
  {
    id: 'storm-ships',
    title: 'Tempest',
    medium: 'Oil on canvas',
    year: '2018',
    description: 'Three tall ships dissolve into a churning indigo sea — the boundary between water, foam, and sky deliberately lost. Atmospheric, kinetic, raw.',
    image: '/artwork/storm-ships.png',
    available: false,
    sold: true,
    category: 'oil',
  },
  {
    id: 'cubist-city',
    title: 'Ciudad Eterna',
    medium: 'Oil on canvas',
    year: '2017',
    description: 'Ancient towers and a clock face dissolve into a fragmented body in warm ochre and sienna. Architecture and the human form share the same geometry.',
    image: '/artwork/cubist-city.png',
    available: false,
    sold: true,
    category: 'oil',
  },
  {
    id: 'angels',
    title: 'The Kiss',
    medium: 'Oil on canvas',
    year: '2021',
    description: 'Two Renaissance-inspired angels in soft rose and sky blue — a tender moment suspended in paint, eyes closed, gold curls touching.',
    image: '/artwork/angels.png',
    available: false,
    sold: true,
    category: 'oil',
  },
  {
    id: 'charcoal-figure',
    title: 'Figure Study No. 7',
    medium: 'Charcoal on paper',
    year: '2020',
    description: 'A seated nude in charcoal — confident, economical, academic. Signed and dated.',
    image: '/artwork/charcoal-figure.png',
    available: false,
    sold: true,
    category: 'charcoal',
  },
]

export const availableWorks = artworks.filter(a => a.available)
export const featuredWorks = artworks.filter(a => a.featured)

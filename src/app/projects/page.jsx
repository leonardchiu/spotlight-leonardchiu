import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPython from '@/images/logos/python-svgrepo-com.svg'
import logoN8N from '@/images/logos/n8n.png'
import logoAstroLight from '@/images/logos/astro-icon-light.svg'
import logoDjango from '@/images/logos/django.svg'
import logoClaris from '@/images/logos/claris-svgrepo-com.svg'
import logoReact from '@/images/logos/React-icon-1.svg'

const projects = [
  // ... other projects
  {
    name: 'Astro',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: 'https://astro.build/', label: 'astro.build' },
    logo: logoAstroLight,
  },
  // ... other projects
]

// Rest of the file remains the same

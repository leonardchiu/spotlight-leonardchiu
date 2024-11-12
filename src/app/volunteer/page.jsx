import Image from 'next/image'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function VolunteerRole({ role }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {role.title} ·{' '}
        <span className="text-zinc-500 dark:text-zinc-400">
          {role.organization}
        </span>
      </Card.Title>
      <Card.Eyebrow decorate>{role.duration}</Card.Eyebrow>
      <Card.Description>{role.description}</Card.Description>
    </Card>
  )
}

const volunteerRoles = [
  {
    title: 'Tech Mentor',
    organization: 'Code First Girls',
    duration: '2022 — Present',
    description:
      'Mentored women learning to code, providing guidance in web development fundamentals including HTML, CSS, and JavaScript.',
  },
  {
    title: 'Community Leader',
    organization: 'Local Tech Meetup',
    duration: '2021 — Present',
    description:
      'Organized monthly tech meetups, coordinated speakers, and facilitated networking opportunities for local tech enthusiasts.',
  },
  // Add more volunteer roles as needed
]

export default function Volunteer() {
  return (
    <SimpleLayout
      title="Making a difference through technology."
      intro="I believe in using my skills to give back to the community. Here are some of the ways I've been involved in volunteer work and community service."
    >
      <div className="space-y-20">
        <Section>
          <ul role="list" className="space-y-12">
            {volunteerRoles.map((role, roleIndex) => (
              <VolunteerRole key={roleIndex} role={role} />
            ))}
          </ul>
        </Section>
      </div>
    </SimpleLayout>
  )
}

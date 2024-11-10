import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Leonard Chiu. I live in Singapore, where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello! I'm Leonard Chiu, Chief Technology Officer at the
              pharmaceutical wholesaler/distributor. I oversee all our
              technology initiatives, from core ERP systems to customer-facing
              platforms powering our operations. My role is to drive digital
              transformation through pragmatic technology solutions.
            </p>
            <p>
              I took a highly unorthodox path to becoming a CTO. I never
              formally studied computer science or software engineering. After
              college, my first job was in construction and property management.
              While I developed business skills, I never felt truly passionate
              about my work.
            </p>
            <p>
              The turning point was realizing how software and technology could
              optimize operations far beyond manual efforts. I’m intrinsically
              drawn to logical, methodical solutions over brute labor. I started
              tinkering with simple apps to boost productivity at my firm.It was
              eye-opening to see the time and effort software could save. I was
              hooked on solving real business problems with code. I began
              teaching myself to program nights and weekends.
            </p>
            <p>
              This was the early 2000s, so I learned languages like Visual
              Basic, classic ASP, and early .NET from books. Without formal
              training, the learning curve was extremely steep. The array of
              languages, frameworks, and technical jargon felt daunting.
            </p>
            <p>
              But I persevered by focusing on one core goal – build apps that
              solve actual business challenges. I reminded myself that users
              care about ease-of-use, not complex underlying technology.I
              started small - automating reports and basic data programs. Using
              coding tutorials and books for beginners, I grasped fundamental
              concepts. Gradually, after many late nights studying and coding, I
              gained enough skills to develop custom apps for my company.
              Automating client reporting saved 10+ hours per week of manual
              work. I was thrilled with the increased efficiency.
            </p>
            <p>
              Over the next two decades, I continued improving my coding
              abilities while learning invaluable lessons about product design,
              project management, and end-user simplicity from my early
              projects. A key insight – keep the user experience clean and
              straightforward, even with advanced functionality behind the
              scenes. Fast forward 20 years, and some of my early business apps
              are now used by major corporations! Despite my non-traditional
              background, consistently solving problems with pragmatic
              technology enabled me to land the CTO role.
            </p>
            <p>
              Now, I lead a 30-person technology team comprised of internal
              staff and external vendor partners. Together, we digitally
              transform distribution operations from automating warehouses to
              optimizing delivery routes and e-commerce sales channels. I enjoy
              mentoring team members new to software engineering from
              non-technical backgrounds. While becoming a CTO without a CS
              degree is rare, I’m proof it’s achievable through determination
              and a learning mindset. I’m excited to share my unique self-taught
              developer journey through this blog to inspire others like me.
            </p>
            <p>
              My goal is to show that anyone can transition into tech leadership
              roles with passion and grit, regardless of their background. The
              path won't be easy, but if you believe in the power of technology
              to solve real-world problems, anything is possible.
            </p>
            <p>
              Outside of work, I have a wonderful family life. I'm a proud
              husband and father of two boys. I've always had varied interests -
              from technology and electronics to high-adrenaline sports when I
              was younger, like motorcross racing and scuba diving. These days,
              I enjoy keeping fit at the gym, running, golfing and other low-key
              activities. But I still have a passion for all things tech and
              stay on top of the latest gadgets and innovations. I also believe
              in giving back to the community. I've volunteered extensively to
              promote social harmony and community bonding. I assisted fellow
              citizens in resolving issues through grassroots organizations.
            </p>
            <p>
              In 2019 & 2024, I was honored to receive the Pingkat Bakti
              Masyarakat (PBM) and Bintang Bakti Masyarakat (BBM) awards
              respectively by the Presidents of Singapore for my community
              service. It's incredibly rewarding to make a difference through
              technology at work and help people in my personal time.
            </p>
            <p>
              I'm excited to share my unique career journey and inspire others
              to see that with determination and grit, a non-traditional path in
              tech is possible.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:leonard@leonardchiu.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              leonard@leonardchiu.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

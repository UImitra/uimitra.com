import { Page, Seo } from '../components/layout/chrome';
import { Engagements } from '../components/home/Sections';
import { Mark } from '../components/brand/Marks';
import { Button } from '../components/ui/Button';
import { Parallax, Reveal, ScrollWords, SplitReveal } from '../components/ui/motion';
import { projects } from '../data/work';
import { site } from '../config/site';
import Dharmesh from '../assets/Dharmesh_uimitra.webp';
import Dhiraj from '../assets/Dhiraj_uimitra.webp';

const team = [
  {
    name: 'Dharmesh Vadher',
    role: 'Co-founder & Chief Design Officer',
    img: Dharmesh,
    bio: 'Dharmesh leads design at UImitra. He focuses on user-first work that solves a real business problem, and on making it look good while it does.',
  },
  {
    name: 'Dhiraj T H',
    role: 'Chief Operating Officer',
    img: Dhiraj,
    bio: 'Dhiraj works across AI, automation, full-stack development and mechanical design. He has contributed to research projects with ISRO (IIA), DRDO and IISc and holds a patent for an AI-powered assistive device.',
  },
];

const principles = [
  ['Say it plainly', 'If a customer cannot repeat what you do after one visit, the design has not done its job yet.'],
  ['Design the whole system', 'A logo, a website and an Instagram post should feel like the same company. We design them together.'],
  ['Show work early', 'You see rough ideas in week two. It is cheaper to change direction on a sketch than on a finished site.'],
  ['Leave you independent', 'Guidelines, templates and source files mean your team can keep the brand consistent without us.'],
];

export default function About() {
  return (
    <Page>
      <Seo
        title="Studio"
        path="/about"
        description="UImitra is a brand and design studio in Bengaluru. UI meets trust, UX meets Mitra. Meet the team and how we work."
      />
      <section className="wrap pb-20 pt-36 sm:pt-44">
        <p className="eyebrow text-mute">The studio</p>
        <h1 className="mt-6 text-display-xl font-medium">
          <SplitReveal text={'UI meets trust.\nUX meets *Mitra.*'} immediate delay={0.4} />
        </h1>
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-lead text-ink/70">
              Mitra means friend. We started UImitra in Bengaluru to be the design partner we wanted as founders: honest about what will work, quick to show ideas and invested in how the business does after launch.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-ink/60">
              Today we design brands, websites, products and campaigns for startups and growing companies, from cloud learning platforms to school software and coaching institutes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-6">
        <div className="flex gap-4 px-4">
          {[...projects, ...projects].slice(0, 9).map((p, i) => (
            <Parallax key={i} speed={i % 2 ? 0.08 : -0.08} className="shrink-0">
              <div className="grid h-40 w-40 place-items-center rounded-3xl sm:h-56 sm:w-56" style={{ background: p.theme.bg }}>
                <Mark project={p} className="h-1/2 w-1/2" />
              </div>
            </Parallax>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-36">
        <div className="wrap">
          <ScrollWords
            className="max-w-[24ch] text-display-m font-medium"
            text="Small senior team. Clear process. Work you can *put your name on.*"
          />
        </div>
      </section>

      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <p className="eyebrow text-mute">Leadership</p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-[28px] bg-paper">
                  <div className="aspect-[4/4.2] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-[1.2s] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-7 sm:p-9">
                    <p className="eyebrow text-mute">{m.role}</p>
                    <h2 className="mt-3 text-3xl font-medium tracking-tight">{m.name}</h2>
                    <p className="mt-4 text-ink/65">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-36">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-mute">How we think</p>
            <h2 className="mt-5 text-display-s font-medium">Four rules we keep.</h2>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-[24px] bg-ink/10 sm:grid-cols-2 lg:col-span-8">
            {principles.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={i * 0.06} className="bg-paper p-8">
                <span className="font-mono text-xs text-brand">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">{t}</h3>
                <p className="mt-3 text-ink/60">{b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Engagements />

      <section className="bg-paper pb-28">
        <div className="wrap">
          <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-brand p-8 text-white sm:p-14 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-white/70">{site.city}</p>
              <h2 className="mt-4 max-w-2xl text-display-s font-medium">Come say hello, in person or on a call.</h2>
            </div>
            <Button href={site.booking} variant="paper" size="lg">Book a call</Button>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

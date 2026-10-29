import { Page, Seo } from '../components/layout/chrome';
import Hero from '../components/home/Hero';
import WorkStack from '../components/home/WorkStack';
import ServicesRail from '../components/home/ServicesRail';
import KitExplorer from '../components/home/KitExplorer';
import { Engagements, Faq, Process, Statement, generalFaqs } from '../components/home/Sections';
import { Marquee } from '../components/ui/motion';
import { services } from '../data/services';

export default function Home() {
  return (
    <Page>
      <Seo
        title="Brand & design studio in Bengaluru"
        description="UImitra designs brand strategy, identities, websites, product UI and marketing for companies that want to lead their category. See the work and book a call."
      />
      <Hero />
      <WorkStack />
      <Statement />
      <ServicesRail />
      <KitExplorer />
      <div className="overflow-hidden border-y border-ink/10 bg-paper py-6">
        <Marquee duration={45}>
          {services.map((s) => (
            <span key={s.slug} className="mx-6 flex items-center gap-12 whitespace-nowrap text-display-s font-medium sm:mx-10">
              {s.name}
              <span className="h-3 w-3 rounded-full bg-brand" />
            </span>
          ))}
        </Marquee>
      </div>
      <Process />
      <Engagements />
      <Faq items={generalFaqs} />
    </Page>
  );
}

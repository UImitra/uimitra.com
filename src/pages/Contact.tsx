import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Page, Seo } from '../components/layout/chrome';
import { Arrow, Button } from '../components/ui/Button';
import { SplitReveal } from '../components/ui/motion';
import { site } from '../config/site';
import { getService, services } from '../data/services';

const budgets = ['Under ₹2L', '₹2L to ₹5L', '₹5L to ₹15L', '₹15L+', 'Not sure yet'];
const timelines = ['As soon as possible', 'In 1 to 2 months', 'In 3+ months', 'Just exploring'];

type Form = { fullName: string; email: string; phone: string; companyName: string; message: string };

export default function Contact() {
  const [params] = useSearchParams();
  const preset = useMemo(() => {
    const s = getService(params.get('service') ?? '');
    const plan = params.get('plan');
    return { services: s ? [s.name] : [], plan };
  }, [params]);

  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>(preset.services);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [form, setForm] = useState<Form>({ fullName: '', email: '', phone: '', companyName: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const toggle = (name: string) => setPicked((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const details = [
      `Services: ${picked.join(', ') || 'Not specified'}`,
      preset.plan ? `Plan: ${preset.plan}` : null,
      `Budget: ${budget || 'Not specified'}`,
      `Timeline: ${timeline || 'Not specified'}`,
      '',
      form.message,
    ]
      .filter((x) => x !== null)
      .join('\n');

    try {
      if (!site.appsScriptUrl) throw new Error('Form endpoint is not configured');
      // Same payload shape as before so the Apps Script sheet keeps working.
      await fetch(site.appsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          companyName: form.companyName,
          details,
          pageName: 'Contact Us',
        }),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  const canNext = step === 0 ? picked.length > 0 : step === 1 ? !!budget && !!timeline : true;
  const stepsTotal = 3;

  return (
    <Page>
      <Seo
        title="Start a project"
        path="/contact"
        description="Tell UImitra about your brand, website or marketing project. Fill in a short brief or book a 30-minute call."
      />
      <section className="wrap grid gap-16 pb-24 pt-36 sm:pt-44 lg:grid-cols-12">
        <div className="contents lg:block lg:col-span-5">
          <div>
          <p className="eyebrow text-mute">Start a project</p>
          <h1 className="mt-6 text-display-l font-medium">
            <SplitReveal text={"Let's make\nsomething *good.*"} immediate delay={0.4} />
          </h1>
          <p className="mt-8 max-w-md text-lead text-ink/65">
            Three quick steps. We read every brief ourselves and reply within one working day with next steps, or a straight answer if we are not the right fit.
          </p>

          </div>

          <div className="order-last space-y-3 lg:order-none lg:mt-12">
            <a href={site.booking} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-ink p-6 text-paper transition-colors hover:bg-brand">
              <span>
                <span className="eyebrow block text-paper/50">Prefer to talk?</span>
                <span className="mt-2 block text-xl font-medium">Book a 30-minute call</span>
              </span>
              <Arrow className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={`mailto:${site.email}`} className="rounded-2xl bg-paper-2 p-5 transition-colors hover:bg-paper-3">
                <span className="eyebrow block text-mute">Email</span>
                <span className="mt-2 block">{site.email}</span>
              </a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-2xl bg-paper-2 p-5 transition-colors hover:bg-paper-3">
                <span className="eyebrow block text-mute">WhatsApp / Call</span>
                <span className="mt-2 block">{site.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[28px] bg-paper-2 p-6 sm:p-10">
            {status === 'done' ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[460px] flex-col justify-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
                  <svg viewBox="0 0 16 16" className="h-6 w-6" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h2 className="mt-8 text-display-s font-medium">Thanks, {form.fullName.split(' ')[0] || 'friend'}. Brief received.</h2>
                <p className="mt-4 max-w-md text-ink/65">We will reply to {form.email} within one working day. If it is urgent, book a call and we can talk sooner.</p>
                <div className="mt-8"><Button href={site.booking} variant="ink">Book a call now</Button></div>
              </motion.div>
            ) : (
              <form onSubmit={submit}>
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-mute">Step {step + 1} of {stepsTotal}</p>
                  <div className="flex gap-1.5">
                    {Array.from({ length: stepsTotal }).map((_, i) => (
                      <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-8 bg-brand' : 'w-4 bg-ink/15'}`} />
                    ))}
                  </div>
                </div>

                <div className="mt-8 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <Step key="0" title="What can we help with?" hint="Pick as many as you like.">
                        <div className="flex flex-wrap gap-2">
                          {services.map((s) => (
                            <Chip key={s.slug} on={picked.includes(s.name)} onClick={() => toggle(s.name)}>{s.name}</Chip>
                          ))}
                          <Chip on={picked.includes('Something else')} onClick={() => toggle('Something else')}>Something else</Chip>
                        </div>
                        {preset.plan && <p className="mt-6 text-sm text-mute">You asked about the {preset.plan} plan. We will include it in the brief.</p>}
                      </Step>
                    )}
                    {step === 1 && (
                      <Step key="1" title="Budget and timing" hint="A rough range helps us suggest the right scope.">
                        <p className="eyebrow mb-3 text-mute">Budget</p>
                        <div className="flex flex-wrap gap-2">
                          {budgets.map((b) => <Chip key={b} on={budget === b} onClick={() => setBudget(b)}>{b}</Chip>)}
                        </div>
                        <p className="eyebrow mb-3 mt-8 text-mute">When do you want to start?</p>
                        <div className="flex flex-wrap gap-2">
                          {timelines.map((t) => <Chip key={t} on={timeline === t} onClick={() => setTimeline(t)}>{t}</Chip>)}
                        </div>
                      </Step>
                    )}
                    {step === 2 && (
                      <Step key="2" title="About you" hint="We only use this to reply to you.">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field label="Your name" required value={form.fullName} onChange={set('fullName')} autoComplete="name" />
                          <Field label="Email" type="email" required value={form.email} onChange={set('email')} autoComplete="email" />
                          <Field label="Phone or WhatsApp" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                          <Field label="Company" value={form.companyName} onChange={set('companyName')} autoComplete="organization" />
                          <label className="sm:col-span-2">
                            <span className="eyebrow text-mute">Tell us about the project</span>
                            <textarea
                              required
                              rows={4}
                              value={form.message}
                              onChange={set('message')}
                              placeholder="What are you building, and what does success look like?"
                              className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 text-lg placeholder:text-ink/30 focus:border-ink focus:outline-none"
                            />
                          </label>
                        </div>
                        {status === 'error' && (
                          <p className="mt-4 text-sm text-brand" role="alert">
                            That did not send. Please email {site.email} or try again.
                          </p>
                        )}
                      </Step>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-6">
                  <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} className={`text-sm text-ink/60 hover:text-ink ${step === 0 ? 'invisible' : ''}`}>
                    Back
                  </button>
                  {step < stepsTotal - 1 ? (
                    <Button onClick={() => canNext && setStep((s) => s + 1)} disabled={!canNext} variant="ink" magnetic={false}>Continue</Button>
                  ) : (
                    <Button type="submit" variant="brand" disabled={status === 'sending'} magnetic={false}>
                      {status === 'sending' ? 'Sending' : 'Send brief'}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
}

function Step({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
      <h2 className="text-3xl font-medium tracking-tight">{title}</h2>
      <p className="mb-8 mt-2 text-ink/55">{hint}</p>
      {children}
    </motion.div>
  );
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`rounded-full border px-4 py-2.5 text-[15px] transition-all duration-300 ${on ? 'border-ink bg-ink text-paper' : 'border-ink/15 hover:border-ink/50'}`}
    >
      {children}
    </button>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-mute">{label}{props.required ? ' *' : ''}</span>
      <input {...props} className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-lg focus:border-ink focus:outline-none" />
    </label>
  );
}

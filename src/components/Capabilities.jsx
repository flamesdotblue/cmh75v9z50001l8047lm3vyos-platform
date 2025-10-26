import { Shield, Radar, Satellite, Lock } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Advanced Defense Systems',
    desc: 'Ruggedized, modular platforms engineered for contested environments with high MTBF and rapid field serviceability.',
  },
  {
    icon: Radar,
    title: 'C4ISR & Sensor Fusion',
    desc: 'Multi-domain situational awareness via data links, edge compute, and AI-enhanced targeting and cueing.',
  },
  {
    icon: Satellite,
    title: 'Space & Communications',
    desc: 'Resilient SATCOM, GNSS-denied navigation aids, and LEO/MEO payload integration with secure waveforms.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity & Zero Trust',
    desc: 'Accreditation-ready architectures with hardware roots of trust, SBOM traceability, and end-to-end encryption.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-white/10 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Capabilities</h2>
          <p className="max-w-2xl text-slate-400">
            From rapid R&D to LRIP and sustainment, we deliver full lifecycle support across critical programs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/40 hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

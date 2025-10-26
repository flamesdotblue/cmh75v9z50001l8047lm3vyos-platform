export default function Programs() {
  const programs = [
    {
      name: 'AURORA EW Suite',
      domain: 'Air',
      details: 'Airborne electronic warfare pod with adaptive jamming and passive geolocation.',
    },
    {
      name: 'TRIDENT C2 Node',
      domain: 'Sea',
      details: 'Maritime command-and-control with resilient mesh networking and SATCOM failover.',
    },
    {
      name: 'WARDEN ISR Kit',
      domain: 'Land',
      details: 'Vehicle-mounted ISR package with EO/IR, RF sensing, and onboard AI fusion.',
    },
    {
      name: 'ORBIT Secure Uplink',
      domain: 'Space',
      details: 'LEO/MEO crosslink modem with anti-jam waveforms and quantum-safe crypto roadmap.',
    },
  ];

  return (
    <section className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-950/95">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Programs & Platforms</h2>
          <p className="max-w-2xl text-slate-400">Selected efforts demonstrating technology readiness and field performance.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <div key={p.name} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-white">{p.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-300">{p.domain} Domain</p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">TRL 7-9</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.details}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">Rugged</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">Modular</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">Secure</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-emerald-300">
            <Shield className="h-4 w-4" />
            <span className="text-xs tracking-wide">Defense Systems • Trusted Partner</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Mission-Critical Solutions for a Safer World
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Aegis Dynamics delivers secure, high-reliability systems across air, sea, land, space, and cyber domains. Engineered for resilience. Proven in the field.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-emerald-400"
            >
              Explore Capabilities
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Request a Briefing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

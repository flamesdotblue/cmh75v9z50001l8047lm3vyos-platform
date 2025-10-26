import { Mail, Phone, MapPin } from 'lucide-react';
import { useCallback } from 'react';

export default function Contact() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:bd@aegisdynamics.example?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="contact" className="relative border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Contact</h2>
          <p className="max-w-2xl text-slate-400">Request a technical briefing, capabilities statement, or security-cleared engagement.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-medium text-white">Business Development</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-300"><Mail className="h-4 w-4 text-emerald-300" /> bd@aegisdynamics.example</li>
              <li className="flex items-center gap-3 text-slate-300"><Phone className="h-4 w-4 text-emerald-300" /> +1 (555) 013-3700</li>
              <li className="flex items-center gap-3 text-slate-300"><MapPin className="h-4 w-4 text-emerald-300" /> 1200 Defense Way, Suite 400, Arlington, VA</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-emerald-300">CAGE: 1A2B3</div>
              <div className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-emerald-300">DUNS: 012345678</div>
              <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1">ISO 9001:2015</div>
              <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1">CMMC L2 (In Progress)</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm text-slate-300">Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400/50" placeholder="Jane Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400/50" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-slate-300">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400/50" placeholder="Briefly describe your requirement, timeline, and classification needs." />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">By submitting, you agree to securely transmit non-classified information only.</p>
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-emerald-400">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

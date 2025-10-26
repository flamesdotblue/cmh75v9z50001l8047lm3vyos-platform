import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Programs from './components/Programs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-emerald-400/30 selection:text-emerald-200">
      <Hero />
      <Capabilities />
      <Programs />
      <Contact />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
          <p>© {new Date().getFullYear()} Aegis Dynamics. All rights reserved.</p>
          <p className="text-slate-500">ITAR Compliant • ISO 9001:2015 • CMMC Ready</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

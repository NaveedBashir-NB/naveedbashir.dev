"use client";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 shadow-lg shadow-slate-950/20 ring-1 ring-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.45),_transparent_55%)]" />
        <div className="absolute -bottom-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-xl" />
        <span className="relative text-lg font-black tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-br from-sky-200 via-white to-violet-300">
          NB
        </span>
      </div>

      <div className="hidden sm:block leading-tight">
        <div className="text-[0.95rem] font-semibold tracking-[0.24em] text-slate-900">
          NAVEED BASHIR
        </div>
        <div className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-500">
          Full Stack Developer
        </div>
      </div>
    </div>
  );
}

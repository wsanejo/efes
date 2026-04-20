export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-graphite">
      <div className="flex flex-col items-center gap-5 text-white">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-white/10 border-t-ember" />
        <p className="text-sm uppercase tracking-[0.32em] text-white/60">Preparing project overview</p>
      </div>
    </div>
  );
}

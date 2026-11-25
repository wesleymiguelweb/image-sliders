export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-lavender">
      <div className="absolute -right-36 -top-36 size-[580px] rounded-full bg-violet-200/50 blur-3xl dark:bg-violet-800/40" />
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30" />
    </div>
  );
}

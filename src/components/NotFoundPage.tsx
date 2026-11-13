export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-8xl flex-col justify-center px-4 pt-24 md:px-6">
      <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase">Error 404</p>
      <h1 className="mt-4 font-heading text-[clamp(4rem,14vw,12rem)] leading-[0.85] uppercase">Signal lost</h1>
      <p className="mt-6 max-w-md text-lg text-bone/75">This page doesn’t exist — but the rest of the system is running fine.</p>
      <a href="/" className="mt-8 font-heading text-lg tracking-[0.12em] uppercase underline underline-offset-4 hover:text-signal">
        Back to WILFA TECH →
      </a>
    </div>
  )
}

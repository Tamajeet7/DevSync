export default function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-5">

        <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-cyan-400 border-t-transparent" />

        <p className="text-sm text-zinc-400">
          Loading...
        </p>

      </div>
    </div>
  );
}
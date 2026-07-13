export default function EditorPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0E1117] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#161B22] px-5 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-zinc-500">
          room.tsx
        </span>
      </div>

      <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-zinc-300">
{`const socket = io();

socket.emit("join-room");

socket.on("code-change", (code) => {
   editor.setValue(code);
});

export default function Room() {
   return <Editor />;
}`}
      </pre>

      <div className="flex justify-between border-t border-zinc-800 bg-[#161B22] px-5 py-3 text-xs text-zinc-500">
        <span>TypeScript</span>

        <span>UTF-8 • Spaces:2</span>
      </div>
    </div>
  );
}
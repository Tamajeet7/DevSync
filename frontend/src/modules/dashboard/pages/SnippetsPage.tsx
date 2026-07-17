import DashboardLayout from "../components/DashboardLayout";

export default function SnippetsPage() {
  return (
    <DashboardLayout>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Snippets Library</h2>
        <p className="text-zinc-400 max-w-sm">Save and reuse your most common code blocks across all your rooms.</p>
      </div>
    </DashboardLayout>
  );
}

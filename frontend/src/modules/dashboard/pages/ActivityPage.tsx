import DashboardLayout from "../components/DashboardLayout";

export default function ActivityPage() {
  return (
    <DashboardLayout>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Activity</h2>
        <p className="text-zinc-400 max-w-sm">View your recent workspace interactions and collaborative sessions here.</p>
      </div>
    </DashboardLayout>
  );
}

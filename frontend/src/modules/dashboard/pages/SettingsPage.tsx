import DashboardLayout from "../components/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
        <p className="text-zinc-400 max-w-sm">Manage your DevSync profile, theme preferences, and security settings.</p>
      </div>
    </DashboardLayout>
  );
}

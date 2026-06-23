"use client";

import { useTheme } from "../../theme-context";
import PhoneLayout from "../../components/phone-layout";
import StatusBar from "../../components/status-bar";
import Header from "../../components/header";

export default function NotificationsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <PhoneLayout theme={theme} setTheme={setTheme}>
      <StatusBar />
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔔</div>
          <h2 className="font-display text-lg font-semibold text-slate-600 mb-2">
            Notifications
          </h2>
          <p className="text-sm text-slate-400">
            Your learning reminders and updates will appear here
          </p>
        </div>
      </div>
    </PhoneLayout>
  );
}
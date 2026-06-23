"use client";

import { useState } from "react";
import { useTheme } from "../../theme-context";
import PhoneLayout from "../../components/phone-layout";
import Header from "../../components/header";
import SideDrawer from "../../components/side-drawer";
import WelcomeRow from "../../components/welcome-row";
import StatPills from "../../components/stat-pills";
import SearchCard from "../../components/search-card";
import CourseSection from "../../components/course-section";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <PhoneLayout theme={theme} setTheme={setTheme}>
      <div className="block md:hidden">
        <Header onMenuClick={() => setIsDrawerOpen(true)} />
      </div>

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <WelcomeRow />
      <StatPills />
      <SearchCard />
      <CourseSection />
    </PhoneLayout>
  );
}
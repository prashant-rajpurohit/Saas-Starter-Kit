// app/(dashboard)/layout.tsx

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/organisms/main-sidebar";
import { Header } from "@/components/organisms/header";
import { RouteProgress } from "@/components/atoms/route-progress";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 60)",
          "--header-height": "calc(var(--spacing) * 10)",
        } as React.CSSProperties
      }
    >
      <MainSidebar />
      <SidebarInset>
        <Header />
        <RouteProgress />
        <span style={{ padding: "20px" }}>{children}</span>
      </SidebarInset>
    </SidebarProvider>
  );
}

import { cn } from "@/lib/utils";
import SidebarNav from "./sidebarNav";
interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col w-64 h-screen border-r bg-background px-4 py-6",
        className,
      )}
    >
      {/* Logo */}
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold">SaaS Starter</h1>
      </div>
      <SidebarNav/>
      <div className="mt-auto">{/* footer */}</div>
    </aside>
  );
}

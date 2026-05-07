import { LayoutDashboard } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function NavMain(){
    return (
        <SidebarMenuItem>
            <SidebarMenuButton>
                <LayoutDashboard/>
                <span>Dashboard</span>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

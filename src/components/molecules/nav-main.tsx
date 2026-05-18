"use client";
import { RoutesI} from "@/lib/types";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Routes } from "@/navigation/navigation";
import { useRouter } from "next/navigation";

export function NavMain() {
  const router=useRouter();
  return (
    <>
      {Routes.map((route: RoutesI) => (
        <SidebarMenuItem key={route.path}>
          <SidebarMenuButton onClick={() =>router.push(route.path) }>
            <route.icon />
            <span>{route.name}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}



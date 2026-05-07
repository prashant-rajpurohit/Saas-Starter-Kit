// components/organisms/Sidebar/SidebarNav.tsx
'use client'

import NavItem from '@/components/molecules/navItems'
import {
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  BarChart
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Users', href: '/users', icon: Users },
  { label: 'Reports', href: '/reports', icon: FileText },
  { label: 'Analytics', href: '/analytics', icon: BarChart },
  { label: 'Settings', href: '/settings', icon: Settings },
]

export default function SidebarNav() {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </nav>
  )
}
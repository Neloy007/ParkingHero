"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Car,
  MapPin,
  ParkingSquare,
  CalendarDays,
  CreditCard,
  Star,
  AlertTriangle,
  Bell,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Drivers", href: "/drivers", icon: Users },
  { name: "Parking Owners", href: "/parking-owners", icon: Car },
  { name: "Parking Locations", href: "/parking-locations", icon: MapPin },
  { name: "Parking Slots", href: "/parking-slots", icon: ParkingSquare },
  { name: "Reservations", href: "/reservations", icon: CalendarDays },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Complaints", href: "/complaints", icon: AlertTriangle },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        group sticky left-0 top-0 z-50
        flex h-screen
        w-[76px] shrink-0
        flex-col
        border-r border-slate-200
        bg-white
        shadow-sm
        transition-all duration-300 ease-in-out
        hover:w-72
      "
    >
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-200 px-4">
        <div className="flex min-w-max items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ParkingSquare size={24} />
          </div>

          <div
            className="
              w-0 overflow-hidden whitespace-nowrap
              opacity-0
              transition-all duration-300
              group-hover:w-[190px]
              group-hover:opacity-100
            "
          >
            <h1 className="text-xl font-bold tracking-tight">ParkingHero</h1>

            <p className="text-xs font-medium text-slate-500">
              ADMIN CONTROL CENTER
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-6">
        <p
          className="
            mb-3 px-3
            whitespace-nowrap
            text-xs font-semibold uppercase tracking-wider
            text-slate-400
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        >
          Management
        </p>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.name}
                className={`
                  flex h-12 w-full items-center
                  rounded-xl px-3
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                <Icon size={20} className="shrink-0" />

                <span
                  className="
                    ml-3
                    w-0 overflow-hidden whitespace-nowrap
                    opacity-0
                    transition-all duration-300
                    group-hover:w-[190px]
                    group-hover:opacity-100
                  "
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Admin profile */}
      <div className="border-t border-slate-200 p-3">
        <div className="flex min-w-max items-center gap-3 rounded-xl bg-slate-50 p-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            A
          </div>

          <div
            className="
              w-0 overflow-hidden whitespace-nowrap
              opacity-0
              transition-all duration-300
              group-hover:w-[170px]
              group-hover:opacity-100
            "
          >
            <p className="text-sm font-semibold">Administrator</p>

            <p className="text-xs text-slate-500">System Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

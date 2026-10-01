"use client";

import {
  Users,
  Car,
  Bell,
  Search,
  ChevronDown,
  MoreHorizontal,
  Eye,
  UserCheck,
  UserX,
  Download,
} from "lucide-react";
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";

const drivers = [
  {
    id: "DRV-1001",
    name: "Rahim Ahmed",
    email: "rahim.ahmed@example.com",
    phone: "01711-234567",
    vehicles: 2,
    reservations: 18,
    status: "Active",
    joined: "Sep 30, 2026",
  },
  {
    id: "DRV-1002",
    name: "Nusrat Jahan",
    email: "nusrat.jahan@example.com",
    phone: "01819-456789",
    vehicles: 1,
    reservations: 11,
    status: "Active",
    joined: "Sep 29, 2026",
  },
  {
    id: "DRV-1003",
    name: "Tanvir Hasan",
    email: "tanvir.hasan@example.com",
    phone: "01912-987654",
    vehicles: 1,
    reservations: 7,
    status: "Active",
    joined: "Sep 29, 2026",
  },
  {
    id: "DRV-1004",
    name: "Sadia Islam",
    email: "sadia.islam@example.com",
    phone: "01612-345678",
    vehicles: 3,
    reservations: 26,
    status: "Inactive",
    joined: "Sep 28, 2026",
  },
  {
    id: "DRV-1005",
    name: "Mehedi Hasan",
    email: "mehedi.hasan@example.com",
    phone: "01521-765432",
    vehicles: 1,
    reservations: 14,
    status: "Active",
    joined: "Sep 27, 2026",
  },
  {
    id: "DRV-1006",
    name: "Fahim Rahman",
    email: "fahim.rahman@example.com",
    phone: "01788-112233",
    vehicles: 2,
    reservations: 9,
    status: "Active",
    joined: "Sep 26, 2026",
  },
  {
    id: "DRV-1007",
    name: "Jannatul Ferdous",
    email: "jannatul@example.com",
    phone: "01844-998877",
    vehicles: 1,
    reservations: 5,
    status: "Inactive",
    joined: "Sep 25, 2026",
  },
];

export default function DriversPage() {
  const [search, setSearch] = useState("");

  const filteredDrivers = drivers.filter((driver) => {
    const value = search.toLowerCase();

    return (
      driver.name.toLowerCase().includes(value) ||
      driver.email.toLowerCase().includes(value) ||
      driver.phone.includes(value) ||
      driver.id.toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Shared Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="lg:ml-72">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div>
              <p className="text-sm text-slate-500">User Management</p>

              <h2 className="text-xl font-bold">Drivers</h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Notification */}
              <button className="relative rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50">
                <Bell size={19} className="text-slate-600" />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>

              {/* Admin Profile */}
              <button className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 sm:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  A
                </div>

                <span className="text-sm font-semibold">Admin</span>

                <ChevronDown size={15} className="text-slate-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-5 sm:p-8">
          {/* Page Title */}
          <div className="mb-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Drivers</h3>

                <p className="mt-1 text-sm text-slate-500">
                  View and manage all drivers registered through the ParkingHero
                  Android application.
                </p>
              </div>

              {/* Export */}
              <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                <Download size={17} />
                Export Drivers
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Total Drivers */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  Total Drivers
                </p>

                <Users size={20} className="text-slate-600" />
              </div>

              <p className="mt-3 text-3xl font-bold">1,248</p>

              <p className="mt-1 text-xs text-emerald-600">+12.5% this month</p>
            </div>

            {/* Active Drivers */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  Active Drivers
                </p>

                <UserCheck size={20} className="text-emerald-500" />
              </div>

              <p className="mt-3 text-3xl font-bold">1,176</p>

              <p className="mt-1 text-xs text-slate-400">
                94.2% of total drivers
              </p>
            </div>

            {/* Inactive */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Inactive</p>

                <UserX size={20} className="text-orange-500" />
              </div>

              <p className="mt-3 text-3xl font-bold">72</p>

              <p className="mt-1 text-xs text-slate-400">Currently inactive</p>
            </div>

            {/* New This Month */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  New This Month
                </p>

                <Users size={20} className="text-blue-500" />
              </div>

              <p className="mt-3 text-3xl font-bold">148</p>

              <p className="mt-1 text-xs text-emerald-600">
                +18.4% compared to last month
              </p>
            </div>
          </div>

          {/* Drivers Table */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h4 className="font-bold">All Drivers</h4>

                <p className="mt-1 text-xs text-slate-500">
                  {filteredDrivers.length} drivers displayed
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <Search size={18} className="text-slate-400" />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search drivers..."
                    className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:w-64"
                  />
                </div>

                {/* Filter */}
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium hover:bg-slate-50">
                  Filter
                  <ChevronDown size={15} />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
                    <th className="px-6 py-4 font-semibold">Driver</th>

                    <th className="px-6 py-4 font-semibold">Driver ID</th>

                    <th className="px-6 py-4 font-semibold">Phone</th>

                    <th className="px-6 py-4 font-semibold">Vehicles</th>

                    <th className="px-6 py-4 font-semibold">Reservations</th>

                    <th className="px-6 py-4 font-semibold">Status</th>

                    <th className="px-6 py-4 font-semibold">Joined</th>

                    <th className="px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredDrivers.length > 0 ? (
                    filteredDrivers.map((driver) => (
                      <tr
                        key={driver.id}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                      >
                        {/* Driver */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold">
                              {driver.name.charAt(0)}
                            </div>

                            <div>
                              <p className="text-sm font-semibold">
                                {driver.name}
                              </p>

                              <p className="mt-0.5 text-xs text-slate-400">
                                {driver.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Driver ID */}
                        <td className="px-6 py-5">
                          <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-slate-600">
                            {driver.id}
                          </span>
                        </td>

                        {/* Phone */}
                        <td className="px-6 py-5 text-sm text-slate-600">
                          {driver.phone}
                        </td>

                        {/* Vehicles */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <Car size={16} className="text-slate-400" />

                            <span className="text-sm font-semibold">
                              {driver.vehicles}
                            </span>
                          </div>
                        </td>

                        {/* Reservations */}
                        <td className="px-6 py-5 text-sm font-semibold">
                          {driver.reservations}
                        </td>

                        {/* Status */}
                        <td className="px-6 py-5">
                          {driver.status === "Active" ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                              Inactive
                            </span>
                          )}
                        </td>

                        {/* Joined */}
                        <td className="px-6 py-5 text-sm text-slate-500">
                          {driver.joined}
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1">
                            <button
                              title="View driver"
                              className="rounded-lg p-2 hover:bg-slate-100"
                            >
                              <Eye size={17} className="text-slate-500" />
                            </button>

                            <button
                              title="More options"
                              className="rounded-lg p-2 hover:bg-slate-100"
                            >
                              <MoreHorizontal
                                size={18}
                                className="text-slate-500"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center">
                          <Users size={35} className="text-slate-300" />

                          <p className="mt-3 text-sm font-semibold text-slate-600">
                            No drivers found
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Try searching with a different name, email, phone,
                            or driver ID.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing {filteredDrivers.length} of 1,248 drivers
              </p>

              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-400">
                  Previous
                </button>

                <button className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                  1
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium">
                  2
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium">
                  3
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-8 text-center text-xs text-slate-400">
            ParkingHero Admin Control Center • Driver Management
          </div>
        </div>
      </main>
    </div>
  );
}

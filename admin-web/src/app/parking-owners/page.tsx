"use client";

import {
  Bell,
  Search,
  ChevronDown,
  MoreHorizontal,
  Eye,
  UserCheck,
  UserX,
  MapPin,
  ParkingSquare,
  Building2,
  Clock3,
  Download,
} from "lucide-react";
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";

const owners = [
  {
    id: "OWN-1001",
    name: "Arif Hossain",
    business: "Dhanmondi Smart Parking",
    email: "arif.hossain@example.com",
    phone: "01711-223344",
    locations: 2,
    slots: 48,
    status: "Active",
    joined: "Sep 30, 2026",
  },
  {
    id: "OWN-1002",
    name: "Sakib Rahman",
    business: "Gulshan Parking Hub",
    email: "sakib.rahman@example.com",
    phone: "01819-334455",
    locations: 3,
    slots: 72,
    status: "Active",
    joined: "Sep 29, 2026",
  },
  {
    id: "OWN-1003",
    name: "Mahmudul Hasan",
    business: "Banani Secure Parking",
    email: "mahmud.hasan@example.com",
    phone: "01912-445566",
    locations: 1,
    slots: 24,
    status: "Pending",
    joined: "Sep 29, 2026",
  },
  {
    id: "OWN-1004",
    name: "Nayeem Islam",
    business: "Mirpur City Parking",
    email: "nayeem.islam@example.com",
    phone: "01612-556677",
    locations: 2,
    slots: 36,
    status: "Active",
    joined: "Sep 28, 2026",
  },
  {
    id: "OWN-1005",
    name: "Rashed Karim",
    business: "Uttara Parking Point",
    email: "rashed.karim@example.com",
    phone: "01521-667788",
    locations: 1,
    slots: 20,
    status: "Suspended",
    joined: "Sep 27, 2026",
  },
  {
    id: "OWN-1006",
    name: "Imran Kabir",
    business: "Motijheel Parking Center",
    email: "imran.kabir@example.com",
    phone: "01788-778899",
    locations: 2,
    slots: 52,
    status: "Active",
    joined: "Sep 26, 2026",
  },
  {
    id: "OWN-1007",
    name: "Faisal Ahmed",
    business: "Mohammadpur Parking Zone",
    email: "faisal.ahmed@example.com",
    phone: "01844-889900",
    locations: 1,
    slots: 18,
    status: "Pending",
    joined: "Sep 25, 2026",
  },
];

export default function ParkingOwnersPage() {
  const [search, setSearch] = useState("");

  const filteredOwners = owners.filter((owner) => {
    const value = search.toLowerCase();

    return (
      owner.name.toLowerCase().includes(value) ||
      owner.business.toLowerCase().includes(value) ||
      owner.email.toLowerCase().includes(value) ||
      owner.phone.includes(value) ||
      owner.id.toLowerCase().includes(value)
    );
  });

  const activeOwners = owners.filter(
    (owner) => owner.status === "Active",
  ).length;

  const pendingOwners = owners.filter(
    (owner) => owner.status === "Pending",
  ).length;

  const suspendedOwners = owners.filter(
    (owner) => owner.status === "Suspended",
  ).length;

  const totalLocations = owners.reduce(
    (sum, owner) => sum + owner.locations,
    0,
  );

  const totalSlots = owners.reduce((sum, owner) => sum + owner.slots, 0);

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <AdminSidebar />

      <main className="min-w-0 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div>
              <p className="text-sm text-slate-500">User Management</p>

              <h2 className="text-xl font-bold">Parking Owners</h2>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50">
                <Bell size={19} className="text-slate-600" />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>

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

        <div className="p-5 sm:p-8">
          {/* Page Intro */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">
              Parking Owner Management
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage parking owners, locations, slots and verification status.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Total Owners */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <Building2 size={21} className="text-slate-700" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  All owners
                </span>
              </div>

              <p className="mt-5 text-3xl font-bold">{owners.length}</p>

              <p className="mt-1 text-sm text-slate-500">
                Total Parking Owners
              </p>
            </div>

            {/* Active Owners */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                  <UserCheck size={21} className="text-emerald-600" />
                </div>

                <span className="text-xs font-medium text-emerald-600">
                  Active
                </span>
              </div>

              <p className="mt-5 text-3xl font-bold">{activeOwners}</p>

              <p className="mt-1 text-sm text-slate-500">Active Owners</p>
            </div>

            {/* Pending */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                  <Clock3 size={21} className="text-amber-600" />
                </div>

                <span className="text-xs font-medium text-amber-600">
                  Review needed
                </span>
              </div>

              <p className="mt-5 text-3xl font-bold">{pendingOwners}</p>

              <p className="mt-1 text-sm text-slate-500">
                Pending Verification
              </p>
            </div>

            {/* Suspended */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <UserX size={21} className="text-red-600" />
                </div>

                <span className="text-xs font-medium text-red-600">
                  Restricted
                </span>
              </div>

              <p className="mt-5 text-3xl font-bold">{suspendedOwners}</p>

              <p className="mt-1 text-sm text-slate-500">Suspended Owners</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Locations */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Managed Locations</p>

                  <p className="text-2xl font-bold">{totalLocations}</p>
                </div>
              </div>
            </div>

            {/* Slots */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ParkingSquare size={20} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Total Parking Slots</p>

                  <p className="text-2xl font-bold">{totalSlots}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Owners Table */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Table Header */}
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-bold">Registered Parking Owners</h3>

                <p className="mt-1 text-xs text-slate-500">
                  View and manage owner accounts.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Search owners..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white sm:w-64"
                  />
                </div>

                {/* Export */}
                <button className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-medium hover:bg-slate-50">
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] text-left">
                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-5 py-4 font-semibold">Owner</th>

                    <th className="px-5 py-4 font-semibold">Business</th>

                    <th className="px-5 py-4 font-semibold">Contact</th>

                    <th className="px-5 py-4 font-semibold">Locations</th>

                    <th className="px-5 py-4 font-semibold">Slots</th>

                    <th className="px-5 py-4 font-semibold">Status</th>

                    <th className="px-5 py-4 font-semibold">Joined</th>

                    <th className="px-5 py-4 text-right font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredOwners.map((owner) => (
                    <tr key={owner.id} className="transition hover:bg-slate-50">
                      {/* Owner */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                            {owner.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}
                          </div>

                          <div>
                            <p className="font-semibold">{owner.name}</p>

                            <p className="text-xs text-slate-500">{owner.id}</p>
                          </div>
                        </div>
                      </td>

                      {/* Business */}
                      <td className="px-5 py-4">
                        <p className="font-medium">{owner.business}</p>

                        <p className="mt-1 text-xs text-slate-500">
                          Parking service
                        </p>
                      </td>

                      {/* Contact */}
                      <td className="px-5 py-4">
                        <p className="text-sm">{owner.email}</p>

                        <p className="mt-1 text-xs text-slate-500">
                          {owner.phone}
                        </p>
                      </td>

                      {/* Locations */}
                      <td className="px-5 py-4">
                        <span className="font-semibold">{owner.locations}</span>
                      </td>

                      {/* Slots */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <ParkingSquare size={16} className="text-slate-400" />

                          <span className="font-semibold">{owner.slots}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                            owner.status === "Active"
                              ? "bg-emerald-50 text-emerald-700"
                              : owner.status === "Pending"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-red-50 text-red-700"
                          }`}
                        >
                          {owner.status}
                        </span>
                      </td>

                      {/* Joined */}
                      <td className="px-5 py-4 text-sm text-slate-500">
                        {owner.joined}
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            title="View owner"
                            className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100"
                          >
                            <Eye size={16} />
                          </button>

                          <button
                            title="More actions"
                            className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100"
                          >
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredOwners.length === 0 && (
              <div className="px-5 py-16 text-center">
                <Building2 size={40} className="mx-auto text-slate-300" />

                <h3 className="mt-4 font-semibold">No parking owners found</h3>

                <p className="mt-1 text-sm text-slate-500">
                  Try a different search term.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {filteredOwners.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {owners.length}
                </span>{" "}
                owners
              </p>

              <div className="flex items-center gap-1">
                <button
                  disabled
                  className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-400"
                >
                  Previous
                </button>

                <button className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                  1
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">
                  2
                </button>

                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-8 text-center text-xs text-slate-400">
            ParkingHero Admin Control Center • Parking Owner Management
          </div>
        </div>
      </main>
    </div>
  );
}

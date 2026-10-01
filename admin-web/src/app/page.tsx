"use client";
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
  Search,
  ChevronDown,
  ArrowUpRight,
  MoreHorizontal,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
const stats = [
  { title: "Total Drivers", value: "1,248", change: "+12.5%", icon: Users },
  { title: "Parking Owners", value: "86", change: "+8.2%", icon: Car },
  { title: "Parking Locations", value: "42", change: "+5.4%", icon: MapPin },
  {
    title: "Total Slots",
    value: "2,486",
    change: "+10.1%",
    icon: ParkingSquare,
  },
];
const recentUsers = [
  {
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    role: "Driver",
    status: "Active",
    date: "Sep 30, 2026",
  },
  {
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "Driver",
    status: "Active",
    date: "Sep 30, 2026",
  },
  {
    name: "Dhaka Parking Ltd.",
    email: "parking@example.com",
    role: "Owner",
    status: "Pending",
    date: "Sep 29, 2026",
  },
  {
    name: "Tanvir Hasan",
    email: "tanvir@example.com",
    role: "Driver",
    status: "Active",
    date: "Sep 29, 2026",
  },
];
const parkingActivity = [
  {
    name: "Dhanmondi City Parking",
    location: "Dhanmondi, Dhaka",
    available: 32,
    occupied: 41,
    reserved: 5,
    total: 80,
  },
  {
    name: "Gulshan Central Parking",
    location: "Gulshan, Dhaka",
    available: 18,
    occupied: 27,
    reserved: 3,
    total: 48,
  },
  {
    name: "Mirpur Smart Parking",
    location: "Mirpur, Dhaka",
    available: 25,
    occupied: 15,
    reserved: 2,
    total: 42,
  },
];
export default function AdminDashboard() {
return (
  <div className="flex min-h-screen bg-slate-50 text-slate-900">
    {/* Shared Admin Sidebar */}
    <AdminSidebar />
    {/* Main Content */}
    <main className="min-w-0 flex-1">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        {" "}
        <div className="flex h-20 items-center justify-between px-5 sm:px-8">
          {" "}
          <div>
            {" "}
            <p className="text-sm text-slate-500">
              {" "}
              Wednesday, September 30, 2026{" "}
            </p>{" "}
            <h2 className="text-xl font-bold"> Dashboard </h2>{" "}
          </div>{" "}
          <div className="flex items-center gap-3">
            {" "}
            {/* Search */}{" "}
            <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
              {" "}
              <Search size={18} className="text-slate-400" />{" "}
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />{" "}
            </div>{" "}
            {/* Notification */}{" "}
            <button className="relative rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50">
              {" "}
              <Bell size={19} className="text-slate-600" />{" "}
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />{" "}
            </button>{" "}
            {/* Admin Profile */}{" "}
            <button className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 sm:flex">
              {" "}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {" "}
                A{" "}
              </div>{" "}
              <span className="text-sm font-semibold"> Admin </span>{" "}
              <ChevronDown size={15} className="text-slate-400" />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      {/* Dashboard Content */}{" "}
      <div className="p-5 sm:p-8">
        {" "}
        {/* Welcome */}{" "}
        <div className="mb-7">
          {" "}
          <h3 className="text-2xl font-bold tracking-tight">
            {" "}
            Welcome back, Admin 👋{" "}
          </h3>{" "}
          <p className="mt-1 text-sm text-slate-500">
            {" "}
            Here's what's happening across the ParkingHero platform today.{" "}
          </p>{" "}
        </div>{" "}
        {/* Main Stats */}{" "}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {" "}
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                {" "}
                <div className="flex items-start justify-between">
                  {" "}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    {" "}
                    <Icon size={21} className="text-slate-700" />{" "}
                  </div>{" "}
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                    {" "}
                    <ArrowUpRight size={13} /> {stat.change}{" "}
                  </span>{" "}
                </div>{" "}
                <p className="mt-5 text-sm font-medium text-slate-500">
                  {" "}
                  {stat.title}{" "}
                </p>{" "}
                <p className="mt-1 text-3xl font-bold tracking-tight">
                  {" "}
                  {stat.value}{" "}
                </p>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
        {/* Secondary Stats */}{" "}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {" "}
          {/* Available */}{" "}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-sm font-medium text-slate-500">
                {" "}
                Available Slots{" "}
              </p>{" "}
              <ParkingSquare size={19} className="text-emerald-500" />{" "}
            </div>{" "}
            <p className="mt-2 text-2xl font-bold"> 1,084 </p>{" "}
            <p className="mt-1 text-xs text-slate-400">
              {" "}
              Currently available{" "}
            </p>{" "}
          </div>{" "}
          {/* Occupied */}{" "}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-sm font-medium text-slate-500">
                {" "}
                Occupied Slots{" "}
              </p>{" "}
              <ParkingSquare size={19} className="text-orange-500" />{" "}
            </div>{" "}
            <p className="mt-2 text-2xl font-bold"> 1,216 </p>{" "}
            <p className="mt-1 text-xs text-slate-400">
              {" "}
              Currently occupied{" "}
            </p>{" "}
          </div>{" "}
          {/* Reservations */}{" "}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-sm font-medium text-slate-500">
                {" "}
                Today's Reservations{" "}
              </p>{" "}
              <CalendarDays size={19} className="text-blue-500" />{" "}
            </div>{" "}
            <p className="mt-2 text-2xl font-bold"> 327 </p>{" "}
            <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
              {" "}
              <ArrowUpRight size={13} /> 14.8% from yesterday{" "}
            </p>{" "}
          </div>{" "}
          {/* Revenue */}{" "}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-sm font-medium text-slate-500">
                {" "}
                Today's Revenue{" "}
              </p>{" "}
              <CreditCard size={19} className="text-purple-500" />{" "}
            </div>{" "}
            <p className="mt-2 text-2xl font-bold"> ৳48,650 </p>{" "}
            <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
              {" "}
              <ArrowUpRight size={13} /> 9.3% from yesterday{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Charts Row */}{" "}
        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          {" "}
          {/* Occupancy */}{" "}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <div>
                {" "}
                <h4 className="font-bold"> Parking Occupancy </h4>{" "}
                <p className="mt-1 text-xs text-slate-500">
                  {" "}
                  Current platform-wide slot utilization{" "}
                </p>{" "}
              </div>{" "}
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600">
                {" "}
                Today{" "}
                <ChevronDown size={13} className="ml-1 inline-block" />{" "}
              </button>{" "}
            </div>{" "}
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
              {" "}
              {/* Donut */}{" "}
              <div className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#0f172a_0deg_176deg,#94a3b8_176deg_246deg,#e2e8f0_246deg_360deg)]">
                {" "}
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                  {" "}
                  <span className="text-3xl font-bold"> 68% </span>{" "}
                  <span className="text-xs text-slate-400">
                    {" "}
                    Occupied{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Occupancy Details */}{" "}
              <div className="flex-1 w-full space-y-5">
                {" "}
                {/* Occupied */}{" "}
                <div>
                  {" "}
                  <div className="mb-2 flex items-center justify-between text-sm">
                    {" "}
                    <span className="flex items-center gap-2 font-medium">
                      {" "}
                      <span className="h-3 w-3 rounded-full bg-slate-900" />{" "}
                      Occupied{" "}
                    </span>{" "}
                    <span className="font-semibold"> 1,216 </span>{" "}
                  </div>{" "}
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    {" "}
                    <div className="h-full w-[68%] rounded-full bg-slate-900" />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Reserved */}{" "}
                <div>
                  {" "}
                  <div className="mb-2 flex items-center justify-between text-sm">
                    {" "}
                    <span className="flex items-center gap-2 font-medium">
                      {" "}
                      <span className="h-3 w-3 rounded-full bg-slate-400" />{" "}
                      Reserved{" "}
                    </span>{" "}
                    <span className="font-semibold"> 186 </span>{" "}
                  </div>{" "}
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    {" "}
                    <div className="h-full w-[10%] rounded-full bg-slate-400" />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Available */}{" "}
                <div>
                  {" "}
                  <div className="mb-2 flex items-center justify-between text-sm">
                    {" "}
                    <span className="flex items-center gap-2 font-medium">
                      {" "}
                      <span className="h-3 w-3 rounded-full bg-slate-200" />{" "}
                      Available{" "}
                    </span>{" "}
                    <span className="font-semibold"> 1,084 </span>{" "}
                  </div>{" "}
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    {" "}
                    <div className="h-full w-[22%] rounded-full bg-slate-300" />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Today's Activity */}{" "}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <div>
                {" "}
                <h4 className="font-bold"> Today's Activity </h4>{" "}
                <p className="mt-1 text-xs text-slate-500">
                  {" "}
                  Platform overview{" "}
                </p>{" "}
              </div>{" "}
              <MoreHorizontal size={20} className="text-slate-400" />{" "}
            </div>{" "}
            <div className="mt-7 space-y-6">
              {" "}
              {/* Drivers */}{" "}
              <div className="flex gap-4">
                {" "}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  {" "}
                  <Users size={18} />{" "}
                </div>{" "}
                <div className="flex-1">
                  {" "}
                  <p className="text-sm font-semibold"> New drivers </p>{" "}
                  <p className="mt-1 text-xs text-slate-500">
                    {" "}
                    24 drivers registered today{" "}
                  </p>{" "}
                </div>{" "}
                <span className="text-sm font-bold"> +24 </span>{" "}
              </div>{" "}
              {/* Parking */}{" "}
              <div className="flex gap-4">
                {" "}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  {" "}
                  <MapPin size={18} />{" "}
                </div>{" "}
                <div className="flex-1">
                  {" "}
                  <p className="text-sm font-semibold"> New parking </p>{" "}
                  <p className="mt-1 text-xs text-slate-500">
                    {" "}
                    3 locations awaiting review{" "}
                  </p>{" "}
                </div>{" "}
                <span className="text-sm font-bold"> 3 </span>{" "}
              </div>{" "}
              {/* Reservations */}{" "}
              <div className="flex gap-4">
                {" "}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  {" "}
                  <CalendarDays size={18} />{" "}
                </div>{" "}
                <div className="flex-1">
                  {" "}
                  <p className="text-sm font-semibold"> Reservations </p>{" "}
                  <p className="mt-1 text-xs text-slate-500">
                    {" "}
                    327 reservations today{" "}
                  </p>{" "}
                </div>{" "}
                <span className="text-sm font-bold"> 327 </span>{" "}
              </div>{" "}
              {/* Revenue */}{" "}
              <div className="flex gap-4">
                {" "}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  {" "}
                  <CreditCard size={18} />{" "}
                </div>{" "}
                <div className="flex-1">
                  {" "}
                  <p className="text-sm font-semibold"> Revenue </p>{" "}
                  <p className="mt-1 text-xs text-slate-500">
                    {" "}
                    Today's completed payments{" "}
                  </p>{" "}
                </div>{" "}
                <span className="text-sm font-bold"> ৳48.6K </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Parking Locations */}{" "}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {" "}
          <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            {" "}
            <div>
              {" "}
              <h4 className="font-bold"> Parking Locations </h4>{" "}
              <p className="mt-1 text-xs text-slate-500">
                {" "}
                Live overview of registered parking facilities{" "}
              </p>{" "}
            </div>{" "}
            <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
              {" "}
              View All Locations{" "}
            </button>{" "}
          </div>{" "}
          <div className="overflow-x-auto">
            {" "}
            <table className="w-full min-w-[760px]">
              {" "}
              <thead>
                {" "}
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
                  {" "}
                  <th className="px-6 py-4 font-semibold"> Parking </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Available </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Occupied </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Reserved </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Occupancy </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Status </th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                {parkingActivity.map((parking) => {
                  const occupancy = Math.round(
                    (parking.occupied / parking.total) * 100,
                  );
                  return (
                    <tr
                      key={parking.name}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      {" "}
                      <td className="px-6 py-5">
                        {" "}
                        <p className="text-sm font-semibold">
                          {" "}
                          {parking.name}{" "}
                        </p>{" "}
                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                          {" "}
                          <MapPin size={12} /> {parking.location}{" "}
                        </p>{" "}
                      </td>{" "}
                      <td className="px-6 py-5 text-sm font-semibold text-emerald-600">
                        {" "}
                        {parking.available}{" "}
                      </td>{" "}
                      <td className="px-6 py-5 text-sm font-semibold">
                        {" "}
                        {parking.occupied}{" "}
                      </td>{" "}
                      <td className="px-6 py-5 text-sm font-semibold text-blue-600">
                        {" "}
                        {parking.reserved}{" "}
                      </td>{" "}
                      <td className="px-6 py-5">
                        {" "}
                        <div className="flex items-center gap-3">
                          {" "}
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                            {" "}
                            <div
                              className="h-full rounded-full bg-slate-900"
                              style={{ width: `${occupancy}%` }}
                            />{" "}
                          </div>{" "}
                          <span className="text-xs font-semibold">
                            {" "}
                            {occupancy}%{" "}
                          </span>{" "}
                        </div>{" "}
                      </td>{" "}
                      <td className="px-6 py-5">
                        {" "}
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                          {" "}
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                          Active{" "}
                        </span>{" "}
                      </td>{" "}
                    </tr>
                  );
                })}{" "}
              </tbody>{" "}
            </table>{" "}
          </div>{" "}
        </div>{" "}
        {/* Recent Registrations */}{" "}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {" "}
          <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            {" "}
            <div>
              {" "}
              <h4 className="font-bold"> Recent Registrations </h4>{" "}
              <p className="mt-1 text-xs text-slate-500">
                {" "}
                Latest drivers and parking owners{" "}
              </p>{" "}
            </div>{" "}
            <button className="text-sm font-semibold text-slate-700 hover:underline">
              {" "}
              View all{" "}
            </button>{" "}
          </div>{" "}
          <div className="overflow-x-auto">
            {" "}
            <table className="w-full min-w-[700px]">
              {" "}
              <thead>
                {" "}
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
                  {" "}
                  <th className="px-6 py-4 font-semibold"> User </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Role </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Status </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Registered </th>{" "}
                  <th className="px-6 py-4 font-semibold"> Action </th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                {recentUsers.map((user) => (
                  <tr
                    key={user.email}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    {" "}
                    <td className="px-6 py-5">
                      {" "}
                      <div className="flex items-center gap-3">
                        {" "}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold">
                          {" "}
                          {user.name.charAt(0)}{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <p className="text-sm font-semibold">
                            {" "}
                            {user.name}{" "}
                          </p>{" "}
                          <p className="mt-0.5 text-xs text-slate-400">
                            {" "}
                            {user.email}{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </td>{" "}
                    <td className="px-6 py-5">
                      {" "}
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {" "}
                        {user.role}{" "}
                      </span>{" "}
                    </td>{" "}
                    <td className="px-6 py-5">
                      {" "}
                      {user.status === "Active" ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                          {" "}
                          <CheckCircle2 size={15} /> Active{" "}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500">
                          {" "}
                          <Clock3 size={15} /> Pending{" "}
                        </span>
                      )}{" "}
                    </td>{" "}
                    <td className="px-6 py-5 text-sm text-slate-500">
                      {" "}
                      {user.date}{" "}
                    </td>{" "}
                    <td className="px-6 py-5">
                      {" "}
                      <button className="rounded-lg p-2 hover:bg-slate-100">
                        {" "}
                        <MoreHorizontal
                          size={18}
                          className="text-slate-500"
                        />{" "}
                      </button>{" "}
                    </td>{" "}
                  </tr>
                ))}{" "}
              </tbody>{" "}
            </table>{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer */}{" "}
        <div className="py-8 text-center text-xs text-slate-400">
          {" "}
          ParkingHero Admin Control Center • Smart Parking Management
          System{" "}
        </div>{" "}
      </div>{" "}
    </main>{" "}
  </div>
);
}

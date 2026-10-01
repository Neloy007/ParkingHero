"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState<"DRIVER" | "OWNER">("DRIVER");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
          role: role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed.");
        return;
      }

      alert("Registration successful!");

      window.location.href = "/login";
    } catch (error) {
      console.error("Registration error:", error);

      alert(
        "Cannot connect to the backend. Make sure the backend server is running.",
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-blue-600 lg:flex">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600">
                P
              </div>

              <div>
                <h1 className="text-xl font-bold">ParkingHero</h1>
                <p className="text-sm text-blue-100">Smart Parking System</p>
              </div>
            </a>

            {/* Main Content */}
            <div className="max-w-lg">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-100">
                Join ParkingHero
              </p>

              <h2 className="text-5xl font-extrabold leading-tight">
                Your parking
                <br />
                journey starts here.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Create your account and experience a smarter way to find,
                reserve, and manage parking.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    📍
                  </div>

                  <div>
                    <p className="font-semibold">Find nearby parking</p>
                    <p className="text-sm text-blue-100">
                      Discover available parking around you.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    🅿️
                  </div>

                  <div>
                    <p className="font-semibold">Reserve your slot</p>
                    <p className="text-sm text-blue-100">
                      Book your preferred parking space.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    📊
                  </div>

                  <div>
                    <p className="font-semibold">Manage your parking</p>
                    <p className="text-sm text-blue-100">
                      Powerful tools for parking owners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-blue-100">© 2026 ParkingHero</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                P
              </div>

              <div>
                <h1 className="text-xl font-bold">ParkingHero</h1>
                <p className="text-sm text-slate-400">Smart Parking System</p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <h2 className="text-3xl font-bold">Create your account</h2>

              <p className="mt-2 text-slate-400">
                Join ParkingHero and get started today.
              </p>
            </div>

            {/* Role Selection */}
            <div className="mb-7">
              <p className="mb-3 text-sm font-medium text-slate-300">
                I want to
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("DRIVER")}
                  className={`rounded-xl border p-4 text-left transition ${
                    role === "DRIVER"
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="text-2xl">🚗</div>

                  <p className="mt-2 font-semibold">Driver</p>

                  <p className="mt-1 text-xs text-slate-400">
                    Find & reserve parking
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("OWNER")}
                  className={`rounded-xl border p-4 text-left transition ${
                    role === "OWNER"
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="text-2xl">🅿️</div>

                  <p className="mt-2 font-semibold">Parking Owner</p>

                  <p className="mt-1 text-xs text-slate-400">
                    Manage your parking
                  </p>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pr-20 text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pr-20 text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-white"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20"
                />

                <p className="text-xs leading-5 text-slate-400">
                  I agree to the ParkingHero Terms of Service and Privacy
                  Policy.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

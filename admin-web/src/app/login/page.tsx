"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login submitted:", {
      email,
      password,
    });

    alert("Login UI is working. API connection will be added next.");
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
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600">
                P
              </div>

              <div>
                <h1 className="text-xl font-bold">ParkingHero</h1>
                <p className="text-sm text-blue-100">Smart Parking System</p>
              </div>
            </div>

            {/* Main Text */}
            <div className="max-w-lg">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-100">
                Welcome Back
              </p>

              <h2 className="text-5xl font-extrabold leading-tight">
                Park smarter.
                <br />
                Move faster.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Find available parking, reserve your slot, and manage your
                parking experience from one simple platform.
              </p>

              {/* Mini Stats */}
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="mt-1 text-sm text-blue-100">Parking Slots</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="mt-1 text-sm text-blue-100">Parking Areas</p>
                </div>

                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="mt-1 text-sm text-blue-100">Availability</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-blue-100">© 2026 ParkingHero</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                P
              </div>

              <div>
                <h1 className="text-xl font-bold">ParkingHero</h1>
                <p className="text-sm text-slate-400">Smart Parking System</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold">Sign in to your account</h2>

              <p className="mt-2 text-slate-400">
                Enter your details to continue to ParkingHero.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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

              {/* Remember */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5"
                />

                <label htmlFor="remember" className="text-sm text-slate-400">
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Sign In
              </button>
            </form>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Create an account
              </a>
            </p>

            {/* Demo Account */}
            <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Demo Account
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Email: testdriver@example.com
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Password: Test123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

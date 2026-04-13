import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function Login() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) login(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center">

        {/* Logo */}
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
          🚀
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-7">Please enter your details to sign in</p>

        <form onSubmit={handleSubmit} className="text-left flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <button type="button" className="text-sm text-indigo-600 font-medium">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 pr-10 text-sm outline-none focus:border-indigo-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Remember */}
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="accent-indigo-600 w-4 h-4"
            />
            Remember for 30 days
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3 text-sm transition w-full"
          >
            Sign In →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-gray-400 tracking-widest">
            <span className="flex-1 h-px bg-gray-200" />
            OR CONTINUE WITH
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
           <img src="/public/icon/icons8-logo-de-google-30.png" alt="" />
            Sign in with Google
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Don't have an account?{' '}
          <button type="button" className="text-indigo-600 font-bold">
            Start free trial
          </button>
        </p>
      </div>
    </div>
  );
}

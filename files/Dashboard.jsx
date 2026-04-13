import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function Dashboard() {
  const { user, theme, toggleTheme, updateName } = useUser();

  const [editName, setEditName] = useState(user.name);
  const [emailNotif, setEmailNotif] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateName(editName);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Clases dinámicas según tema
  const isDark = theme === 'dark';
  const bg       = isDark ? 'bg-gray-950'  : 'bg-gray-100';
  const card     = isDark ? 'bg-gray-900 border-gray-800'  : 'bg-white border-gray-100';
  const txt      = isDark ? 'text-gray-100' : 'text-gray-900';
  const muted    = isDark ? 'text-gray-400' : 'text-gray-500';
  const input    = isDark ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-900';
  const divider  = isDark ? 'border-gray-700' : 'border-gray-100';
  const btnOut   = isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50';

  return (
    <div className={`min-h-screen ${bg} ${txt} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-5 py-7 flex flex-col gap-5">

        {/* Hero */}
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, <span className="text-indigo-600">{user.name}</span>
          </h1>
          <p className={`text-sm mt-1 ${muted}`}>Manage your account settings and preferences here.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* ── Profile Settings ── */}
          <div className={`rounded-2xl border p-6 shadow-sm flex flex-col gap-4 ${card}`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👤</span>
              <div>
                <h2 className="font-bold text-base">Profile Settings</h2>
                <p className={`text-xs ${muted}`}>Manage your public identity</p>
              </div>
            </div>

            <form onSubmit={handleSave} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className={`border rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500 transition ${input}`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className={`border rounded-lg px-3 py-2 text-sm outline-none opacity-60 ${input}`}
                />
              </div>
              <div className="flex justify-end items-center gap-3 mt-1">
                {saved && <span className="text-xs text-green-500 font-medium">✓ Saved!</span>}
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* ── App Preferences ── */}
          <div className={`rounded-2xl border p-6 shadow-sm flex flex-col gap-1 ${card}`}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">⚙️</span>
              <div>
                <h2 className="font-bold text-base">App Preferences</h2>
                <p className={`text-xs ${muted}`}>Customize your workspace experience</p>
              </div>
            </div>

            {/* Appearance */}
            <div className={`flex items-center justify-between py-3 border-b ${divider}`}>
              <div>
                <p className="text-sm font-semibold">Appearance</p>
                <p className={`text-xs ${muted}`}>Switch between light and dark themes</p>
              </div>
              <div className={`flex gap-1 rounded-lg p-1 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <button
                  onClick={() => isDark && toggleTheme()}
                  className={`px-3 py-1 text-xs rounded-md transition font-medium ${
                    !isDark ? 'bg-white shadow text-gray-900' : `text-gray-400`
                  }`}
                >
                  ☀ Light
                </button>
                <button
                  onClick={() => !isDark && toggleTheme()}
                  className={`px-3 py-1 text-xs rounded-md transition font-medium ${
                    isDark ? 'bg-gray-700 shadow text-white' : 'text-gray-500'
                  }`}
                >
                  🌙 Dark
                </button>
              </div>
            </div>

            {/* Email Notifications */}
            <div className={`flex items-center justify-between py-3 border-b ${divider}`}>
              <div>
                <p className="text-sm font-semibold">Email Notifications</p>
                <p className={`text-xs ${muted}`}>Receive weekly analytics reports</p>
              </div>
              <button
                onClick={() => setEmailNotif((v) => !v)}
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  emailNotif ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  emailNotif ? 'translate-x-5' : ''
                }`} />
              </button>
            </div>

            {/* 2FA */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-semibold">Two-Factor Authentication</p>
                <p className={`text-xs ${muted}`}>Secure your account with 2FA</p>
              </div>
              <button className={`border text-xs font-medium px-3 py-1.5 rounded-lg transition ${btnOut}`}>
                Enable
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: '💳', label: 'CURRENT PLAN',  value: 'Pro Monthly' },
            { icon: '📦', label: 'STORAGE USED',  value: '8.4 GB / 20 GB' },
            { icon: '🔒', label: 'SECURITY LEVEL', value: 'Excellent' },
          ].map(({ icon, label, value }) => (
            <div key={label} className={`rounded-2xl border p-4 flex items-center gap-4 shadow-sm ${card}`}>
              <span className="text-2xl">{icon}</span>
              <div>
                <p className={`text-xs font-semibold tracking-wider uppercase ${muted}`}>{label}</p>
                <p className="text-sm font-bold mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

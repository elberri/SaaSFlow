import { useUser } from '../context/UserContext';

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🚀</span>
        <span className="font-bold text-gray-900 text-base">SaaSFlow</span>
      </div>

      {/* Usuario + logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="block text-sm font-semibold text-gray-900">{user.name}</span>
            <span className="block text-xs text-gray-500">{user.role}</span>
          </div>
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500"
          />
        </div>

        <button
          onClick={logout}
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          ↪ Log Out
        </button>
      </div>
    </nav>
  );
}

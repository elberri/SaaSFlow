import { useUser } from './context/UserContext';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

export default function App() {
  const { user } = useUser();

  // Tailwind no necesita clase de tema en el root, el Dashboard lo maneja internamente
  return user === null ? (
    <Login />
  ) : (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

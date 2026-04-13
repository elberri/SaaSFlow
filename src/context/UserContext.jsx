import { createContext, useContext, useState } from 'react';

export const UserContext = createContext(null);

// Hook personalizado para consumir el contexto fácilmente
export const useUser = () => useContext(UserContext);

// Provider que envuelve la app
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);   // null = no autenticado
  const [theme, setTheme] = useState('light');

  // Simular login: guarda usuario ficticio en el contexto
  const login = (email) => {
    setUser({
      name: 'Alex Johnson',
      email: email,
      role: 'Admin Account',
      avatar: '/public/icon/icons8-usuario-32.png',
    });
  };

  // Logout: devuelve user a null
  const logout = () => setUser(null);

  // Cambiar tema
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Editar nombre 
  const updateName = (name) =>
    setUser((prev) => ({ ...prev, name }));

  return (
    <UserContext.Provider value={{ user, theme, login, logout, toggleTheme, updateName }}>
      {children}
    </UserContext.Provider>
  );
}

// ============================================================
// CodeAcademia — Auth Context (Mock Authentication)
// ============================================================

import { createContext, useCallback, useState, type ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
  joinedDate: string;
  completedTutorials: string[];
  certificates: string[];
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  updateProfile: () => {},
});

const STORAGE_KEY = 'codeacademia-user';

function getStoredUser(): User | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getStoredUser);

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // Mock authentication
    await new Promise((r) => setTimeout(r, 800));
    const isAdmin = email.toLowerCase().includes('admin');
    const mockUser: User = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      role: isAdmin ? 'admin' : 'user',
      joinedDate: new Date().toISOString(),
      completedTutorials: [],
      certificates: [],
    };
    setUser(mockUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    return true;
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 800));
    const mockUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
      role: 'user',
      joinedDate: new Date().toISOString(),
      completedTutorials: [],
      certificates: [],
    };
    setUser(mockUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const updateProfile = useCallback((updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

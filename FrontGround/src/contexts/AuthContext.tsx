import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: User, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = getFromLocalStorage("user");
    if (savedUser) setUser(savedUser);
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = getFromLocalStorage("users") || [];
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      saveToLocalStorage("user", foundUser);
      return true;
    }
    return false;
  };

  const register = (newUser: User, password: string): boolean => {
    const users = getFromLocalStorage("users") || [];

    if (users.some((u: any) => u.email === newUser.email)) {
      return false; // 이메일 중복 체크
    }

    const updatedUsers = [...users, { ...newUser, password }];
    saveToLocalStorage("users", updatedUsers);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

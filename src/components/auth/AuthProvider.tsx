"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getStorage, setStorage, STORAGE_KEYS } from "@/lib/storage";
import LoginScreen from "./LoginScreen";

/* ─── User definitions ────────────────────────── */

interface UserDef {
  userId: string;
  userName: string;
  hash: string;
}

const USERS: UserDef[] = [
  {
    userId: "designer",
    userName: "Designer",
    // SHA-256 of "ExpDesign2026#"
    hash: "69eaece6fd5b68b3701c64ad2bf63ec820623c858bafe2ecad4de3881375798c",
  },
  {
    userId: "admin",
    userName: "Bit",
    // SHA-256 of "BitAdmin2026#"
    hash: "19fec91c4604f068a0046986779392644131ae4591c531f425510a661f45b966",
  },
];

const SESSION_EXPIRY_DAYS = 30;

/* ─── Auth Session ────────────────────────────── */

interface AuthSession {
  authenticated: boolean;
  userId: string;
  userName: string;
  expiresAt: number;
}

/* ─── Contexts ────────────────────────────────── */

interface AuthContextValue {
  isAuthenticated: boolean;
  logout: () => void;
}

interface UserContextValue {
  userId: string;
  userName: string;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  logout: () => {},
});

const UserContext = createContext<UserContextValue>({
  userId: "",
  userName: "",
});

export const useAuth = () => useContext(AuthContext);
export const useUser = () => useContext(UserContext);

/* ─── Helpers ─────────────────────────────────── */

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* ─── Provider ────────────────────────────────── */

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserContextValue>({ userId: "", userName: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = getStorage<AuthSession | null>(STORAGE_KEYS.AUTH, null);
    if (session && session.authenticated && Date.now() < session.expiresAt) {
      setIsAuthenticated(true);
      setUser({ userId: session.userId, userName: session.userName });
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (password: string): Promise<boolean> => {
    const hash = await hashPassword(password);

    const matched = USERS.find((u) => u.hash === hash);
    if (!matched) return false;

    const session: AuthSession = {
      authenticated: true,
      userId: matched.userId,
      userName: matched.userName,
      expiresAt: Date.now() + SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000,
    };
    // Write session directly (AUTH key is global, not prefixed)
    setStorage(STORAGE_KEYS.AUTH, session);
    setUser({ userId: matched.userId, userName: matched.userName });
    setIsAuthenticated(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    setStorage(STORAGE_KEYS.AUTH, null);
    setIsAuthenticated(false);
    setUser({ userId: "", userName: "" });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

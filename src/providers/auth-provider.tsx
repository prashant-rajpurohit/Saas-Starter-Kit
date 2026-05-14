"use client";
import { trpc } from "@/lib/trpc";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createContext } from "react";

type LoginData = {
  email: string;
  password: string;
};
type User = {
  id: string;
  name: string;
  email: string;
};
type SignUpData = {
  name: string;
  email: string;
  password: string;
};
type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const loginMutation = trpc.auth.login.useMutation();
  const signupMutation = trpc.auth.register.useMutation();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }: LoginData) => {
    setLoading(true);
    try {
      const result = await loginMutation.mutateAsync({ email, password });
      setUser(result.user);
      localStorage.setItem("token", result.token);
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };
  const signup = async ({ name, email, password }: SignUpData) => {
    setLoading(true);
    try {
      const result = await signupMutation.mutateAsync({
        name,
        email,
        password,
      });
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
    setLoading(false);
  };
  return (
    <>
      <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

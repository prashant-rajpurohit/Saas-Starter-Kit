'use client'
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type LoginData = {
    email: string;
    password: string;
}
type User = {
    id: string;
    name: string;
    email: string;
};
type SignUpData = {
    name: string;
    email: string;
    password: string;
}
type AuthContextType = {
    user: User | null
    loading: boolean
    login: (data: LoginData) => Promise<void>
    signup: (data: SignUpData) => Promise<void>
    logout: () => void
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, [])
    const login = async ({ email, password }: { email: string, password: string }) => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (email === 'user@user.com' && password === 'admin@123') {
                const user = {
                    id: '1',
                    name: 'User',
                    email: 'user@user.com'
                }
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/dashboard');
            }
            else {
                throw new Error('Invalid Email or Password');
            }
        } finally {
            setLoading(false);
        }

    }
    const signup = async ({ name, email, password }: { name: string, email: string, password: string }) => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const NewUser = {
                id: Date.now().toString(),
                name,
                email
            }
            setUser(NewUser);
            localStorage.setItem('user', JSON.stringify(NewUser));
            router.push('/dashboard');
        } finally {
            setLoading(false);
        }
    }
    const logout = async () => {
        setLoading(true);
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
        setLoading(false);
    }
    return (
        <>
            <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}


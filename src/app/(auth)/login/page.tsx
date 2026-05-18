'use client'
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
export default function LoginPage() {
    const { login, loading } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

 
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await login({
        email,
        password,
      });

    } catch (error) {
      toast.error("Login failed", {
        description: "Please check your credentials and try again",
        position: "top-right",
      })
    }
  };

  return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="w-screen h-screen object-bottom">
                <img src="/login.avif" alt="Login" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-1 items-center justify-end mr-20">
                <div className="w-full max-w-xs">
                    <div className="h-screen w-100 bg-red-500">
                        <Card className="h-screen border-none rounded-none flex justify-center">
                            <CardHeader>
                                <CardTitle>Login to your account</CardTitle>
                                <CardDescription>
                                    Enter your email below to login to your account
                                </CardDescription>
                                <CardAction>
                                    <Button variant="link" asChild>
                                        <a href="/register">Sign Up</a>
                                    </Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="email@email.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">Password</Label>
                                                <a
                                                    href="#"
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <Input
                                                id="password"
                                                placeholder="*********"
                                                type="password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" onClick={handleSubmit} className="w-full cursor-pointer">
                                    {loading ? 'Loading...' : 'Login'}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

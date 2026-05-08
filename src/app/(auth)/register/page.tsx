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
export default function SignUpPage() {
    const {signup, loading} = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        await signup({ name, email, password })
    }
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="w-screen h-screen object-bottom">
        <img src="/login.avif" alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-end mr-20">
        <div className="w-full max-w-xs">
          <div className="h-screen w-100 bg-red-500">
            <Card className="h-screen border-none rounded-none flex justify-center">
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Enter your email below to create an account
                </CardDescription>
                <CardAction>
                  <Button variant="link" asChild>
                    <a href="/login">Login</a>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="name"
                        placeholder="John Doe"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
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
                <Button type="submit" className="w-full" onClick={handleSignUp} disabled={loading}>
                {loading ? "Signing up..." : "Sign Up"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

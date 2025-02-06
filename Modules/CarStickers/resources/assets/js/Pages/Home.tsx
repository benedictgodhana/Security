"use client"

import { useEffect, useState } from "react"
import { Head, useForm, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { Eye, EyeOff } from "lucide-react"

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route("login"), {
      onSuccess: () =>
        toast({
          title: "Login successful",
          description: "Welcome back!",
        }),
      onError: () =>
        toast({
          title: "Login failed",
          description: "Please check your credentials.",
          variant: "destructive",
        }),
    })
  }

  return (
    <>
      <Head title="Log in" />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-sm">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/images/University-Logo-Vertical-01.png"
                alt="Strathmore University Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-900 text-center">Welcome back</h2>

          {status && <div className="mb-4 text-sm text-green-600">{status}</div>}

          <form onSubmit={submit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1"
                autoComplete="username"
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  className="mt-1 pr-10"
                  autoComplete="current-password"
                  onChange={(e) => setData("password", e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && <div className="mt-1 text-sm text-red-600">{errors.password}</div>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={data.remember}
                  onCheckedChange={(checked) => setData("remember", checked as boolean)}
                />
                <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              {canResetPassword && (
                <Link href={route("password.request")} className="text-sm text-primary hover:underline">
                  Forgot your password?
                </Link>
              )}
            </div>

            <Button type="submit" disabled={processing} className="w-full">
              Log in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href={route("register")} className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}


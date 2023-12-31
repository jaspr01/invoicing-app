import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { LoginFormInputs } from '@/pages/login/types.ts'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from '@/lib/axios.ts'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/routes.ts'

const Login = () => {
  // Local state
  const [loginError, setLoginError] = useState<boolean>(false)

  // React hook form
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()

  // React router
  const navigate = useNavigate()

  /**
   * Handles the form submit after validation
   *
   * @param {LoginFormInputs} data
   */
  const onSubmit = async (data: LoginFormInputs) => {
    setLoginError(false)

    try {
      // Login
      await axios.get('/sanctum/csrf-cookie')
      await axios.post('/login', data)

      // Redirect to invoices overview
      navigate(Routes.INVOICES)
    } catch {
      setLoginError(true)
    }
  }

  return (
    <Card className="mx-auto my-20 w-full max-w-md px-4 py-6 md:px-0">
      <CardHeader className="mb-4">
        <CardTitle className="text-2xl text-center">Invoicing app</CardTitle>
        <CardDescription className="text-center">Please enter your email and password to login.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register('email', { required: true })} type="email" placeholder="m@example.com" />
            {errors.email && <div className="text-red-500 text-sm">This field is required</div>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input {...register('password', { required: true })} type="password" />
            {errors.email && <div className="text-red-500 text-sm">This field is required</div>}
          </div>
          {loginError &&
            <div className="mt-2">
              <div className="text-center text-red-500 text-sm">Invalid email or password, please try again.</div>
            </div>
          }
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 items-center">
          <Button type="submit" className="w-full bg-black text-white">Log in</Button>

          {/* TODO: enable when possible in the future
          // Register is already possible in API but we don't allow it yet in the FE
        <Button className="w-full" variant="outline">
          Register
        </Button>
        <div className="border-b border-gray-200 my-4"/>
        <a className="text-center text-sm text-gray-500" href="#">
          Reset Password
        </a>
        */}

          <small className="text-gray-400">made by CAN I KICK IT</small>
        </CardFooter>
      </form>
    </Card>
  )
}

export default Login

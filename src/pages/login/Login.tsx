import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'

const Login = () => {
  return (
    <Card className="mx-auto my-20 w-full max-w-md px-4 py-6 md:px-0">
      <CardHeader className="mb-4">
        <CardTitle className="text-2xl text-center">Invoicing app</CardTitle>
        <CardDescription className="text-center">Please enter your email and password to login.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="mt-2">
          <div className="text-center text-red-500 text-sm">Invalid email or password. Please try again.</div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 items-center">
        <Button className="w-full bg-black text-white">Log in</Button>

        {/*
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
    </Card>
  )
}

export default Login

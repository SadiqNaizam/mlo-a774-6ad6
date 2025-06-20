import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MinimalHeader from '@/components/layout/MinimalHeader';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import MinimalFooter from '@/components/layout/MinimalFooter';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Squirrel, AlertTriangle } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulate API call & authentication
    // In a real app, you would call your auth API here
    if (email === "user@example.com" && password === "password") {
      console.log("Login successful for:", email);
      // Simulate successful login with toast (if Sonner is configured app-wide)
      // toast.success("Login successful!"); // Assuming Sonner is globally available
      navigate('/dashboard'); // Navigate to dashboard as per App.tsx
    } else {
      setError("Invalid email or password. Please try again.");
      console.warn("Login failed for:", email);
    }
  };

  const pageLogo = <Squirrel className="h-10 w-10 text-primary mb-2" />;

  const formFooterContent = (
    <div className="text-sm text-center">
      <p>
        Don&apos;t have an account?{' '}
        <Link to="/registration" className="font-medium text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <MinimalHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormWrapper
          title="Sign In to Your Account"
          logo={pageLogo}
          footerContent={formFooterContent}
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  name="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  to="/password-recovery" // Path from App.tsx
                  className="font-medium text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
        </AuthFormWrapper>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default LoginPage;
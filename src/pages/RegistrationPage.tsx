import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import MinimalHeader from '@/components/layout/MinimalHeader';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import MinimalFooter from '@/components/layout/MinimalFooter';

// Shadcn/ui Components
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert'; // AlertTitle could also be used if needed

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    // Basic Validations
    if (!name.trim()) {
      setError("Full name is required.");
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // Simulate registration API call
    console.log('Registration attempt submitted:', { name, email });
    // In a real application, you would make an API call here.
    // On success:
    // toast.success("Registration successful! Please log in."); (using a notification library like sonner)
    // navigate('/');
    // On failure from API:
    // setError("Registration failed. Email may already be in use or server error.");

    // For this example, simulate success and redirect to login
    alert('Registration successful (simulation)! You will now be redirected to the login page.');
    navigate('/'); // Navigate to LoginPage as defined in App.tsx
  };

  const footerContent = (
    <div className="text-sm text-center text-muted-foreground">
      Already have an account?{' '}
      <Link to="/" className="font-medium text-primary hover:underline">
        Sign In
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <MinimalHeader />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormWrapper title="Create Account" footerContent={footerContent}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="e.g., John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="mt-1"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </AuthFormWrapper>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default RegistrationPage;
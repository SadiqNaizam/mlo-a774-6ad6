import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MinimalHeader from '@/components/layout/MinimalHeader';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import MinimalFooter from '@/components/layout/MinimalFooter';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, Squirrel, TriangleAlert, CheckCircle2 } from 'lucide-react';

const PasswordRecoveryPage: React.FC = () => {
  console.log('PasswordRecoveryPage loaded');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'default' | 'destructive'>('default');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulate API call to request password reset
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Always show success message for demo purposes
    // In a real app, you would check if the email exists and handle errors accordingly.
    // It's common practice not to reveal if an email is registered for security reasons during password reset.
    setMessage(`If an account with email ${email} exists, a password reset link has been sent.`);
    setMessageType('default'); // Use 'default' for success-like appearance, icon will differentiate
    setIsLoading(false);
    // setEmail(''); // Optionally clear email field after submission
  };

  const AlertIconComponent = messageType === 'destructive' ? TriangleAlert : CheckCircle2;
  const alertTitle = messageType === 'destructive' ? 'Error' : 'Request Sent';

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <MinimalHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormWrapper
          title="Reset Password"
          logo={<Squirrel className="h-10 w-10 mb-4 text-primary" />}
          footerContent={
            <div className="text-sm text-center space-y-2">
              <p className="text-muted-foreground">
                Remember your password?{' '}
                <Link to="/" className="font-medium text-primary hover:underline">
                  Sign In
                </Link>
              </p>
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/registration" className="font-medium text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          }
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Enter your email address below and we'll send you a link to reset your password.
            </p>
            
            {message && (
              <Alert variant={messageType}>
                <AlertIconComponent className="h-4 w-4" />
                <AlertTitle>{alertTitle}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-10" // Padding for the icon
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Sending Link...' : 'Send Password Reset Link'}
            </Button>
          </form>
        </AuthFormWrapper>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default PasswordRecoveryPage;
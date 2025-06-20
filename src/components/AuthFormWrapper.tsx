import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthFormWrapperProps {
  title: string;
  children: React.ReactNode; // This will typically be the form elements
  logo?: React.ReactNode; // Slot for a brand logo
  footerContent?: React.ReactNode; // Slot for content like "Forgot password?" or "Sign up" links
  className?: string; // Allows custom classes to be applied to the Card element
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  children,
  logo,
  footerContent,
  className,
}) => {
  console.log('AuthFormWrapper loaded with title:', title);

  return (
    <Card className={cn("w-full max-w-md shadow-xl", className)}>
      <CardHeader className="p-6 text-center">
        {/*
          The CardHeader from shadcn/ui typically uses 'flex flex-col space-y-1.5'.
          The logo, if provided, will be part of this flex column.
          The parent component should pass the logo as a React.ReactNode (e.g., an <img> tag with appropriate classes).
        */}
        {logo}
        <CardTitle className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
          {title}
        </CardTitle>
        {/* A CardDescription could also be passed into CardHeader by the parent if needed */}
      </CardHeader>

      <CardContent className="p-6 pt-0">
        {/*
          shadcn/ui CardContent default styling is 'p-6 pt-0'.
          The 'children' (typically a form) will be rendered here.
          The form itself should manage its internal element spacing (e.g., using space-y-X).
        */}
        {children}
      </CardContent>

      {footerContent && (
        <CardFooter className="flex flex-col items-center p-6 pt-0">
          {/*
            shadcn/ui CardFooter default styling is 'flex items-center p-6 pt-0'.
            'flex-col items-center' is used here to stack and center footer links,
            which is a common pattern for auth forms.
            The parent component will pass the actual links or text content.
          */}
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormWrapper;
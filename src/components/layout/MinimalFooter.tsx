import React from 'react';
import { Link } from 'react-router-dom';

const MinimalFooter: React.FC = () => {
  console.log('MinimalFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 border-t bg-background text-muted-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {currentYear} MyApp. All rights reserved.</p>
        <nav className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default MinimalFooter;
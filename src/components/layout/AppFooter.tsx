import React from 'react';
import { Link } from 'react-router-dom';
import { Squirrel, Twitter, Github, Linkedin } from 'lucide-react';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/dashboard" className="flex items-center gap-2 mb-4">
              <Squirrel className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">MyApp</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your application tagline or short description here.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link>
            <Link to="/about-us" className="text-muted-foreground hover:text-primary">About Us</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            <Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm">Connect With Us</h3>
            <div className="flex gap-4">
              <Link to="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link to="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {currentYear} MyApp. All rights reserved.
          <span className="mx-2">|</span>
          <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          <span className="mx-2">|</span>
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
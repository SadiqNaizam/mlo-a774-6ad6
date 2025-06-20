import React from 'react';
import { Link } from 'react-router-dom';
import { Squirrel } from 'lucide-react';

const MinimalHeader: React.FC = () => {
  console.log('MinimalHeader loaded');

  return (
    <header className="py-4 px-6 border-b bg-background">
      <div className="container mx-auto flex items-center justify-center sm:justify-start">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Squirrel className="h-7 w-7" />
          <span>MyApp</span>
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
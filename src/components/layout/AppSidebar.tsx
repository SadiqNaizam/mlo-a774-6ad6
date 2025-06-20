import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, Settings, BarChart3, ShieldCheck } from 'lucide-react';

interface AppSidebarProps {
  className?: string;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ className }) => {
  console.log('AppSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
      isActive ? 'bg-muted text-primary font-semibold' : 'text-muted-foreground'
    }`;

  return (
    <aside className={`hidden border-r bg-muted/40 md:block ${className}`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          {/* Optional: Logo/Brand smaller version for sidebar */}
           <NavLink to="/dashboard" className="flex items-center gap-2 font-semibold text-primary">
            <ShieldCheck className="h-6 w-6" />
            <span>App Panel</span>
          </NavLink>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavLink to="/dashboard" className={navLinkClasses} end>
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </NavLink>
            <NavLink to="/dashboard/profile" className={navLinkClasses}>
              <User className="h-4 w-4" />
              Profile
            </NavLink>
            <NavLink to="/dashboard/settings" className={navLinkClasses}>
              <Settings className="h-4 w-4" />
              Settings
            </NavLink>
            <NavLink to="/dashboard/analytics" className={navLinkClasses}>
              <BarChart3 className="h-4 w-4" />
              Analytics
            </NavLink>
            {/* Add more sidebar links as needed */}
          </nav>
        </div>
        {/* Optional: Footer section for sidebar */}
        {/* <div className="mt-auto p-4"> ... </div> */}
      </div>
    </aside>
  );
};

export default AppSidebar;
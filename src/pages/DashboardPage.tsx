import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import AppHeader from '@/components/layout/AppHeader';
import AppSidebar from '@/components/layout/AppSidebar';
import AppFooter from '@/components/layout/AppFooter';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge'; // For status in table

// Sample data for the table
const recentActivities = [
  { id: '1', activity: 'Logged into account', date: '2024-07-28', status: 'Completed' as 'Completed' | 'Pending' | 'Failed' },
  { id: '2', activity: 'Updated profile information', date: '2024-07-27', status: 'Completed' as 'Completed' | 'Pending' | 'Failed' },
  { id: '3', activity: 'Submitted quarterly report', date: '2024-07-26', status: 'Pending' as 'Completed' | 'Pending' | 'Failed' },
  { id: '4', activity: 'Password change attempt', date: '2024-07-25', status: 'Failed' as 'Completed' | 'Pending' | 'Failed' },
];

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <div className="flex flex-1">
        <AppSidebar className="w-64" /> {/* Apply a fixed width or let the component manage its own width */}
        <main className="flex-1 p-6 bg-muted/10 overflow-auto">
          <div className="container mx-auto space-y-6">
            {/* Welcome Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Welcome back, User!</CardTitle>
                <CardDescription>
                  Here's a quick overview of your account and recent activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You have successfully logged in. Explore your dashboard to manage your settings, view analytics, and more.
                </p>
                <Link to="/dashboard/profile"> {/* Path consistent with AppSidebar/AppHeader links */}
                  <Button variant="default">View Profile</Button>
                </Link>
                <Link to="/dashboard/settings" className="ml-2">
                  <Button variant="outline">Account Settings</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity Table Card */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>A log of your recent interactions with the platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>End of recent activities.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Activity</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">{activity.activity}</TableCell>
                        <TableCell>{activity.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              activity.status === 'Completed'
                                ? 'default' // Greenish or blueish for success
                                : activity.status === 'Pending'
                                ? 'secondary' // Yellowish for warning/pending
                                : 'destructive' // Reddish for error/failed
                            }
                          >
                            {activity.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Additional placeholder card */}
             <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                 <CardDescription>Links to frequently used sections.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Link to="/dashboard/analytics">
                  <Button variant="outline" className="w-full justify-start">View Analytics</Button>
                </Link>
                <Link to="/reports"> {/* Assuming a /reports route might exist for a general app */}
                  <Button variant="outline" className="w-full justify-start">Generate Reports</Button>
                </Link>
                 <Link to="/help-center"> {/* Placeholder for a help section */}
                  <Button variant="outline" className="w-full justify-start">Help & Support</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <AppFooter />
    </div>
  );
};

export default DashboardPage;
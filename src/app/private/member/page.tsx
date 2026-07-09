'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  DollarSign, 
  ShoppingCart, 
  Activity, 
  CreditCard,
  ArrowUpRight,
  MoreHorizontal,
  Loader2,
  User,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import your API Helper
import { getUserProfile } from '@/lib/api'; 

export default function DashboardPage() {
  const router = useRouter();
  
  // --- STATE ---
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "User",
    email: "",
    role: "",
    id: ""
  });

  // --- 1. FETCH REAL USER ON LOAD ---
  useEffect(() => {
    async function initDashboard() {
      const token = localStorage.getItem('authToken');
      const tenant = localStorage.getItem('tenantSlug') || 'team';

      if (!token) {
        router.push(`/login/${tenant}`);
        return;
      }

      // Fetch User Profile
      const res = await getUserProfile(token, tenant);
      
      if (res.success && res.data) {
        console.log("✅ Dashboard Loaded for:", res.data.fullName);
        setUser({
            name: res.data.fullName || "Member",
            email: res.data.email,
            role: res.data.role || "Viewer",
            id: res.data.id // Captured ID for future API calls
        });
        
        // Save ID for other pages (like Vendor Registration)
        if(res.data.id) localStorage.setItem('currentUserId', res.data.id);
      }
      
      setLoading(false);
    }
    
    initDashboard();
  }, [router]);

  // --- MOCK DATA (Replace with API calls later) ---
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month", icon: DollarSign },
    { title: "Active Orders", value: "+2350", change: "+180 since last hour", icon: ShoppingCart },
    { title: "Pending RFQs", value: "+12", change: "4 require attention", icon: CreditCard },
    { title: "Production Rate", value: "98.5%", change: "+4% efficiency", icon: Activity },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "BuildCorp Inc.", status: "In Production", total: "$2,500.00", date: "2024-12-10" },
    { id: "ORD-002", customer: "City Infra Ltd.", status: "Shipped", total: "$12,450.00", date: "2024-12-09" },
    { id: "ORD-003", customer: "Metro Rail Proj", status: "Pending", total: "$450.00", date: "2024-12-09" },
    { id: "ORD-004", customer: "HighRise Devs", status: "In Production", total: "$8,900.00", date: "2024-12-08" },
    { id: "ORD-005", customer: "Govt Civil Works", status: "Delivered", total: "$34,000.00", date: "2024-12-07" },
  ];

  if (loading) {
      return (
        <div className="h-[80vh] flex flex-col items-center justify-center gap-2">
            <Loader2 className="animate-spin text-[#B31942] w-10 h-10" />
            <p className="text-slate-500">Loading Dashboard...</p>
        </div>
      );
  }

  return (
    <div className="space-y-8 p-1">
      
      {/* --- WELCOME BANNER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome back, {user.name} 👋
            </h2>
            <p className="text-slate-500">
                Here is what's happening with your projects today.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Download Report</Button>
            <Button className="bg-[#B31942] hover:bg-red-700">
                <ShieldCheck className="w-4 h-4 mr-2"/> Verify Identity
            </Button>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-transparent hover:border-t-[#B31942]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-[#B31942]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-slate-500 mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* --- RECENT ORDERS SECTION --- */}
      <div className="grid gap-4 md:grid-cols-1">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="text-xl">Recent Orders</CardTitle>
                <CardDescription>
                    You have 12 orders moving through production today.
                </CardDescription>
            </div>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                View All Orders <ArrowUpRight className="ml-2 h-4 w-4"/>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <StatusBadge status={order.status} />
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell className="text-right">{order.total}</TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Download Invoice</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper for status colors
function StatusBadge({ status }: { status: string }) {
    let styles = "bg-slate-100 text-slate-600";
    if (status === 'In Production') styles = "bg-blue-100 text-blue-700 border-blue-200 border";
    if (status === 'Shipped') styles = "bg-yellow-100 text-yellow-700 border-yellow-200 border";
    if (status === 'Delivered') styles = "bg-green-100 text-green-700 border-green-200 border";
    if (status === 'Pending') styles = "bg-orange-100 text-orange-700 border-orange-200 border";

    return (
        <Badge variant="outline" className={`${styles} font-normal`}>
            {status}
        </Badge>
    );
}

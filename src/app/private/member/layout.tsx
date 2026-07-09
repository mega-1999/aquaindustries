'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 
import {
  LayoutDashboard,
  Package,
  FileText,
  Settings,
  LogOut,
  Menu,
  Users,
  Truck,
  Factory,
  Store,
  Loader2 // Imported Loader for better visual feedback
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Ensure this path matches where you saved the helper function
import { getUserProfile } from '@/lib/api'; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter(); 
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  
  // --- STATE FOR USER PROFILE ---
  const [user, setUser] = useState({
    name: "",
    email: "",
    initials: ""
  });

  // --- 1. FETCH PROFILE ON LOAD ---
  useEffect(() => {
    let isMounted = true;

    async function initLayout() {
      if (typeof window === 'undefined') return;

      const token = localStorage.getItem('authToken'); // Matches our API fix
      const tenant = localStorage.getItem('tenantSlug') || 'foundry';

      // 2. Redirect if no token
      if (!token) {
        console.log("⛔ No token found in Layout, redirecting...");
        router.push(`/login/${tenant}`);
        return;
      }

      // 3. Fetch Real User Data
      try {
        const res = await getUserProfile(token, tenant);

        if (isMounted && res.success && res.data) {
          console.log("✅ Layout loaded for:", res.data.fullName);
          
          const fullName = res.data.fullName || res.data.name || "User";

          // Calculate Initials safely
          const initials = fullName
            .split(' ')
            .map((n: string) => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);

          setUser({
            name: fullName,
            email: res.data.email || res.data.username || "",
            initials: initials || "ME"
          });
        }
      } catch (err) {
        console.error("Profile load failed", err);
      } finally {
        if (isMounted) setIsProfileLoading(false);
      }
    }

    initLayout();

    return () => { isMounted = false; };
  }, [router]);

  // --- 2. DYNAMIC LOGOUT FUNCTION ---
  const handleLogout = () => {
    // 1. Capture tenant BEFORE clearing storage so we know where to send them
    const currentTenant = localStorage.getItem('tenantSlug') || 'foundry';

    // 2. Clear ALL related storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('accessToken'); // Clear both just in case
    localStorage.removeItem('tenantSlug');
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('isVendor');

    // 3. Dynamic Redirect
    router.push(`/login/${currentTenant}`); 
  };

  // Navigation Links
  const navItems = [
    { href: '/private/member', label: 'Overview', icon: LayoutDashboard },
    { href: '/private/member/onboarding', label: 'Become a Vendor', icon: Store }, 
    { href: '/private/member/orders', label: 'Orders', icon: Package },
    { href: '/private/member/products', label: 'Products', icon: FileText },
    // { href: '/private/member/inventory', label: 'Inventory', icon: Factory },
    { href: '/private/member/logistics', label: 'Logistics', icon: Truck },
    { href: '/private/member/team', label: 'Team', icon: Users },
    { href: '/private/member/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-white fixed h-full inset-y-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 font-bold text-xl tracking-wider">
          <span className="text-[#B31942]">MEGA</span>FOUNDRIES
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <span className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${isActive
                  ? 'bg-[#B31942] text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800 rounded-lg p-3 text-xs text-slate-400">
            <p className="font-semibold text-white mb-1">Foundry Portal</p>
            <p>v1.2.0 • Enterprise</p>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">

        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-40">

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-900 text-white border-none">
              <div className="font-bold text-xl mb-8"><span className="text-[#B31942]">MEGA</span>FOUNDRIES</div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Breadcrumb / Title */}
          <h1 className="text-lg font-semibold text-slate-800 hidden sm:block">
            Dashboard Overview
          </h1>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9 border border-slate-200">
                    {/* Add User Image URL if you have it in state */}
                    <AvatarImage src="" alt={user.name} />
                    <AvatarFallback className="bg-slate-900 text-white font-semibold">
                      {isProfileLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        user.initials
                      )}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    {isProfileLoading ? (
                       <div className="h-8 bg-slate-100 rounded animate-pulse" />
                    ) : (
                      <>
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/private/member/settings">
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />

                {/* LOGOUT BUTTON */}
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer focus:text-red-600 focus:bg-red-50">
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

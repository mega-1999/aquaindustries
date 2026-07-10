'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserProfile } from '@/lib/api'; // Use the file above
import { Loader2, User, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  // State to hold the fetched data
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadProfile() {
      // 1. Get the Token from LocalStorage (Saved during Login)
      const token = localStorage.getItem('authToken');
      const tenant = localStorage.getItem('tenantSlug') || 'team';

      if (!token) {
        router.push(`/login/${tenant}`);
        return;
      }

      // 2. Use our "Universal" Fetcher
      const res = await getUserProfile(token, tenant);

      if (res.success) {
        console.log("✅ PROFILE LOADED:", res.data);
        setUser(res.data);
        
        // Save ID for later use (like Vendor Registration)
        if (res.data.id) localStorage.setItem('currentUserId', res.data.id);
      } else {
        console.error("❌ Failed to load profile");
      }
      setLoading(false);
    }

    loadProfile();
  }, [router]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="p-8 space-y-6">
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Login Verified
        </div>
      </div>

      {/* DEBUG CARD: Shows exactly what data we have */}
      <Card className="border-t-4 border-t-[#B31942]">
        <CardContent className="pt-6">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-[#B31942]" /> Current User Data
            </h3>
            
            {user ? (
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-[#0A3161]/5 rounded">
                        <span className="block text-[#0A3161]/70 text-xs uppercase">Full Name</span>
                        <span className="font-medium text-lg">{user.fullName}</span>
                    </div>
                    <div className="p-3 bg-[#0A3161]/5 rounded">
                        <span className="block text-[#0A3161]/70 text-xs uppercase">Email</span>
                        <span className="font-medium text-lg">{user.email}</span>
                    </div>
                    <div className="p-3 bg-[#0A3161]/5 rounded col-span-2 border border-blue-100 bg-blue-50 text-blue-900">
                        <span className="block text-blue-400 text-xs uppercase">User ID (Client ID)</span>
                        <span className="font-mono font-bold">{user.id}</span>
                    </div>
                </div>
            ) : (
                <div className="text-[#B31942] bg-[#B31942]/5 p-4 rounded">
                    Could not fetch profile data. Please check Console (F12).
                </div>
            )}
        </CardContent>
      </Card>

    </div>
  );
}

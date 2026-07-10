'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { completeRegistration } from '@/lib/api';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // 1. Get params from URL
  const clientId = searchParams.get('clientId');
  const emailParam = searchParams.get('email') || '';
  const tenantSlug = searchParams.get('tenant') || 'foundry'; 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Safety Check
    if (!clientId) {
      setError("Invalid Registration Link (Missing Client ID)");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Password Validation
    if (data.password !== data.retype) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if ((data.password as string).length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    // Call API
    const res = await completeRegistration(clientId, tenantSlug, {
      fullName: data.fullname,
      username: emailParam, 
      email: emailParam,    
      password: data.password
    });

    if (res.success) {
      setSuccess(true);
      setTimeout(() => {
        // ✅ FIX: Pass clientId and email to the Login Page
        // This ensures the login page knows who just registered
        router.push(`/login/${tenantSlug}?clientId=${clientId}&email=${encodeURIComponent(emailParam)}`);
      }, 2000);
    } else {
      setError(res.message || "Registration failed. Please try again.");
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-green-50 border border-green-200 rounded-xl">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-green-800 mb-2">Registration Complete!</h2>
        <p className="text-green-700">Redirecting you to login...</p>
      </div>
    );
  }

  return (
    <Card className="max-w-lg w-full shadow-xl border-t-4 border-t-[#B31942]">
      <CardHeader className="text-center pb-2">
         <div className="mx-auto bg-[#B31942]/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
           <ShieldCheck className="w-6 h-6 text-[#B31942]" />
         </div>
        <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
        <CardDescription>
          Finalizing account for <strong>{tenantSlug.toUpperCase()}</strong>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              value={emailParam} 
              disabled 
              className="bg-[#0A3161]/10 text-[#0A3161]/70 cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" name="fullname" required placeholder="John Doe" disabled={loading} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required disabled={loading} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="retype">Confirm</Label>
                <Input id="retype" name="retype" type="password" required disabled={loading} />
            </div>
          </div>

          {error && (
            <p className="text-[#B31942] text-sm font-medium bg-[#B31942]/5 p-2 rounded border border-red-100 text-center">
              {error}
            </p>
          )}

          <Button className="w-full bg-[#B31942] hover:bg-[#B31942] py-6 text-md font-bold" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" /> Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A3161]/5 p-4">
      <Suspense fallback={<div className="text-center">Loading registration form...</div>}>
        <RegisterForm />
      </Suspense>
    </div>
  );
}

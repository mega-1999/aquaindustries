'use client';

export const dynamic = 'force-dynamic';

import { useState, use } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Loader2, KeyRound, ArrowLeft, CheckCircle2 } from 'lucide-react';
 import Link from 'next/link';
import { sendForgotPasswordEmail } from '@/lib/api';

export default function ForgotPasswordPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendForgotPasswordEmail(email, type);
    
    // Always show success state for security/UX
    setLoading(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A3161]/5 p-4">
        <Card className="max-w-md w-full text-center p-8 border-green-200 bg-green-50">
          <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-green-800 mb-2">Check Your Inbox</CardTitle>
          <CardDescription className="text-green-700 mb-6">
             If an account exists for <strong>{email}</strong>, we have sent password reset instructions.
          </CardDescription>
          <Link href={`/login/${type}`}>
            <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
              Back to Login
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A3161]/5 p-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-[#0A3161]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <KeyRound className="w-6 h-6 text-[#0A3161]/80" />
          </div>
          <CardTitle className="text-2xl font-bold">Forgot Password?</CardTitle>
          <CardDescription>
            Enter your email to reset your password for {type.toUpperCase()}.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <Button className="w-full bg-[#0A3161] hover:bg-[#0A3161] py-6" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Send Reset Link"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center border-t pt-4">
            <Link href={`/login/${type}`} className="flex items-center text-sm text-[#0A3161]/70 hover:text-[#0A3161]">
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Login
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
'use client';

// Prevent build hangs
export const dynamic = 'force-dynamic';

import { useState, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2, LogIn, LockKeyhole, ArrowLeft } from 'lucide-react';

// Import functions from your library
import { loginUser, verifyTwoFactor } from '@/lib/api';

export default function LoginPage({ params }: { params: Promise<{ type: string }> }) {
  const unwrappedParams = use(params);
  const type = unwrappedParams?.type || 'portal';
  const router = useRouter();

  // State to manage the 2-step process
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const urlEmail = searchParams.get('email') || '';
  // Store email/pass here so we can use them in Step 2
  const [formData, setFormData] = useState({ email: urlEmail, password: '' });
  const [otp, setOtp] = useState('');

  // --- Step 1: Handle Login ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Call API with strings (matches your lib/api.ts)
    const res = await loginUser(formData.email, formData.password, type);

    if (res.success) {
      setStep('otp'); // Move to next screen without refreshing
      setLoading(false);
    } else {
      setError(res.message || "Invalid email or password.");
      setLoading(false);
    }
  };

  // --- Step 2: Handle Verification ---
  // app/login/[type]/page.tsx

  const handleVerify = async () => {
    if (otp.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setLoading(true);
    setError('');

    const res = await verifyTwoFactor(formData.email, formData.password, otp, type);

    console.log("🔍 DEBUG API RESPONSE:", res); // <--- LOOK AT THIS IN CONSOLE

    if (res.success) {
      // CHECK IF TOKEN EXISTS BEFORE SAVING
      if (!res.token) {
        console.error("❌ ERROR: Login successful, but NO TOKEN found in response!");
        setError("System Error: No access token received.");
        setLoading(false);
        return;
      }

      console.log("✅ SAVING TOKEN:", res.token);

      // Save to Storage
      localStorage.setItem('authToken', res.token);
      localStorage.setItem('tenantSlug', type);

      router.push('/private/member'); // Redirect to dashboard
    } else {
      setError(res.message || "Verification failed.");
      setLoading(false);
    }
  };

  const displayTitle = type ? type.toUpperCase() : 'PORTAL';

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="max-w-md w-full shadow-xl border-t-4 border-t-[#B31942]">

        <CardHeader className="text-center">
          <div className="mx-auto bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            {step === 'credentials' ? (
              <LogIn className="w-6 h-6 text-[#B31942]" />
            ) : (
              <LockKeyhole className="w-6 h-6 text-[#B31942]" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            {step === 'credentials' ? `Login to ${displayTitle}` : 'Two-Factor Auth'}
          </CardTitle>
          <CardDescription>
            {step === 'credentials'
              ? "Enter your credentials to continue."
              : `Enter the code sent to ${formData.email}`
            }
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* VIEW 1: EMAIL & PASSWORD */}
          {step === 'credentials' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-[#B31942] hover:underline">Forgot password?</a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  disabled={loading}
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium bg-red-50 p-2 rounded text-center border border-red-100">
                  {error}
                </p>
              )}

              <Button className="w-full bg-[#B31942] hover:bg-red-700 py-6 text-md font-bold" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Sign In"}
              </Button>
            </form>
          )}

          {/* VIEW 2: OTP ENTRY */}
          {step === 'otp' && (
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={(val) => setOtp(val)}>
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <InputOTPSlot key={idx} index={idx} className="w-10 h-10 sm:w-12 sm:h-12 text-lg border-slate-300" />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium bg-red-50 px-4 py-2 rounded">
                  {error}
                </p>
              )}

              <Button
                onClick={handleVerify}
                className="w-full bg-[#B31942] hover:bg-red-700 py-6 text-lg font-bold"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Verify & Login"}
              </Button>

              <button
                onClick={() => { setStep('credentials'); setError(''); }}
                className="flex items-center text-sm text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Login
              </button>
            </div>
          )}
        </CardContent>

        {step === 'credentials' && (
          <CardFooter className="justify-center border-t pt-4">
            <p className="text-sm text-slate-500">
              Don't have an account? <a href={`/signup/${type || 'customer'}`} className="text-[#B31942] font-semibold hover:underline">Sign up</a>
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
'use client';

export const dynamic = 'force-dynamic';

import { useState, use, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Lock, CheckCircle2 } from 'lucide-react';
import { resetPassword } from '@/lib/api';
 
function ResetPasswordForm({ clientId }: { clientId: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    // Get context from URL
    const email = searchParams.get('email') || ''; 
    const tenant = searchParams.get('tenant') || 'customer';

    const [passwords, setPasswords] = useState({ new: '', confirm: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (passwords.new !== passwords.confirm) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        if (passwords.new.length < 6) {
            setError("Password must be at least 6 characters.");
            setLoading(false);
            return;
        }

        // Call API
        const res = await resetPassword(clientId, email, passwords.new, tenant);

        if (res.success) {
            setSuccess(true);
            setTimeout(() => {
                router.push(`/login/${tenant}`);
            }, 3000);
        } else {
            setError(res.message);
            setLoading(false);
        }
    };

    if (success) {
        return (
            <Card className="max-w-md w-full text-center p-8 border-green-200 bg-green-50">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800 mb-2">Password Reset!</CardTitle>
                <p className="text-green-700">
                    Your password has been updated successfully. Redirecting to login...
                </p>
            </Card>
        );
    }

    return (
        <Card className="max-w-md w-full shadow-xl">
            <CardHeader className="text-center">
                <div className="mx-auto bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
                <CardDescription>
                    Create a new password for <strong>{email}</strong>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Read-only email to confirm context */}
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input value={email} disabled className="bg-slate-50" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="new-pass">New Password</Label>
                        <Input 
                            id="new-pass" 
                            type="password" 
                            required 
                            value={passwords.new}
                            onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirm-pass">Confirm Password</Label>
                        <Input 
                            id="confirm-pass" 
                            type="password" 
                            required 
                            value={passwords.confirm}
                            onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm font-medium bg-red-50 p-2 rounded text-center">
                            {error}
                        </p>
                    )}

                    <Button className="w-full bg-[#B31942] hover:bg-red-700" disabled={loading}>
                        {loading ? <Loader2 className="animate-spin mr-2" /> : "Reset Password"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default function ResetPasswordPage({ params }: { params: Promise<{ clientId: string }> }) {
    const { clientId } = use(params);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Suspense fallback={<div>Loading...</div>}>
                <ResetPasswordForm clientId={clientId} />
            </Suspense>
        </div>
    );
}
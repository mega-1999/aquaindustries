'use client';

import { useActionState, use } from 'react';
 import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { sendSignupLink } from '@/lib/api';

export default function SignupPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const [state, formAction, isPending] = useActionState(sendSignupLink, null);

  if (state?.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A3161]/5 p-4">
        <Card className="max-w-md w-full text-center p-8 border-green-200 bg-green-50 shadow-sm">
          <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-green-800 mb-2">Check Your Email</CardTitle>
          <CardDescription className="text-green-700">
             We have sent a registration link to your inbox.
          </CardDescription>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A3161]/5 p-4">
      <Card className="max-w-md w-full shadow-xl border-t-4 border-t-[#B31942]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Sign up for {type.toUpperCase()}</CardTitle>
          <CardDescription>Enter your work email to begin.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <input type="hidden" name="tenantCode" value={type} />
            <div className="space-y-2">
              <Input name="email" type="email" placeholder="name@company.com" required disabled={isPending} />
            </div>
            <Button className="w-full bg-[#B31942] hover:bg-[#B31942] h-12 text-md" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin mr-2" /> : <Mail className="mr-2 h-4 w-4" />}
              Send Magic Link
            </Button>
            {state?.success === false && (
              <p className="text-[#B31942] text-sm text-center bg-[#B31942]/5 p-2 rounded border border-red-100">
                {state.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
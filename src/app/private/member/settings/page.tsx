'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, User, Lock, Save } from 'lucide-react';
import { changePassword } from '@/lib/api';

export default function SettingsPage() {
  // Mock User Data (In a real app, fetch this from your Context or Cookies)
  const [user, setUser] = useState({
    fullName: "Ratan Prajapati",
    username: "ratan@technoml.com",
    email: "ratan@technoml.com",
    role: "Admin",
    tenant: "MEGAFOUNDRY"
  });

  const [isLoading, setIsLoading] = useState(false);

  // --- PASSWORD FORM STATE ---
  const [passData, setPassData] = useState({ current: '', new: '', confirm: '' });
  const [message, setMessage] = useState<{ text: string, type: 'success'|'error' } | null>(null);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (passData.new !== passData.confirm) {
        setMessage({ text: "New passwords do not match.", type: 'error' });
        return;
    }

    if (passData.new.length < 6) {
        setMessage({ text: "Password must be at least 6 characters.", type: 'error' });
        return;
    }

    setIsLoading(true);
    
    // Call API
    const res = await changePassword(user.email, passData.current, passData.new, "team"); // 'team' or dynamic tenant

    setIsLoading(false);

    if (res.success) {
        setMessage({ text: "Password changed successfully!", type: 'success' });
        setPassData({ current: '', new: '', confirm: '' }); // Reset form
    } else {
        setMessage({ text: res.message || "Failed to change password.", type: 'error' });
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      <div>
        <h3 className="text-2xl font-medium">Settings</h3>
        <p className="text-sm text-slate-500">Manage your account settings and preferences.</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* --- TAB 1: GENERAL PROFILE --- */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile details and public info.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20 border-2 border-slate-100">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-lg bg-slate-900 text-white">RP</AvatarFallback>
                </Avatar>
                <div>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input 
                    value={user.fullName} 
                    onChange={(e) => setUser({...user, fullName: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input value={user.username} disabled className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input value={user.email} disabled className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Input value={user.role} disabled className="bg-slate-50" />
                </div>
              </div>

            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button className="bg-[#B31942] hover:bg-red-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* --- TAB 2: SECURITY (PASSWORD) --- */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form id="pwd-form" onSubmit={handlePasswordChange} className="space-y-4">
                    <div className="space-y-2">
                        <Label>Current Password</Label>
                        <Input 
                            type="password" 
                            required
                            value={passData.current}
                            onChange={(e) => setPassData({...passData, current: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>New Password</Label>
                        <Input 
                            type="password" 
                            required
                            value={passData.new}
                            onChange={(e) => setPassData({...passData, new: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Confirm Password</Label>
                        <Input 
                            type="password" 
                            required
                            value={passData.confirm}
                            onChange={(e) => setPassData({...passData, confirm: e.target.value})}
                        />
                    </div>
                </form>

                {message && (
                    <div className={`p-3 rounded text-sm font-medium ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message.text}
                    </div>
                )}
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button type="submit" form="pwd-form" className="bg-[#B31942] hover:bg-red-700" disabled={isLoading}>
                {isLoading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
                Change Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

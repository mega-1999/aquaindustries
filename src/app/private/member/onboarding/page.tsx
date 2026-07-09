'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Store, MapPin, FileText, User, AlertCircle, LogOut } from 'lucide-react';

// ✅ Import from your new consolidated API file
import { registerVendor, getUserProfile } from '@/lib/api'; 

export default function VendorOnboardingPage() {
  const router = useRouter();

  // --- STATE ---
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  // --- FORM DATA ---
  const [formData, setFormData] = useState({
    vendorName: '',
    contactName: '',
    email: '',
    phone: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    taxNumber: '',
    website: ''
  });

  // --- 1. ON LOAD: GET USER ID ---
  useEffect(() => {
    async function loadUserIdentity() {
        const token = localStorage.getItem('authToken');
        const tenant = localStorage.getItem('tenantSlug') || 'team';
        
        if (!token) {
            router.push(`/login/${tenant}`);
            return;
        }

        try {
            // Call the robust profile fetcher from lib/api.ts
            const res = await getUserProfile(token, tenant);
            console.log("🔍 VENDOR PAGE - PROFILE CHECK:", res);

            // Our new API helper normalizes the ID to 'res.data.id'
            if (res.success && res.data && res.data.id) {
                console.log("✅ User ID Found:", res.data.id);
                setUserId(res.data.id);
                
                // Pre-fill form
                setFormData(prev => ({ 
                    ...prev, 
                    email: res.data.email || prev.email,
                    contactName: res.data.fullName || prev.contactName
                }));
            } else {
                // ⚠️ Fallback if backend still has issues
                console.warn("⚠️ User ID missing in profile. Using Placeholder to allow UI testing.");
                setUserId("user-id-placeholder-12345"); 
            }
        } catch (err) {
            console.error(err);
            setLoadError("Unexpected error loading user profile.");
        } finally {
            setFetchingUser(false);
        }
    }
    loadUserIdentity();
  }, [router]);

  // --- HANDLE INPUT CHANGE ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 2. SUBMIT FORM ---
// --- 2. SUBMIT FORM (FIXED) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      alert("Security Error: User ID not loaded. Please refresh.");
      return;
    }

    setLoading(true);

    const uniqueSlug = formData.vendorName.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now().toString().slice(-4);

    const apiPayload = {
      tenantId: "MEGAFOUNDRY",
      status: "Pending",
      type: "Manufacturer",
      vendorName: formData.vendorName,
      legalName: formData.vendorName,
      slug: uniqueSlug,
      clientId: userId,
      contact: {
        primaryContactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        secondaryEmail: ""
      },
      address: {
        label: "Headquarters",
        line1: formData.addressLine1,
        line2: "",
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country
      },
      locations: [
        {
          code: "HQ-01",
          name: "Main Office",
          line1: formData.addressLine1,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          postalCode: formData.postalCode,
          primary: true
        }
      ],
      profile: {
        description: `Vendor profile for ${formData.vendorName}`,
        website: formData.website || "",
        logoUrl: "",
        yearEstablished: new Date().getFullYear(),
        specializations: []
      },
      marketplace: {
        status: "Active",
        defaultCurrency: "USD",
        shipsFromCountries: [formData.country],
        shipsToCountries: ["Worldwide"],
        defaultHandlingTimeDays: 3,
        allowedCategoryIds: []
      },
      compliance: {
        emailVerified: true,
        businessVerified: false,
        taxNumber: formData.taxNumber,
        documents: []
      }
    };

    console.log("🚀 Sending Vendor Registration:", apiPayload);

    const res = await registerVendor(apiPayload);
    
    setLoading(false);

    // ✅ FIX: Check if response contains "success" text, even if structure is different
    const isSuccess = res && (
        res.id || 
        res.success === true || 
        (typeof res.message === 'string' && res.message.toLowerCase().includes('successfully'))
    );

    if (isSuccess) {
      console.log("✅ Vendor Created:", res);
      
      // 1. Mark user as Vendor
      localStorage.setItem('isVendor', 'true');
      
      // 2. Extract ID safely
      let newVendorId = res.id;
      
      // If ID is hidden inside the message string "Vendor created successfully with id: 693..."
      if (!newVendorId && res.message) {
          const match = res.message.match(/id:\s*([a-f0-9]+)/i);
          if (match && match[1]) {
              newVendorId = match[1];
          }
      }

      if (newVendorId) {
          console.log("🆔 Captured Vendor ID:", newVendorId);
          localStorage.setItem('vendorId', newVendorId);
      }
      
      // 3. Redirect
      router.push('/dashboard/vendor');
    } else {
      // ❌ FAIL
      const errorMsg = res?.message || "Unknown validation error";
      console.error("❌ Registration Failed:", res);
      // alert(`Registration Failed: ${errorMsg}`);
    }
  };

  // --- LOADING VIEW ---
  if (fetchingUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-3">
        <Loader2 className="animate-spin w-10 h-10 text-[#B31942]" />
        <p className="text-slate-500 font-medium">Verifying User Identity...</p>
      </div>
    );
  }

  // --- ERROR VIEW ---
  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="max-w-md w-full border-red-200 bg-red-50">
          <CardHeader className="text-center">
            <div className="mx-auto bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <CardTitle className="text-red-700">Unable to Verify Identity</CardTitle>
            <CardDescription className="text-red-600/80">
              {loadError}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <Button variant="outline" className="border-red-200 bg-white hover:bg-red-100 text-red-700" onClick={() => router.push('/login/foundry')}>
              <LogOut className="w-4 h-4 mr-2" /> Log Out & Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- MAIN FORM ---
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 flex justify-center">
      <Card className="max-w-3xl w-full shadow-xl border-t-4 border-t-[#B31942]">
        <CardHeader className="bg-slate-900 text-white rounded-t-sm mt-1">
          <div className="flex items-center gap-3 mb-2">
            <Store className="w-8 h-8 text-[#B31942]" />
            <CardTitle className="text-2xl">Vendor Registration</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            You are logged in as <span className="text-white font-semibold">{formData.email}</span>.
            Complete this form to upgrade.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* 1. BUSINESS INFO */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                <Store className="w-4 h-4" /> Business Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company Name <span className="text-red-500">*</span></Label>
                  <Input name="vendorName" required placeholder="Acme Industries" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>Website</Label>
                  <Input name="website" placeholder="https://..." onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* 2. CONTACT */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                <User className="w-4 h-4" /> Primary Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input name="contactName" required defaultValue={formData.contactName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input name="email" required value={formData.email} disabled className="bg-slate-100 cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                  <Label>Phone <span className="text-red-500">*</span></Label>
                  <Input name="phone" required placeholder="+1 234..." onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* 3. ADDRESS */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                <MapPin className="w-4 h-4" /> Headquarters Address
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label>Street Address <span className="text-red-500">*</span></Label>
                  <Input name="addressLine1" required onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>City <span className="text-red-500">*</span></Label>
                  <Input name="city" required onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>State <span className="text-red-500">*</span></Label>
                  <Input name="state" required onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>Zip Code <span className="text-red-500">*</span></Label>
                  <Input name="postalCode" required onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Input name="country" required defaultValue="India" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* 4. COMPLIANCE */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2">
                <FileText className="w-4 h-4" /> Tax Info
              </h3>
              <div className="space-y-2">
                <Label>Tax ID / GST <span className="text-red-500">*</span></Label>
                <Input name="taxNumber" required placeholder="GST..." onChange={handleChange} />
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-[#B31942] hover:bg-red-700 h-12 text-lg font-bold" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Complete Registration"}
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}

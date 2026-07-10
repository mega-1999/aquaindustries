 'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketplaceForm from "./_components/MarketplaceForm";
import LocationsManager from "./_components/LocationsManager";
 
export default function VendorDashboard({ params }: { params: { id: string } }) {
  const vendorId = params.id;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Vendor Management</h1>
      
      <Tabs defaultValue="marketplace" className="w-full">
        <TabsList className="mb-6 bg-[#0A3161]/10 p-1 rounded-lg">
          <TabsTrigger value="marketplace">Marketplace Showcase</TabsTrigger>
          <TabsTrigger value="locations">Locations (Add/Remove)</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        {/* Tab 1: Marketplace (Showcase) */}
        <TabsContent value="marketplace">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
             <h2 className="text-xl font-bold mb-4">Marketplace Profile</h2>
             <MarketplaceForm vendorId={vendorId} />
          </div>
        </TabsContent>

        {/* Tab 2: Locations (Add/Remove Example) */}
        <TabsContent value="locations">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
             <h2 className="text-xl font-bold mb-4">Manage Locations</h2>
             <LocationsManager vendorId={vendorId} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
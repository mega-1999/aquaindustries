// app/admin/vendors/[id]/_components/LocationsManager.tsx
'use client';

import { useEffect, useState } from 'react';
import { Plus, Trash2, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addVendorLocation, deleteVendorLocation, getVendorLocations } from '@/lib/api';
 
export default function LocationsManager({ vendorId }: { vendorId: string }) {
  const [locations, setLocations] = useState<any[]>([]);
  const [newCity, setNewCity] = useState('');

  // Refresh list helper
  const refresh = async () => {
    const data = await getVendorLocations(vendorId);
    setLocations(data || []);
  };

  useEffect(() => { refresh(); }, [vendorId]);

  // Handle Add
  const handleAdd = async () => {
    if (!newCity) return;
    await addVendorLocation(vendorId, { city: newCity, country: "USA" }); // Example payload
    setNewCity('');
    refresh();
  };

  // Handle Remove
  const handleRemove = async (locationId: string) => {
    if(!confirm("Are you sure?")) return;
    await deleteVendorLocation(vendorId, locationId);
    refresh();
  };

  return (
    <div>
      {/* List of Existing Items */}
      <div className="grid gap-3 mb-6">
        {locations.map((loc) => (
          <div key={loc.id} className="flex items-center justify-between p-3 border rounded bg-[#0A3161]/5">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0A3161]/70" />
              <span className="font-medium">{loc.city}, {loc.country}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => handleRemove(loc.id)} className="text-[#B31942] hover:text-[#B31942] hover:bg-[#B31942]/5">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {locations.length === 0 && <p className="text-[#0A3161]/60 text-sm">No locations added yet.</p>}
      </div>

      {/* Add New Item Input */}
      <div className="flex gap-2 items-end border-t pt-4">
        <div className="flex-1">
          <label className="text-xs font-medium text-[#0A3161]/70">Add New City</label>
          <Input 
            value={newCity} 
            onChange={(e) => setNewCity(e.target.value)} 
            placeholder="e.g. New York" 
          />
        </div>
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" /> Add Location
        </Button>
      </div>
    </div>
  );
}
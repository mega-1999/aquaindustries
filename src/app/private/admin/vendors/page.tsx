'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"; // Assuming you have Shadcn UI Table
import { Button } from "@/components/ui/button";
import { Plus, Loader2, Store } from "lucide-react";
import { createVendor, getVendors } from '@/lib/api';

export default function VendorListPage() {
    const [vendors, setVendors] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // 1. Fetch the list of ALL vendors on load
    useEffect(() => {
        async function loadVendors() {
            try {
                const data = await getVendors(); // Uses "MEGAFOUNDRY" by default
                setVendors(data || []);
            } catch (error) {
                console.error("Failed to load vendors", error);
            } finally {
                setLoading(false);
            }
        }
        loadVendors();
    }, []);

    if (loading) {
        return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;
    }
    const handleCreateDummy = async () => {
        try {
            const dummyData = {
                name: "Test Foundry Inc",
                email: "test@foundry.com",
                businessName: "Test Foundry Inc",
                // Add other required fields your API needs
            };

            await createVendor(dummyData);
            alert("Vendor Created! Refreshing...");
            window.location.reload(); // Quick refresh to see it
        } catch (err) {
            console.error(err);
            alert("Failed to create vendor. Check console.");
        }
    };
    return (
        <div className="p-8 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">All Vendors</h1>
                    <p className="text-[#0A3161]/70">Manage your registered foundries and suppliers.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add New Vendor
                </Button>
            </div>

            {/* Vendor Table */}
            <div className="border rounded-lg bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Vendor Name</TableHead>
                            <TableHead>Email / Contact</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>ID (System)</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vendors.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24 text-[#0A3161]/70">
                                    No vendors found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            vendors.map((vendor) => (
                                <TableRow key={vendor.id}>

                                    {/* Name */}
                                    <TableCell className="font-medium">
                                        {vendor.name || vendor.businessName || "Unnamed Vendor"}
                                    </TableCell>

                                    {/* Email */}
                                    <TableCell>
                                        {vendor.email}
                                    </TableCell>

                                    {/* Status Badge */}
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${vendor.isActive ? "bg-green-100 text-green-700" : "bg-[#0A3161]/10 text-[#0A3161]"
                                            }`}>
                                            {vendor.isActive ? "Active" : "Inactive"}
                                        </span>
                                    </TableCell>

                                    {/* The ID you were looking for */}
                                    <TableCell className="font-mono text-xs text-[#0A3161]/60">
                                        {vendor.id}
                                    </TableCell>

                                    {/* ACTION BUTTON -> Goes to the Dashboard we built */}
                                    <TableCell className="text-right">
                                        <Link href={`/private/admin/vendors/${vendor.id}`}>
                                            <Button variant="outline" size="sm">
                                                <Store className="w-4 h-4 mr-2" />
                                                Manage Dashboard
                                            </Button>
                                        </Link>
                                    </TableCell>

                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                <div className="flex gap-2">
                    <Button onClick={handleCreateDummy} variant="destructive">
                        Force Create Test Vendor
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add New Vendor
                    </Button>
                </div>
            </div>
        </div>
    );
}
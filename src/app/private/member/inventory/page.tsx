'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Plus, Trash2, Edit, AlertCircle } from 'lucide-react';
import { getProducts, Product } from '@/lib/api';

// ✅ Import from your services file 

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data on Load
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      // 1. Pass page index (0) and size (100 for a list view)
      const res = await getProducts(0, 100); 
      
      console.log("📦 Products API Response:", res); 
      
      // 2. Map the response correctly based on your API structure
      if (res && res.content) {
          setProducts(res.content); // Pagination structure
      } else if (Array.isArray(res)) {
          setProducts(res); // Flat array fallback
      } else {
          setProducts([]);
      }
    } catch (err) {
      console.error("Failed to load inventory", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if(!confirm("Are you sure you want to delete this product?")) return;
    
    try {
      // ❌ Note: You need to implement deleteProduct in api.ts if missing
      // const res = await deleteProduct(id); 
      // if(res) { ... }

      alert("Delete logic needs to be added to api.ts first!");
      // loadData(); 
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
            <p className="text-slate-500">Manage your product catalog and stock levels.</p>
        </div>
        
        {/* ✅ Link to the "New Product" page we created */}
        <Link href="/private/member/products/new">
            <Button className="bg-[#B31942] hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Products List</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-10 text-[#B31942]">
                <Loader2 className="animate-spin w-8 h-8" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Product Name</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length > 0 ? (
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                            <span>{product.productName}</span>
                            <span className="text-xs text-slate-400">{product.productSlug}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.id.substring(0, 8)}...</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            product.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 
                            product.status === 'DRAFT' ? 'bg-slate-100 text-slate-600' : 'bg-red-50 text-red-600'
                        }`}>
                            {product.status || 'DRAFT'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {product.stockQuantity}
                      </TableCell>
                      <TableCell className="text-right font-bold">
                        ${product.unitPrice?.toFixed(2) || "0.00"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="w-4 h-4 text-slate-500" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(product.id)}>
                                <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center text-slate-500">
                            <div className="flex flex-col items-center gap-2">
                                <AlertCircle className="w-6 h-6 opacity-50" />
                                <p>No products found. Start by adding one.</p>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

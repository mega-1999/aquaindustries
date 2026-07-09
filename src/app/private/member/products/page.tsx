'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { 
  Plus, Search, Filter, Edit, Trash2, 
  ChevronLeft, ChevronRight, Package 
} from 'lucide-react';
import Link from 'next/link';
import { ApiDocument, getProducts, Product } from '@/lib/api';
import Image from 'next/image';

// Import from your new API file 

// Helper to display images
const getThumbnail = (docs: ApiDocument[]) => {
  const primary = docs?.find(d => d.isPrimary && d.type === 'IMAGE');
  return primary?.thumbnailUrl || primary?.url || '/placeholder.png'; // Add a real placeholder image in public folder
};

export default function AdminProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const PAGE_SIZE = 10;

  // === FETCH DATA ===
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      // Call the separated API function
      const data = await getProducts(page, PAGE_SIZE);
      
      setProducts(data.content);
      setTotalPages(data.totalPages);
      setTotalElements(data.totalElements);
    } catch (err) {
      console.error("Critical Error loading products", err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Initial Load & Page Change
  useEffect(() => {
    loadData();
  }, [loadData]);

  // === HANDLERS ===
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-sm text-gray-500">Manage your inventory and catalog.</p>
        </div>
        <Link 
          href="/private/member/products/new"
          className="inline-flex items-center gap-2 bg-[#B31942] hover:bg-[#B31942] text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Link>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#B31942]"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                // SKELETON LOADERS
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="h-10 w-32 bg-gray-200 rounded"></div></td>
                    <td className="px-6 py-4"><div className="h-4 w-20 bg-gray-200 rounded"></div></td>
                    <td className="px-6 py-4"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
                    <td className="px-6 py-4"><div className="h-4 w-16 bg-gray-200 rounded"></div></td>
                    <td className="px-6 py-4"><div className="h-6 w-16 bg-gray-200 rounded-full"></div></td>
                    <td className="px-6 py-4"></td>
                  </tr>
                ))
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <Package className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <Image 
                             width={1200}
                             height={600}
                             src={getThumbnail(product.documents)} 
                             alt={product.productName} 
                             className="w-full h-full object-cover"
                             onError={(e) => { e.currentTarget.src = '/placeholder.png' }}
                           />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{product.productName}</p>
                          <p className="text-xs text-gray-500">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium uppercase">
                        {product.categorySlug || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <span className={`font-medium ${product.inStock ? 'text-gray-900' : 'text-red-600'}`}>
                          {product.stockQuantity}
                        </span>
                        <span className="text-gray-400 text-xs ml-1">units</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      ${product.unitPrice?.toFixed(2) || '0.00'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`
                        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border
                        ${product.status === 'PUBLISHED' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                        ${product.status === 'DRAFT' ? 'bg-gray-50 text-gray-600 border-gray-200' : ''}
                        ${product.status === 'ARCHIVED' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                      `}>
                        {product.status || 'DRAFT'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-[#B31942] hover:bg-[#B31942] rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Showing <span className="font-medium">{page * PAGE_SIZE + 1}</span> to <span className="font-medium">{Math.min((page + 1) * PAGE_SIZE, totalElements)}</span> of <span className="font-medium">{totalElements}</span> results
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 0}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-gray-700 px-2">
              Page {page + 1} of {totalPages || 1}
            </span>
            <button 
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= totalPages - 1}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

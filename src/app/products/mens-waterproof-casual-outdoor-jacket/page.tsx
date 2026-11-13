"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Lock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingBag,
  Menu,
  X,
  Check,
  Share2,
  Heart,
  Flame,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Info,
} from "lucide-react";

// Exact Dataset Extracted from theartisanwalk.com
const PRODUCT_DATA = {
  title: "Men's Mid-Length Waterproof Casual Jacket – Comfortable Everyday Outdoor Wear",
  salePrice: 69.99,
  compareAtPrice: 151.96,
  discountPercent: 54,
  savingsAmount: 81.97,
  sku: "XQY20397929",
  rating: 5.0,
  reviewCount: 148,
  stockLeft: 5,
  deliveryWindow: "Nov/20 - Nov/25",
  colors: [
    {
      id: "khaki",
      name: "Khaki (Padded for Warmth)",
      colorHex: "#b89f7a",
      images: [
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-04--43.jpg?h=1920&q=80&w=1920",
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-04--44.jpg?h=950&q=80&w=712",
        "https://img-va.myshopline.com/image/store/1776758950476/--94.png?w=2048&h=2048",
        "https://img-va.myshopline.com/image/store/1776758950476/--93.png?w=2048&h=2048",
      ],
    },
    {
      id: "black",
      name: "Black",
      colorHex: "#1a1a1a",
      images: [
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-03--43.jpg?h=1080&q=80&w=1080",
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-03--44.jpg?h=1920&q=80&w=1440",
      ],
    },
    {
      id: "gray",
      name: "Gray",
      colorHex: "#7a7d81",
      images: [
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-01--42.jpg?h=1080&q=80&w=1080",
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-01--43.jpg?h=950&q=80&w=712",
      ],
    },
    {
      id: "navy",
      name: "Navy",
      colorHex: "#1e2a4a",
      images: [
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-02--39.jpg?h=1080&q=80&w=1080",
        "https://img-va.myshopline.com/image/store/1776758950476/SKU-02--40.jpg?h=950&q=80&w=712",
      ],
    },
  ],
  sizes: ["Small", "Medium", "Large", "XL", "2XL", "3XL", "4XL", "5XL"],
  sizeTable: [
    { size: "Small", chest: "112 cm", length: "88 cm", shoulder: "51 cm", sleeve: "64 cm" },
    { size: "Medium", chest: "116 cm", length: "89 cm", shoulder: "52 cm", sleeve: "65 cm" },
    { size: "Large", chest: "120 cm", length: "90 cm", shoulder: "53 cm", sleeve: "66 cm" },
    { size: "XL", chest: "124 cm", length: "91 cm", shoulder: "54 cm", sleeve: "67 cm" },
    { size: "2XL", chest: "128 cm", length: "92 cm", shoulder: "55 cm", sleeve: "68 cm" },
    { size: "3XL", chest: "132 cm", length: "93 cm", shoulder: "56 cm", sleeve: "69 cm" },
    { size: "4XL", chest: "136 cm", length: "94 cm", shoulder: "57 cm", sleeve: "70 cm" },
    { size: "5XL", chest: "140 cm", length: "95 cm", shoulder: "58 cm", sleeve: "71 cm" },
  ],
  communityImages: [
    "https://img-va.myshopline.com/image/store/1776758950476/488a56ae267088456ea285715d208838.jpg?w=850&h=1182",
    "https://img-va.myshopline.com/image/store/1776758950476/01f9089152628860e9a8fe77c24796aa.jpg?w=850&h=1182",
    "https://img-va.myshopline.com/image/store/1776758950476/e71990c5671871a604c85f7d490e4092.jpg?w=850&h=1182",
    "https://img-va.myshopline.com/image/store/1776758950476/image-2304.jpg?w=1381&h=1825",
    "https://img-va.myshopline.com/image/store/1776758950476/Rectangle-74-0.jpg?w=1275&h=1776",
    "https://img-va.myshopline.com/image/store/1776758950476/image-2305.jpg?w=1381&h=1825",
  ],
};

export default function ArtisanWalkJacketPage() {
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [addedToast, setAddedToast] = useState(false);
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const announcements = [
    "30-Day Hassle-Free Returns",
    "Stable support for walking, all-day comfort with no tired feet.",
    "Fast US Shipping & 256-Bit SSL Checkout",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const handleColorChange = (color: typeof PRODUCT_DATA.colors[0]) => {
    setSelectedColor(color);
    setSelectedImageIndex(0);
  };

  const handleAddToCart = () => {
    setCartCount((c) => c + quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const currentImages = selectedColor.images;

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans antialiased selection:bg-[#153e20] selection:text-white">
      {/* ========================================================
          1. TOP ANNOUNCEMENT BAR (Forest Green #153e20)
      ======================================================== */}
      <aside aria-label="Store announcement" className="bg-[#153e20] text-white text-xs py-2 px-4 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Social links (Desktop left) */}
          <div className="hidden lg:flex items-center gap-4 text-white/80 text-[11px] font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">FB</span>
            <span className="hover:text-white cursor-pointer transition-colors">IG</span>
            <span className="hover:text-white cursor-pointer transition-colors">YT</span>
          </div>

          {/* Center rotating announcement */}
          <div className="flex-1 flex items-center justify-center text-center font-bold tracking-wide transition-opacity duration-300">
            <span>{announcements[announcementIdx]}</span>
          </div>

          {/* Right currency selector (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 text-white/90 font-semibold cursor-pointer text-xs">
            <span>USD $</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </aside>

      {/* ========================================================
          2. MAIN HEADER & BRAND NAVIGATION
      ======================================================== */}
      <header className="border-b border-gray-200 bg-white sticky top-[33px] z-40 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Mobile hamburger & search */}
          <div className="flex lg:hidden items-center gap-3 text-gray-800">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-md transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#153e20] text-white flex items-center justify-center font-serif font-black text-sm shadow-sm">
                AW
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-black font-serif">
                TheArtisanWalk
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-800 tracking-wide">
            <a href="#" className="hover:text-[#153e20] transition-colors">Home</a>
            <a href="#" className="text-[#153e20] border-b-2 border-[#153e20] pb-1 transition-colors">Outerwear</a>
            <a href="#" className="hover:text-[#153e20] transition-colors">Footwear</a>
            <a href="#" className="hover:text-[#153e20] transition-colors">Best Sellers</a>
            <a href="#" className="hover:text-[#153e20] transition-colors">Track Order</a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-gray-800">
            <button type="button" className="hidden lg:block p-1.5 hover:bg-gray-100 rounded-md transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="relative p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ee4700] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-in zoom-in-75">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Added to cart toast notification */}
      {addedToast && (
        <div className="fixed top-24 right-4 z-50 bg-[#153e20] text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 border border-emerald-400 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-300" />
          <div className="text-xs">
            <p className="font-bold">Added to your cart!</p>
            <p className="text-emerald-100">{PRODUCT_DATA.title.slice(0, 32)}... ({selectedSize})</p>
          </div>
        </div>
      )}

      {/* ========================================================
          3. MAIN PRODUCT SHOWCASE (Above The Fold)
      ======================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <a href="#" className="hover:underline">Home</a>
          <span>/</span>
          <a href="#" className="hover:underline">Outerwear</a>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-md">
            {PRODUCT_DATA.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ========================================================
              LEFT COLUMN: PRODUCT GALLERY (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail rail (Desktop) */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[620px] pb-2 md:pb-0 scrollbar-none shrink-0">
              {currentImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-md overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                    selectedImageIndex === idx
                      ? "border-black ring-2 ring-black/20"
                      : "border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="relative flex-1 bg-[#f8f8f8] rounded-xl overflow-hidden border border-gray-200 group">
              {/* Sale badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#ee4700] text-white text-xs font-black px-3 py-1 rounded-sm shadow-md uppercase tracking-wider">
                SAVE {PRODUCT_DATA.discountPercent}%
              </div>

              {/* Verified quality tag */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 border border-gray-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#153e20]" />
                <span>Weatherproof DWR</span>
              </div>

              <div className="w-full aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] overflow-hidden flex items-center justify-center">
                <img
                  src={currentImages[selectedImageIndex] || currentImages[0]}
                  alt={PRODUCT_DATA.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 select-none"
                />
              </div>

              {/* Prev / Next Controls */}
              {currentImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? currentImages.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all hover:scale-110 cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === currentImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all hover:scale-110 cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: PRODUCT PURCHASE BOX (5 Cols)
          ======================================================== */}
          <div id="buy-now" className="lg:col-span-5 flex flex-col gap-5">
            {/* Product Title */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#153e20] bg-emerald-50 px-2 py-0.5 rounded-xs inline-block mb-2">
                All-Weather Field Collection
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-tight">
                {PRODUCT_DATA.title}
              </h1>
            </div>

            {/* Social Proof Stars & Verified Count */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-900">{PRODUCT_DATA.rating}.0</span>
              <span className="text-gray-400">&bull;</span>
              <a href="#reviews" className="text-gray-600 underline hover:text-black font-medium">
                {PRODUCT_DATA.reviewCount} customer reviews
              </a>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-3 border-y border-gray-100 py-3.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                ${PRODUCT_DATA.salePrice.toFixed(2)}
              </span>
              <span className="text-lg text-gray-400 line-through font-normal">
                ${PRODUCT_DATA.compareAtPrice.toFixed(2)}
              </span>
              <span className="bg-[#ee4700]/10 text-[#ee4700] text-xs font-black px-2.5 py-1 rounded-sm">
                Save ${PRODUCT_DATA.savingsAmount.toFixed(2)} ({PRODUCT_DATA.discountPercent}% OFF)
              </span>
            </div>

            {/* Multi-Buy Promotion Banner */}
            <div className="bg-[#faf7f0] border border-amber-200/80 rounded-md p-3 text-xs text-amber-950 flex flex-col gap-1">
              <span className="font-black flex items-center gap-1.5 text-amber-900">
                <Flame className="w-4 h-4 text-[#ee4700]" />
                EXCLUSIVE MULTI-BUY OFFERS
              </span>
              <p className="font-medium text-gray-700">
                Buy 2 get <strong className="text-black">10% OFF</strong> &bull; Buy 4 get{" "}
                <strong className="text-black">15% OFF</strong>. Discount applied automatically in cart.
              </p>
            </div>

            {/* Color Swatch Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-900">
                  Color: <span className="font-normal text-gray-700">{selectedColor.name}</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                {PRODUCT_DATA.colors.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => handleColorChange(color)}
                      className={`w-9 h-9 rounded-full relative p-0.5 border-2 transition-all cursor-pointer ${
                        isSelected ? "border-black scale-110 shadow-sm" : "border-gray-300 hover:border-gray-500"
                      }`}
                      style={{ backgroundColor: color.colorHex }}
                      title={color.name}
                      aria-label={color.name}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 m-auto w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-900">
                  Size: <span className="font-normal text-gray-700">{selectedSize}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowSizeModal(true)}
                  className="text-xs font-bold text-[#153e20] underline hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {PRODUCT_DATA.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 rounded-md text-xs font-bold uppercase transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-black text-white border-black shadow-md"
                          : "bg-white text-gray-900 border-gray-200 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-gray-900">Quantity</span>
              <div className="flex items-center w-32 border border-gray-300 rounded-md overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="flex-1 text-center font-bold text-sm text-gray-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Urgency Stock Indicator */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#ee4700] pt-1">
              <span className="w-2 h-2 rounded-full bg-[#ee4700] animate-ping" />
              <span>{PRODUCT_DATA.stockLeft} left in stock – order soon</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full h-13 rounded-md bg-white border-2 border-black text-black font-extrabold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-all shadow-xs cursor-pointer"
              >
                Add to cart
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full h-13 rounded-md bg-black border-2 border-black text-white font-extrabold uppercase tracking-wider text-sm hover:bg-gray-800 transition-all shadow-md cursor-pointer"
              >
                Buy now
              </button>

              {/* Express PayPal Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full h-12 rounded-md bg-[#ffc439] hover:bg-[#f4ba34] text-[#003087] font-black text-sm tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Pay with</span>
                <span className="font-serif italic font-black text-lg">PayPal</span>
              </button>
            </div>

            {/* Shipping Promise */}
            <div className="flex items-center gap-2.5 text-xs text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-200">
              <Truck className="w-4 h-4 text-[#153e20] shrink-0" />
              <span>
                <strong>{PRODUCT_DATA.deliveryWindow}</strong> guaranteed delivery with standard shipping.
              </span>
            </div>

            {/* Guarantee Badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center">
              <div className="flex flex-col items-center p-2 rounded bg-gray-50">
                <RotateCcw className="w-4 h-4 text-[#153e20] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 leading-tight">
                  30-Day Risk-Free Returns
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded bg-gray-50">
                <Truck className="w-4 h-4 text-[#153e20] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 leading-tight">
                  Fast Express US Delivery
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded bg-gray-50">
                <Lock className="w-4 h-4 text-[#153e20] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 leading-tight">
                  256-Bit SSL Encrypted
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            4. EDITORIAL STORY SECTION (#22252a Dark Slate Card)
        ======================================================== */}
        <section className="mt-16 sm:mt-24 bg-[#22252a] text-white rounded-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 inline-block mb-4">
              US MEN&apos;S STYLE &amp; GEAR GUIDE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Why American Men Over 40 Are Choosing This All-Weather Jacket Over Bulky Winter Coats
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Engineered for unpredictable weather, clean tailoring, and all-day comfort—without
              feeling stiff or restrictive. Whether you&apos;re commuting, running weekend errands, or
              heading out into the woods, stay dry and warm with zero unnecessary bulk.
            </p>
          </div>
        </section>

        {/* ========================================================
            5. FRUSTRATION IDENTIFICATION CARD (#faf7f0 Cream)
        ======================================================== */}
        <section className="mt-10 bg-[#faf7f0] border border-amber-900/10 rounded-2xl p-6 sm:p-10 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-6">
            Frustrated with Jackets That Don&apos;t Live Up to Everyday Life?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-[#ee4700] uppercase tracking-wide">
                1. Stiff &amp; Restrictive Fit:
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Traditional heavy coats bind your shoulders when you&apos;re driving, reaching, or doing
                weekend yard work, making every movement feel cumbersome.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-[#ee4700] uppercase tracking-wide">
                2. False Waterproof Claims:
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Jackets that look great in dry weather but soak right through after 15 minutes of
                unexpected autumn drizzle, leaving your clothes damp.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-[#ee4700] uppercase tracking-wide">
                3. Poor Heat Regulation:
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Heavy synthetic materials that trap body heat without breathing, turning a simple
                brisk walk into an uncomfortable, sweaty experience.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. FEATURE DEEP DIVES (3 Detailed Feature Blocks)
        ======================================================== */}
        <section className="mt-16 sm:mt-24 space-y-16">
          {/* Feature 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#153e20] bg-emerald-50 px-2.5 py-1 rounded">
                FEATURE 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Reliable All-Weather Outdoor Waterproofing
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Treated with a durable water-repellent (DWR) surface finish that causes rain and sleet
                to bead up and roll right off. Designed to keep you dry and comfortable during sudden
                downpours, morning commutes, or weekend hikes.
              </p>
              <ul className="text-xs space-y-2 text-gray-800 font-semibold pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Hydrophobic DWR coating sheds water instantly
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Sealed seams prevent moisture penetration in critical zones
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Breathable membrane lets perspiration vapor escape
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="https://img-va.myshopline.com/image/store/1776758950476/--94.png?w=2048&h=2048"
                alt="Reliable Waterproofing Demonstration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:flex-row-reverse">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50 lg:order-2">
              <img
                src="https://img-va.myshopline.com/image/store/1776758950476/--93.png?w=2048&h=2048"
                alt="Windproof Shell with Micro-Fleece Interior"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4 lg:order-1">
              <span className="text-xs font-black uppercase tracking-widest text-[#153e20] bg-emerald-50 px-2.5 py-1 rounded">
                FEATURE 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Windproof Shell with Soft Micro-Fleece Lining
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Features a tight-weave outer shell that completely blocks cold autumn and spring
                gusts. Inside, a lightweight micro-fleece lining provides cozy, breathable warmth
                without adding bulky weight or restricting your movement.
              </p>
              <ul className="text-xs space-y-2 text-gray-800 font-semibold pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Thermal micro-fleece core traps body warmth effectively
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Wind-breaking storm flap behind main heavy-duty zipper
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Comfort-lined collar protects neck from chafing and drafts
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#153e20] bg-emerald-50 px-2.5 py-1 rounded">
                FEATURE 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Ergonomic Motion Fit &amp; Secure Storage
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Designed with articulated sleeves for natural arm movement. Equipped with deep
                zippered hand pockets and a secure internal chest pocket to keep your phone, keys, and
                wallet safe and dry on the go.
              </p>
              <ul className="text-xs space-y-2 text-gray-800 font-semibold pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Full range of motion without the jacket pulling or riding up
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Water-resistant zipper pulls easy to operate with gloved hands
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#153e20]" />
                  Internal security pocket with headphone routing access
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
              <img
                src="https://img-va.myshopline.com/image/store/1776758950476/--97.png?w=2048&h=2048"
                alt="Ergonomic Pocket & Zipper Design"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* ========================================================
            7. LIFESTYLE ACTIVITY PILLS
        ======================================================== */}
        <section className="mt-14 py-8 border-y border-gray-200 text-center">
          <p className="text-xs font-black uppercase tracking-wider text-gray-500 mb-4">
            PERFECT FOR EVERYDAY VERSATILITY
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 shadow-xs">
              🌲 Weekend Hiking &amp; Camping
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 shadow-xs">
              🚗 Daily Commuting &amp; Driving
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 shadow-xs">
              🔧 Yard Work &amp; Garage Projects
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-800 shadow-xs">
              🎣 Fishing &amp; Outdoor Leisure
            </span>
          </div>
        </section>

        {/* ========================================================
            8. US STANDARD SIZE GUIDE TABLE
        ======================================================== */}
        <section id="size-guide" className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#153e20]">
              ACCURATE SIZING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
              Men&apos;s Standard Size Guide
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Measurements taken directly from garment laid flat. Follow our sizing tips below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1c2826] text-white uppercase text-[11px] tracking-wider">
                    <th className="py-3.5 px-4 font-extrabold">Size</th>
                    <th className="py-3.5 px-4 font-extrabold">Chest</th>
                    <th className="py-3.5 px-4 font-extrabold">Length</th>
                    <th className="py-3.5 px-4 font-extrabold">Shoulder</th>
                    <th className="py-3.5 px-4 font-extrabold">Sleeve</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {PRODUCT_DATA.sizeTable.map((row, idx) => (
                    <tr
                      key={row.size}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#faf7f0]/60"}
                    >
                      <td className="py-3 px-4 font-bold text-gray-900">{row.size}</td>
                      <td className="py-3 px-4 text-gray-700">{row.chest}</td>
                      <td className="py-3 px-4 text-gray-700">{row.length}</td>
                      <td className="py-3 px-4 text-gray-700">{row.shoulder}</td>
                      <td className="py-3 px-4 text-gray-700">{row.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#faf7f0] border-t border-amber-200/60 p-4 text-xs text-amber-950 font-medium flex items-center gap-2">
              <span className="text-base">💡</span>
              <span>
                <strong>Fit Note:</strong> Standard Relaxed Fit. If you prefer room for heavy
                layering or a thick sweater underneath, we recommend ordering 1 size up.
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            9. MATERIAL & FABRIC CARE BLOCK
        ======================================================== */}
        <section className="mt-10 max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
          <h4 className="text-base font-extrabold text-gray-900 mb-2">Material &amp; Fabric Care</h4>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Shell:</strong> 100% Durable High-Density Polyester with Weather-Resistant DWR
            Water-Repellent Coating. <strong>Lining:</strong> Lightweight Breathable Micro-Fleece.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Care Instructions:</strong> Machine wash cold on gentle cycle with mild
            detergent. Line dry or tumble dry low. Do NOT bleach or dry clean to preserve the
            fabric&apos;s water-repellent coating.
          </p>
        </section>

        {/* ========================================================
            10. VERIFIED CUSTOMER TESTIMONIALS
        ======================================================== */}
        <section className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#153e20]">
              REAL FIELD REVIEWS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
              What Customers Are Saying
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#153e20] bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed italic mb-4">
                  &ldquo;Wear this jacket for my morning walks and weekend errands in Colorado. It
                  blocks the wind completely, handles light rain with ease, and is extremely
                  comfortable while driving.&rdquo;
                </p>
              </div>
              <p className="text-xs font-bold text-gray-900">
                Mark T., Grand Junction, CO (Age 54)
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#153e20] bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed italic mb-4">
                  &ldquo;Finally a jacket that looks sharp, fits my shoulders properly without
                  feeling tight, and keeps me warm on chilly mornings without feeling like a heavy
                  winter coat.&rdquo;
                </p>
              </div>
              <p className="text-xs font-bold text-gray-900">
                David R., Tyler, TX (Age 48)
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            11. COMMUNITY UGC PHOTO GALLERY
        ======================================================== */}
        <section className="mt-16 sm:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-gray-950">Join Our Community</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Tagged #TheArtisanWalk on everyday outdoor adventures
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRODUCT_DATA.communityImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 bg-gray-100 group relative"
              >
                <img
                  src={imgUrl}
                  alt={`Community gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Heart className="w-6 h-6 fill-white" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            12. HIGH-CONVERTING CLOSING CTA BANNER
        ======================================================== */}
        <section className="mt-16 sm:mt-24 bg-[#153e20] text-white rounded-2xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Upgrade Your Everyday Outerwear Today
            </h3>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Experience reliable weather protection, clean styling, and uncompromised comfort on
              your next outing.
            </p>

            <div className="pt-4">
              <a
                href="#buy-now"
                className="inline-block px-8 py-4 bg-white text-[#153e20] font-black text-sm uppercase tracking-wider rounded-md hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
              >
                Claim 30-Day Risk-Free Trial
              </a>
            </div>

            <p className="text-xs text-emerald-200/80 pt-3">
              🛡️ 30-Day Money-Back Guarantee &bull; 🚚 Fast US Shipping &bull; 💳 256-Bit SSL Safe Checkout
            </p>
          </div>
        </section>
      </main>

      {/* ========================================================
          13. FOOTER SECTION (Deep Forest Green #153e20)
      ======================================================== */}
      <footer className="mt-20 bg-[#153e20] text-white border-t border-emerald-900/60 pt-16 pb-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Brand */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4 text-emerald-300">
                OUR BRAND
              </h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4 text-emerald-300">
                LEGAL
              </h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Service */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4 text-emerald-300">
                SERVICE
              </h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider mb-4 text-emerald-300">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Men&apos;s Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jackets &amp; Coats</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Footwear Collection</a></li>
              </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider mb-2 text-white">
                Stay In Touch
              </h4>
              <p className="text-xs text-white/80 mb-3">
                Subscribe today and get 10% off your first purchase
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2.5 bg-black/30 border border-white/20 rounded text-xs text-white placeholder-white/50 focus:outline-hidden focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-white text-black font-extrabold uppercase tracking-wider text-xs rounded hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
            <p>&copy; {new Date().getFullYear()} TheArtisanWalk. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================
          14. PERSISTENT MOBILE STICKY BOTTOM ACTION BAR
      ======================================================== */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-3 shadow-2xl z-40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={currentImages[0]}
            alt="Thumbnail"
            className="w-10 h-10 rounded object-cover border border-gray-200 shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-950 truncate">
              ${PRODUCT_DATA.salePrice.toFixed(2)}
            </p>
            <p className="text-[10px] text-gray-500 truncate">
              {selectedSize} &bull; {selectedColor.name.split(" ")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleAddToCart}
            className="h-10 px-3 bg-white border border-black text-black text-xs font-bold uppercase rounded"
          >
            Add
          </button>
          <a
            href="#buy-now"
            className="h-10 px-4 bg-black text-white text-xs font-bold uppercase rounded flex items-center justify-center"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* ========================================================
          15. SIZE GUIDE MODAL (Optional popup)
      ======================================================== */}
      {showSizeModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-extrabold text-lg text-gray-950">Men&apos;s Sizing Guide</h3>
              <button
                type="button"
                onClick={() => setShowSizeModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-600">
              {PRODUCT_DATA.sizeTable[0].chest} - {PRODUCT_DATA.sizeTable[PRODUCT_DATA.sizeTable.length - 1].chest} chest coverage.
            </p>

            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="p-2">Size</th>
                  <th className="p-2">Chest</th>
                  <th className="p-2">Length</th>
                  <th className="p-2">Sleeve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {PRODUCT_DATA.sizeTable.map((r) => (
                  <tr key={r.size} className={r.size === selectedSize ? "bg-emerald-50 font-bold" : ""}>
                    <td className="p-2">{r.size}</td>
                    <td className="p-2">{r.chest}</td>
                    <td className="p-2">{r.length}</td>
                    <td className="p-2">{r.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              type="button"
              onClick={() => setShowSizeModal(false)}
              className="w-full py-2.5 bg-black text-white text-xs font-bold uppercase rounded"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

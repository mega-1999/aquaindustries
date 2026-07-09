'use client';

import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const data = [
    { month: 'Jan', market: 20, product: 20 },
    { month: 'Feb', market: 75, product: 35 },
    { month: 'Mar', market: 40, product: 30 },
    { month: 'Apr', market: 38, product: 28 },
    { month: 'May', market: 55, product: 58 },
    { month: 'Jun', market: 52, product: 35 },
    { month: 'Jul', market: 30, product: 98 },
    { month: 'Aug', market: 62, product: 42 },
    { month: 'Sep', market: 30, product: 70 },
    { month: 'Oct', market: 60, product: 45 },
    { month: 'Nov', market: 98, product: 62 },
    { month: 'Dec', market: 50, product: 25 },
];

const EngagementAnalytics = () => {
    return (
        <section className="py-20 bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-10 py-3">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-normal text-gray-900">
                        Engagement <span className="text-[#B31942]">Analytics</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="w-full bg-white p-4 md:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorProduct" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#B31942" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#B31942" stopOpacity={0.1} />
                                    </linearGradient>
                                    <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#808080" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#808080" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />

                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                                />

                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    itemStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="market"
                                    stroke="#6b7280"
                                    fill="#808080"
                                    fillOpacity={0.6}
                                    strokeWidth={0}
                                    activeDot={{ r: 6 }}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="product"
                                    stroke="#B31942"
                                    fill="#B31942"
                                    fillOpacity={0.5}
                                    strokeWidth={0}
                                    activeDot={{ r: 6 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                            See how your products perform — and how you stack up against others.
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            With Mega Foundries's Engagement Analytics, you get deep insights into how buyers
                            are interacting with your listings. Track key engagement metrics like product views,
                            inquiries, clicks, and response rates — all broken down by category.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            What sets us apart? We don't just show your numbers — we show how you
                            compare. Understand where you lead and where there's room to grow by
                            benchmarking your performance against other sellers in the same category.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EngagementAnalytics;

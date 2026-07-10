"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, ScanEye, Workflow, Zap, Binary } from 'lucide-react';
import Image from 'next/image';

const techFeatures = [
  {
    title: "Autonomous Casting",
    desc: "AI-driven robotic arms for precision pouring and mold handling.",
    icon: <Bot className="w-8 h-8" />,
    delay: 0.1
  },
  {
    title: "Predictive Analytics",
    desc: "ML models predicting furnace performance and material stress.",
    icon: <Binary className="w-8 h-8" />,
    delay: 0.2
  },
  {
    title: "Vision Inspection",
    desc: "Real-time 3D scanning and defect detection using computer vision.",
    icon: <ScanEye className="w-8 h-8" />,
    delay: 0.3
  }
];

export default function AiRobotics() {
  return (
    <section className="py-24 bg-[#0A3161] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/assets/image16.jpg')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl border border-white/10 overflow-hidden bg-[#0A3161] backdrop-blur-xl p-2 shadow-2xl">
              <Image 
                src="/assets/image8.jpg" 
                alt="AI Robotics"
                className="rounded-2xl opacity-80"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* Animated Badge */}
              <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-[#B31942] px-6 py-3 rounded-full shadow-xl">
                <Zap className="animate-pulse" size={20} />
                <span className="font-bold tracking-tighter uppercase text-sm">Industry 4.0 Active</span>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#B31942] rounded-full blur-[120px] opacity-20" />
          </motion.div>

          {/* Right Side: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black tracking-tighter mb-6 uppercase"
            >
              The Future is <span className="text-[#B31942]">Automated</span>
            </motion.h2>
            <p className="text-[#0A3161]/60 text-lg mb-12 leading-relaxed">
              METALSVERSE Foundries is leading the transition to Industry 4.0. We integrate neural networks and robotic precision to eliminate human error and maximize casting efficiency.
            </p>

            <div className="space-y-6">
              {techFeatures.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: tech.delay }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B31942]/50 transition-colors group"
                >
                  <div className="text-[#B31942] group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 tracking-tight">{tech.title}</h4>
                    <p className="text-[#0A3161]/70 text-sm leading-relaxed">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

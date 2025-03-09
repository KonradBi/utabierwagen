"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sectors = [
  {
    name: "Hotels",
    description: "Partner & Kontakte in der Hotellerie",
    subsectors: ["Business Hotels", "Ferienhotels", "Stadthotels", "Boutique Hotels"],
    color: "from-blue-200/50 to-blue-300/50"
  },
  {
    name: "Einzelhandel",
    description: "Partner & Kontakte im Einzelhandel",
    subsectors: ["Nahversorgung", "Fachmarkt", "Shopping Center"],
    color: "from-emerald-100/40 to-emerald-200/40"
  },
  {
    name: "Projektentwickler",
    description: "Partner & Kontakte in der Projektentwicklung",
    subsectors: ["Wohnungsbau", "Gewerbebau", "Quartiersentwicklung", "Mixed-Use"],
    color: "from-amber-100/40 to-amber-200/40"
  },
  {
    name: "Investoren",
    description: "Partner & Investoren im Investmentbereich",
    subsectors: ["Institutionelle Investoren", "Family Offices", "Private Investoren"],
    color: "from-purple-100/40 to-purple-200/40"
  },
  {
    name: "Logistiker",
    description: "Partner & Kontakte in der Logistik",
    subsectors: ["Light Industrial", "Distributionscenter", "Multiuser"],
    color: "from-cyan-100/40 to-cyan-200/40"
  }
];

export function NetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [hoveredSubsector, setHoveredSubsector] = useState<string | null>(null);

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate dimensions based on container dimensions
  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      if (containerRef.current) {
        // Wir brauchen die Dimensionen nicht mehr zu speichern, da wir sie nicht verwenden
        containerRef.current.getBoundingClientRect();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // If not client-side yet, render a placeholder
  if (!isClient) {
    return (
      <div className="w-full min-h-[800px] relative overflow-hidden bg-slate-50 flex items-center justify-center">
        <div className="text-primary/50">Netzwerk wird geladen...</div>
      </div>
    );
  }

  // Helper function to calculate subsector size based on name length
  const getSubsectorSize = (name: string) => {
    const baseSize = 100;
    const nameLength = name.length;
    return baseSize + (nameLength * 2); // Längere Namen bekommen mehr Platz
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-[800px] relative overflow-visible bg-gradient-to-br from-slate-50/80 to-slate-100/80 py-16 px-8 md:px-12"
    >
      {/* Subtile Hintergrundeffekte */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-16 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
          <div className="absolute top-2/3 right-1/4 w-[35vw] h-[35vw] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-medium"></div>
          <div className="absolute bottom-1/3 left-2/3 w-[30vw] h-[30vw] bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-fast"></div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        {/* Main Sectors Grid - Changed to 2 columns, 3 rows layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
          {sectors.map((sector, i) => {
            // Special styling for the last item when it's the 5th item (index 4)
            const isLastOdd = i === sectors.length - 1 && sectors.length % 2 === 1;
            
            return (
              <motion.div
                key={sector.name}
                className={`backdrop-blur-sm border border-white/20 rounded-xl shadow-lg flex flex-col overflow-hidden h-full ${isLastOdd ? 'md:col-span-2' : ''}`}
                style={{ 
                  background: `linear-gradient(135deg, ${sector.color.split(' ')[0].replace('from-', '')} ${sector.color.split(' ')[1].replace('to-', '')})`,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)"
                }}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (i * 0.1),
                  ease: "easeOut"
                }}
              >
                {/* Sector Header */}
                <div className="p-5 border-b border-white/20">
                  <h3 className="font-medium text-xl text-primary/90">
                    {sector.name}
                  </h3>
                </div>
                
                {/* Subsectors Flex Container */}
                <div className="p-5 flex flex-wrap gap-4 flex-1">
                  {sector.subsectors.map((subsector, j) => (
                    <motion.div
                      key={`${sector.name}-${subsector}`}
                      className={`rounded-lg px-4 py-3 text-sm font-medium flex items-center justify-center text-center transition-all duration-300 ${
                        hoveredSubsector === subsector 
                          ? 'bg-white/90 backdrop-blur-md text-primary shadow-md' 
                          : 'bg-white/20 backdrop-blur-sm text-primary/80 hover:bg-white/30'
                      }`}
                      style={{ 
                        flexBasis: `${Math.max(120, getSubsectorSize(subsector))}px`,
                        flexGrow: subsector.length > 12 ? 2 : 1,
                        boxShadow: hoveredSubsector === subsector ? "0 10px 25px rgba(0, 0, 0, 0.04)" : "0 4px 10px rgba(0, 0, 0, 0.01)",
                        transform: hoveredSubsector === subsector ? "translateY(-2px)" : "none"
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + (i * 0.1) + (j * 0.05),
                        ease: "easeOut"
                      }}
                      onMouseEnter={() => setHoveredSubsector(subsector)}
                      onMouseLeave={() => setHoveredSubsector(null)}
                    >
                      {subsector}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NetworkNode {
  id: string;
  type: "center" | "sector" | "subsector";
  name: string;
  sector?: string;
  description?: string;
  x?: number;
  y?: number;
  angle?: number;
  distance?: number;
}

const sectors = [
  {
    name: "Hotels",
    description: "Expertise in der Hotellerie",
    subsectors: ["Business Hotels", "Ferienhotels", "Stadthotels"]
  },
  {
    name: "Einzelhandel",
    description: "Kompetenz im Einzelhandel",
    subsectors: ["Nahversorgung", "Fachmarkt", "Shopping Center"]
  },
  {
    name: "Projektentwickler",
    description: "Erfahrung in der Projektentwicklung",
    subsectors: ["Wohnungsbau", "Gewerbebau", "Quartiersentwicklung"]
  },
  {
    name: "Investment",
    description: "Expertise im Investmentbereich",
    subsectors: ["Pensionskassen", "Offene Fonds", "Geschlossene Fonds"]
  },
  {
    name: "Logistik",
    description: "Kompetenz in der Logistik",
    subsectors: ["Light Industrial", "E-Commerce", "Last Mile"]
  }
];

export function NetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [expandedSectors, setExpandedSectors] = useState<number[]>([]);

  // Calculate positions based on container dimensions
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize all sectors as expanded and set default tooltip
  useEffect(() => {
    if (animationComplete) {
      // Show all sectors after the initial animation
      setExpandedSectors([...Array(sectors.length).keys()]);
      
      // Set default tooltip to central node
      setHoveredNode({
        id: 'center',
        type: 'center',
        name: 'Bierwagen Immobilien',
        description: 'Expertise in der Immobilienberatung und -vermittlung'
      });
    }
  }, [animationComplete]);

  // Handle node hover
  const handleNodeHover = (node: NetworkNode | null) => {
    if (node) {
      setHoveredNode(node);
      if (node?.type === 'sector') {
        setActiveNode(node?.id || null);
      }
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative overflow-hidden bg-black/5"
    >
      {/* More subtle background with grid and depth effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/3 via-transparent to-primary/3" />
      
      {/* More subtle ambient light effects with animation */}
      <motion.div 
        className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/5 via-primary/3 to-transparent blur-3xl" 
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.03, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/5 via-primary/3 to-transparent blur-3xl"
        animate={{
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/3 h-[300px] w-[300px] translate-y-1/4 rounded-full bg-gradient-to-tl from-primary/4 via-primary/2 to-transparent blur-3xl"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Main visualization container - centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          {/* Central node with diamond shape and elegant animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative">
              {/* Animated pulse rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/10"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ 
                  scale: [1.15, 1.3, 1.15],
                  opacity: [0.5, 0.1, 0.5],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={{ 
                  scale: [1.3, 1.45, 1.3],
                  opacity: [0.3, 0.05, 0.3],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Diamond-shaped central node with glass effect */}
              <div className="relative w-36 h-36 rotate-45 bg-gradient-to-br from-primary/30 to-primary/5 backdrop-blur-md shadow-lg border border-white/20 flex items-center justify-center z-10 transform">
                <div className="absolute inset-0 bg-white/5" />
                <div className="text-center text-white font-medium -rotate-45 transform">
                  <div className="text-xl font-bold">Bierwagen</div>
                  <div className="text-xs opacity-80 mt-1">Immobilien</div>
                </div>
                
                {/* Enhanced glow effect */}
                <div className="absolute -inset-4 bg-primary/10 blur-md -z-10" />
                
                {/* Corner accents */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-primary/40"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-primary/40"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Sector nodes with connections */}
          <div className="relative w-[800px] h-[800px]">
            {sectors.map((sector, i) => {
              // Calculate positions in a perfect circle around the center
              const angle = (i / sectors.length) * Math.PI * 2;
              const distance = 250; // Distance from center
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              
              return (
                <React.Fragment key={`sector-${i}`}>
                  {/* Enhanced connection line with animated particles */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 h-[1px] bg-transparent z-0"
                    style={{ 
                      width: distance,
                      transformOrigin: 'left center',
                      transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                  >
                    {/* Gradient line effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 via-primary/30 to-primary/10"></div>
                    
                    {/* Dashed line effect */}
                    <div className="absolute inset-0 w-full h-full border-t border-dashed border-primary/30"></div>
                    
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 w-full h-[3px] bg-primary/20 blur-sm"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        height: ['2px', '4px', '2px']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                    />
                    
                    {/* Multiple animated particles along the line */}
                    {[...Array(5)].map((_, particleIndex) => (
                      <motion.div 
                        key={`particle-${i}-${particleIndex}`}
                        className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-primary/70 transform -translate-y-1/2"
                        animate={{ 
                          left: ['0%', '100%'],
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{ 
                          duration: 3 + (i % 3) + particleIndex, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2 + particleIndex,
                          times: [0, 0.5, 1]
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Hexagonal sector node */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                    style={{ 
                      x,
                      y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 15,
                      delay: 0.8 + (i * 0.1)
                    }}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => handleNodeHover({ 
                      id: `sector-${i}`, 
                      type: 'sector', 
                      name: sector.name,
                      description: sector.description
                    })}
                    onMouseLeave={() => handleNodeHover(null)}
                  >
                    {/* Hexagonal sector node design */}
                    <div className="relative">
                      {/* Hexagon shape using clip-path */}
                      <div className="w-24 h-24 relative">
                        {/* Outer decorative hexagon */}
                        <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm shadow-md border border-white/10 clip-hexagon"></div>
                        
                        {/* Main hexagon body */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm shadow-md border border-white/20 clip-hexagon flex items-center justify-center">
                          {/* Fix text overflow with smaller font and padding */}
                          <div className="text-center text-primary-foreground font-medium text-xs px-2 w-full">
                            {sector.name}
                          </div>
                        </div>
                        
                        {/* Highlight effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 h-1/3 rounded-t-lg"></div>
                      </div>
                      
                      {/* Active state indicator */}
                      {activeNode === `sector-${i}` && (
                        <>
                          <motion.div 
                            className="absolute -inset-3 border-2 border-primary/40 clip-hexagon"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                          />
                          {/* Enhanced glow effect for active sector */}
                          <motion.div 
                            className="absolute -inset-6 bg-primary/10 clip-hexagon blur-md -z-10"
                            animate={{ 
                              opacity: [0.3, 0.6, 0.3],
                              scale: [0.95, 1.05, 0.95]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </>
                      )}
                    </div>
                    
                    {/* Subsector nodes - always visible */}
                    {expandedSectors.includes(i) && sector.subsectors.map((subsector, j) => {
                      const subAngle = angle + ((j - (sector.subsectors.length - 1) / 2) * 0.3);
                      const subDistance = 120;
                      const subX = Math.cos(subAngle) * subDistance;
                      const subY = Math.sin(subAngle) * subDistance;
                      
                      return (
                        <motion.div
                          key={`subsector-${i}-${j}`}
                          className="absolute z-10"
                          style={{ 
                            x: subX,
                            y: subY,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: j * 0.1
                          }}
                          onMouseEnter={() => handleNodeHover({ 
                            id: `subsector-${i}-${j}`, 
                            type: 'subsector', 
                            name: subsector,
                            sector: sector.name,
                            description: `${subsector} im Bereich ${sector.name}`
                          })}
                          onMouseLeave={() => handleNodeHover(null)}
                        >
                          {/* Subsector connection line */}
                          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <svg width={Math.abs(subX)} height={Math.abs(subY)} style={{ 
                              position: 'absolute',
                              top: subY < 0 ? '100%' : '0',
                              left: subX < 0 ? '100%' : '0',
                              transform: `rotate(${subAngle + (subX < 0 ? Math.PI : 0)}rad)`,
                              transformOrigin: `${subX < 0 ? '100%' : '0'} ${subY < 0 ? '100%' : '0'}`
                            }}>
                              <defs>
                                <linearGradient id={`gradient-${i}-${j}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.5)" />
                                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
                                </linearGradient>
                              </defs>
                              <line 
                                x1="0" 
                                y1="0" 
                                x2={Math.sqrt(subX * subX + subY * subY)} 
                                y2="0" 
                                stroke={`url(#gradient-${i}-${j})`}
                                strokeWidth="1" 
                                strokeDasharray="3,3" 
                              />
                              {/* Animated particle on subsector connection */}
                              <motion.circle
                                cx="0"
                                cy="0"
                                r="2"
                                fill="hsl(var(--primary) / 0.7)"
                                animate={{
                                  cx: [0, Math.sqrt(subX * subX + subY * subY)],
                                  opacity: [0.4, 0.8, 0.4],
                                  r: [1.5, 2.5, 1.5]
                                }}
                                transition={{
                                  duration: 2 + j * 0.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  times: [0, 0.5, 1]
                                }}
                              />
                            </svg>
                          </div>
                          
                          {/* Pill-shaped subsector node with enhanced design */}
                          <div className="relative w-24 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm shadow-md border border-white/10 flex items-center justify-center">
                            {/* Inner highlight */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50 h-1/2"></div>
                            
                            {/* Subtle pulse animation */}
                            <motion.div 
                              className="absolute inset-0 rounded-full border border-primary/20"
                              animate={{ 
                                scale: [1, 1.08, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                              }}
                            />
                            
                            {/* Text content */}
                            <div className="text-center text-primary-foreground text-xs font-medium px-2">
                              {subsector}
                            </div>
                            
                            {/* Side accents */}
                            <div className="absolute -left-0.5 top-1/2 w-1 h-4 bg-primary/30 rounded-full transform -translate-y-1/2"></div>
                            <div className="absolute -right-0.5 top-1/2 w-1 h-4 bg-primary/30 rounded-full transform -translate-y-1/2"></div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced ambient floating particles - centered */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => {
          // Calculate a random position within a circle around the center
          const angle = Math.random() * Math.PI * 2;
          // Limit the distance to be between 100px and 300px from center
          const distance = 100 + Math.random() * 200;
          const x = dimensions.width / 2 + Math.cos(angle) * distance;
          const y = dimensions.height / 2 + Math.sin(angle) * distance;
          
          return (
            <motion.div
              key={`ambient-particle-${i}`}
              className="absolute bg-primary/5 rounded-full"
              style={{ 
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: x,
                top: y,
              }}
              initial={{ 
                opacity: Math.random() * 0.3 + 0.1,
                x: 0,
                y: 0
              }}
              animate={{ 
                x: Math.cos(angle + Math.PI * 0.5) * (Math.random() * 20 + 10),
                y: Math.sin(angle + Math.PI * 0.5) * (Math.random() * 20 + 10),
                opacity: [
                  Math.random() * 0.2 + 0.1,
                  Math.random() * 0.3 + 0.2,
                  Math.random() * 0.2 + 0.1
                ]
              }}
              transition={{ 
                duration: Math.random() * 15 + 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>
      
      {/* Enhanced light beams - more subtle and centered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => {
          // Evenly distribute the beams around the center
          const angle = (i / 3) * Math.PI * 2;
          return (
            <motion.div
              key={`light-beam-${i}`}
              className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"
              style={{ 
                width: Math.max(dimensions.width, dimensions.height) * 1.5,
                transform: `translate(-50%, -50%) rotate(${angle}rad)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.2, 0],
                rotate: `${angle + (Math.random() * 0.1 - 0.05)}rad`
              }}
              transition={{ 
                duration: 15 + i * 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 5
              }}
            />
          );
        })}
      </div>
      
      {/* Always visible tooltip */}
      {hoveredNode?.description && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="absolute z-50 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl p-4 max-w-xs border border-primary/20"
          style={{ 
            left: hoveredNode.type === 'center'
              ? dimensions.width / 2 + 40
              : hoveredNode.type === 'sector' 
                ? dimensions.width / 2 + (Math.cos(sectors.findIndex(s => s.name === hoveredNode.name) / sectors.length * Math.PI * 2) * 250) + 40
                : dimensions.width / 2,
            top: hoveredNode.type === 'center'
              ? dimensions.height / 2 - 40
              : hoveredNode.type === 'sector'
                ? dimensions.height / 2 + (Math.sin(sectors.findIndex(s => s.name === hoveredNode.name) / sectors.length * Math.PI * 2) * 250) + 40
                : dimensions.height / 2 + 40,
            transformOrigin: "top left"
          }}
        >
          {/* Tooltip highlight effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50 h-1/3 rounded-t-lg"></div>
          
          <div className="font-medium text-primary text-lg mb-1">{hoveredNode.name}</div>
          {hoveredNode.sector && (
            <div className="text-xs text-primary/70 mb-2">{hoveredNode.sector}</div>
          )}
          <div className="text-sm text-muted-foreground">{hoveredNode.description}</div>
        </motion.div>
      )}
    </div>
  );
}
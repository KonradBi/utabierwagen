"use client";

import { useEffect, useRef, useState } from "react";

interface HexNode {
  id: string;
  type: "center" | "sector" | "subsector";
  name: string;
  sector?: string;
  description?: string;
  x?: number;
  y?: number;
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

const colors = {
  primary: "hsl(221, 83%, 53%)",
  primaryLight: "hsla(221, 83%, 53%, 0.2)",
  primaryMedium: "hsla(221, 83%, 53%, 0.4)",
  primaryDark: "hsla(221, 83%, 53%, 0.6)",
  background: "hsl(0, 0%, 100%)",
  text: "hsl(222, 47%, 11%)",
};

function drawHexagon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  fillStyle: string | CanvasGradient,
  strokeStyle: string,
  lineWidth: number = 2
) {
  const vertices = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    vertices.push({
      x: x + size * Math.cos(angle),
      y: y + size * Math.sin(angle),
    });
  }

  ctx.beginPath();
  ctx.moveTo(vertices[0].x, vertices[0].y);
  for (let i = 1; i < vertices.length; i++) {
    ctx.lineTo(vertices[i].x, vertices[i].y);
  }
  ctx.closePath();

  ctx.fillStyle = fillStyle;
  ctx.fill();
  
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

export function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [nodes, setNodes] = useState<HexNode[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();
        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [canvasRef, containerRef]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const hexSize = Math.min(dimensions.width, dimensions.height) * 0.1;
      
      const newNodes: HexNode[] = [
        {
          id: 'center',
          type: 'center',
          name: 'Bierwagen Immobilien',
          description: 'Ihr Partner für Gewerbeimmobilien',
          x: centerX,
          y: centerY
        }
      ];

      sectors.forEach((sector, i) => {
        const angle = (i / sectors.length) * Math.PI * 2;
        const distance = hexSize * 2.5;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        newNodes.push({
          id: `sector-${i}`,
          type: 'sector',
          name: sector.name,
          description: sector.description,
          x,
          y
        });

        sector.subsectors.forEach((subsector, j) => {
          const subAngle = angle + (j - 1) * 0.3;
          const subDistance = distance + hexSize * 1.8;
          newNodes.push({
            id: `subsector-${i}-${j}`,
            type: 'subsector',
            name: subsector,
            sector: sector.name,
            x: centerX + Math.cos(subAngle) * subDistance,
            y: centerY + Math.sin(subAngle) * subDistance
          });
        });
      });

      setNodes(newNodes);
    }
  }, [dimensions]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      }
    };

    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        if (node.type === 'subsector') {
          const sector = nodes.find(n => n.type === 'sector' && n.name === node.sector);
          if (sector && sector.x && sector.y && node.x && node.y) {
            const gradient = ctx.createLinearGradient(sector.x, sector.y, node.x, node.y);
            gradient.addColorStop(0, colors.primaryLight);
            gradient.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.moveTo(sector.x, sector.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
        }

        if (node.type === 'sector' && node.x && node.y) {
          const gradient = ctx.createLinearGradient(nodes[0].x!, nodes[0].y!, node.x, node.y);
          gradient.addColorStop(0, colors.primaryMedium);
          gradient.addColorStop(1, colors.primaryLight);
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = activeNode === node.id ? 3 : 2;
          ctx.moveTo(nodes[0].x!, nodes[0].y!);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      });

      nodes.forEach(node => {
        if (!node.x || !node.y) return;

        const isActive = activeNode === node.id;
        const baseSize = node.type === 'center' ? 50 : node.type === 'sector' ? 40 : 30;
        const size = isActive ? baseSize * 1.1 : baseSize;

        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, size
        );
        gradient.addColorStop(0, colors.primaryLight);
        gradient.addColorStop(1, 'transparent');

        drawHexagon(
          ctx,
          node.x,
          node.y,
          size,
          gradient,
          isActive ? colors.primary : colors.primaryMedium,
          isActive ? 3 : 2
        );

        ctx.font = `${node.type === 'center' ? 'bold 16px' : '14px'} sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = colors.text;
        
        const textWidth = ctx.measureText(node.name).width;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(
          node.x - textWidth/2 - 5,
          node.y - 10,
          textWidth + 10,
          20
        );
        
        ctx.fillStyle = colors.text;
        ctx.fillText(node.name, node.x, node.y);
      });

      if (mousePos) {
        const hoveredNode = nodes.find(node => {
          if (!node.x || !node.y) return false;
          const dx = node.x - mousePos.x;
          const dy = node.y - mousePos.y;
          const baseSize = node.type === 'center' ? 50 : node.type === 'sector' ? 40 : 30;
          return Math.sqrt(dx * dx + dy * dy) < baseSize;
        });

        if (hoveredNode?.description) {
          ctx.font = '14px sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.fillRect(
            mousePos.x + 10,
            mousePos.y + 10,
            200,
            30
          );
          ctx.fillStyle = colors.text;
          ctx.fillText(hoveredNode.description, mousePos.x + 20, mousePos.y + 30);
        }

        setActiveNode(hoveredNode?.id || null);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes, mousePos, activeNode]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
import { NavLink, Link, useLocation } from 'react-router';
import { LayoutDashboard, ShoppingBag, LayoutTemplate, X, ChevronDown, Palette, Compass, Target } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import neloStoreIcon from '../../assets/nelostore.svg';
import nelogicaIcon from '../../assets/nelogica.svg';
import blackArrowIcon from '../../assets/black-arrow.svg';

const navItems = [
  {
    title: 'NeloStore',
    icon: <img src={neloStoreIcon} alt="NeloStore" className="shrink-0 w-5 h-5 rounded-[4px] object-contain" />,
    path: '/nelostore',
    children: [
      { name: 'Visão Geral', path: '/nelostore', icon: <Compass size={16} />, description: 'Resumo da marca' },
      { name: 'Banners', path: '/nelostore/banners', icon: <ShoppingBag size={16} />, description: 'Guia de marketing' },
      { name: 'Cores', path: '/nelostore/cores', icon: <Palette size={16} />, description: 'Paletas e contrastes' },
      { name: 'Componentes', path: '/nelostore/componentes', icon: <LayoutTemplate size={16} />, description: 'Biblioteca UI' },
      { name: 'Exemplo Prático (LP)', path: '/nelostore/lp-exemplo', icon: <Target size={16} />, description: 'Simulador de Landing Page' },
    ]
  },
  {
    title: 'Nelogica',
    icon: <img src={nelogicaIcon} alt="Nelogica" className="shrink-0 w-5 h-5 object-contain" />,
    path: '/nelogica',
    children: [
      { name: 'Visão Geral', path: '/nelogica', icon: <Compass size={16} />, description: 'Diretrizes institucionais' },
      { name: 'Hero Banners', path: '/nelogica/banners', icon: <Target size={16} />, description: 'Capas do site' },
    ]
  },
  {
    title: 'BlackArrow',
    icon: <img src={blackArrowIcon} alt="BlackArrow" className="shrink-0 w-5 h-5 object-contain opacity-40 grayscale" />,
    path: '/blackarrow',
    disabled: true,
    children: []
  }
];

function NavDropdown({ item }: { item: typeof navItems[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (item.disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const toggleOpen = (e: React.MouseEvent) => {
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    // Only toggle if it's a mobile-like interaction or if we want to force open
    // For desktop, we let hover handle it, but click can toggle too
    setIsOpen(!isOpen);
  };

  const isActive = (item.path && location.pathname.startsWith(item.path)) || 
                   (item.children && item.children.some(c => location.pathname.startsWith(c.path)));

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        role="button"
        onClick={toggleOpen}
        className={twMerge(clsx(
          "flex items-center gap-2.5 px-5 py-2 rounded-xl text-sm font-semibold transition-all h-10 group",
          item.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
          isActive && !item.disabled
            ? "text-[#5AB0FA] bg-[#5AB0FA]/10" 
            : "text-white/40 hover:text-white hover:bg-white/5"
        ))}
      >
        {item.icon}
        <span className="whitespace-nowrap">{item.title}</span>
        {item.disabled && (
          <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/40 font-semibold uppercase tracking-wider ml-1">
            Breve
          </span>
        )}
        {item.children && item.children.length > 0 && (
          <ChevronDown 
            size={14} 
            className={clsx("transition-transform duration-300 opacity-40 group-hover:opacity-100", isOpen && "rotate-180")} 
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && item.children && item.children.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%-8px)] left-0 min-w-[320px] pt-4 z-[110]"
          >
            <div 
              className="rounded-[4px] relative overflow-hidden"
              style={{
                background: "#1a1a1a",
                boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="grid grid-cols-1 gap-1">
                {item.children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.disabled ? "#" : child.path}
                    onClick={(e) => {
                      if (child.disabled) {
                        e.preventDefault();
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className={({ isActive }) => twMerge(clsx(
                      "flex items-center gap-4 p-3 transition-colors group/item relative",
                      child.disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-[rgba(243,245,249,0.05)]",
                      isActive && !child.disabled ? "bg-[rgba(243,245,249,0.05)]" : ""
                    ))}
                  >
                    <div className={twMerge(clsx(
                      "p-2.5 rounded-[4px] transition-colors",
                      location.pathname === child.path && !child.disabled ? "bg-white/10 text-[#5AB0FA]" : "bg-transparent text-white/40 group-hover/item:text-white"
                    ))}>
                      {child.icon}
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={twMerge(clsx(
                          "truncate flex-1 font-[400] text-[14px] leading-[19px]",
                          location.pathname === child.path && !child.disabled ? "text-[#5AB0FA]" : "text-[rgba(255,255,255,0.7)] group-hover/item:text-white"
                        ))} style={{ fontFamily: "'Tahoma', sans-serif" }}>
                          {child.name}
                        </span>
                        {child.disabled && (
                          <span className="text-[8px] bg-white/10 px-1.5 py-0.5 rounded text-white/50 font-semibold uppercase tracking-widest whitespace-nowrap">
                            Em breve
                          </span>
                        )}
                      </div>
                      {child.description && (
                        <span className="text-[12px] leading-[16px] text-[rgba(255,255,255,0.4)] group-hover/item:text-[rgba(255,255,255,0.7)]" style={{ fontFamily: "'Tahoma', sans-serif" }}>
                          {child.description}
                        </span>
                      )}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Navbar Superior (Desktop) */}
      <header className="w-full bg-[#1a1a1a] border-b border-white/5 flex items-center justify-between px-8 z-[100] h-[64px] shrink-0 sticky top-0">
        <div className="flex items-center gap-2 h-full">
          <Link to="/" className="flex items-center gap-2 pr-8">
            <h1 className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#5AB0FA] to-white tracking-tight">
              NeloGuia
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 h-full">
            {navItems.map((group) => (
              <NavDropdown key={group.title} item={group} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center p-1.5 rounded-xl bg-white/5 border border-white/5 gap-2">
            <button className="p-2 text-white/30 hover:text-white transition-colors">
              <LayoutDashboard size={18} />
            </button>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden text-white/50 hover:text-white transition-colors p-2"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <div className="h-0.5 w-full bg-current rounded-full" />
              <div className="h-0.5 w-full bg-current rounded-full" />
              <div className="h-0.5 w-2/3 bg-current rounded-full ml-auto" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar (Keep the drawer for mobile) */}
      <aside className={clsx(
        "fixed inset-y-0 left-0 bg-[#1a1a1a] border-r border-white/5 flex flex-col h-full overflow-hidden z-[1000] transition-all duration-500 transform lg:hidden w-72",
        isOpen ? "translate-x-0" : "-translate-x-full shadow-none"
      )}>
        <div className="p-8 flex items-center justify-between border-b border-white/5">
          <h1 className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#5AB0FA] to-white">
            NeloGuia
          </h1>
          <button onClick={onClose} className="text-white/40 hover:text-white p-2 hover:bg-white/5 rounded-lg">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto">
          {navItems.map((group) => (
            <div key={group.title} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-white/20 text-[10px] font-semibold uppercase tracking-[0.2em] px-4 mb-1">
                {group.title}
              </div>
              {group.children && group.children.length > 0 ? (
                group.children.map(child => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    onClick={onClose}
                    className={({ isActive }) => twMerge(clsx(
                      "px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3",
                      isActive ? "bg-[#5AB0FA]/10 text-[#5AB0FA]" : "text-white/60 hover:bg-white/5"
                    ))}
                  >
                    {child.icon}
                    {child.name}
                  </NavLink>
                ))
              ) : (
                <NavLink
                  to={group.path!}
                  onClick={onClose}
                  className={({ isActive }) => twMerge(clsx(
                    "px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3",
                    isActive ? "bg-[#5AB0FA]/10 text-[#5AB0FA]" : "text-white/60 hover:bg-white/5"
                  ))}
                >
                   {group.icon}
                   Acessar página
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}



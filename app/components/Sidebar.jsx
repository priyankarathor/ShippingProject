'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  HiHome,
  HiChartBar,
  HiShoppingCart,
  HiArrowPath,
  HiExclamationTriangle,
  HiBolt,
  HiScale,
  HiStar,
  HiCog6Tooth,
  HiWrench,
  HiChevronDown,
  HiBars3,
  HiXMark,
} from 'react-icons/hi2';

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);

  const isDesktopOpen = hoverOpen;

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      {/* ---------------- Mobile Top Bar ---------------- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#1a253c] text-white flex items-center px-2 z-50">
        <button onClick={() => setMobileOpen(true)}>
          <HiBars3 className="text-2xl" />
        </button>
        <span className="ml-4 font-bold text-lg">Shiprocket</span>
      </div>

      {/* ---------------- Overlay ---------------- */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ---------------- Sidebar ---------------- */}
      <aside
        onMouseEnter={() => setHoverOpen(true)}
        onMouseLeave={() => {
          setHoverOpen(false);
          setOpenMenu(null);
        }}
        className={`
          fixed top-0 left-0 h-screen
          bg-gradient-to-b from-[#1a253c] to-[#06082f]
          text-white z-50
          transition-all duration-100
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          ${isDesktopOpen ? 'w-50' : 'w-15'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 font-bold">
          <div className="flex items-center gap-2">
            <span className="text-indigo-400">▶</span>
            {isDesktopOpen && <span>Shiprocket</span>}
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(false)}>
            <HiXMark className="text-2xl" />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-2 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          <MenuItem icon={<HiHome />} label="Home" open={isDesktopOpen} />
          <MenuItem icon={<HiChartBar />} label="Dashboard" open={isDesktopOpen} />

          <Dropdown
            icon={<HiShoppingCart />}
            label="Orders"
            open={openMenu === 'orders'}
            sidebarOpen={isDesktopOpen}
            onMouseEnter={() => isDesktopOpen && setOpenMenu('orders')}
            onMouseLeave={() => isDesktopOpen && setOpenMenu(null)}
            onClick={() => toggleMenu('orders')}
          >
            <SubItem label="All Orders" />
            <SubItem label="Create Order" />
          </Dropdown>

          <MenuItem icon={<HiArrowPath />} label="Returns" open={isDesktopOpen} />

          <MenuItem
            icon={<HiExclamationTriangle />}
            label="NDR"
            badge="!"
            open={isDesktopOpen}
          />

          <MenuItem icon={<HiBolt />} label="Quick Delivery" open={isDesktopOpen} />

          <Dropdown
            icon={<HiScale />}
            label="Weight"
            open={openMenu === 'weight'}
            sidebarOpen={isDesktopOpen}
            onMouseEnter={() => isDesktopOpen && setOpenMenu('weight')}
            onMouseLeave={() => isDesktopOpen && setOpenMenu(null)}
            onClick={() => toggleMenu('weight')}
          >
            <SubItem label="Weight Freeze" />
          </Dropdown>

          <Dropdown
            icon={<HiCog6Tooth />}
            label="Setup"
            open={openMenu === 'setup'}
            sidebarOpen={isDesktopOpen}
            onMouseEnter={() => isDesktopOpen && setOpenMenu('setup')}
            onMouseLeave={() => isDesktopOpen && setOpenMenu(null)}
            onClick={() => toggleMenu('setup')}
          >
            <SubItem label="Courier" />
            <SubItem label="Channels" />
          </Dropdown>

          <Dropdown
            icon={<HiWrench />}
            label="Tools"
            open={openMenu === 'tools'}
            sidebarOpen={isDesktopOpen}
            onMouseEnter={() => isDesktopOpen && setOpenMenu('tools')}
            onMouseLeave={() => isDesktopOpen && setOpenMenu(null)}
            onClick={() => toggleMenu('tools')}
          >
            <SubItem label="Calculator" />
          </Dropdown>
        </nav>
      </aside>

      {/* ---------------- Floating Button ---------------- */}
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-[#0b0f4b] text-white p-3 rounded-full shadow-lg md:hidden"
        >
          <HiBars3 className="text-2xl" />
        </button>
      )}
    </>
  );
}

/* ---------------- Components ---------------- */

function MenuItem({ icon, label, badge, open }) {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/10 transition"
    >
      <span className="text-xl">{icon}</span>
      {open && <span className="text-sm">{label}</span>}
      {badge && open && (
        <span className="ml-auto bg-yellow-400 text-black text-xs px-2 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}

function Dropdown({
  icon,
  label,
  open,
  sidebarOpen,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/10 transition"
      >
        <span className="text-xl">{icon}</span>
        {sidebarOpen && (
          <>
            <span className="text-sm">{label}</span>
            <HiChevronDown
              className={`ml-auto transition ${open ? 'rotate-180' : ''}`}
            />
          </>
        )}
      </button>

      {open && sidebarOpen && <div className="ml-8 space-y-1">{children}</div>}
    </div>
  );
}

function SubItem({ label }) {
  return (
    <Link
      href="#"
      className="block px-4 py-2 text-sm rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
    >
      {label}
    </Link>
  );
}

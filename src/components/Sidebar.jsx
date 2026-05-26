// src/components/Sidebar.jsx
import { useState } from 'react';
import { 
  Dashboard as DashboardIcon, 
  Code, 
  Timeline, 
  Settings,
  Description,
  HelpOutline 
} from '@mui/icons-material';

const Sidebar = ({ activeTab, setActiveTab, onRefresh }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'repositories', label: 'Repositories', icon: Code },
    { id: 'activity', label: 'Activity', icon: Timeline },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-surface/40 flex flex-col py-8 z-50">
      <div className="px-6 mb-12">
        <h1 className="font-headline-md text-headline-md font-bold tracking-tighter text-secondary">
          Inejih Sid Mhamed
        </h1>
        <p className="font-label-mono text-label-mono text-on-surface-variant opacity-70">
          Developer Intelligence
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-300 ${
                isActive
                  ? 'text-secondary-fixed bg-secondary/10 border-r-2 border-secondary-fixed active-nav-glow'
                  : 'text-on-surface-variant hover:bg-white/5 hover:text-secondary'
              }`}
            >
              <Icon className="text-xl" />
              <span className="font-label-mono text-label-mono">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-6 mt-auto space-y-4">
        <button
          onClick={onRefresh}
          className="w-full bg-secondary-fixed text-on-secondary-fixed px-4 py-3 rounded font-label-mono text-label-mono font-bold hover:shadow-[0_0_15px_rgba(0,253,238,0.4)] transition-all"
        >
          Refresh Metrics
        </button>
        <div className="flex flex-col gap-2 pt-6 border-t border-white/5">
          <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors text-sm font-label-mono">
            <Description className="text-sm" /> Docs
          </a>
          <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors text-sm font-label-mono">
            <HelpOutline className="text-sm" /> Support
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
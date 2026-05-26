// src/components/TopBar.jsx
import { Search, Notifications, Terminal } from '@mui/icons-material';

const TopBar = ({ onSearch }) => {
  return (
    <header className="ml-64 flex justify-between items-center px-10 h-20 sticky top-0 bg-background/60 backdrop-blur-md border-b border-white/5 z-40">
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl group-focus-within:text-secondary-fixed transition-colors" />
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-surface-container-low border-b border-white/10 focus:border-secondary-fixed focus:ring-0 text-on-surface pl-12 py-2 transition-all font-body-md"
            placeholder="Search repositories..."
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-on-surface-variant hover:text-secondary transition-colors">
          <Notifications />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary-fixed rounded-full shadow-[0_0_8px_rgba(0,253,238,0.8)]"></span>
        </button>
        <button className="text-on-surface-variant hover:text-secondary transition-colors">
          <Terminal />
        </button>
        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
          <img
            alt="Profile"
            className="w-10 h-10 rounded-full border border-secondary-fixed/30 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAluqWD87aVytIqS52AnK9brwy3ozJfFGumZe31a6GVa2uOHoEQMw7xv31wpIExvGeYkajfABl06oC4HapKa7R6y0mUx4i7O2cWfkMoSwSpStvgZbD_JfqetMl3kWNs-frrH3t_fGNpgfz55qDZC4shEJ2yQNWZjKoIwlGRWBnFwFHf-XlfPhXORqBNAiLXoFDjmOMVRKMgiX4uPfXP3lSVXo-PJmaW7quT6FMYGJAMI1JQRbkb8cra5z4NAb3QfU1-nHgPq-VUNBCZ"
          />
          <div className="hidden lg:block">
            <p className="font-label-mono text-label-mono text-secondary leading-none">Inejih Sid</p>
            <p className="text-[10px] text-secondary-fixed font-bold uppercase tracking-widest mt-1">Prime Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
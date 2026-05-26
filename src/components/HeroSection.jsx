// src/components/HeroSection.jsx
const HeroSection = ({ userStats }) => {
  return (
    <section className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/10 blur-[100px] -z-10 group-hover:bg-secondary-fixed/20 transition-all duration-700"></div>
      <div className="relative w-48 h-48 flex-shrink-0">
        <div className="absolute inset-0 border-2 border-secondary-fixed/40 rounded-full animate-pulse-cyan"></div>
        <img
          alt="Inejih profile hero"
          className="w-full h-full rounded-full object-cover border-4 border-surface shadow-2xl"
          src={userStats.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuAm4YodZtRdOlv5a0Znzhc1aKKcaJiwXwgq4WKa2EQCr5XTvwVToiIhe-7E30v1TY-n-tmh1SrbumuSaoPueTwdoVmZYXkDe09rfUjSHgQZ1Zo696jZTWz8mG0l6WtYGsdebUmQyFpA34FMTewajIYLSItZiaf5XsjRFBvZushnxGGNFGR1Z7U1Px-9rWGdkR-sgMDRqrkZvNoQs2hObuRo89sEH85KD_9o1pjrR_izBn9t70S5FdsNcLXyaKF5X9jQJER6AIzZp-5-"}
        />
      </div>
      <div className="flex-1 space-y-4">
        <div className="space-y-1">
          <h2 className="font-headline-lg text-headline-lg text-secondary tracking-tight">
            {userStats.name || 'Inejih Sid Mhamed'}
          </h2>
          <p className="text-secondary-fixed font-code-sm text-code-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">token</span>
            SYSTEM_COMMAND_ID: 0x992-ALPHA
          </p>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          {userStats.bio || 'Senior Software Architect & Intelligence Researcher. Orchestrating high-performance distributed systems with a focus on developer velocity and predictive analytics.'}
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded font-label-mono text-xs text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            AVAILABLE_FOR_ORCHESTRATION
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
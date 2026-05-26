// src/components/QuickStats.jsx
const QuickStats = ({ stats }) => {
  const statsData = [
    { label: 'Repositories', value: stats.publicRepos, sub: 'Active', percent: Math.min((stats.publicRepos / 200) * 100, 100) },
    { label: 'Followers', value: stats.followers.toLocaleString(), sub: `+12%`, percent: Math.min((stats.followers / 5000) * 100, 100) },
    { label: 'Total Commits', value: stats.totalCommits.toLocaleString(), sub: 'CY-24', percent: Math.min((stats.totalCommits / 20000) * 100, 100) }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((item, idx) => (
        <div key={idx} className={`glass-card rounded-xl p-6 relative overflow-hidden transition-transform hover:-translate-y-1 ${idx === 2 ? 'border-t-2 border-t-secondary-fixed' : ''}`}>
          <div className="absolute -right-4 -bottom-4 text-white/5 font-black text-7xl select-none">
            {item.label.substring(0, 3).toUpperCase()}
          </div>
          <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2">
            {item.label}
          </p>
          <h3 className="font-headline-lg text-secondary flex items-baseline gap-2">
            {item.value} <span className="text-secondary-fixed text-lg font-normal">{item.sub}</span>
          </h3>
          <div className="mt-4 w-full bg-white/5 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-secondary-fixed h-full shadow-[0_0_8px_#00fdee] transition-all duration-1000 ease-out"
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
// src/components/RepositoryList.jsx
import { FolderOpen, Star, ForkRight } from '@mui/icons-material';

const RepositoryList = ({ repos, loading, searchTerm }) => {
  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h4 className="font-headline-md text-secondary">Synchronized Repositories</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card rounded-xl p-5 opacity-40">
              <div className="flex justify-between items-start mb-4">
                <div className="w-6 h-6 bg-white/10 rounded animate-pulse"></div>
                <div className="w-12 h-3 bg-white/10 rounded animate-pulse"></div>
              </div>
              <div className="w-3/4 h-5 bg-white/10 rounded mb-3 animate-pulse"></div>
              <div className="w-full h-3 bg-white/10 rounded mb-2 animate-pulse"></div>
              <div className="w-1/2 h-3 bg-white/10 rounded mb-5 animate-pulse"></div>
              <div className="flex gap-4">
                <div className="w-10 h-3 bg-white/10 rounded animate-pulse"></div>
                <div className="w-10 h-3 bg-white/10 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end">
        <h4 className="font-headline-md text-secondary">Synchronized Repositories</h4>
        <a
          href={`https://github.com/inejih-sid-mahame-abderahman`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-fixed font-label-mono text-xs hover:underline underline-offset-4"
        >
          VIEW ALL ASSETS
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredRepos.slice(0, 8).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 hover:border-secondary-fixed/50 transition-all cursor-pointer block"
          >
            <div className="flex justify-between items-start mb-4">
              <FolderOpen className="text-secondary-fixed" />
              <span className="text-[10px] font-label-mono text-on-surface-variant">
                {repo.language || 'N/A'}
              </span>
            </div>
            <h5 className="font-headline-md text-lg text-secondary mb-2 truncate">
              {repo.name}
            </h5>
            <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
              {repo.description || 'No description provided'}
            </p>
            <div className="flex items-center gap-4 text-xs font-label-mono text-secondary-fixed/60">
              <span className="flex items-center gap-1">
                <Star className="text-xs" /> {repo.stargazers_count.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <ForkRight className="text-xs" /> {repo.forks_count.toLocaleString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RepositoryList;
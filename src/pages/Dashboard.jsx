// src/pages/Dashboard.jsx
import { useState, useEffect, useCallback } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import QuickStats from '../components/QuickStats';
import QuoteWidget from '../components/QuoteWidget';
import ActivityFeed from '../components/ActivityFeed';
import SkillsChart from '../components/SkillsChart';
import RepositoryList from '../components/RepositoryList';
import { fetchGitHubStats, fetchRecentActivity, fetchGitHubRepos } from '../services/githubApi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userStats, setUserStats] = useState({
    followers: 0,
    following: 0,
    publicRepos: 0,
    totalCommits: 0,
    languages: [],
    topLanguage: 'JavaScript',
    githubUrl: '',
    avatarUrl: '',
    bio: '',
    name: 'Inejih Sid Mhamed',
    company: 'Independent Developer'
  });
  const [activities, setActivities] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState({
    stats: true,
    activity: true,
    repos: true
  });
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = useCallback(async () => {
    setLoading({ stats: true, activity: true, repos: true });
    
    const stats = await fetchGitHubStats();
    setUserStats(stats);
    setLoading(prev => ({ ...prev, stats: false }));
    
    const activityData = await fetchRecentActivity();
    setActivities(activityData);
    setLoading(prev => ({ ...prev, activity: false }));
    
    const reposData = await fetchGitHubRepos();
    setRepos(reposData);
    setLoading(prev => ({ ...prev, repos: false }));
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRefresh = () => {
    loadData();
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onRefresh={handleRefresh} />
      <TopBar onSearch={setSearchTerm} />
      
      <main className="ml-64 p-10 max-w-7xl mx-auto space-y-10">
        {activeTab === 'dashboard' && (
          <>
            <HeroSection userStats={userStats} />
            <QuickStats stats={userStats} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <QuoteWidget />
                <ActivityFeed activities={activities} loading={loading.activity} />
              </div>
              <SkillsChart />
            </div>
            
            <RepositoryList repos={repos} loading={loading.repos} searchTerm={searchTerm} />
          </>
        )}
        
        {activeTab === 'repositories' && (
          <RepositoryList repos={repos} loading={loading.repos} searchTerm={searchTerm} />
        )}
        
        {activeTab === 'activity' && (
          <ActivityFeed activities={activities} loading={loading.activity} />
        )}
        
        {activeTab === 'settings' && (
          <div className="glass-card rounded-xl p-8 text-center">
            <h3 className="text-secondary text-2xl font-bold mb-4">Settings Panel</h3>
            <p className="text-on-surface-variant">Configure your dashboard preferences here.</p>
          </div>
        )}
      </main>
      
      <footer className="ml-64 border-t border-white/5 mt-16 bg-transparent">
        <div className="max-w-container-max-width mx-auto px-10 py-8 flex justify-between items-center flex-wrap gap-4">
          <p className="font-label-mono text-label-mono text-secondary-fixed-dim">
            © 2024 Inejih Sid Mhamed. Intelligence Protocol v1.0.4
          </p>
          <div className="flex gap-8 flex-wrap">
            <a href={userStats.githubUrl} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary-fixed font-label-mono text-label-mono transition-all underline underline-offset-4">
              GitHub
            </a>
            <a href="#" className="text-on-surface-variant hover:text-secondary-fixed font-label-mono text-label-mono transition-all underline underline-offset-4">
              Portfolio
            </a>
            <a href="#" className="text-on-surface-variant hover:text-secondary-fixed font-label-mono text-label-mono transition-all underline underline-offset-4">
              LinkedIn
            </a>
            <a href="#" className="text-on-surface-variant hover:text-secondary-fixed font-label-mono text-label-mono transition-all underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
// src/services/githubApi.js
const GITHUB_USERNAME = 'inejih-sid-mahame-abderahman';

export const fetchGitHubUser = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch user data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
};

export const fetchGitHubStats = async () => {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubRepos()
    ]);
    
    const totalCommits = repos.reduce((acc, repo) => acc + (repo.size || 0), 0);
    const languages = {};
    repos.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });
    
    return {
      followers: user?.followers || 0,
      following: user?.following || 0,
      publicRepos: user?.public_repos || 0,
      totalCommits: totalCommits,
      languages: Object.keys(languages).slice(0, 5),
      topLanguage: Object.keys(languages)[0] || 'JavaScript',
      githubUrl: user?.html_url || `https://github.com/${GITHUB_USERNAME}`,
      avatarUrl: user?.avatar_url || '',
      bio: user?.bio || 'Developer building innovative solutions',
      name: user?.name || 'Inejih Sid Mhamed',
      company: user?.company || 'Independent Developer'
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      followers: 0,
      following: 0,
      publicRepos: 0,
      totalCommits: 0,
      languages: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js'],
      topLanguage: 'JavaScript',
      githubUrl: `https://github.com/${GITHUB_USERNAME}`,
      avatarUrl: '',
      bio: 'Developer building innovative solutions',
      name: 'Inejih Sid Mhamed',
      company: 'Independent Developer'
    };
  }
};

export const fetchRecentActivity = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`);
    if (!response.ok) throw new Error('Failed to fetch activity');
    const events = await response.json();
    
    return events.map(event => ({
      id: event.id,
      type: event.type,
      repo: event.repo?.name || '',
      created_at: event.created_at,
      payload: event.payload
    }));
  } catch (error) {
    console.error('Error fetching activity:', error);
    return [];
  }
};

export const fetchGitHubContributions = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
    if (!response.ok) throw new Error('Failed to fetch contributions');
    const events = await response.json();
    
    const contributionsByDay = {};
    events.forEach(event => {
      const date = new Date(event.created_at).toLocaleDateString();
      contributionsByDay[date] = (contributionsByDay[date] || 0) + 1;
    });
    
    return contributionsByDay;
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return {};
  }
};
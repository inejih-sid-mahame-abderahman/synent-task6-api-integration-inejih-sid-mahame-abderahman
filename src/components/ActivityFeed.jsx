// src/components/ActivityFeed.jsx
import { History } from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';

const getActivityMessage = (event) => {
  switch (event.type) {
    case 'PushEvent':
      const commitCount = event.payload?.commits?.length || 0;
      return (
        <>
          pushed <span className="text-secondary-fixed">{commitCount} commit{commitCount !== 1 ? 's' : ''}</span> to{' '}
          <span className="underline">{event.repo.split('/')[1]}</span>
        </>
      );
    case 'CreateEvent':
      return (
        <>
          created <span className="text-secondary-fixed">{event.payload?.ref_type}</span> in{' '}
          <span className="underline">{event.repo.split('/')[1]}</span>
        </>
      );
    case 'PullRequestEvent':
      return (
        <>
          opened pull request <span className="text-secondary-fixed">#{event.payload?.number}</span> in{' '}
          <span className="underline">{event.repo.split('/')[1]}</span>
        </>
      );
    case 'IssuesEvent':
      return (
        <>
          {event.payload?.action} issue <span className="text-secondary-fixed">#{event.payload?.issue?.number}</span> in{' '}
          <span className="underline">{event.repo.split('/')[1]}</span>
        </>
      );
    case 'WatchEvent':
      return (
        <>
          starred <span className="underline">{event.repo.split('/')[1]}</span>
        </>
      );
    default:
      return (
        <>
          {event.type.replace('Event', '')} in <span className="underline">{event.repo.split('/')[1]}</span>
        </>
      );
  }
};

const ActivityFeed = ({ activities, loading }) => {
  if (loading) {
    return (
      <div className="glass-card rounded-xl p-8 h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h4 className="font-headline-md text-secondary flex items-center gap-3">
            <History className="text-secondary-fixed" />
            Activity Log
          </h4>
          <span className="text-[10px] font-label-mono text-secondary-fixed bg-secondary-fixed/10 px-2 py-0.5 rounded border border-secondary-fixed/20 animate-pulse">
            LOADING
          </span>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-white/10 animate-pulse"></div>
              <div className="flex-1">
                <div className="h-4 bg-white/10 rounded animate-pulse w-3/4 mb-2"></div>
                <div className="h-3 bg-white/10 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-8 relative h-[400px] flex flex-col overflow-hidden">
      <div className="scanline absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h4 className="font-headline-md text-secondary flex items-center gap-3">
            <History className="text-secondary-fixed" />
            Activity Log
          </h4>
          <span className="text-[10px] font-label-mono text-secondary-fixed bg-secondary-fixed/10 px-2 py-0.5 rounded border border-secondary-fixed/20 animate-pulse">
            REAL-TIME
          </span>
        </div>
        <div className="space-y-6 overflow-y-auto max-h-[280px] pr-4 custom-scrollbar">
          {activities.length === 0 ? (
            <div className="text-center text-on-surface-variant py-8">
              No recent activity found
            </div>
          ) : (
            activities.map((event, idx) => (
              <div key={event.id || idx} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary-fixed shadow-[0_0_8px_#00fdee]"></div>
                  {idx < activities.length - 1 && <div className="w-0.5 flex-1 bg-white/10 my-1"></div>}
                </div>
                <div className={idx < activities.length - 1 ? "pb-6" : ""}>
                  <p className="font-code-sm text-secondary text-sm">
                    {getActivityMessage(event)}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1 font-label-mono">
                    {formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
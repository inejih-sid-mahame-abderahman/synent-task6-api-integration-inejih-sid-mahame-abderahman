// src/components/SkillsChart.jsx
import { QueryStats } from '@mui/icons-material';

const skills = [
  { name: 'BACKEND ARCHITECTURE', level: 94 },
  { name: 'FRONTEND ENGINEERING', level: 88 },
  { name: 'UI/UX SYSTEMS', level: 82 },
  { name: 'KNOWLEDGE TRANSFER', level: 91 }
];

const techStack = ['RUST', 'TYPESCRIPT', 'GO', 'KUBERNETES', 'REACT', 'NODE.JS'];

const SkillsChart = () => {
  return (
    <div className="glass-card rounded-xl p-8 flex flex-col">
      <h4 className="font-headline-md text-secondary flex items-center gap-3 mb-10">
        <QueryStats className="text-secondary-fixed" />
        Core Proficiency
      </h4>
      <div className="flex-1 space-y-8">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between font-label-mono text-label-mono text-on-surface">
              <span>{skill.name}</span>
              <span className="text-secondary-fixed">{skill.level}%</span>
            </div>
            <div className="h-12 bg-white/5 border border-white/10 rounded-lg p-2 flex items-center">
              <div
                className="skill-bar h-full bg-gradient-to-r from-secondary-fixed/40 to-secondary-fixed rounded shadow-[0_0_15px_rgba(0,253,238,0.3)] transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="text-[10px] font-label-mono px-2 py-0.5 bg-white/5 rounded border border-white/10 text-on-surface-variant">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;
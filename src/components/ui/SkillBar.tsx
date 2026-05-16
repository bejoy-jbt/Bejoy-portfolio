import React from 'react';

const LEVELS = ['BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'] as const;

interface SkillBarProps {
  label: string;
  level: 0 | 1 | 2 | 3 | 4;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, level }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center gap-2 mb-1">
        <span className="text-lg text-foreground">{label}</span>
        <span className="font-pixel text-[8px] text-accent">{LEVELS[level]}</span>
      </div>
      <div className="h-4 border-2 border-border bg-[#e5e5e5] dark:bg-[#2d2d44] flex gap-0.5 p-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 h-full ${i <= level ? 'bg-accent' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBar;

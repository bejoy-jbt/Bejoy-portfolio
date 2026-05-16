import React from 'react';
import BlurFade from './BlurFade';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  level?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'center',
  level,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <BlurFade className={`mb-14 max-w-2xl ${alignClass}`}>
      {level && <span className="level-badge mb-4">{level}</span>}
      <p className="font-pixel text-[10px] text-retro-sky dark:text-accent mb-4 tracking-wide">
        {label}
      </p>
      <h2 className="font-pixel text-base sm:text-lg md:text-xl text-foreground mb-4 leading-relaxed">
        {title}
      </h2>
      <div className={`flex gap-1 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="w-3 h-3 bg-accent border border-border" />
        ))}
      </div>
      {description && (
        <p className="text-muted text-xl leading-relaxed">{description}</p>
      )}
    </BlurFade>
  );
};

export default SectionHeading;

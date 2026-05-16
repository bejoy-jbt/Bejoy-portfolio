import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import RetroCard from '../ui/RetroCard';
import SkillBar from '../ui/SkillBar';
import BlurFade from '../ui/BlurFade';
import { profile, skillGroups } from '../../data/profile';

const topSkills: { label: string; level: 0 | 1 | 2 | 3 | 4 }[] = [
  { label: 'Java / Spring Boot', level: 4 },
  { label: 'REST APIs', level: 4 },
  { label: 'MySQL', level: 3 },
  { label: 'React.js', level: 3 },
  { label: 'Docker / AWS', level: 3 },
  { label: 'ML / AI', level: 2 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-pad section-alt">
      <div className="container mx-auto px-4">
        <SectionHeading
          level="LV 01"
          label="Character"
          title="About Me"
          description="Software engineer building microservices — part coder, part product thinker."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BlurFade>
            <RetroCard className="p-6">
              <p className="prose-custom">{profile.summary}</p>
              <p className="prose-custom mt-4">
                Intern at <strong className="text-foreground">Mphasis</strong> (Bengaluru), building
                Spring Boot microservices with Eureka, Actuator, and monitoring stacks.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroups[0].items.slice(0, 5).map((s) => (
                  <span key={s} className="level-badge !text-[7px]">
                    {s}
                  </span>
                ))}
              </div>
            </RetroCard>
          </BlurFade>

          <BlurFade delay={100}>
            <RetroCard className="p-6">
              <h3 className="font-pixel text-[10px] mb-6 text-accent">SKILL METER</h3>
              {topSkills.map((s) => (
                <SkillBar key={s.label} label={s.label} level={s.level} />
              ))}
            </RetroCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default About;

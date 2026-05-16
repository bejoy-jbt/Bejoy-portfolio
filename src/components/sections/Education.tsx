import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import RetroCard from '../ui/RetroCard';
import BlurFade from '../ui/BlurFade';
import { education } from '../../data/profile';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-pad section-alt">
      <div className="container mx-auto px-4">
        <SectionHeading
          level="LV 07"
          label="Education"
          title="School Log"
          description="MCA at PSG & B.Sc. Physics from Loyola."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {education.map((edu, i) => (
            <BlurFade key={edu.degree} delay={i * 100}>
              <RetroCard className="p-8 h-full border-t-2 border-t-accent/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-pixel text-[10px] leading-relaxed">{edu.degree}</h3>
                    <p className="text-accent font-mono text-sm mt-1">{edu.school}</p>
                    <span className="inline-block mt-2 text-xs font-mono uppercase tracking-wider text-muted border border-border px-2 py-0.5 rounded">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {edu.location}
                  </span>
                </div>

                <p className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
                  <GraduationCap size={16} className="text-accent" />
                  {edu.gpa}
                </p>

                <p className="text-muted text-sm leading-relaxed mb-4">{edu.summary}</p>

                <h4 className="text-xs font-mono uppercase tracking-wider text-foreground/80 mb-2">
                  Highlights
                </h4>
                <ul className="text-sm text-muted space-y-1.5 list-disc list-inside">
                  {edu.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </RetroCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

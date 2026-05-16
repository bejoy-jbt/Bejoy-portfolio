import React from 'react';
import { FaCalendar, FaMapPin } from 'react-icons/fa';
import { Download, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import RetroCard from '../ui/RetroCard';
import BlurFade from '../ui/BlurFade';
import { profile, skillGroups, experiences, certifications, achievements } from '../../data/profile';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-pad">
      <div className="container mx-auto px-4">
        <SectionHeading
          level="LV 02"
          label="Experience"
          title="Work History"
          description="Quest log of internships and enterprise Java work."
        />

        <BlurFade className="flex justify-center mb-12">
          <a
            href={profile.resume.href}
            download={profile.resume.downloadName}
            className="btn-retro"
          >
            <Download size={16} />
            DOWNLOAD PDF
          </a>
        </BlurFade>

        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {experiences.map((exp, i) => (
            <BlurFade key={exp.company} delay={i * 60}>
              <RetroCard className="p-6">
                <span className="level-badge mb-4">QUEST {i + 1}</span>
                <h3 className="font-pixel text-[11px] mb-1">{exp.role}</h3>
                <p className="text-accent text-lg mb-3">{exp.company}</p>
                <div className="flex flex-wrap gap-4 text-muted text-base mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendar size={14} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapPin size={14} /> {exp.location}
                  </span>
                </div>
                <ul className="space-y-2 text-muted list-disc list-inside">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </RetroCard>
            </BlurFade>
          ))}
        </div>

        <SectionHeading level="LV 03" label="Inventory" title="Tech Stack" align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skillGroups.map((group, i) => (
            <BlurFade key={group.category} delay={i * 40}>
              <RetroCard className="p-5" small>
                <h4 className="font-pixel text-[9px] text-accent mb-3">{group.category}</h4>
                <ul className="space-y-1 text-lg text-muted">
                  {group.items.map((item) => (
                    <li key={item}>▸ {item}</li>
                  ))}
                </ul>
              </RetroCard>
            </BlurFade>
          ))}
        </div>

        <SectionHeading level="LV 04" label="Trophies" title="Achievements" align="left" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {achievements.map((a) => (
            <RetroCard key={a.title} className="p-5" small>
              <Award className="text-accent mb-2" size={20} />
              <h4 className="font-pixel text-[9px] mb-2">{a.title}</h4>
              <p className="text-muted text-base">{a.description}</p>
            </RetroCard>
          ))}
        </div>

        <SectionHeading level="LV 05" label="Badges" title="Certifications" align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <RetroCard key={cert.title} className="p-5">
              <h4 className="font-pixel text-[9px] mb-2">{cert.title}</h4>
              <p className="text-accent text-base mb-2">{cert.organization}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-pixel text-[8px] text-foreground hover:text-accent">
                VIEW →
              </a>
            </RetroCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import TypedEffect from '../ui/TypedEffect';
import BlurFade from '../ui/BlurFade';
import { profile } from '../../data/profile';
import HomeScene from '../home/HomeScene';

const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { href: profile.links.github, icon: Github, label: 'GitHub' },
    { href: profile.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: profile.links.leetcode, icon: Code2, label: 'LeetCode' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center retro-sky overflow-hidden">
      <HomeScene />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#ded895] dark:bg-[#4a3f2a] border-t-4 border-border z-[3]" />
      <div className="absolute bottom-16 left-0 right-0 h-4 bg-[#c4a84f] dark:bg-[#3d3420] border-t-2 border-border z-[3]" />

      <div className="container relative z-10 mx-auto px-4 pt-28 pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <BlurFade>
            <span className="level-badge mb-6">PLAYER 1</span>
          </BlurFade>

          <BlurFade delay={80}>
            <p className="font-pixel text-[10px] sm:text-xs text-foreground/80 mb-4">
              {profile.title.toUpperCase()}
            </p>
          </BlurFade>

          <BlurFade delay={120}>
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 leading-relaxed">
              {profile.name}
            </h1>
          </BlurFade>

          <BlurFade delay={200} className="min-h-[2rem] mb-6">
            <p className="font-pixel text-[10px] sm:text-xs text-accent">
              <TypedEffect strings={profile.typedRoles} />
            </p>
          </BlurFade>

          <BlurFade delay={280}>
            <p className="text-xl text-muted max-w-xl mx-auto mb-10">{profile.tagline}</p>
          </BlurFade>

          <BlurFade delay={360} className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button type="button" className="btn-retro" onClick={() => scrollTo('projects')}>
              START
            </button>
            <a
              href={profile.resume.href}
              download={profile.resume.downloadName}
              className="btn-retro-outline"
            >
              RESUME
            </a>
          </BlurFade>

          <BlurFade delay={440} className="flex justify-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 retro-card-sm bg-surface hover:bg-accent hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={500} className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-1 font-pixel text-[8px] text-foreground animate-float"
          aria-label="Scroll down"
        >
          SCROLL
          <ArrowDown size={18} />
        </button>
      </BlurFade>
    </section>
  );
};

export default Home;

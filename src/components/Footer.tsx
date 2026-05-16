import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const links = [
    { href: profile.links.github, icon: Github, label: 'GitHub' },
    { href: profile.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: profile.links.leetcode, icon: Code2, label: 'LeetCode' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="section-ground py-12">
      <div className="container mx-auto px-4">
        <div className="retro-card p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-pixel text-xs text-foreground">{profile.name}</p>
            <p className="text-lg text-muted mt-2">{profile.title} · {profile.location}</p>
          </div>
          <div className="flex gap-2">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 retro-card-sm hover:bg-accent hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center font-pixel text-[8px] text-muted mt-6">
          © {year} · INSERT COIN TO CONTINUE
        </p>
      </div>
    </footer>
  );
};

export default Footer;

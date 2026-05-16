import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  small?: boolean;
}

const RetroCard: React.FC<RetroCardProps> = ({ children, className = '', small = false }) => {
  return (
    <div className={`${small ? 'retro-card-sm' : 'retro-card'} ${className}`}>{children}</div>
  );
};

export default RetroCard;

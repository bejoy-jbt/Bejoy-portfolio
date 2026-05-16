import React, { useCallback, useState } from 'react';

interface SceneActorProps {
  id: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  animationClass?: string;
  flip?: boolean;
  reactLabel?: string;
  children: React.ReactNode;
}

const SceneActor: React.FC<SceneActorProps> = ({
  id,
  label,
  className = '',
  style,
  animationClass = '',
  flip = false,
  reactLabel = '!',
  children,
}) => {
  const [reacting, setReacting] = useState(false);

  const handleClick = useCallback(() => {
    if (reacting) return;
    setReacting(true);
    window.setTimeout(() => setReacting(false), 520);
  }, [reacting]);

  return (
    <button
      type="button"
      id={id}
      aria-label={label}
      onClick={handleClick}
      style={style}
      className={`scene-actor pointer-events-auto ${animationClass} ${reacting ? 'scene-actor-react' : ''} ${flip ? 'scene-actor-flip' : ''} ${className}`}
    >
      <span className={`scene-actor-inner ${reacting ? 'is-react' : ''}`}>{children}</span>
      {reacting && (
        <span className="scene-actor-pop" aria-hidden>
          {reactLabel}
        </span>
      )}
    </button>
  );
};

export default SceneActor;

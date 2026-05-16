import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SceneActor from './SceneActor';

const CLOUDS = [
  { src: '/clouds/cloud-1.png', width: 100, className: 'c1', anim: 'anim-cloud-drift-1' },
  { src: '/clouds/cloud-2.png', width: 130, className: 'c2', anim: 'anim-cloud-drift-2' },
  { src: '/clouds/cloud-3.png', width: 160, className: 'c3', anim: 'anim-cloud-drift-3' },
] as const;

const CloudGif: React.FC<{ src: string; width: number }> = ({ src, width }) => (
  <img src={src} alt="" className="scene-cloud-gif" style={{ width }} draggable={false} />
);

const FloatingClouds: React.FC = () => (
  <>
    {CLOUDS.map((cloud, i) => (
      <SceneActor
        key={cloud.src}
        id={`cloud-${i + 1}`}
        label="Cloud"
        className={`scene-cloud ${cloud.className}`}
        animationClass={cloud.anim}
      >
        <CloudGif src={cloud.src} width={cloud.width} />
      </SceneActor>
    ))}
  </>
);

const PixelSun: React.FC = () => (
  <div className="pixel-sun-body">
    <div className="pixel-sun-rays" />
    <div className="pixel-sun-face">
      <span className="pixel-sun-eye" />
      <span className="pixel-sun-eye" />
      <span className="pixel-sun-smile" />
    </div>
  </div>
);

const PixelMoon: React.FC = () => (
  <div className="pixel-moon">
    <span className="pixel-moon-crater c1" />
    <span className="pixel-moon-crater c2" />
    <span className="pixel-moon-eye" />
  </div>
);

const PixelRobin: React.FC = () => (
  <div className="pixel-robin">
    <span className="pr-branch" />
    <span className="pr-body" />
    <span className="pr-belly" />
    <span className="pr-head" />
    <span className="pr-eye ey1" />
    <span className="pr-eye ey2" />
    <span className="pr-beak" />
    <span className="pr-wing" />
    <span className="pr-tail" />
  </div>
);

const PixelOwl: React.FC = () => (
  <div className="pixel-owl">
    <span className="po-ear e1" />
    <span className="po-ear e2" />
    <span className="po-body" />
    <span className="po-eye ey1" />
    <span className="po-eye ey2" />
    <span className="po-beak" />
  </div>
);

const PixelThief: React.FC = () => (
  <div className="pixel-thief">
    <span className="pt-mask" />
    <span className="pt-head" />
    <span className="pt-body" />
    <span className="pt-bag" />
    <span className="pt-leg l1" />
    <span className="pt-leg l2" />
  </div>
);

const NightStars: React.FC = () => (
  <div className="scene-stars" aria-hidden>
    {Array.from({ length: 24 }).map((_, i) => (
      <span
        key={i}
        className="scene-star"
        style={{
          left: `${(i * 17 + 5) % 95}%`,
          top: `${(i * 11 + 8) % 45}%`,
          animationDelay: `${(i % 5) * 0.4}s`,
        }}
      />
    ))}
  </div>
);

const HomeScene: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="home-scene absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      {isDark ? (
        <>
          <NightStars />
          <SceneActor id="moon" label="Moon" className="scene-moon" animationClass="anim-moon-float">
            <PixelMoon />
          </SceneActor>
          <SceneActor id="owl" label="Owl" className="scene-owl" animationClass="anim-owl-perch">
            <PixelOwl />
          </SceneActor>
          <SceneActor
            id="thief"
            label="Thief"
            className="scene-thief"
            animationClass="anim-thief-sneak"
          >
            <PixelThief />
          </SceneActor>
        </>
      ) : (
        <>
          <FloatingClouds />
          <SceneActor
            id="robin"
            label="Robin"
            className="scene-robin"
            animationClass="anim-robin-perch"
            reactLabel="♪"
          >
            <PixelRobin />
          </SceneActor>
          <SceneActor id="sun" label="Sun" className="scene-sun" animationClass="anim-sun-idle">
            <PixelSun />
          </SceneActor>
        </>
      )}
    </div>
  );
};

export default HomeScene;

import React from 'react';

export const Atmosphere: React.FC = () => {
  return (
    <>
      <div className="vignette-overlay" />
      <div className="celestial-fog">
        <div className="celestial-fog-layer-1" />
        <div className="celestial-fog-layer-2" />
      </div>

      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="liquid-smoke">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" result="noise" seed="1">
              <animate attributeName="seed" from="1" to="100" dur="10s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

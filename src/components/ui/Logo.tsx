'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === 'light';

  // Dynamic sizing
  const iconSizes = {
    sm: { w: 34, h: 34, title: '1.25rem', sub: '0.6rem' },
    md: { w: 42, h: 42, title: '1.5rem', sub: '0.68rem' },
    lg: { w: 52, h: 52, title: '1.9rem', sub: '0.75rem' },
  };

  const currentSize = iconSizes[size];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      {/* VECTOR EMBLEM: Precision-Engineered Geometric Interlocking Metal Ingot / Hexagonal AR Monogram */}
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 3px 6px rgba(0, 82, 204, 0.28))',
          flexShrink: 0,
        }}
      >
        <defs>
          {/* Cobalt Blue Metal Gradient */}
          <linearGradient id="arCobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#0052cc" />
            <stop offset="100%" stopColor="#0a192f" />
          </linearGradient>

          {/* Molten Gold / Amber Accent Gradient */}
          <linearGradient id="arGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Polished Platinum / Titanium Sheen */}
          <linearGradient id="arTitaniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
          </linearGradient>

          {/* Metallic Inner Shadow */}
          <radialGradient id="arGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0052cc" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="24" cy="24" r="22" fill="url(#arGlow)" />

        {/* Base Diamond / Hexagonal Shield */}
        <path
          d="M24 2L42 12V36L24 46L6 36V12L24 2Z"
          fill="url(#arCobaltGrad)"
          stroke="#3b82f6"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Upper Left Metallic Facet */}
        <path
          d="M24 2L42 12L24 23L6 12L24 2Z"
          fill="url(#arTitaniumGrad)"
          fillOpacity="0.25"
        />

        {/* Right Facet: Molten Gold Ingot Strip */}
        <path
          d="M24 23L42 12V36L24 46V23Z"
          fill="url(#arCobaltGrad)"
          fillOpacity="0.85"
        />

        {/* STYLIZED DYNAMIC 'A' BEAM */}
        <path
          d="M17 34L24 14L28.5 24.5L25 26.5L23 21.5L19 31.5H23.5L22.5 34H17Z"
          fill="#ffffff"
        />

        {/* STYLIZED DYNAMIC 'R' LOOP & ACCENT LEG IN GOLD */}
        <path
          d="M26 18H33C35.2 18 36.5 19.3 36.5 21.5C36.5 23.4 35.3 24.6 33.5 24.9L37.5 34H33.8L30.2 25.5H28V34H26V18ZM28 20V23.5H32.5C33.6 23.5 34.3 22.8 34.3 21.8C34.3 20.7 33.6 20 32.5 20H28Z"
          fill="url(#arGoldGrad)"
        />

        {/* High-Tech Precision Alignment Dot */}
        <circle cx="24" cy="4" r="1.5" fill="#f59e0b" />
      </svg>

      {/* TYPOGRAPHY WORDMARK */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: currentSize.title,
            fontWeight: 900,
            letterSpacing: '1px',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: isLight ? '#ffffff' : '#0a192f',
          }}
        >
          <span
            style={{
              background: isLight
                ? 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)'
                : 'linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AR
          </span>

          <span
            style={{
              background: 'linear-gradient(135deg, #0052cc 0%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 2px rgba(0,82,204,0.1)',
            }}
          >
            METALS
          </span>
        </div>

        {showSubtitle && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: currentSize.sub,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              fontWeight: 700,
              color: isLight ? '#93c5fd' : '#64748b',
              marginTop: '0.2rem',
              lineHeight: 1,
            }}
          >
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
            <span>DIGITAL METALS BAZAAR</span>
          </div>
        )}
      </div>
    </div>
  );
}

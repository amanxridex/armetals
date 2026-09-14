'use client';

import React from 'react';
import Link from 'next/link';
import { LIVE_MARKET_TICKERS } from '@/lib/data';
import { TrendingUp, TrendingDown, ChevronRight, Activity } from 'lucide-react';

export default function PriceTicker() {
  return (
    <div className="live-ticker-strip">
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          marginRight: '1.5rem',
          color: 'var(--accent-gold)',
          fontWeight: 700,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          whiteSpace: 'nowrap',
          zIndex: 2,
          background: '#060f1e',
          paddingRight: '1rem'
        }}>
          <Activity size={14} className="pulse-icon" />
          <span>Live LME/MCX:</span>
        </div>

        <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div className="ticker-wrapper">
            {/* Render twice for continuous infinite ticker loop */}
            {[...LIVE_MARKET_TICKERS, ...LIVE_MARKET_TICKERS].map((item, idx) => (
              <div key={idx} className="ticker-chip">
                <span className="ticker-symbol">{item.symbol}</span>
                <span className="ticker-price">{item.price}</span>
                <span className={`ticker-change ${item.direction}`}>
                  {item.direction === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {item.change}
                </span>
                <span style={{ color: '#475569', marginLeft: '0.75rem' }}>|</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/live-prices"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.2rem',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            marginLeft: '1.25rem',
            zIndex: 2,
            background: '#060f1e',
            paddingLeft: '0.75rem'
          }}
        >
          <span>All Rates</span>
          <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}

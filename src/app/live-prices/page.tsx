'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Clock,
  ArrowRight,
  ShieldAlert,
  FileSpreadsheet,
  Activity,
  Calculator
} from 'lucide-react';
import { LIVE_MARKET_TICKERS, PRODUCTS_CATALOG } from '@/lib/data';

export default function LivePricesPage() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const priceTableData = [
    {
      metal: 'Aluminium Primary Ingot (P1020)',
      basePrice: '₹228,500 / MT',
      lmeRef: '$2,418.50 / t',
      mcxRef: '₹228.80 / kg',
      change: '+0.82%',
      dir: 'up',
      dayHigh: '₹229,200',
      dayLow: '₹227,800',
      hubPremium: '+₹1,200 (W. India)'
    },
    {
      metal: 'EC Grade Aluminium Wire Rod (9.5mm)',
      basePrice: '₹236,200 / MT',
      lmeRef: '$2,418.50 / t',
      mcxRef: '₹235.40 / kg',
      change: '+1.10%',
      dir: 'up',
      dayHigh: '₹236,800',
      dayLow: '₹234,900',
      hubPremium: '+₹1,500 (N. India)'
    },
    {
      metal: 'Continuous Cast Copper Rod (8mm)',
      basePrice: '₹742,000 / MT',
      lmeRef: '$9,140.00 / t',
      mcxRef: '₹741.90 / kg',
      change: '-0.45%',
      dir: 'down',
      dayHigh: '₹746,500',
      dayLow: '₹740,000',
      hubPremium: '+₹2,500 (W. India)'
    },
    {
      metal: 'Electrolytic Copper Cathodes (Grade A)',
      basePrice: '₹734,500 / MT',
      lmeRef: '$9,090.00 / t',
      mcxRef: '₹734.20 / kg',
      change: '-0.60%',
      dir: 'down',
      dayHigh: '₹739,000',
      dayLow: '₹733,000',
      hubPremium: '+₹1,800 (W. India)'
    },
    {
      metal: 'Special High Grade (SHG) Zinc Ingot',
      basePrice: '₹258,000 / MT',
      lmeRef: '$2,785.00 / t',
      mcxRef: '₹257.50 / kg',
      change: '+1.15%',
      dir: 'up',
      dayHigh: '₹259,100',
      dayLow: '₹256,400',
      hubPremium: '+₹950 (Pan-India)'
    },
    {
      metal: 'Refined Lead Ingot (99.97%)',
      basePrice: '₹192,000 / MT',
      lmeRef: '$2,042.00 / t',
      mcxRef: '₹191.80 / kg',
      change: '+0.30%',
      dir: 'up',
      dayHigh: '₹192,600',
      dayLow: '₹191,200',
      hubPremium: '+₹800 (W. India)'
    },
    {
      metal: 'Primary Fe 550D TMT Rebars',
      basePrice: '₹54,500 / MT',
      lmeRef: 'Domestic Steel Index',
      mcxRef: 'N/A',
      change: '-0.20%',
      dir: 'down',
      dayHigh: '₹54,800',
      dayLow: '₹54,200',
      hubPremium: '+₹1,100 (S. India)'
    },
    {
      metal: '999.9 Fine Silver Cast Bar (30kg)',
      basePrice: '₹88,200 / kg',
      lmeRef: '$31.40 / oz (LBMA)',
      mcxRef: '₹87,450 / kg',
      change: '+0.65%',
      dir: 'up',
      dayHigh: '₹88,600',
      dayLow: '₹87,800',
      hubPremium: 'Ex-Vault Mumbai'
    }
  ];

  const handleDownloadCircular = (filename: string) => {
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div style={{ background: 'var(--surface-bg)', padding: '2.5rem 0 5rem 0' }}>
      <div className="container">
        {/* BREADCRUMB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: 'var(--primary-600)' }}>Home</Link>
          <span>/</span>
          <span>Live Market Prices</span>
        </div>

        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.1)', color: '#16a34a', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              <Activity size={14} />
              <span>Real-Time Market Stream Active</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-900)', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Daily Live <span>Metal Price Board</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', marginTop: '0.35rem' }}>
              Official spot and forward benchmark rates for prime Aluminium, Copper, Zinc, Lead, Steel &amp; Silver linked to the London Metal Exchange (LME) and MCX.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link
              href="/rfq"
              style={{
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
                color: '#0a192f',
                fontWeight: 800,
                fontSize: '0.9rem',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Lock Today&apos;s Rates</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* MARKET SNAPSHOT CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          {LIVE_MARKET_TICKERS.slice(0, 4).map((ticker, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid var(--surface-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <span>{ticker.symbol}</span>
                <span>{ticker.exchange}</span>
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--primary-900)', margin: '0.35rem 0' }}>
                {ticker.price}
              </div>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: ticker.direction === 'up' ? 'var(--accent-emerald)' : 'var(--accent-rose)'
              }}>
                {ticker.direction === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span>{ticker.change} vs Previous Close</span>
              </div>
            </div>
          ))}
        </div>

        {/* OFFICIAL SPOT PRICE TABLE */}
        <div className="table-swipe-indicator">
          <span>👈 Swipe horizontally to view full price matrix &amp; booking actions 👉</span>
        </div>
        <div className="metal-table-container" style={{ marginBottom: '3rem' }}>
          <table className="metal-table">
            <thead>
              <tr>
                <th>Metal Product / Standard Grade</th>
                <th>Ex-Works Base Price</th>
                <th>LME Settlement</th>
                <th>MCX Spot (INR/kg)</th>
                <th>Day Change</th>
                <th>Intraday Range (H / L)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {priceTableData.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <strong style={{ display: 'block', color: 'var(--primary-900)' }}>{item.metal}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location: {item.hubPremium}</span>
                  </td>
                  <td style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                    {item.basePrice}
                  </td>
                  <td style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{item.lmeRef}</td>
                  <td style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{item.mcxRef}</td>
                  <td>
                    <span className={`ticker-change ${item.dir}`}>
                      {item.dir === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {item.change}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    <div>H: {item.dayHigh}</div>
                    <div>L: {item.dayLow}</div>
                  </td>
                  <td>
                    <Link
                      href="/rfq"
                      style={{
                        background: 'var(--primary-600)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-block'
                      }}
                    >
                      Book Rate
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* DAILY CIRCULAR DOWNLOAD SECTION */}
        <div style={{
          background: '#ffffff',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-900)' }}>Official Daily Price Circulars</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Download certified signed daily rate sheets published every morning at 09:30 AM IST.
              </p>
            </div>
            {downloadSuccess && (
              <div style={{ color: '#16a34a', fontSize: '0.8125rem', fontWeight: 600, background: 'var(--primary-50)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)' }}>
                ✓ Successfully downloaded: {downloadSuccess}
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: "Today's Prime Metals Circular", date: 'Today, 09:30 AM', file: 'AR_Metals_Spot_Circular_Today.pdf', size: '340 KB' },
              { title: 'Aluminium Alloy & Ingot Matrix', date: 'Yesterday, 05:00 PM', file: 'AR_Aluminium_P1020_Matrix.pdf', size: '280 KB' },
              { title: 'Copper Cathode & CC Rod Premium', date: 'This Week', file: 'AR_Copper_CC_Rod_Weekly.pdf', size: '410 KB' },
              { title: 'Steel & TMT Regional Stock Sheet', date: 'Daily Dispatch', file: 'AR_Steel_TMT_Stockyards.pdf', size: '520 KB' }
            ].map((circ, idx) => (
              <div key={idx} style={{
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--surface-hover)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileSpreadsheet size={24} color="var(--primary-600)" />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-900)' }}>{circ.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{circ.date} • {circ.size}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownloadCircular(circ.file)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--surface-border)',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--primary-600)'
                  }}
                  title="Download Circular PDF"
                >
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING MECHANISM EXPLAINER */}
        <div style={{
          background: 'var(--primary-900)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem'
        }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Transparent Pricing Formula on AR Metals
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '850px', marginBottom: '1.5rem' }}>
            All metals quoted on AR Metals are benchmarked against underlying global exchange prices (LME / LBMA) and domestic futures (MCX). Final invoiced price per MT comprises:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.8125rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>1. Base LME/Plant Price</div>
              <div style={{ color: '#94a3b8' }}>London Metal Exchange Cash Settlement converted at RBI USD/INR reference rate.</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>2. Shape / Alloy Premium</div>
              <div style={{ color: '#94a3b8' }}>Metallurgical transformation cost (e.g. wire rod drawing, billet homogenization).</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>3. Freight to Stockyard</div>
              <div style={{ color: '#94a3b8' }}>Transparent rail/road freight from mother smelter to your designated hub.</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>4. GST (18% ITC)</div>
              <div style={{ color: '#94a3b8' }}>100% eligible for Input Tax Credit on GST portal for registered entities.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

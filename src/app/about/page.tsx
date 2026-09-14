'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Target,
  Award,
  Globe2,
  Users,
  Leaf,
  CheckCircle,
  ArrowRight,
  Factory
} from 'lucide-react';
import { WAREHOUSE_HUBS } from '@/lib/data';

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--surface-bg)' }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: 'radial-gradient(circle at 80% 20%, #1e3a8a 0%, #0a192f 70%, #030712 100%)',
        color: '#ffffff',
        padding: '5rem 0 5.5rem 0',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <span style={{
            background: 'rgba(245, 158, 11, 0.2)',
            color: 'var(--accent-gold)',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            India&apos;s Digital Metals Marketplace
          </span>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.4rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Empowering <span>India&apos;s Manufacturing</span> Through Metals Digitization
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            AR Metals was founded to eliminate opacity in industrial metal trade. We combine primary smelter quality assurance, transparent LME/MCX linked pricing, and tech-driven logistics to deliver raw materials seamlessly to India&apos;s 4,500+ manufacturing enterprises.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/products"
              style={{
                background: 'var(--primary-600)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.75rem 2rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              Explore Metal Portfolio
            </Link>
            <Link
              href="/contact"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.75rem 1.75rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              Contact Branch Offices
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE PILLARS */}
      <section className="section-wrapper" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--surface-border)', background: 'var(--surface-bg)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-50)', color: 'var(--primary-600)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                To become India&apos;s most trusted and transparent digital procurement network for industrial metals, ensuring every MSME enjoys the same pricing, credit access, and laboratory quality as Fortune 500 conglomerates.
              </p>
            </div>

            <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--surface-border)', background: 'var(--surface-bg)' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold-dark)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Globe2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Catalyze the &quot;Make in India&quot; vision by reducing metal supply chain friction, optimizing raw material inventory turnover, and promoting zero-carbon green metallurgical solutions.
              </p>
            </div>

            <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--surface-border)', background: 'var(--surface-bg)' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.15)', color: '#16a34a', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>Core Values</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Uncompromising chemical integrity, 100% transparent benchmark pricing, digital speed, and dedicated customer empathy in every metric tonne we dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPLY CHAIN NETWORK */}
      <section className="section-wrapper" style={{ background: 'var(--surface-bg)' }}>
        <div className="container">
          <div className="section-head-box">
            <div className="section-subhead">Logistics Footprint</div>
            <h2 className="section-title">Nationwide <span>Stockyard Network</span></h2>
            <p className="section-desc">
              Strategic warehouse hubs positioned near India&apos;s major industrial clusters ensure rapid 24-48 hour fulfillment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {WAREHOUSE_HUBS.map((hub) => (
              <div key={hub.city} style={{
                background: '#ffffff',
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-900)' }}>{hub.city} Hub</h4>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'var(--primary-50)', color: 'var(--primary-600)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {hub.capacityMT}
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{hub.location}</div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '1rem' }}>{hub.address}</p>
                <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '0.75rem', fontSize: '0.8125rem', color: 'var(--primary-600)', fontWeight: 600 }}>
                  Tel: {hub.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY CERTIFICATIONS & ESG */}
      <section className="section-wrapper" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-subhead">Certified Quality Standards</div>
              <h2 className="section-title">Stringent <span>Quality &amp; Safety Accreditations</span></h2>
              <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                All AR Metals facilities and participating smelters are certified under global benchmarks to guarantee zero-defect metallurgy.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={20} color="var(--primary-600)" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>ISO 9001:2015 Quality Management Systems</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={20} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>ISO 14001:2015 Environmental Management Systems</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={20} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Bureau of Indian Standards (BIS) Approved Grades</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={20} color="#6366f1" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>London Metal Exchange (LME) Registered Production Hubs</span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%)',
              color: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <Leaf size={40} color="#34d399" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Green Metals &amp; Sustainability
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                We actively champion low-carbon aluminium produced using renewable solar/hydro power, responsible closed-loop zinc recycling, and eco-friendly packaging that minimizes plastic waste.
              </p>
              <div style={{ fontSize: '0.85rem', color: '#93c5fd', fontWeight: 600 }}>
                ✓ Lower embedded carbon footprint (Scope 1 &amp; 2 certified)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

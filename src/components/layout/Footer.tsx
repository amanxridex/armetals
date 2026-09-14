'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Truck,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub) {
      setSubSuccess(true);
      setTimeout(() => setSubSuccess(false), 5000);
      setEmailSub('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* TOP VALUE STRIP */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '3rem',
          marginBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{ background: 'rgba(0, 82, 204, 0.25)', color: '#60a5fa', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>100% Quality Assured</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.4 }}>MTC 3.1 Certified direct from prime smelting and rolling facilities.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.2)', color: 'var(--accent-gold)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
              <Award size={24} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>LME & MCX Linked</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.4 }}>Transparent real-time benchmark pricing with flexible spot hedging.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
              <Truck size={24} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>30+ Strategic Stockyards</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.4 }}>GPS-tracked multi-axle trailer fleet delivering within 24 to 48 hours.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
              <PhoneCall size={24} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Dedicated Relationship Desk</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: 1.4 }}>Specialized metals key accounts team assisting large-scale procurement.</p>
            </div>
          </div>
        </div>

        {/* 4-COLUMN FOOTER NAVIGATION */}
        <div className="footer-top-grid">
          {/* COL 1: ABOUT AR METALS */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo variant="light" size="md" />
            </div>
            <p className="footer-desc">
              AR Metals is India&apos;s leading digital marketplace for industrial ferrous and non-ferrous metals. We connect primary producers with downstream manufacturing enterprises through transparent pricing, verified quality assurance, and nationwide logistics fulfillment.
            </p>
            <div className="footer-badges">
              <span className="cert-badge">ISO 9001:2015</span>
              <span className="cert-badge">ISO 14001:2015</span>
              <span className="cert-badge">BIS Certified</span>
              <span className="cert-badge">LME Approved</span>
            </div>
          </div>

          {/* COL 2: METAL CATEGORIES */}
          <div>
            <div className="footer-heading">Metal Catalog</div>
            <ul className="footer-links-col">
              <li><Link href="/products/aluminium">Primary Aluminium</Link></li>
              <li><Link href="/products/aluminium">EC Wire Rods</Link></li>
              <li><Link href="/products/copper">Continuous Cast Copper Rods</Link></li>
              <li><Link href="/products/copper">Electrolytic Copper Cathodes</Link></li>
              <li><Link href="/products/zinc-lead">SHG Zinc Ingots (99.995%)</Link></li>
              <li><Link href="/products/zinc-lead">Refined Lead Ingots (99.97%)</Link></li>
              <li><Link href="/products/steel-iron">Fe 500D / 550D TMT Rebars</Link></li>
              <li><Link href="/products/silver">999.9 Fine Silver Bars</Link></li>
              <li><Link href="/products">View All Products →</Link></li>
            </ul>
          </div>

          {/* COL 3: PLATFORM & SERVICES */}
          <div>
            <div className="footer-heading">Procurement & Services</div>
            <ul className="footer-links-col">
              <li><Link href="/live-prices">Daily Live Price Board</Link></li>
              <li><Link href="/rfq">Custom Request for Quote (RFQ)</Link></li>
              <li><Link href="/services">Channel Financing (Up to 90 Days)</Link></li>
              <li><Link href="/services">AR Metals Quality Lab & MTC</Link></li>
              <li><Link href="/services">Doorstep GPS Logistics</Link></li>
              <li><Link href="/about">Corporate Overview</Link></li>
              <li><Link href="/contact">Stockyard & Warehouse Hubs</Link></li>
              <li><Link href="/auth/login">B2B Customer Portal</Link></li>
            </ul>
          </div>

          {/* COL 4: CONTACT & NEWSLETTER */}
          <div>
            <div className="footer-heading">Daily Price Bulletin</div>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.5 }}>
              Receive morning LME & MCX opening benchmark rates and daily factory circulars directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="email"
                  placeholder="Enter business email"
                  required
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.6rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-md)',
                    color: '#ffffff',
                    fontSize: '0.8125rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-600)',
                    color: '#ffffff',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              {subSuccess && (
                <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle size={12} />
                  <span>Subscribed! You will receive daily 9:00 AM rate circulars.</span>
                </div>
              )}
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8125rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PhoneCall size={14} color="var(--accent-gold)" />
                <a href="tel:+919879879871" style={{ color: 'inherit' }}>+91 9879879871</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--accent-gold)" />
                <span>sales@armetals.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={14} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Statesman House, Barakhamba Road, Connaught Place, New Delhi NCR 110001</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL */}
        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} AR Metals Marketplace Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/about" style={{ color: '#64748b' }}>Privacy Policy</Link>
            <Link href="/about" style={{ color: '#64748b' }}>Terms & Conditions of Sale</Link>
            <Link href="/services" style={{ color: '#64748b' }}>GST Compliant E-Invoicing</Link>
            <Link href="/contact" style={{ color: '#64748b' }}>Grievance Officer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

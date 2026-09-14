'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  ShieldCheck,
  Truck,
  Scissors,
  CheckCircle2,
  Building,
  ArrowRight,
  Calculator,
  FileCheck,
  Clock,
  Award
} from 'lucide-react';

export default function ServicesPage() {
  const [turnover, setTurnover] = useState('10');
  const [gstin, setGstin] = useState('');
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  const handleCheckCredit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedTurnover = parseFloat(turnover) || 5;
    const estimatedCredit = Math.min(Math.round(parsedTurnover * 0.25 * 10) / 10, 25);
    setEligibilityResult(`₹${estimatedCredit} Crores`);
  };

  return (
    <div style={{ background: 'var(--surface-bg)', padding: '2.5rem 0 5rem 0' }}>
      <div className="container">
        {/* BREADCRUMB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: 'var(--primary-600)' }}>Home</Link>
          <span>/</span>
          <span>Value-Added Services &amp; Financing</span>
        </div>

        {/* HEADER */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-600)', letterSpacing: '1px' }}>
            Enterprise Procurement Infrastructure
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-900)', textTransform: 'uppercase', lineHeight: 1.1, marginTop: '0.25rem' }}>
            Value-Added <span>Services &amp; Financing</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '750px', marginTop: '0.5rem', lineHeight: 1.6 }}>
            AR Metals provides comprehensive end-to-end procurement solutions — from tailored 90-day revolving credit lines to ISO-certified spectro-metallurgy testing and GPS-tracked logistics fulfillment.
          </p>
        </div>

        {/* 1. CHANNEL FINANCING (AR METALS CAPITAL) */}
        <section style={{
          background: '#ffffff',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3rem'
        }}>
          <div className="split-content-layout" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-gold-dark)', marginBottom: '0.5rem' }}>
                AR METALS CAPITAL • WORKING CAPITAL
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
                Up to 90 Days Channel Financing for MSMEs
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Never let working capital constraints halt your manufacturing assembly lines. Through our institutional tie-ups with India&apos;s leading commercial banks, we provide collateral-free credit lines for your raw material metal procurement.
              </p>

              <div className="responsive-grid-2" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}><strong>0% Interest</strong> for first 30 days of invoice generation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>Revolving limits from <strong>₹25 Lakhs up to ₹25 Crores</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>Paperless digital onboarding with <strong>24-hour approval</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>Zero prepayment penalty or hidden documentation fees</span>
                </div>
              </div>

              <div style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                Institutional Lending Partners:
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontWeight: 700, color: 'var(--primary-700)', fontSize: '0.85rem' }}>
                <span>• State Bank of India</span>
                <span>• HDFC Bank</span>
                <span>• ICICI Bank</span>
                <span>• Tata Capital</span>
                <span>• Axis Bank</span>
              </div>
            </div>

            {/* INSTANT ELIGIBILITY CALCULATOR */}
            <div style={{
              background: 'var(--primary-900)',
              color: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
                <Calculator size={18} />
                <span>Instant Credit Estimator</span>
              </div>

              <form onSubmit={handleCheckCredit}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Annual Business Turnover (₹ Crores)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={turnover}
                    onChange={(e) => setTurnover(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 'var(--radius-md)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 700,
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Company GSTIN Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 27AAACA1234A1Z5"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 'var(--radius-md)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--accent-gold)',
                    color: '#0a192f',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  Estimate Approved Credit Limit
                </button>
              </form>

              {eligibilityResult && (
                <div style={{
                  marginTop: '1.25rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Indicative Pre-Approved Facility:</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', margin: '0.25rem 0' }}>
                    {eligibilityResult}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Subject to standard bank KYC and GST filing verification</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. QUALITY ASSURANCE & MTC TESTING */}
        <section style={{
          background: '#ffffff',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3rem'
        }}>
          <div className="split-content-layout" style={{ alignItems: 'center' }}>
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #0a192f 0%, #0052cc 100%)',
                color: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <ShieldCheck size={54} color="var(--accent-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  EN 10204 Type 3.1
                </h3>
                <div style={{ fontSize: '1rem', color: '#93c5fd', marginTop: '0.25rem' }}>
                  Official Mill Test Certificate
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: '1.5rem', paddingTop: '1.25rem', fontSize: '0.8125rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  Every dispatched heat is digitally logged with its spectrographic chemical tolerances, tensile yield properties, and QR-verifiable authenticity code.
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#15803d', marginBottom: '0.5rem' }}>
                AR METALS ASSURED QUALITY • MTC 3.1
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
                Rigorous Metallurgy &amp; Laboratory Standards
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We understand that downstream automotive components, high-voltage electrical conductors, and high-rise structural rebars cannot tolerate chemical variations. AR Metals maintains strict zero-defect quality control.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--primary-50)', color: 'var(--primary-600)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', height: 'fit-content' }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-900)' }}>Optical Emission Spectrometer Analysis</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Real-time verification of iron, silicon, copper, zinc, lead, and gas contents down to parts-per-million (ppm).</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--primary-50)', color: 'var(--primary-600)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', height: 'fit-content' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-900)' }}>Third-Party Inspection Support</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Full facilitation for SGS, Bureau Veritas, TUV, and Lloyd&apos;s Register pre-shipment inspections upon customer request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LOGISTICS & GPS FLEET */}
        <section style={{
          background: '#ffffff',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0, 82, 204, 0.1)', color: 'var(--primary-600)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
            <Truck size={14} />
            <span>Pan-India Smart Logistics</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
            Integrated Multi-Modal Heavy Haulage Fleet
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '800px', marginBottom: '2rem' }}>
            Managing metal freight requires specialized heavy handling equipment, secure cradle pallets, and moisture-controlled transit. AR Metals operates an integrated supply network delivering over 60,000 MT every month.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--surface-hover)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)' }}>
              <Clock size={28} color="var(--primary-600)" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.35rem' }}>24 - 48 Hour Dispatch</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Orders booked from local stockyards are loaded and dispatched within 24 to 48 hours guaranteed.</p>
            </div>

            <div style={{ background: 'var(--surface-hover)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)' }}>
              <Truck size={28} color="var(--accent-gold)" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.35rem' }}>Live GPS Vehicle Tracking</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Track your lorry location in real-time via WhatsApp and SMS links with automated ETA updates.</p>
            </div>

            <div style={{ background: 'var(--surface-hover)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)' }}>
              <ShieldCheck size={28} color="#16a34a" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.35rem' }}>Comprehensive Transit Insurance</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Every single consignment is covered against transit damage, rain/moisture ingress, and loss.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

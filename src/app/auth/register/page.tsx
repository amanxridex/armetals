'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Building, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [gstin, setGstin] = useState('');
  const [entityType, setEntityType] = useState('private-limited');
  const [annualTonnage, setAnnualTonnage] = useState('100-500');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [city, setCity] = useState('');
  const [applyCredit, setApplyCredit] = useState(true);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div style={{
      background: 'radial-gradient(circle at 50% 20%, #0f1d38 0%, #060e1e 100%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '680px',
        width: '100%',
        boxShadow: 'var(--shadow-xl)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'var(--primary-900)',
          color: '#ffffff',
          padding: '2rem 2.5rem',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-gold)', letterSpacing: '1px' }}>
            Enterprise Buyer Onboarding
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '0.25rem' }}>
            Register Your Business on AR Metals
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.35rem' }}>
            Direct producer pricing, GST Input Tax Credit compliance &amp; revolving credit up to ₹25 Crores
          </p>
        </div>

        <div style={{ padding: '2.5rem' }}>
          {registered ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <CheckCircle2 size={38} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
                Registration Submitted Successfully!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                Your enterprise account for <strong>{companyName}</strong> (GST: {gstin}) has been created. A dedicated Relationship Officer has been assigned to your profile and will contact you at <strong>{contactPhone}</strong> with your approved credit limit.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <Link
                  href="/products"
                  style={{
                    background: 'var(--primary-600)',
                    color: '#ffffff',
                    fontWeight: 700,
                    padding: '0.75rem 2rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem'
                  }}
                >
                  Explore Marketplace Catalog
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="responsive-grid-2" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Company / Entity Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Conductors Pvt Ltd"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    GSTIN Number *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={15}
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                    placeholder="27AAACA1234A1Z5"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', fontWeight: 600 }}
                  />
                </div>
              </div>

              <div className="responsive-grid-2" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Constitution of Business
                  </label>
                  <select
                    value={entityType}
                    onChange={(e) => setEntityType(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', outline: 'none' }}
                  >
                    <option value="private-limited">Private Limited Company</option>
                    <option value="public-limited">Public Limited Company</option>
                    <option value="llp">Limited Liability Partnership (LLP)</option>
                    <option value="proprietorship">MSME Proprietorship</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Estimated Annual Metal Demand
                  </label>
                  <select
                    value={annualTonnage}
                    onChange={(e) => setAnnualTonnage(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', outline: 'none' }}
                  >
                    <option value="under-100">Under 100 MT / Year</option>
                    <option value="100-500">100 to 500 MT / Year</option>
                    <option value="500-2000">500 to 2,000 MT / Year</option>
                    <option value="above-2000">Above 2,000 MT / Year (Key Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="responsive-grid-3" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full Name"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="procurement@co.in"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                  />
                </div>
              </div>

              <div style={{
                background: 'var(--primary-50)',
                border: '1px solid var(--primary-100)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <input
                  type="checkbox"
                  id="credit-optin"
                  checked={applyCredit}
                  onChange={(e) => setApplyCredit(e.target.checked)}
                  style={{ marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="credit-optin" style={{ fontSize: '0.8125rem', color: 'var(--text-main)', cursor: 'pointer', lineHeight: 1.5 }}>
                  <strong>Apply for AR Metals Channel Financing (Up to 90 Days Credit)</strong>
                  <div style={{ color: 'var(--text-muted)' }}>
                    Opt-in to allow automated pre-qualification of unsecured revolving limits up to ₹25 Crores based on your GST filing history.
                  </div>
                </label>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
                  color: '#0a192f',
                  fontWeight: 800,
                  fontSize: '1rem',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)'
                }}
              >
                Complete Enterprise Registration
              </button>

              <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Already registered?{' '}
                <Link href="/auth/login" style={{ color: 'var(--primary-600)', fontWeight: 700 }}>
                  Sign in to Portal →
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

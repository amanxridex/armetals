'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Calculator,
  CheckCircle,
  Truck,
  ShieldCheck,
  CreditCard,
  Building,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/lib/data';

export default function RFQPage() {
  const [metalCategory, setMetalCategory] = useState('aluminium');
  const [selectedGrade, setSelectedGrade] = useState('Primary Aluminium Ingot P1020');
  const [shape, setShape] = useState('Ingot');
  const [tonnage, setTonnage] = useState('25');
  const [deliveryPincode, setDeliveryPincode] = useState('400001');
  const [deliveryCity, setDeliveryCity] = useState('Mumbai');
  const [targetPrice, setTargetPrice] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('30-days-credit');
  const [companyName, setCompanyName] = useState('');
  const [gstin, setGstin] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  const handleCategoryChange = (cat: string) => {
    setMetalCategory(cat);
    if (cat === 'aluminium') {
      setSelectedGrade('Primary Aluminium Ingot P1020');
      setShape('Ingot');
    } else if (cat === 'copper') {
      setSelectedGrade('Continuous Cast Copper Rod (8mm)');
      setShape('Wire Rod (Coil)');
    } else if (cat === 'zinc-lead') {
      setSelectedGrade('Special High Grade (SHG) Zinc Ingot');
      setShape('Ingot');
    } else if (cat === 'steel-iron') {
      setSelectedGrade('High Ductility TMT Rebars Fe 550D');
      setShape('Rebar');
    } else if (cat === 'silver') {
      setSelectedGrade('999.9 Fine Silver Cast Bar');
      setShape('Cast Bar');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ARM-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(id);
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--surface-bg)', padding: '2.5rem 0 5rem 0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* BREADCRUMB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: 'var(--primary-600)' }}>Home</Link>
          <span>/</span>
          <span>Request for Quote (RFQ)</span>
        </div>

        {/* HEADER */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-gold-dark)', letterSpacing: '1px' }}>
            Direct Primary Smelter Quotation
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-900)', textTransform: 'uppercase', lineHeight: 1.1, marginTop: '0.25rem' }}>
            Custom Bulk <span>Metal RFQ Builder</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0.5rem auto 0 auto', lineHeight: 1.6 }}>
            Submit your tonnage requirements, target pricing, and factory specifications. Our central trading desk locks benchmark LME/MCX rates and delivers an official proforma within 60 minutes.
          </p>
        </div>

        {submitted ? (
          <div style={{
            background: '#ffffff',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle size={42} />
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
              RFQ Successfully Registered!
            </h2>

            <div style={{
              background: 'var(--primary-50)',
              border: '1px solid var(--primary-100)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              maxWidth: '480px',
              margin: '1.5rem auto',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Official RFQ Tracking ID:</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-600)', letterSpacing: '1px', marginTop: '0.25rem' }}>
                {rfqNumber}
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 2rem auto' }}>
              Thank you, <strong>{contactName}</strong>. A dedicated Relationship Officer for <strong>{companyName}</strong> has received your inquiry for <strong>{tonnage} MT of {selectedGrade}</strong> for delivery to <strong>{deliveryCity} ({deliveryPincode})</strong>. An official proforma quotation has been sent to <strong>{contactEmail}</strong>.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: 'var(--primary-600)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.75rem 2rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                Submit Another RFQ
              </button>
              <Link
                href="/products"
                style={{
                  background: 'var(--surface-hover)',
                  border: '1px solid var(--surface-border)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                Return to Catalog
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            background: '#ffffff',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* STEP 1: SELECT METAL CATEGORY */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.75rem' }}>
                1. Select Metal Category
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                {[
                  { id: 'aluminium', label: 'Aluminium' },
                  { id: 'copper', label: 'Copper' },
                  { id: 'zinc-lead', label: 'Zinc & Lead' },
                  { id: 'steel-iron', label: 'Steel & Iron' },
                  { id: 'silver', label: 'Silver & Precious' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleCategoryChange(item.id)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: metalCategory === item.id ? '2px solid var(--primary-600)' : '1px solid var(--surface-border)',
                      background: metalCategory === item.id ? 'var(--primary-50)' : '#ffffff',
                      color: metalCategory === item.id ? 'var(--primary-600)' : 'var(--text-main)',
                      fontWeight: 700,
                      fontSize: '0.875rem'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: GRADE & SHAPE SELECTION */}
            <div className="responsive-grid-2" style={{ marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  2. Preferred Product Grade
                </label>
                <input
                  type="text"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  required
                  placeholder="e.g. P1020, 6063 Billet, EC Wire Rod, Fe 550D"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  Product Form / Shape
                </label>
                <input
                  type="text"
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  required
                  placeholder="e.g. Ingot, Billet, Wire Rod, Sheet, Rebar"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* STEP 3: TONNAGE & DELIVERY LOCATION */}
            <div className="responsive-grid-3" style={{ marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  3. Quantity (Metric Tonnes)
                </label>
                <input
                  type="number"
                  min={1}
                  value={tonnage}
                  onChange={(e) => setTonnage(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  Delivery Destination Pincode
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={deliveryPincode}
                  onChange={(e) => setDeliveryPincode(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  City / Industrial Zone
                </label>
                <input
                  type="text"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  required
                  placeholder="e.g. Bhiwandi, Sanand, Faridabad"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* STEP 4: TARGET PRICE & PAYMENT TERMS */}
            <div className="responsive-grid-2" style={{ marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  Target Price per MT (Optional Counter-Offer)
                </label>
                <input
                  type="text"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder="e.g. ₹227,000 / MT"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-900)', marginBottom: '0.4rem' }}>
                  Preferred Payment / Credit Terms
                </label>
                <select
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    background: 'var(--surface-hover)'
                  }}
                >
                  <option value="advance-rtgs">100% Advance RTGS (Maximum Discount)</option>
                  <option value="lc-sight">Letter of Credit (LC) at Sight</option>
                  <option value="30-days-credit">AR Metals 30-Day Revolving Credit</option>
                  <option value="60-days-credit">AR Metals 60-Day Channel Credit</option>
                  <option value="90-days-credit">AR Metals 90-Day NBFC Facility</option>
                </select>
              </div>
            </div>

            {/* STEP 5: ENTERPRISE BUYER DETAILS */}
            <div style={{
              background: 'var(--surface-hover)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '2rem',
              border: '1px solid var(--surface-border)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '1rem' }}>
                4. Enterprise Legal &amp; Billing Information
              </h3>

              <div className="responsive-grid-2" style={{ marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Registered Company / Entity Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Conductors & Cables Pvt Ltd"
                    style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Company GSTIN Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    placeholder="27AAACA1234A1Z5"
                    style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
                  />
                </div>
              </div>

              <div className="responsive-grid-3" style={{ marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full Name"
                    style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@company.com"
                    style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Direct Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Specific Requirements / Cutting Tolerances / Packaging Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Provide any custom coil slit widths, bundling instructions, or delivery access details..."
                  style={{ width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
                color: '#0a192f',
                fontWeight: 800,
                fontSize: '1.1rem',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)'
              }}
            >
              Generate RFQ Proforma &amp; Lock Spot Allocation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

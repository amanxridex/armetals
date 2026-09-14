'use client';

import React, { useState } from 'react';
import { MetalProduct } from '@/lib/data';
import { X, CheckCircle, Calculator, ShieldCheck, Truck, FileText } from 'lucide-react';

interface QuickQuoteModalProps {
  product: MetalProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({ product, isOpen, onClose }: QuickQuoteModalProps) {
  const [tonnage, setTonnage] = useState<number>(product?.minOrderQuantityMT || 10);
  const [deliveryPincode, setDeliveryPincode] = useState('400001');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rfqRef, setRfqRef] = useState('');

  if (!isOpen || !product) return null;

  const basePrice = product.pricePerMT;
  const subtotal = basePrice * tonnage;
  const gstRate = 0.18; // 18% GST for metals in India
  const gstAmount = subtotal * gstRate;
  const totalAmount = subtotal + gstAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `ARM-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqRef(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700 }}>
              Spot Booking & RFQ Desk
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{product.name}</h3>
          </div>
          <button onClick={onClose} style={{ color: '#94a3b8' }}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-pad">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <CheckCircle size={36} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
                RFQ Order Submitted Successfully!
              </h3>

              <div style={{
                background: 'var(--primary-50)',
                border: '1px solid var(--primary-100)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                margin: '1.25rem 0',
                fontSize: '0.9rem'
              }}>
                <div style={{ color: 'var(--text-muted)' }}>Your Procurement RFQ Reference ID:</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-600)', letterSpacing: '1px', marginTop: '0.25rem' }}>
                  {rfqRef}
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
                Our dedicated Relationship Manager for <strong>{companyName || 'your company'}</strong> has locked this spot rate for the next 4 hours and will call you at <strong>{contactPhone || 'your contact number'}</strong> with the official proforma invoice and loading slip.
              </p>

              <button
                onClick={handleReset}
                style={{
                  background: 'var(--primary-600)',
                  color: '#ffffff',
                  fontWeight: 700,
                  padding: '0.75rem 2rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem'
                }}
              >
                Back to Marketplace
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                background: 'var(--surface-hover)',
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Ex-Plant Rate:</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary-900)' }}>₹{basePrice.toLocaleString('en-IN')} / MT</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Standard Grade:</span>
                  <span style={{ fontWeight: 600 }}>{product.grade}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Purity / Standard:</span>
                  <span style={{ fontWeight: 600, color: '#16a34a' }}>{product.purity} ({product.standards[0]})</span>
                </div>
              </div>

              <div className="responsive-grid-2" style={{ marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                    Required Tonnage (MT)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="number"
                      min={product.minOrderQuantityMT}
                      step={1}
                      value={tonnage}
                      onChange={(e) => setTonnage(Number(e.target.value))}
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
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem', display: 'block' }}>
                    Min. Order: {product.minOrderQuantityMT} MT
                  </span>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                    Delivery Pincode
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
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem', display: 'block' }}>
                    Verified stockyard dispatch
                  </span>
                </div>
              </div>

              {/* Price Calculation Card */}
              <div style={{
                background: '#0a192f',
                color: '#ffffff',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                  <Calculator size={14} />
                  <span>Transparent Price Estimate</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  <span>Base Value ({tonnage} MT @ ₹{basePrice.toLocaleString('en-IN')})</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                  <span>GST (18% Input Tax Credit Eligible)</span>
                  <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Estimated Invoice Value:</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Buyer Details */}
              <div className="responsive-grid-2" style={{ marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Company / Legal Entity Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  style={{
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem'
                  }}
                />
                <input
                  type="tel"
                  placeholder="Mobile (For Instant Proforma)"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  required
                  style={{
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={14} color="#16a34a" /> 100% MTC 3.1 Certified
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Truck size={14} color="#2563eb" /> Insured GPS Fleet
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <FileText size={14} color="#f59e0b" /> GST B2B Invoice
                </span>
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
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)'
                }}
              >
                Lock Spot Rate & Request Proforma
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

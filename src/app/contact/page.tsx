'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Building,
  Headphones,
  HelpCircle
} from 'lucide-react';
import { BRANCH_OFFICES } from '@/lib/data';

export default function ContactPage() {
  const [department, setDepartment] = useState('sales');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--surface-bg)', padding: '2.5rem 0 5rem 0' }}>
      <div className="container">
        {/* BREADCRUMB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: 'var(--primary-600)' }}>Home</Link>
          <span>/</span>
          <span>Contact &amp; Branch Offices</span>
        </div>

        {/* HEADER */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary-600)', letterSpacing: '1px' }}>
            National Sales &amp; Support Network
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-900)', textTransform: 'uppercase', lineHeight: 1.1, marginTop: '0.25rem' }}>
            Get in Touch with <span>AR Metals</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '750px', marginTop: '0.5rem' }}>
            Connect directly with our specialized industrial sales managers, trade financing officers, and regional dispatch coordinators across India.
          </p>
        </div>

        {/* TOP CONTACT CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '44px', height: '44px', background: 'var(--primary-50)', color: 'var(--primary-600)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <PhoneCall size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.25rem' }}>Direct Helpline</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Available Monday through Saturday, 9:00 AM - 7:30 PM IST</p>
            <a href="tel:+919879879871" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-600)', fontFamily: 'var(--font-heading)' }}>
              +91 9879879871
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '44px', height: '44px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold-dark)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Mail size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.25rem' }}>Email Inquiries</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Fast responses within 2 business hours for proforma requests</p>
            <a href="mailto:sales@armetals.com" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-600)' }}>
              sales@armetals.com
            </a>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '44px', height: '44px', background: 'rgba(16, 185, 129, 0.15)', color: '#16a34a', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Building size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.25rem' }}>Corporate Headquarters</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Statesman House, Barakhamba Road, Connaught Place</p>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>
              New Delhi NCR 110001
            </div>
          </div>
        </div>

        {/* INTERACTIVE INQUIRY FORM & OFFICE DIRECTORY */}
        <div className="split-content-layout" style={{ marginBottom: '4rem' }}>
          {/* FORM */}
          <div style={{
            background: '#ffffff',
            border: '1px solid var(--surface-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
              Send an Official Inquiry
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
              Fill in your contact and requirements. An assigned Relationship Officer will connect with you promptly.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.15)', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
                  Inquiry Transmitted Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{name}</strong>. A specialist from our <strong>{department.toUpperCase()}</strong> desk will reach out to <strong>{email}</strong> or call you at <strong>{phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: 'var(--primary-600)', color: '#ffffff', padding: '0.65rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: '0.875rem' }}
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                    Select Department / Nature of Inquiry *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', outline: 'none' }}
                  >
                    <option value="sales">Metals Sales, Rates &amp; Spot Booking</option>
                    <option value="credit">Channel Financing &amp; MSME Credit Facility</option>
                    <option value="logistics">Order Logistics, Truck GPS &amp; Dispatch Status</option>
                    <option value="quality">Quality Certificates, MTC 3.1 &amp; Lab Reports</option>
                    <option value="grievance">Grievance Officer &amp; Executive Escalations</option>
                  </select>
                </div>

                <div className="responsive-grid-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Sharma Wire &amp; Cables"
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>
                </div>

                <div className="responsive-grid-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rajesh@company.com"
                      style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                    Message / Inquired Metals / Specifications *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe required metals, tonnage, destination plant, and target timeline..."
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--primary-600)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Send size={16} />
                  <span>Transmit Inquiry to Relationship Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* REGIONAL OFFICES ACCORDION */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1.25rem' }}>
              Regional Branch Directory
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {BRANCH_OFFICES.map((branch, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid var(--surface-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)' }}>{branch.name}</h3>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-600)', marginBottom: '0.5rem' }}>
                    {branch.type}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px' }} color="var(--accent-gold-dark)" />
                    <span>{branch.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    <PhoneCall size={14} color="var(--primary-600)" />
                    <span>{branch.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    <Clock size={14} />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

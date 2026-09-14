'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, Phone, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<'otp' | 'password'>('otp');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [gstin, setGstin] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setLoggedIn(true);
      setTimeout(() => router.push('/products'), 1500);
    }
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (gstin && password) {
      setLoggedIn(true);
      setTimeout(() => router.push('/products'), 1500);
    }
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
        maxWidth: '460px',
        width: '100%',
        boxShadow: 'var(--shadow-xl)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'var(--primary-900)',
          color: '#ffffff',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #0a192f 0%, #0052cc 100%)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '0.75rem',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: '1.25rem'
          }}>
            AR
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase' }}>
            B2B Buyer Portal
          </h2>
          <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginTop: '0.2rem' }}>
            Access live mill quotes, approved credit lines &amp; dispatch tracking
          </p>
        </div>

        <div style={{ padding: '2rem' }}>
          {loggedIn ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.25rem' }}>Authentication Successful</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Redirecting to your AR Metals dashboard...</p>
            </div>
          ) : (
            <>
              {/* LOGIN METHOD TABS */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'var(--surface-hover)',
                borderRadius: 'var(--radius-md)',
                padding: '0.25rem',
                marginBottom: '1.5rem'
              }}>
                <button
                  type="button"
                  onClick={() => { setLoginMethod('otp'); setOtpSent(false); }}
                  style={{
                    padding: '0.55rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    fontWeight: loginMethod === 'otp' ? 700 : 500,
                    background: loginMethod === 'otp' ? '#ffffff' : 'transparent',
                    color: loginMethod === 'otp' ? 'var(--primary-600)' : 'var(--text-muted)',
                    boxShadow: loginMethod === 'otp' ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  Mobile OTP
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('password')}
                  style={{
                    padding: '0.55rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    fontWeight: loginMethod === 'password' ? 700 : 500,
                    background: loginMethod === 'password' ? '#ffffff' : 'transparent',
                    color: loginMethod === 'password' ? 'var(--primary-600)' : 'var(--text-muted)',
                    boxShadow: loginMethod === 'password' ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  GSTIN &amp; Password
                </button>
              </div>

              {loginMethod === 'otp' ? (
                !otpSent ? (
                  <form onSubmit={handleSendOtp}>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                        Registered Mobile Number
                      </label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-muted)' }}>+91</span>
                        <input
                          type="tel"
                          maxLength={10}
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                          placeholder="98765 43210"
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem 0.65rem 3.2rem',
                            border: '1px solid var(--surface-border)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: 'var(--primary-600)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span>Send 6-Digit OTP</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp}>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)' }}>
                          Enter OTP sent to +91 {mobile}
                        </label>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          style={{ fontSize: '0.75rem', color: 'var(--primary-600)', fontWeight: 600 }}
                        >
                          Change Number
                        </button>
                      </div>
                      <input
                        type="text"
                        maxLength={6}
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        placeholder="••••••"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          textAlign: 'center',
                          letterSpacing: '8px',
                          border: '1px solid var(--surface-border)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          outline: 'none'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
                        color: '#0a192f',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      Verify OTP &amp; Enter Marketplace
                    </button>
                  </form>
                )
              ) : (
                <form onSubmit={handlePasswordLogin}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      Company GSTIN / PAN
                    </label>
                    <input
                      type="text"
                      required
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value.toUpperCase())}
                      placeholder="e.g. 27AAACA1234A1Z5"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        border: '1px solid var(--surface-border)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      Portal Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
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

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: 'var(--primary-600)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    Secure Sign In
                  </button>
                </form>
              )}

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--surface-border)',
                textAlign: 'center',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}>
                New enterprise buyer?{' '}
                <Link href="/auth/register" style={{ color: 'var(--primary-600)', fontWeight: 700 }}>
                  Register Company &amp; Get Credit Line →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

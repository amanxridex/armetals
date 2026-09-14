'use client';

import React, { useState } from 'react';
import { MapPin, X, CheckCircle2, Truck, Warehouse, ArrowRight } from 'lucide-react';
import { WAREHOUSE_HUBS } from '@/lib/data';

interface PincodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPincode: string;
  onSelectPincode: (pincode: string, city: string) => void;
}

export default function PincodeModal({
  isOpen,
  onClose,
  currentPincode,
  onSelectPincode,
}: PincodeModalProps) {
  const [inputPincode, setInputPincode] = useState(currentPincode);
  const [checkResult, setCheckResult] = useState<{
    city: string;
    hub: string;
    transitTime: string;
    stockStatus: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPincode || inputPincode.length < 6) return;

    // Simulate proximity search
    const firstDigit = inputPincode.charAt(0);
    let matchedHub = WAREHOUSE_HUBS[0]; // default Mumbai
    if (firstDigit === '1' || firstDigit === '2') matchedHub = WAREHOUSE_HUBS[1]; // Delhi NCR
    else if (firstDigit === '3') matchedHub = WAREHOUSE_HUBS[2]; // Ahmedabad
    else if (firstDigit === '4') matchedHub = WAREHOUSE_HUBS[0]; // Mumbai
    else if (firstDigit === '5') matchedHub = WAREHOUSE_HUBS[5]; // Hyderabad
    else if (firstDigit === '6') matchedHub = WAREHOUSE_HUBS[3]; // Chennai
    else if (firstDigit === '7') matchedHub = WAREHOUSE_HUBS[4]; // Kolkata
    else if (firstDigit === '8' || firstDigit === '9') matchedHub = WAREHOUSE_HUBS[6]; // Raipur

    setCheckResult({
      city: matchedHub.city,
      hub: matchedHub.location,
      transitTime: '24 - 48 Hours',
      stockStatus: 'Immediate Dispatch Ready (100% Stocked)'
    });
  };

  const handleConfirm = () => {
    if (checkResult) {
      onSelectPincode(inputPincode, checkResult.city);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <MapPin size={20} color="var(--accent-gold)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Choose Delivery Location</h3>
          </div>
          <button onClick={onClose} style={{ color: '#94a3b8' }}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-pad">
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Enter your factory or delivery PIN code to view nearest AR Metals stockyards, live available tonnage, and verified delivery timelines.
          </p>

          <form onSubmit={handleCheck} style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <input
              type="text"
              maxLength={6}
              value={inputPincode}
              onChange={(e) => setInputPincode(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter 6-Digit PIN (e.g. 400001)"
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.95rem',
                outline: 'none',
                fontWeight: 600,
                letterSpacing: '1px'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--primary-600)',
                color: '#ffffff',
                fontWeight: 600,
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem'
              }}
            >
              Verify Hub
            </button>
          </form>

          {checkResult ? (
            <div style={{
              background: 'var(--primary-50)',
              border: '1px solid var(--primary-100)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534', fontWeight: 700, marginBottom: '0.75rem' }}>
                <CheckCircle2 size={18} />
                <span>Serviceable Delivery Zone: {checkResult.city} ({inputPincode})</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.8125rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                  <Warehouse size={16} color="var(--primary-600)" />
                  <span><strong>Stockyard:</strong> {checkResult.hub}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                  <Truck size={16} color="var(--primary-600)" />
                  <span><strong>Transit:</strong> {checkResult.transitTime}</span>
                </div>
              </div>

              <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#15803d', fontWeight: 600 }}>
                ✓ {checkResult.stockStatus}
              </div>

              <button
                onClick={handleConfirm}
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  background: 'var(--primary-600)',
                  color: '#ffffff',
                  fontWeight: 700,
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>Set as Default Location</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Or select major industrial hubs:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {WAREHOUSE_HUBS.map((hub) => (
                  <button
                    key={hub.city}
                    type="button"
                    onClick={() => {
                      setInputPincode(hub.pincode);
                      setCheckResult({
                        city: hub.city,
                        hub: hub.location,
                        transitTime: 'Within 24 Hours',
                        stockStatus: `Direct Dispatch from ${hub.capacityMT} Hub`
                      });
                    }}
                    style={{
                      padding: '0.45rem 0.75rem',
                      background: 'var(--surface-hover)',
                      border: '1px solid var(--surface-border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-main)',
                      fontWeight: 500
                    }}
                  >
                    {hub.city} ({hub.pincode})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES_DATA, PRODUCTS_CATALOG, MetalProduct } from '@/lib/data';
import QuickQuoteModal from '@/components/ui/QuickQuoteModal';
import {
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  ChevronRight,
  FileText,
  Download,
  Flame,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const categoryInfo = CATEGORIES_DATA[categorySlug];

  const [quoteProduct, setQuoteProduct] = useState<MetalProduct | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  if (!categoryInfo) {
    return (
      <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Category Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>The requested metal category does not exist.</p>
        <Link href="/products" style={{ background: 'var(--primary-600)', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)' }}>
          Return to Products Catalog
        </Link>
      </div>
    );
  }

  const categoryProducts = PRODUCTS_CATALOG.filter((p) => p.category === categorySlug);

  const handleOpenQuote = (product: MetalProduct) => {
    setQuoteProduct(product);
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ background: 'var(--surface-bg)' }}>
      {/* 1. CATEGORY HERO */}
      <section style={{
        background: 'radial-gradient(circle at 80% 30%, #1e3a8a 0%, #0a192f 70%, #030712 100%)',
        color: '#ffffff',
        padding: '4rem 0 4.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: '#93c5fd', marginBottom: '1.25rem' }}>
            <Link href="/" style={{ color: '#93c5fd' }}>Home</Link>
            <span>/</span>
            <Link href="/products" style={{ color: '#93c5fd' }}>Products</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{categoryInfo.name}</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span style={{
              background: 'rgba(245, 158, 11, 0.2)',
              color: 'var(--accent-gold)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}>
              Certified Primary Metallurgical Grade
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.2rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              {categoryInfo.name} <span>Solutions</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {categoryInfo.subtitle}
            </p>

            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {categoryInfo.overview}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/rfq"
                style={{
                  background: 'var(--accent-gold)',
                  color: '#0a192f',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>Bulk {categoryInfo.name} RFQ</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/live-prices"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                View LME / MCX Rates
              </Link>
            </div>
          </div>

          {/* HIGHLIGHT STATS ROW */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            {categoryInfo.highlightStats.map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold)', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PRODUCT VARIANTS AVAILABLE IN THIS CATEGORY */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-head-box">
            <div className="section-subhead">Available Stock &amp; Grades</div>
            <h2 className="section-title">{categoryInfo.name} <span>Product Portfolio</span></h2>
            <p className="section-desc">
              Direct ex-plant allocations and ready warehouse stock for immediate dispatch.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {categoryProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-head">
                  <img src={product.image} alt={product.name} className="product-card-img" />
                  <div className="product-category-tag">{product.shape}</div>
                  <div className="product-stock-tag">{product.availableStockMT} MT Available</div>
                </div>

                <div className="product-card-body">
                  <span className="product-grade-badge">{product.grade}</span>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc-snippet">{product.description}</p>

                  <div className="product-meta-row">
                    <span>Purity Standard: <strong>{product.purity}</strong></span>
                    <span>Origin: <strong>{product.originPlant}</strong></span>
                  </div>

                  <div className="product-meta-row">
                    <span>Applicable Spec: <strong>{product.standards[0]}</strong></span>
                    <span>Min Order: <strong>{product.minOrderQuantityMT} MT</strong></span>
                  </div>

                  <div className="product-price-box">
                    <div>
                      <div className="product-price-label">Ex-Works Rate</div>
                      <div className="product-price-number">
                        ₹{product.pricePerMT.toLocaleString('en-IN')}
                        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}> / MT</span>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: product.priceDirection === 'up' ? 'var(--accent-emerald)' : 'var(--accent-rose)'
                    }}>
                      {product.priceDirection === 'up' ? '+0.85%' : '-0.45%'}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-card-quote"
                    style={{ width: '100%', padding: '0.75rem' }}
                    onClick={() => handleOpenQuote(product)}
                  >
                    <span>Instant Spot Booking / RFQ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & STANDARDS */}
      <section className="section-wrapper" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-head-box">
            <div className="section-subhead">Metallurgical Assurance</div>
            <h2 className="section-title">Chemical &amp; <span>Mechanical Specifications</span></h2>
            <p className="section-desc">
              Every shipment is backed by NABL accredited laboratory spectrometry and EN 10204 Type 3.1 Mill Test Certification.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {categoryProducts.map((p) => (
              <div key={p.id} style={{
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                background: 'var(--surface-bg)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--surface-border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-900)' }}>{p.grade}</h4>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-600)', background: 'var(--primary-50)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {p.shape}
                  </span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Chemical Composition (% Tolerances)
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.8125rem' }}>
                    {Object.entries(p.technicalSpecs.composition).map(([element, pct]) => (
                      <div key={element} style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '0.35rem 0.6rem', borderRadius: '4px', border: '1px solid var(--surface-border)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{element}:</span>
                        <strong style={{ color: 'var(--primary-900)' }}>{pct}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Mechanical &amp; Physical Properties
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.4rem', fontSize: '0.8125rem' }}>
                    {Object.entries(p.technicalSpecs.mechanical).map(([prop, val]) => (
                      <div key={prop} style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '0.35rem 0.6rem', borderRadius: '4px', border: '1px solid var(--surface-border)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{prop}:</span>
                        <strong style={{ color: 'var(--primary-900)' }}>{val}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.75rem', borderTop: '1px solid var(--surface-border)', paddingTop: '0.75rem' }}>
                  <div><strong>Dimensions:</strong> {p.technicalSpecs.dimensions}</div>
                  <div style={{ marginTop: '0.25rem' }}><strong>Packaging:</strong> {p.technicalSpecs.packaging}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE & STANDARDS BADGES */}
      <section className="section-wrapper" style={{ background: 'var(--primary-950)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <ShieldCheck size={44} color="var(--accent-gold)" style={{ margin: '0 auto 1rem auto' }} />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Bureau of Indian Standards &amp; Global Conformance
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            All {categoryInfo.name} distributed by AR Metals strictly complies with national and international metallurgy standard specifications:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {categoryInfo.standards.map((std) => (
              <span key={std} style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#ffffff'
              }}>
                ✓ {std}
              </span>
            ))}
          </div>

          <Link
            href="/rfq"
            style={{
              background: 'var(--accent-gold)',
              color: '#0a192f',
              fontWeight: 800,
              padding: '0.85rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              display: 'inline-block'
            }}
          >
            Request Quotation for {categoryInfo.name}
          </Link>
        </div>
      </section>

      {/* QUICK QUOTE MODAL */}
      <QuickQuoteModal
        product={quoteProduct}
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}

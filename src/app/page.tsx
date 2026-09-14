'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  Truck,
  CreditCard,
  FileCheck,
  ChevronRight,
  ArrowRight,
  Cpu,
  Layers,
  Award,
  Zap,
  CheckCircle2,
  Building2,
  Factory
} from 'lucide-react';
import { PRODUCTS_CATALOG, CATEGORIES_DATA, LIVE_MARKET_TICKERS, MetalProduct } from '@/lib/data';
import QuickQuoteModal from '@/components/ui/QuickQuoteModal';

export default function HomePage() {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<MetalProduct | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const featuredSpotProducts = PRODUCTS_CATALOG.slice(0, 6);

  const openQuoteModal = (product: MetalProduct) => {
    setSelectedProductForQuote(product);
    setIsQuoteModalOpen(true);
  };

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="hero-banner">
        <div className="container hero-grid">
          <div>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--accent-gold)', borderRadius: '2px' }} />
              <span>India&apos;s Digital Metals Marketplace</span>
            </div>

            <h1 className="hero-title">
              World-Class <span>Metals</span>, Seamless <span>Procurement</span>
            </h1>

            <p className="hero-desc">
              Direct access to prime quality Aluminium, Copper, Zinc, Lead, Steel &amp; Silver. Guaranteed chemical purity, live LME/MCX spot pricing, up to 90 days credit, and rapid 24-48 hour delivery across 30+ regional stockyards.
            </p>

            <div className="hero-cta-group">
              <Link href="/products" className="btn-primary-hero">
                <span>Explore Metal Catalog</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/rfq" className="btn-secondary-hero">
                <span>Custom Bulk RFQ</span>
              </Link>
              <Link href="/live-prices" className="btn-secondary-hero" style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: 'var(--accent-gold)' }}>
                <TrendingUp size={16} />
                <span>Today&apos;s Price Matrix</span>
              </Link>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <h3>125K+ MT</h3>
                <p>Metals Dispatched</p>
              </div>
              <div className="hero-stat-item">
                <h3>30+ Hubs</h3>
                <p>Pan-India Stockyards</p>
              </div>
              <div className="hero-stat-item">
                <h3>4,500+</h3>
                <p>B2B MSME Clients</p>
              </div>
              <div className="hero-stat-item">
                <h3>100% MTC</h3>
                <p>Mill Test Certified</p>
              </div>
            </div>
          </div>

          {/* HERO LIVE PRICE BOARD */}
          <div>
            <div className="hero-card-board">
              <div className="board-header">
                <div className="board-header-title">
                  <div className="live-pulse-dot"></div>
                  <span>Today&apos;s Indicative Spot Board</span>
                </div>
                <Link href="/live-prices" style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
                  View Full Board →
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {LIVE_MARKET_TICKERS.slice(0, 5).map((ticker, idx) => (
                  <div key={idx} className="board-item-row">
                    <div>
                      <div className="board-metal-name">{ticker.symbol}</div>
                      <div className="board-metal-grade">Exchange: {ticker.exchange}</div>
                    </div>
                    <div className="board-price-group">
                      <div className="board-price-value">{ticker.price}</div>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: ticker.direction === 'up' ? 'var(--accent-emerald)' : 'var(--accent-rose)'
                      }}>
                        {ticker.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Ready to procure spot tonnage?</span>
                <Link
                  href="/rfq"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dark) 100%)',
                    color: '#0a192f',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  Book Live Rate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METAL CATEGORIES DIRECTORY (TAKES USER TO DEDICATED PAGES) */}
      <section className="section-wrapper" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-head-box">
            <div className="section-subhead">Explore Products by Category</div>
            <h2 className="section-title">Comprehensive <span>Ferrous &amp; Non-Ferrous</span> Portfolio</h2>
            <p className="section-desc">
              Browse our complete catalog of prime quality metals. Every category takes you to its dedicated specification sheet, chemical purity standards, and instant ordering tools.
            </p>
          </div>

          <div className="category-card-grid">
            {Object.values(CATEGORIES_DATA).map((cat) => (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="category-card">
                <div className="category-img-container">
                  <img src={cat.bannerImage} alt={cat.name} className="category-img" />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 25, 47, 0.85) 0%, transparent 60%)'
                  }} />
                  <span style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '1rem',
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 700
                  }}>
                    {cat.name}
                  </span>
                </div>

                <div className="category-content-box">
                  <div className="category-tagline">{cat.subtitle}</div>

                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                    marginBottom: '1rem',
                    lineHeight: 1.5
                  }}>
                    <strong>Grades:</strong> {cat.gradesOffered.slice(0, 2).join(', ')}...
                  </div>

                  <div className="category-footer-link">
                    <span>View Specifications &amp; Stock</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED READY-TO-DISPATCH SPOT INVENTORY */}
      <section className="section-wrapper" style={{ background: 'var(--surface-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-subhead">Live Warehouse Stock</div>
              <h2 className="section-title">Spot Booking <span>Available Now</span></h2>
              <p className="section-desc">Immediate dispatch available from regional warehouses with verified Mill Test Certificates.</p>
            </div>
            <Link href="/products" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--primary-600)',
              fontWeight: 700,
              fontSize: '0.95rem'
            }}>
              <span>View All 15+ Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {featuredSpotProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-head">
                  <img src={product.image} alt={product.name} className="product-card-img" />
                  <div className="product-category-tag">{product.categoryLabel}</div>
                  <div className="product-stock-tag">{product.availableStockMT} MT In Stock</div>
                </div>

                <div className="product-card-body">
                  <span className="product-grade-badge">{product.grade}</span>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc-snippet">{product.description}</p>

                  <div className="product-meta-row">
                    <span>Purity: <strong>{product.purity}</strong></span>
                    <span>Standard: <strong>{product.standards[0]}</strong></span>
                  </div>

                  <div className="product-meta-row">
                    <span>Origin: <strong>{product.originPlant}</strong></span>
                    <span>MOQ: <strong>{product.minOrderQuantityMT} MT</strong></span>
                  </div>

                  <div className="product-price-box">
                    <div>
                      <div className="product-price-label">Ex-Plant Base Price</div>
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

                  <div className="product-card-actions">
                    <button
                      type="button"
                      className="btn-card-quote"
                      onClick={() => openQuoteModal(product)}
                    >
                      <span>Book / RFQ</span>
                    </button>
                    <Link
                      href={`/products/${product.category}`}
                      className="btn-card-spec"
                    >
                      <span>Full Specs</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY PROCURE FROM AR METALS */}
      <section className="section-wrapper" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-head-box" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div className="section-subhead">Enterprise Advantages</div>
            <h2 className="section-title">Built for <span>India&apos;s Manufacturing Powerhouses</span></h2>
            <p className="section-desc" style={{ margin: '0.5rem auto 0 auto' }}>
              We eliminate traditional middleman opacity, offering direct mill-linked transparency, guaranteed metallurgy, and tailored business credit lines.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-title">100% Quality &amp; MTC Guarantee</h3>
              <p className="feature-desc">
                Every batch arrives with verified Mill Test Certificates (EN 10204 Type 3.1) showing exact heat numbers, chemical composition, and mechanical properties.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-gold)' }}>
                <CreditCard size={28} />
              </div>
              <h3 className="feature-title">Up to 90 Days Channel Financing</h3>
              <p className="feature-desc">
                Partnered with top tier banks &amp; NBFCs (SBI, HDFC, ICICI, Tata Capital) to offer MSMEs revolving credit lines up to ₹25 Crores with 0% interest for the first 30 days.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Truck size={28} />
              </div>
              <h3 className="feature-title">Pan-India Doorstep Delivery</h3>
              <p className="feature-desc">
                Dedicated fleet of heavy multi-axle trailers equipped with IoT GPS sensors, real-time dispatch alerts, and full transit insurance from stockyard to factory floor.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                <TrendingUp size={28} />
              </div>
              <h3 className="feature-title">Transparent LME &amp; MCX Benchmarks</h3>
              <p className="feature-desc">
                Fair, transparent spot rates linked directly to international London Metal Exchange (LME) and domestic MCX movements without hidden broker margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW PROCUREMENT WORKS (4-STEP WORKFLOW) */}
      <section className="section-wrapper" style={{ background: 'var(--primary-950)', color: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <div className="section-subhead" style={{ color: 'var(--accent-gold)' }}>Simplified 4-Step Process</div>
            <h2 className="section-title" style={{ color: '#ffffff' }}>How Metal Procurement Works on AR Metals</h2>
            <p className="section-desc" style={{ color: '#94a3b8', margin: '0.5rem auto 0 auto' }}>
              From discovering available warehouse stock to unloading at your factory gate in four transparent steps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.1)', lineHeight: 1, marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Select Metal &amp; Shape</h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5 }}>Choose from Aluminium, Copper, Zinc, Lead, or Steel in ingots, billets, wire rods, coils, or rebars.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.1)', lineHeight: 1, marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Lock Spot Price or RFQ</h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5 }}>View real-time transparent rate per MT. Confirm spot allocation or request custom tonnage quotes.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.1)', lineHeight: 1, marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Choose Payment / Credit</h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5 }}>Pay via RTGS, Letter of Credit (LC), or activate your AR Metals 30-90 days approved channel credit.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.1)', lineHeight: 1, marginBottom: '0.5rem' }}>04</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Doorstep Delivery with MTC</h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5 }}>Track transit GPS in real-time. Receive delivery with certified physical &amp; digital MTC 3.1 test reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="section-wrapper" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-head-box" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div className="section-subhead">Sectors We Empower</div>
            <h2 className="section-title">Fueling <span>Key Indian Industries</span></h2>
            <p className="section-desc" style={{ margin: '0.5rem auto 0 auto' }}>
              From heavy infrastructure and renewable green power to precision automotive casting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'var(--surface-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)', textAlign: 'center' }}>
              <Building2 size={32} color="var(--primary-600)" style={{ margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Infrastructure &amp; EPC</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>High ductility Fe 550D TMT, DI pipes, and structural steel.</p>
            </div>

            <div style={{ background: 'var(--surface-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)', textAlign: 'center' }}>
              <Zap size={32} color="var(--accent-gold)" style={{ margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Power &amp; Cables</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EC grade aluminium &amp; continuous cast copper rods (&gt;101% IACS).</p>
            </div>

            <div style={{ background: 'var(--surface-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)', textAlign: 'center' }}>
              <Factory size={32} color="#10b981" style={{ margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Automotive &amp; Castings</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Primary A356.2 foundry alloys, extrusion billets &amp; SHG zinc.</p>
            </div>

            <div style={{ background: 'var(--surface-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)', textAlign: 'center' }}>
              <Cpu size={32} color="#6366f1" style={{ margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Solar &amp; Electronics</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>999.9 fine silver, galvanized structures, and precision busbars.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #0052cc 100%)',
        color: '#ffffff',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Ready to Optimize Your Industrial Metal Procurement?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '2rem', lineHeight: 1.6 }}>
            Join 4,500+ MSMEs and Tier-1 manufacturers securing direct mill-quality metals at transparent LME/MCX linked rates with instant credit financing.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/rfq" style={{
              background: 'var(--accent-gold)',
              color: '#0a192f',
              fontWeight: 800,
              padding: '0.85rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem'
            }}>
              Submit a Bulk RFQ
            </Link>
            <Link href="/contact" style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              fontWeight: 600,
              padding: '0.85rem 1.75rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem'
            }}>
              Contact Branch Desk
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK QUOTE MODAL */}
      <QuickQuoteModal
        product={selectedProductForQuote}
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}

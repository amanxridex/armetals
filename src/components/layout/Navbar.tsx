'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  MapPin,
  PhoneCall,
  Mail,
  FileText,
  User,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Home,
  Package,
  Headphones,
  Info,
  Building,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import PincodeModal from '@/components/ui/PincodeModal';
import { PRODUCTS_CATALOG } from '@/lib/data';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPincodeOpen, setIsPincodeOpen] = useState(false);
  const [selectedPincode, setSelectedPincode] = useState('400001');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDrop, setShowSearchDrop] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileDrawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
    setShowSearchDrop(false);
  }, [pathname]);

  const searchResults = searchQuery.trim()
    ? PRODUCTS_CATALOG.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shape.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchDrop(false);
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    { label: 'Aluminium', href: '/products/aluminium' },
    { label: 'Copper', href: '/products/copper' },
    { label: 'Zinc & Lead', href: '/products/zinc-lead' },
    { label: 'Steel & Iron', href: '/products/steel-iron' },
    { label: 'Silver', href: '/products/silver' },
    { label: 'Live Prices', href: '/live-prices', highlight: true },
    { label: 'Services & Financing', href: '/services' },
    { label: 'Bulk RFQ', href: '/rfq' },
    { label: 'About Us', href: '/about' },
    { label: 'Branches & Contact', href: '/contact' },
  ];

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Desktop) */}
      <div className="top-notice-bar">
        <div className="container notice-flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.5px' }}>
              DIRECT MILL PRICING:
            </span>
            <span>Pan-India 24-48h Delivery | 30+ Certified Hubs | 100% MTC 3.1 Certified</span>
          </div>

          <div className="notice-links">
            <a href="tel:+919879879871" className="notice-link-item">
              <PhoneCall size={12} />
              <span>+91 9879879871</span>
            </a>
            <a href="mailto:sales@armetals.com" className="notice-link-item">
              <Mail size={12} />
              <span>sales@armetals.com</span>
            </a>
            <Link href="/live-prices" className="notice-link-item" style={{ color: 'var(--accent-gold)' }}>
              <TrendingUp size={12} />
              <span>Daily Market Ticker</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="main-header">
        <div className="container header-row">
          {/* TOP MOBILE ROW: Brand Logo + Location Button + Hamburger */}
          <div className="header-top-mobile-row">
            <Link href="/" className="logo-brand">
              <Logo variant="dark" size="md" />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                className="location-btn"
                onClick={() => setIsPincodeOpen(true)}
                title="Select delivery location"
              >
                <MapPin size={15} color="var(--primary-600)" />
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1 }}>Deliver to</span>
                  <strong>{selectedCity}</strong>
                </div>
                <ChevronDown size={12} color="#94a3b8" />
              </button>

              <button
                type="button"
                className="mobile-hamburger-btn"
                onClick={() => setMobileDrawerOpen(true)}
                aria-label="Open Mobile Navigation Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>

          {/* SEARCH FIELD */}
          <div className="header-search-location">
            <div className="search-container">
              <form onSubmit={handleSearchSubmit}>
                <Search size={16} className="search-icon-pos" />
                <input
                  type="text"
                  className="search-input-field"
                  placeholder="Search Aluminium, Copper, Zinc, Steel, Wire Rods..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDrop(true);
                  }}
                  onFocus={() => setShowSearchDrop(true)}
                />
              </form>

              {/* SEARCH AUTOCOMPLETE DROPDOWN */}
              {showSearchDrop && searchResults.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  marginTop: '0.35rem',
                  background: '#ffffff',
                  border: '1px solid var(--surface-border)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 200,
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '0.5rem 0.85rem', background: 'var(--surface-hover)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    Matching Metal Products ({searchResults.length})
                  </div>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setShowSearchDrop(false);
                        setSearchQuery('');
                        router.push(`/products/${product.category}`);
                      }}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderBottom: '1px solid var(--surface-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>{product.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{product.shape} • {product.grade}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                          ₹{product.pricePerMT.toLocaleString('en-IN')}/MT
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={handleSearchSubmit}
                    style={{
                      padding: '0.65rem 0.85rem',
                      textAlign: 'center',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--primary-600)',
                      cursor: 'pointer',
                      background: 'var(--primary-50)'
                    }}
                  >
                    View all matching results in Catalog →
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="header-action-group">
            <Link href="/rfq" className="btn-rfq-quick">
              <FileText size={16} />
              <span>Request Quote</span>
            </Link>

            <Link href="/auth/login" className="btn-signin">
              <User size={16} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>

        {/* 3. MULTI-PAGE SECONDARY NAVBAR (Horizontal scroll on tablet/desktop) */}
        <div className="sub-nav-bar">
          <div className="container">
            <nav className="nav-links-list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-item-link ${isActive ? 'active' : ''} ${link.highlight ? 'special-ticker' : ''}`}
                  >
                    {link.highlight && <TrendingUp size={14} />}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* 4. SLIDE-OVER MOBILE DRAWER */}
      {mobileDrawerOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileDrawerOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <Link href="/" onClick={() => setMobileDrawerOpen(false)}>
                <Logo variant="light" size="sm" />
              </Link>

              <button
                onClick={() => setMobileDrawerOpen(false)}
                style={{ color: '#ffffff', padding: '0.35rem' }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="mobile-drawer-body">
              {/* Quick Actions */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <Link
                  href="/rfq"
                  onClick={() => setMobileDrawerOpen(false)}
                  style={{
                    background: 'var(--accent-gold)',
                    color: '#0a192f',
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <FileText size={14} />
                  <span>Request Quote</span>
                </Link>

                <Link
                  href="/auth/login"
                  onClick={() => setMobileDrawerOpen(false)}
                  style={{
                    background: 'var(--primary-600)',
                    color: '#ffffff',
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <User size={14} />
                  <span>Buyer Login</span>
                </Link>
              </div>

              {/* Delivery Hub Bar */}
              <button
                type="button"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  setIsPincodeOpen(true);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  background: 'var(--surface-hover)',
                  border: '1px solid var(--surface-border)',
                  borderRadius: 'var(--radius-md)',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color="var(--primary-600)" />
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Deliver Location</span>
                    <strong style={{ fontSize: '0.85rem' }}>{selectedCity} ({selectedPincode})</strong>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary-600)', fontWeight: 600 }}>Change</span>
              </button>

              {/* Metal Categories Group */}
              <div>
                <div className="mobile-nav-group-title">Metal Products Portfolio</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <Link href="/products" className={`mobile-nav-link ${pathname === '/products' ? 'active' : ''}`}>
                    <span>All Products Catalog</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/products/aluminium" className={`mobile-nav-link ${pathname === '/products/aluminium' ? 'active' : ''}`}>
                    <span>Aluminium (Ingots, Billets, Wire Rods)</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/products/copper" className={`mobile-nav-link ${pathname === '/products/copper' ? 'active' : ''}`}>
                    <span>Copper (CC Rods, Cathodes)</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/products/zinc-lead" className={`mobile-nav-link ${pathname === '/products/zinc-lead' ? 'active' : ''}`}>
                    <span>Zinc &amp; Lead (SHG Zinc, Pure Lead)</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/products/steel-iron" className={`mobile-nav-link ${pathname === '/products/steel-iron' ? 'active' : ''}`}>
                    <span>Steel &amp; Iron (Fe 550D TMT, Rebars)</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/products/silver" className={`mobile-nav-link ${pathname === '/products/silver' ? 'active' : ''}`}>
                    <span>Silver &amp; Precious (999.9 Fine Bars)</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Markets & Services Group */}
              <div>
                <div className="mobile-nav-group-title">Markets &amp; Services</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <Link href="/live-prices" className={`mobile-nav-link ${pathname === '/live-prices' ? 'active' : ''}`} style={{ color: 'var(--accent-gold-dark)' }}>
                    <span>Daily Live Market Ticker</span>
                    <TrendingUp size={16} />
                  </Link>
                  <Link href="/services" className={`mobile-nav-link ${pathname === '/services' ? 'active' : ''}`}>
                    <span>Channel Financing (Up to 90 Days)</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}>
                    <span>About AR Metals &amp; Hubs</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link href="/contact" className={`mobile-nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                    <span>Branch Offices &amp; Support</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Helpline Desk in Drawer */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--surface-border)'
              }}>
                <a
                  href="tel:+919879879871"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--primary-900)',
                    color: '#ffffff',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    justifyContent: 'center'
                  }}
                >
                  <PhoneCall size={16} color="var(--accent-gold)" />
                  <span>Call +91 9879879871</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. APP-LIKE BOTTOM STICKY NAVIGATION BAR (Mobile Phones) */}
      <div className="mobile-bottom-bar">
        <div className="mobile-bottom-nav-grid">
          <Link href="/" className={`bottom-nav-item ${pathname === '/' ? 'active' : ''}`}>
            <Home size={19} />
            <span>Home</span>
          </Link>
          <Link href="/products" className={`bottom-nav-item ${pathname.startsWith('/products') ? 'active' : ''}`}>
            <Package size={19} />
            <span>Products</span>
          </Link>
          <Link href="/live-prices" className={`bottom-nav-item ${pathname === '/live-prices' ? 'active' : ''}`}>
            <TrendingUp size={19} />
            <span>Prices</span>
          </Link>
          <Link href="/rfq" className={`bottom-nav-item ${pathname === '/rfq' ? 'active' : ''}`}>
            <FileText size={19} />
            <span>RFQ Quote</span>
          </Link>
          <Link href="/auth/login" className={`bottom-nav-item ${pathname.startsWith('/auth') ? 'active' : ''}`}>
            <User size={19} />
            <span>Sign In</span>
          </Link>
        </div>
      </div>

      {/* PINCODE MODAL */}
      <PincodeModal
        isOpen={isPincodeOpen}
        onClose={() => setIsPincodeOpen(false)}
        currentPincode={selectedPincode}
        onSelectPincode={(pin, city) => {
          setSelectedPincode(pin);
          setSelectedCity(city);
        }}
      />
    </>
  );
}

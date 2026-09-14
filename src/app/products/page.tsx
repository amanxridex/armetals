'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS_CATALOG, MetalProduct } from '@/lib/data';
import QuickQuoteModal from '@/components/ui/QuickQuoteModal';
import {
  Search,
  Filter,
  RotateCcw,
  SlidersHorizontal,
  ArrowUpDown,
  Download,
  CheckCircle,
  Truck,
  Warehouse,
  ChevronRight
} from 'lucide-react';

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [search, setSearch] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [selectedHub, setSelectedHub] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const [quoteProduct, setQuoteProduct] = useState<MetalProduct | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Available shapes for filter
  const allShapes = useMemo(() => {
    const shapes = new Set<string>();
    PRODUCTS_CATALOG.forEach((p) => shapes.add(p.shape));
    return Array.from(shapes);
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((p) => {
      // Category match
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      // Shape match
      if (selectedShape !== 'all' && p.shape !== selectedShape) return false;
      // Hub match
      if (selectedHub !== 'all' && !p.dispatchHubs.some((h) => h.toLowerCase().includes(selectedHub.toLowerCase()))) {
        return false;
      }
      // Search text match
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesGrade = p.grade.toLowerCase().includes(q);
        const matchesCategory = p.categoryLabel.toLowerCase().includes(q);
        const matchesShape = p.shape.toLowerCase().includes(q);
        if (!matchesName && !matchesGrade && !matchesCategory && !matchesShape) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePerMT - b.pricePerMT;
      if (sortBy === 'price-high') return b.pricePerMT - a.pricePerMT;
      if (sortBy === 'stock-high') return b.availableStockMT - a.availableStockMT;
      return 0; // default popular
    });
  }, [selectedCategory, selectedShape, selectedHub, search, sortBy]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategory('all');
    setSelectedShape('all');
    setSelectedHub('all');
    setSortBy('popular');
  };

  const handleOpenQuote = (product: MetalProduct) => {
    setQuoteProduct(product);
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ background: 'var(--surface-bg)', minHeight: '80vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container">
        {/* BREADCRUMB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          <Link href="/" style={{ color: 'var(--primary-600)' }}>Home</Link>
          <span>/</span>
          <span>Products Catalog</span>
          {selectedCategory !== 'all' && (
            <>
              <span>/</span>
              <span style={{ textTransform: 'capitalize', color: 'var(--text-main)', fontWeight: 600 }}>{selectedCategory}</span>
            </>
          )}
        </div>

        {/* HEADER */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-900)', textTransform: 'uppercase' }}>
            All Metal <span>Products &amp; Grades</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '750px', marginTop: '0.25rem' }}>
            Browse certified primary and downstream metal grades across India. Direct ex-plant and stockyard spot pricing updated in real-time.
          </p>
        </div>

        {/* MOBILE FILTER TOGGLE BUTTON */}
        <button
          type="button"
          className="mobile-filter-toggle-btn"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <SlidersHorizontal size={16} />
          <span>{showMobileFilters ? 'Hide Filters & Categories ▲' : 'Filter Metals & Categories (Tap to Open) ▼'}</span>
        </button>

        {/* CATALOG LAYOUT */}
        <div className="catalog-layout-grid">
          {/* SIDEBAR FILTERS (Always visible on desktop, toggleable on mobile) */}
          <aside
            className="catalog-filter-sidebar"
            style={{
              background: '#ffffff',
              border: '1px solid var(--surface-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
              display: showMobileFilters ? 'block' : undefined,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--surface-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                <SlidersHorizontal size={18} />
                <span>Filter Metals</span>
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                style={{ fontSize: '0.75rem', color: 'var(--primary-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>

            {/* METAL FAMILY CATEGORY FILTER */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                Metal Family
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {[
                  { id: 'all', label: 'All Metals' },
                  { id: 'aluminium', label: 'Aluminium' },
                  { id: 'copper', label: 'Copper' },
                  { id: 'zinc-lead', label: 'Zinc & Lead' },
                  { id: 'steel-iron', label: 'Steel & Iron' },
                  { id: 'silver', label: 'Silver & Precious' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: selectedCategory === cat.id ? 700 : 500,
                      background: selectedCategory === cat.id ? 'var(--primary-50)' : 'transparent',
                      color: selectedCategory === cat.id ? 'var(--primary-600)' : 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{cat.label}</span>
                    {selectedCategory === cat.id && <span style={{ width: '6px', height: '6px', background: 'var(--primary-600)', borderRadius: '50%' }} />}
                  </button>
                ))}
              </div>
            </div>

            {/* SHAPE / FORM FILTER */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                Product Form / Shape
              </label>
              <select
                value={selectedShape}
                onChange={(e) => setSelectedShape(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--surface-border)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  background: 'var(--surface-hover)'
                }}
              >
                <option value="all">All Forms / Shapes</option>
                {allShapes.map((shape) => (
                  <option key={shape} value={shape}>{shape}</option>
                ))}
              </select>
            </div>

            {/* WAREHOUSE LOCATION FILTER */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                Warehouse Proximity
              </label>
              <select
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--surface-border)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  background: 'var(--surface-hover)'
                }}
              >
                <option value="all">All Regional Stockyards</option>
                <option value="Mumbai">Mumbai (Bhiwandi Hub)</option>
                <option value="Delhi">Delhi NCR (Faridabad)</option>
                <option value="Ahmedabad">Ahmedabad (Sanand)</option>
                <option value="Chennai">Chennai (Sriperumbudur)</option>
                <option value="Kolkata">Kolkata (Dankuni)</option>
                <option value="Raipur">Raipur (Urla Complex)</option>
              </select>
            </div>

            {/* RFQ HELP CARD */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%)',
              color: '#ffffff',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginTop: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>Custom Specification?</div>
              <p style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.85rem', lineHeight: 1.4 }}>
                Looking for specific chemical alloy compositions or tailored coil slitting dimensions?
              </p>
              <Link
                href="/rfq"
                style={{
                  display: 'inline-block',
                  background: 'var(--accent-gold)',
                  color: '#0a192f',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                Submit Custom RFQ
              </Link>
            </div>
          </aside>

          {/* MAIN CATALOG DISPLAY */}
          <main>
            {/* SEARCH & SORT TOOLBAR */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--surface-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="text"
                  placeholder="Filter by grade, application, or shape..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 1rem 0.55rem 2.4rem',
                    border: '1px solid var(--surface-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '0.55rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--surface-border)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    outline: 'none',
                    background: 'var(--surface-hover)'
                  }}
                >
                  <option value="popular">Most In-Demand</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="stock-high">Available Stock: High to Low</option>
                </select>

                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', borderLeft: '1px solid var(--surface-border)', paddingLeft: '0.75rem' }}>
                  {filteredProducts.length} Results
                </div>
              </div>
            </div>

            {/* PRODUCTS LIST GRID */}
            {filteredProducts.length === 0 ? (
              <div style={{
                background: '#ffffff',
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '4rem 2rem',
                textAlign: 'center'
              }}>
                <Warehouse size={48} color="#94a3b8" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>No Matching Products Found</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  Try relaxing your search terms or resetting the shape and warehouse filters.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  style={{
                    background: 'var(--primary-600)',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '0.65rem 1.5rem',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-card-head">
                      <img src={product.image} alt={product.name} className="product-card-img" />
                      <div className="product-category-tag">{product.categoryLabel}</div>
                      <div className="product-stock-tag">{product.availableStockMT} MT Available</div>
                    </div>

                    <div className="product-card-body">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span className="product-grade-badge">{product.grade}</span>
                        <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <CheckCircle size={12} />
                          <span>{product.purity}</span>
                        </span>
                      </div>

                      <h3 className="product-title">{product.name}</h3>
                      <p className="product-desc-snippet">{product.description}</p>

                      <div className="product-meta-row">
                        <span>Shape: <strong>{product.shape}</strong></span>
                        <span>Plant: <strong>{product.originPlant}</strong></span>
                      </div>

                      <div className="product-meta-row">
                        <span>Standards: <strong>{product.standards[0]}</strong></span>
                        <span>MOQ: <strong>{product.minOrderQuantityMT} MT</strong></span>
                      </div>

                      <div className="product-price-box">
                        <div>
                          <div className="product-price-label">Indicative Base Price</div>
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
                          onClick={() => handleOpenQuote(product)}
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
            )}
          </main>
        </div>
      </div>

      {/* QUICK QUOTE MODAL */}
      <QuickQuoteModal
        product={quoteProduct}
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading Metals Catalog...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}

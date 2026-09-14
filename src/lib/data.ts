export interface MetalProduct {
  id: string;
  name: string;
  category: 'aluminium' | 'copper' | 'zinc-lead' | 'steel-iron' | 'silver';
  categoryLabel: string;
  shape: string;
  grade: string;
  purity: string;
  standards: string[];
  pricePerMT: number; // in INR per Metric Tonne
  pricePerKg?: number; // for silver or retail
  priceChange: number; // percentage (+0.8%, -0.4%)
  priceDirection: 'up' | 'down' | 'stable';
  minOrderQuantityMT: number;
  availableStockMT: number;
  originPlant: string;
  dispatchHubs: string[];
  image: string;
  description: string;
  applications: string[];
  technicalSpecs: {
    composition: Record<string, string>;
    mechanical: Record<string, string>;
    dimensions: string;
    packaging: string;
  };
}

export interface MetalCategoryInfo {
  slug: 'aluminium' | 'copper' | 'zinc-lead' | 'steel-iron' | 'silver' | 'oil-gas';
  name: string;
  subtitle: string;
  tagline: string;
  bannerImage: string;
  hoverImage?: string;
  overview: string;
  highlightStats: { label: string; value: string }[];
  standards: string[];
  gradesOffered: string[];
}

export const CATEGORIES_DATA: Record<string, MetalCategoryInfo> = {
  aluminium: {
    slug: 'aluminium',
    name: 'Aluminium',
    subtitle: 'Primary Ingots, EC Wire Rods, Billets, Rolled Products & Foundry Alloys',
    tagline: 'High-purity primary aluminium engineered for power transmission, automotive, extrusion and architectural excellence.',
    bannerImage: '/images/real/aluminium.jpg',
    hoverImage: '/images/real/aluminium1.jpg',
    overview: 'AR Metals is one of India\'s largest digital suppliers of prime-grade aluminium products. Manufactured in state-of-the-art smelters, our aluminium products meet stringent international standards (ASTM, IS, EN) with purities ranging from 99.70% (P1020) up to 99.85% (P0610). From 6063 extrusion billets to continuous-cast EC grade wire rods for electrical transmission, we guarantee seamless supply across 30+ warehouses nationwide.',
    highlightStats: [
      { label: 'Purity Level', value: 'Up to 99.85%' },
      { label: 'Dispatch Capacity', value: '60,000+ MT/mo' },
      { label: 'Standards Compliant', value: 'IS 2590 / ASTM B221' },
      { label: 'Warehouse Stock', value: 'Pan-India 24-48h' }
    ],
    standards: ['IS 2590', 'IS 4076', 'ASTM B221', 'ASTM B233', 'EN 573-3', 'DIN 1712'],
    gradesOffered: ['P1020 (99.7% Ingot)', 'P0610 (99.85% Ingot)', 'EC Grade 9.5mm / 12mm Wire Rod', 'Extrusion Billets 6063 / 6082', 'Foundry Alloys A356.2 / ADC12', 'Rolled Coils 1050 / 3003']
  },
  copper: {
    slug: 'copper',
    name: 'Copper',
    subtitle: 'Continuous Cast Copper Wire Rods, Electrolytic Cathodes & Billets',
    tagline: 'Electrolytic Grade-A Copper with 99.99% purity and >101% IACS conductivity for electrical, cable, and renewable industries.',
    bannerImage: '/images/real/copper.jpg',
    hoverImage: '/images/real/copper1.jpg',
    overview: 'Engineered for exceptional electrical and thermal conductivity, AR Metals offers prime Continuous Cast (CC) Copper Rods (8mm, 11mm, 12mm, 16mm) and Grade A LME-registered Electrolytic Copper Cathodes (Cu-ETP / Cu-OF). Our copper products adhere to ASTM B115, ASTM B49, and IS 12444, ensuring zero hydrogen embrittlement and optimal drawability for magnet wire and high-voltage transmission.',
    highlightStats: [
      { label: 'Copper Purity', value: '99.99% Min' },
      { label: 'Electrical Conductivity', value: '>101% IACS' },
      { label: 'Standard Compliance', value: 'ASTM B49 / IS 12444' },
      { label: 'Oxygen Content', value: '<200 ppm' }
    ],
    standards: ['ASTM B49', 'ASTM B115 Grade A', 'IS 12444', 'BS EN 1977', 'JIS H2109'],
    gradesOffered: ['8mm Continuous Cast Copper Rod (CC Rod)', '12mm / 16mm CC Copper Rod', 'Electrolytic Copper Cathodes (Grade A)', 'DHP / DLP Copper Billets', 'Copper Busbars & Flat Strips']
  },
  'zinc-lead': {
    slug: 'zinc-lead',
    name: 'Zinc & Lead',
    subtitle: 'Special High Grade (SHG) Zinc, Galvanizing Alloys & 99.97% Refined Lead',
    tagline: 'LME-registered Special High Grade Zinc and refined pure lead for steel galvanizing, die-casting, and energy storage batteries.',
    bannerImage: '/images/real/zinc.jpg',
    hoverImage: '/images/real/zinc1.jpg',
    overview: 'AR Metals provides the full spectrum of non-ferrous heavy metals. Our Special High Grade (SHG) Zinc ingots boast a guaranteed 99.995% purity, widely preferred by India\'s leading galvanizers and die-casters. We also supply Continuous Galvanizing Grade (CGG) zinc-aluminium-lead master alloys and 99.97% refined lead ingots for lead-acid automotive batteries, solar power storage, and radiation protection.',
    highlightStats: [
      { label: 'SHG Zinc Purity', value: '99.995% Guaranteed' },
      { label: 'Refined Lead Purity', value: '99.97% Min' },
      { label: 'Galvanizing Efficiency', value: 'Low Dross Formation' },
      { label: 'Certification', value: 'LME Brand Approved' }
    ],
    standards: ['IS 209 (SHG Zinc)', 'ASTM B6 SHG', 'IS 3717 (Refined Lead)', 'ASTM B29', 'BS EN 1179'],
    gradesOffered: ['Special High Grade (SHG) Zinc 99.995%', 'Continuous Galvanizing Grade (CGG Zinc)', 'Zinc Die-Casting Alloy (ZAMAK 3 / ZAMAK 5)', 'Refined Lead Ingot 99.97%', 'Antimonial & Calcium Lead Alloys']
  },
  'steel-iron': {
    slug: 'steel-iron',
    name: 'Steel & Iron',
    subtitle: 'Primary Fe 500D / 550D TMT Rebars, Wire Rods, DI Pipes & Pig Iron',
    tagline: 'High-yield construction steel and foundry pig iron engineered for mega-infrastructure, bridges, and foundry casting.',
    bannerImage: '/images/real/steel.jpg',
    hoverImage: '/images/real/steel1.jpg',
    overview: 'From earthquake-resistant Fe 500D and Fe 550D TMT rebars with superior ductility and corrosion resistance to prime billets and low-carbon wire rods, AR Metals delivers structural steel direct from India\'s top integrated blast furnaces. We also supply high-grade foundry pig iron and ductile iron (DI) pipes for water infrastructure and urban development projects.',
    highlightStats: [
      { label: 'Steel Grade', value: 'Fe 500D / 550D' },
      { label: 'Elongation', value: '16% - 18% Min' },
      { label: 'Bureau Standards', value: 'IS 1786 : 2008' },
      { label: 'Bendability', value: 'Superior 180° Mandrel' }
    ],
    standards: ['IS 1786 : 2008', 'IS 2062', 'IS 7887', 'IS 8329 (DI Pipes)', 'ASTM A615'],
    gradesOffered: ['TMT Rebars (Fe 500D / Fe 550D, 8mm - 32mm)', 'High Carbon & Low Carbon Wire Rods (5.5mm - 12mm)', 'Ductile Iron (DI) Pipes (Class K7 / K9)', 'Foundry Pig Iron Grade 1 & 2', 'Prime Mild Steel Billets (100x100mm)']
  },
  silver: {
    slug: 'silver',
    name: 'Silver & Precious',
    subtitle: '999.9 Fine Silver Bars & Industrial Silver Grains',
    tagline: 'LBMA-accredited 999.9 fine purity silver bars and grains for solar photovoltaic cells, electrical contacts, brazing alloys, and bullion.',
    bannerImage: '/images/real/silver.jpg',
    hoverImage: '/images/real/silver1.jpg',
    overview: 'AR Metals supplies certified 999.9 fine silver bars (typically 30kg cast bars) and granular silver for high-tech industrial applications, including solar paste manufacturing, vacuum coating, electrical contact production, and specialized brazing alloys. Every batch is stamped with certified assay serial numbers and weight certificates.',
    highlightStats: [
      { label: 'Silver Purity', value: '999.9 Fine (99.99%)' },
      { label: 'Standard Bar Weight', value: '30 kg (approx 1,000 oz)' },
      { label: 'Certification', value: 'LBMA & NABL Assayed' },
      { label: 'Security Transport', value: 'Armoured Doorstep Transit' }
    ],
    standards: ['IS 2112', 'ASTM B413', 'LBMA Good Delivery Standard'],
    gradesOffered: ['999.9 Fine Cast Silver Bar (30 kg)', 'Fine Silver Grains (99.99% Pure)', 'Silver Brazing Alloy Strips & Wires']
  },
  'oil-gas': {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    subtitle: 'Industrial Energy, Metcoke & High Carbon Feedstocks',
    tagline: 'Industrial grade petroleum and energy products powering blast furnaces, foundries, and processing plants.',
    bannerImage: '/images/real/oil-gas.jpg',
    hoverImage: '/images/real/oil-gas1.jpg',
    overview: 'High-calorific energy products, metcoke, and carbon fuels essential for smelting and metallurgical reduction operations across heavy engineering industries.',
    highlightStats: [
      { label: 'Fixed Carbon', value: 'Up to 88%' },
      { label: 'Ash Content', value: '<12% Low Ash' },
      { label: 'Moisture', value: '<5% Controlled' },
      { label: 'Logistics', value: 'Rake & Bulk Truck' }
    ],
    standards: ['IS 1354', 'ASTM D3172', 'ISO 562'],
    gradesOffered: ['Metallurgical Coke (Metcoke)', 'Calcined Petroleum Coke (CPC)', 'Low Ash Metallurgical Coke', 'Industrial Carbon Blocks']
  }
};

export const PRODUCTS_CATALOG: MetalProduct[] = [
  // ALUMINIUM
  {
    id: 'AL-ING-P1020',
    name: 'Primary Aluminium Ingot P1020 (99.70%)',
    category: 'aluminium',
    categoryLabel: 'Aluminium',
    shape: 'Ingot',
    grade: 'P1020 (99.70% Min)',
    purity: '99.70%',
    standards: ['IS 2590', 'ASTM B221', 'EN 573-3'],
    pricePerMT: 228500,
    priceChange: 0.85,
    priceDirection: 'up',
    minOrderQuantityMT: 10,
    availableStockMT: 2450,
    originPlant: 'Odisha Smelter Hub',
    dispatchHubs: ['Mumbai (Bhiwandi)', 'Delhi NCR (Faridabad)', 'Ahmedabad', 'Chennai'],
    image: '/images/real/products/al-ingot.jpg',
    description: 'Standard remelt ingot used for casting alloys, rolling into foils/sheets, and master alloy formulations. Smooth surface, minimal dross, and consistent chemical composition guaranteed.',
    applications: ['Automotive alloy wheels', 'Electrical conductor casting', 'Aluminium extrusions', 'Sheet & foil rolling'],
    technicalSpecs: {
      composition: { 'Al (Min)': '99.70%', 'Fe (Max)': '0.20%', 'Si (Max)': '0.10%', 'Cu (Max)': '0.01%', 'Zn (Max)': '0.03%', 'Ti (Max)': '0.01%' },
      mechanical: { 'Tensile Strength': '70 - 90 MPa', 'Brinell Hardness': '20 - 25 HB', 'Density': '2.70 g/cm³' },
      dimensions: 'Ingot weight: ~22.5 kg | Bundle weight: ~1,000 kg strapped with steel bands',
      packaging: 'Steel-strapped bundles with weather-proof polyethylene wrap'
    }
  },
  {
    id: 'AL-WR-EC95',
    name: 'EC Grade Aluminium Wire Rod 9.5mm / 12mm',
    category: 'aluminium',
    categoryLabel: 'Aluminium',
    shape: 'Wire Rod (Coil)',
    grade: 'EC Grade (1370 / 1120)',
    purity: '99.70%',
    standards: ['IS 4076', 'ASTM B233', 'IEC 60889'],
    pricePerMT: 236200,
    priceChange: 1.10,
    priceDirection: 'up',
    minOrderQuantityMT: 15,
    availableStockMT: 1820,
    originPlant: 'Chhattisgarh Smelter',
    dispatchHubs: ['Mumbai (Bhiwandi)', 'Delhi NCR', 'Hyderabad', 'Kolkata'],
    image: '/images/real/products/al-wire-rod.jpg',
    description: 'Continuous cast and rolled EC Grade aluminium rod specifically tailored for drawing into AAC, ACSR, and AL-59 conductors with conductivity exceeding 61.5% IACS.',
    applications: ['Power transmission lines (ACSR/AAC)', 'Building wiring & cables', 'Transformer windings', 'Telecommunication lines'],
    technicalSpecs: {
      composition: { 'Al (Min)': '99.70%', 'Conductivity (Min)': '61.5% IACS', 'Resistivity (Max)': '0.028080 Ω·mm²/m' },
      mechanical: { 'Tensile Strength': '115 - 140 MPa', 'Elongation (Min)': '12%' },
      dimensions: 'Diameter: 9.50 mm ± 0.38 mm or 12.0 mm ± 0.50 mm | Coil weight: ~2,000 kg',
      packaging: 'Eye-to-sky strapping on wooden pallets with moisture-barrier wrapping'
    }
  },
  {
    id: 'AL-BIL-6063',
    name: 'Aluminium Extrusion Billets 6063 / 6082',
    category: 'aluminium',
    categoryLabel: 'Aluminium',
    shape: 'Billet (Log)',
    grade: 'Alloy 6063 / 6082 (Homogenized)',
    purity: 'Alloy Grade',
    standards: ['ASTM B221', 'IS 733', 'EN 755'],
    pricePerMT: 242000,
    priceChange: -0.30,
    priceDirection: 'down',
    minOrderQuantityMT: 12,
    availableStockMT: 1400,
    originPlant: 'Odisha Smelter Hub',
    dispatchHubs: ['Mumbai (Bhiwandi)', 'Ahmedabad', 'Chennai', 'Delhi NCR'],
    image: '/images/real/products/al-billet.jpg',
    description: 'Direct-chill (DC) cast and ultrasonic tested homogenized billets offering excellent surface finish, high extrusion speed, and responsive anodizing properties.',
    applications: ['Architectural door & window frames', 'Solar panel mounting structures', 'Industrial heat sinks', 'Automotive body frames'],
    technicalSpecs: {
      composition: { 'Si': '0.20 - 0.60%', 'Fe': '0.35% max', 'Mg': '0.45 - 0.90%', 'Cr': '0.10% max', 'Zn': '0.10% max', 'Al': 'Balance' },
      mechanical: { 'Homogenization': 'Fully homogenized 560°C ± 5°C', 'Grain Size': 'ASTM E112 Grade 4 or finer' },
      dimensions: 'Diameter: 127mm (5"), 152mm (6"), 178mm (7"), 203mm (8") | Length: 5,800 mm to 6,200 mm',
      packaging: 'Steel strapped in hexagonal bundles of ~2,000 kg with end protectors'
    }
  },
  {
    id: 'AL-ALLOY-A356',
    name: 'Primary Foundry Alloy Ingot A356.2 / ADC12',
    category: 'aluminium',
    categoryLabel: 'Aluminium',
    shape: 'Ingot',
    grade: 'A356.2 (Al-Si7Mg0.3) / ADC12',
    purity: 'Foundry Certified',
    standards: ['ASTM B179', 'JIS H2118', 'IS 617'],
    pricePerMT: 248500,
    priceChange: 0.40,
    priceDirection: 'up',
    minOrderQuantityMT: 10,
    availableStockMT: 950,
    originPlant: 'Chhattisgarh Smelter',
    dispatchHubs: ['Pune Industrial Area', 'Chennai (Sriperumbudur)', 'Delhi NCR'],
    image: '/images/real/products/al-foundry.jpg',
    description: 'Modified with Strontium (Sr) for refined eutectic silicon microstructure. Low iron and gas content ensure outstanding fatigue resistance for safety-critical vehicle castings.',
    applications: ['Alloy wheels for 2-wheelers & 4-wheelers', 'Cylinder heads & engine blocks', 'Suspension knuckle arms', 'Aerospace brackets'],
    technicalSpecs: {
      composition: { 'Si': '6.5 - 7.5%', 'Mg': '0.30 - 0.45%', 'Fe (Max)': '0.12%', 'Ti': '0.10 - 0.20%', 'Sr': '0.015 - 0.025%', 'Al': 'Balance' },
      mechanical: { 'Yield Strength (T6)': '220 MPa', 'Tensile Strength (T6)': '310 MPa', 'Elongation': '6 - 10%' },
      dimensions: 'Standard 7 kg / 10 kg ingots in 1,000 kg strapped bundles',
      packaging: 'Plastic shrink-wrapped wooden pallet packs'
    }
  },

  // COPPER
  {
    id: 'CU-ROD-8MM',
    name: 'Continuous Cast Copper Rod (8mm, 99.99%)',
    category: 'copper',
    categoryLabel: 'Copper',
    shape: 'Wire Rod (Coil)',
    grade: 'Cu-ETP (Electrolytic Tough Pitch)',
    purity: '99.99%',
    standards: ['ASTM B49', 'IS 12444', 'BS EN 1977'],
    pricePerMT: 742000,
    priceChange: -0.45,
    priceDirection: 'down',
    minOrderQuantityMT: 5,
    availableStockMT: 1100,
    originPlant: 'Dahej Coastal Refinery',
    dispatchHubs: ['Mumbai (Bhiwandi)', 'Delhi NCR', 'Ahmedabad', 'Chennai'],
    image: '/images/real/copper.jpg',
    description: 'Produced using Southwire / Contirod continuous melting and casting technology. Outstanding surface smoothness, low oxide film, and uniform grain structure for high-speed multi-wire drawing down to 0.05 mm.',
    applications: ['Enamelled winding wire', 'Power & solar DC cables', 'Submersible pump cables', 'Transformers & motor stators'],
    technicalSpecs: {
      composition: { 'Cu (Min)': '99.99%', 'Oxygen': '150 - 300 ppm', 'Total Impurities (Max)': '65 ppm' },
      mechanical: { 'Conductivity (Min)': '101.0% IACS', 'Tensile Strength': '205 - 245 MPa', 'Elongation (Min)': '35%' },
      dimensions: 'Diameter: 8.00 mm ± 0.38 mm | Coil Weight: 3,000 kg - 5,000 kg continuous coil',
      packaging: 'Eye-to-sky strapping with waterproof VCI plastic wrapping on heavy-duty timber base'
    }
  },
  {
    id: 'CU-CAT-GRDA',
    name: 'Electrolytic Copper Cathodes (Grade A, 99.9935%)',
    category: 'copper',
    categoryLabel: 'Copper',
    shape: 'Cathode Sheet',
    grade: 'LME Grade A (Cu-CATH-1)',
    purity: '99.9935%',
    standards: ['ASTM B115', 'BS EN 1978', 'IS 191'],
    pricePerMT: 734500,
    priceChange: -0.60,
    priceDirection: 'down',
    minOrderQuantityMT: 10,
    availableStockMT: 850,
    originPlant: 'Dahej Coastal Refinery',
    dispatchHubs: ['Mumbai (Bhiwandi)', 'Ahmedabad', 'Kolkata'],
    image: '/images/real/copper1.jpg',
    description: 'High-purity electrolytic copper cathodes registered under LME Grade A standards. Free from nodular dendrites, chemical stains, and gas inclusions. The ideal melting feedstock for bronze, brass, and copper alloy manufacturers.',
    applications: ['Continuous casting of copper rod', 'Brass & Bronze alloy ingot production', 'Chemical copper sulfate production', 'Foil manufacturing for EV lithium battery anodes'],
    technicalSpecs: {
      composition: { 'Cu (Min)': '99.9935%', 'Ag (Max)': '0.0025%', 'As (Max)': '0.0001%', 'Bi (Max)': '0.0001%', 'Fe (Max)': '0.0002%', 'Pb (Max)': '0.0001%' },
      mechanical: { 'Electrical Conductivity': '101.5% IACS' },
      dimensions: 'Square sheets approx 1,000 mm × 1,000 mm × 15 mm | Bundle weight: ~2,500 kg',
      packaging: 'Heavy gauge steel strapped bundles suitable for forklift handling'
    }
  },

  // ZINC & LEAD
  {
    id: 'ZN-SHG-ING',
    name: 'Special High Grade (SHG) Zinc Ingot (99.995%)',
    category: 'zinc-lead',
    categoryLabel: 'Zinc & Lead',
    shape: 'Ingot',
    grade: 'SHG 99.995% Pure (Zn 99.995)',
    purity: '99.995%',
    standards: ['IS 209', 'ASTM B6 SHG', 'BS EN 1179'],
    pricePerMT: 258000,
    priceChange: 1.15,
    priceDirection: 'up',
    minOrderQuantityMT: 10,
    availableStockMT: 3100,
    originPlant: 'Rajasthan Smelter Hub',
    dispatchHubs: ['Mumbai', 'Delhi NCR', 'Ahmedabad', 'Chennai', 'Kolkata'],
    image: '/images/real/zinc.jpg',
    description: 'LME-approved primary Special High Grade Zinc offering virtually zero impurities. Essential for continuous hot-dip galvanizing lines, brass smelting, and precision die-casting.',
    applications: ['Hot-dip steel galvanizing (pipes, sheets, towers)', 'Die casting alloys (ZAMAK 3/5)', 'Brass alloy production (60/40, 70/30)', 'Zinc oxide for rubber & tire manufacturing'],
    technicalSpecs: {
      composition: { 'Zn (Min)': '99.995%', 'Pb (Max)': '0.003%', 'Cd (Max)': '0.003%', 'Fe (Max)': '0.002%', 'Sn (Max)': '0.001%', 'Cu (Max)': '0.001%' },
      mechanical: { 'Melting Point': '419.5 °C', 'Boiling Point': '907 °C', 'Density': '7.14 g/cm³' },
      dimensions: 'Ingot weight: 25 kg | Bundle weight: 1,000 kg (40 ingots) steel strapped',
      packaging: 'Self-palletized bundles strapped with high-tensile steel'
    }
  },
  {
    id: 'PB-REF-ING',
    name: 'Refined Pure Lead Ingot (99.97%)',
    category: 'zinc-lead',
    categoryLabel: 'Zinc & Lead',
    shape: 'Ingot',
    grade: 'Refined Lead (Pb 99.97)',
    purity: '99.97%',
    standards: ['IS 3717', 'ASTM B29', 'BS 3343'],
    pricePerMT: 192000,
    priceChange: 0.30,
    priceDirection: 'up',
    minOrderQuantityMT: 15,
    availableStockMT: 1900,
    originPlant: 'Rajasthan Smelter Hub',
    dispatchHubs: ['Mumbai (Bhiwandi)', 'Delhi NCR', 'Pune', 'Chennai'],
    image: '/images/real/lead.jpg',
    description: 'High-purity primary refined lead ingot specially formulated for battery paste, grid manufacturing, and chemical lead linings with ultra-low bismuth content.',
    applications: ['Automotive & inverter lead-acid batteries', 'Nuclear & medical X-ray radiation shielding', 'Cable sheathing & chemical linings', 'Lead shot & weights'],
    technicalSpecs: {
      composition: { 'Pb (Min)': '99.97%', 'Bi (Max)': '0.015%', 'Ag (Max)': '0.005%', 'Cu (Max)': '0.002%', 'Sb (Max)': '0.001%', 'Fe (Max)': '0.001%' },
      mechanical: { 'Melting Point': '327.5 °C', 'Density': '11.34 g/cm³' },
      dimensions: 'Ingot weight: 25 kg to 42 kg | Bundle weight: ~1,000 kg',
      packaging: 'Steel strapped bundles on timber skids'
    }
  },

  // STEEL & IRON
  {
    id: 'ST-TMT-550D',
    name: 'High Ductility TMT Rebars Fe 550D (8mm - 32mm)',
    category: 'steel-iron',
    categoryLabel: 'Steel & Iron',
    shape: 'Rebar',
    grade: 'Fe 550D (High Ductility Earthquake Resistant)',
    purity: 'Prime Steel',
    standards: ['IS 1786 : 2008', 'ASTM A615 Grade 60', 'BS 4449'],
    pricePerMT: 54500,
    priceChange: -0.20,
    priceDirection: 'down',
    minOrderQuantityMT: 20,
    availableStockMT: 4800,
    originPlant: 'Odisha Integrated Steel Plant',
    dispatchHubs: ['Mumbai', 'Delhi NCR', 'Ahmedabad', 'Kolkata', 'Hyderabad', 'Raipur'],
    image: '/images/real/steel.jpg',
    description: 'Thermo-Mechanically Treated (TMT) rebars manufactured via automated computerized Quenching and Self-Tempering (QST) process. Superior bendability, uniform rib pattern for rock-solid concrete bond, and elevated fire/corrosion resistance.',
    applications: ['High-rise skyscrapers & commercial towers', 'Highway flyovers, metro rail & bridges', 'Seismic Zone IV & V earthquake-resistant structures', 'Coastal ports & industrial foundations'],
    technicalSpecs: {
      composition: { 'Carbon (Max)': '0.25%', 'Sulphur (Max)': '0.040%', 'Phosphorus (Max)': '0.040%', 'S+P (Max)': '0.075%', 'Carbon Equivalent (Max)': '0.42%' },
      mechanical: { 'Yield Stress (Min)': '550 N/mm²', 'Tensile Strength (Min)': '600 N/mm² (TS/YS ratio ≥ 1.08)', 'Elongation (Min)': '16.0%', 'Total Elongation at Max Force': '5.0%' },
      dimensions: 'Available diameters: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 28mm, 32mm | Standard length: 12 meters',
      packaging: 'Bundled with wire ties in tagged 2 MT bundles with barcode identification'
    }
  },
  {
    id: 'ST-WR-LOWC',
    name: 'Prime Low & Medium Carbon Wire Rods (5.5mm - 12mm)',
    category: 'steel-iron',
    categoryLabel: 'Steel & Iron',
    shape: 'Wire Rod (Coil)',
    grade: 'SAE 1008 / SAE 1010 / SAE 1018',
    purity: 'Prime Steel',
    standards: ['IS 7887', 'ASTM A510M'],
    pricePerMT: 52800,
    priceChange: 0.50,
    priceDirection: 'up',
    minOrderQuantityMT: 25,
    availableStockMT: 3600,
    originPlant: 'Odisha Integrated Steel Plant',
    dispatchHubs: ['Mumbai', 'Faridabad', 'Pune', 'Raipur', 'Chennai'],
    image: '/images/real/steel1.jpg',
    description: 'Hot-rolled wire rods cooled via Stelmor controlled cooling conveyor to obtain fine pearlitic/ferritic structure. Exceptional cold-heading, drawing, and galvanized wire performance.',
    applications: ['Fasteners (bolts, screws, nuts, rivets)', 'Bright bar drawing & welding electrodes', 'Chain-link fencing & gabion mesh', 'Automotive springs & clutch wire'],
    technicalSpecs: {
      composition: { 'C': '0.06 - 0.10%', 'Mn': '0.30 - 0.50%', 'Si (Max)': '0.10%', 'S (Max)': '0.035%', 'P (Max)': '0.035%' },
      mechanical: { 'Tensile Strength': '380 - 450 MPa', 'Reduction of Area (Min)': '65%' },
      dimensions: 'Diameter: 5.5mm, 6.0mm, 7.0mm, 8.0mm, 10.0mm, 12.0mm | Coil weight: ~2,000 kg',
      packaging: 'Compacted coil strapped with 4 high-strength steel circumferential bands'
    }
  },

  // SILVER
  {
    id: 'AG-BAR-9999',
    name: '999.9 Fine Silver Cast Bar (30 kg / 1,000 oz)',
    category: 'silver',
    categoryLabel: 'Silver & Precious',
    shape: 'Cast Bar',
    grade: 'Fine Silver 999.9 Purity',
    purity: '99.99%',
    standards: ['IS 2112', 'LBMA Good Delivery Standard'],
    pricePerMT: 88200000, // stored in MT equivalent for uniformity, ~88,200/kg
    pricePerKg: 88200,
    priceChange: 0.65,
    priceDirection: 'up',
    minOrderQuantityMT: 0.03, // 30 kg
    availableStockMT: 4.5,
    originPlant: 'Precious Metals Refinery Hub',
    dispatchHubs: ['Mumbai Secure Vault', 'Delhi NCR Secure Vault', 'Ahmedabad'],
    image: '/images/real/silver.jpg',
    description: 'Certified 999.9 Fine Silver Cast Bar stamped with official AR Metals hallmark, fineness 999.9, gross weight, and individual laser-engraved serial number. Complies with LBMA Good Delivery specifications.',
    applications: ['Solar photovoltaic metallization paste', 'Electrical contact manufacture', 'Silver brazing alloys', 'Institutional bullion reserve'],
    technicalSpecs: {
      composition: { 'Ag (Min)': '99.99%', 'Cu (Max)': '0.005%', 'Pb (Max)': '0.002%', 'Fe (Max)': '0.001%', 'Bi (Max)': '0.001%' },
      mechanical: { 'Density': '10.49 g/cm³', 'Melting Point': '961.8 °C', 'Thermal Conductivity': '429 W/m·K' },
      dimensions: 'Bar dimensions: Approx 280 mm × 110 mm × 75 mm | Weight: ~30 kg (approx 1,000 troy oz)',
      packaging: 'Tamper-evident sealed security container with tamper-proof holographic seal & NABL Assay Certificate'
    }
  },
  {
    id: 'AG-GRN-9999',
    name: 'Fine Silver Grains 99.99% for Industrial Brazing',
    category: 'silver',
    categoryLabel: 'Silver & Precious',
    shape: 'Granules',
    grade: 'Silver Grain 99.99%',
    purity: '99.99%',
    standards: ['IS 2112', 'ASTM B413'],
    pricePerMT: 88600000,
    pricePerKg: 88600,
    priceChange: 0.70,
    priceDirection: 'up',
    minOrderQuantityMT: 0.005, // 5 kg
    availableStockMT: 2.8,
    originPlant: 'Precious Metals Refinery Hub',
    dispatchHubs: ['Mumbai Vault', 'Delhi Vault', 'Chennai Vault'],
    image: '/images/real/silver1.jpg',
    description: 'Uniform, clean-flowing silver granules produced by inert gas atomization. Specially designed for precision induction melting and jewelry/industrial alloy production.',
    applications: ['Precision casting of high-conductivity electrical contact tips', 'Silver-Copper-Zinc brazing alloy formulation', 'Electroplating anodes & chemical synthesis'],
    technicalSpecs: {
      composition: { 'Ag (Min)': '99.99%', 'Total Impurities (Max)': '0.01%' },
      mechanical: { 'Grain Size': '2.0 mm - 6.0 mm spherical/nodular granules' },
      dimensions: 'Standard 5 kg and 10 kg vacuum sealed nitrogen flushed packs',
      packaging: 'Sealed heavy-duty foil vacuum pouch inside tamper-evident locking canisters'
    }
  }
];

export const LIVE_MARKET_TICKERS = [
  { symbol: 'LME Aluminium', price: '$2,418.50/t', change: '+0.82%', direction: 'up', exchange: 'LME' },
  { symbol: 'LME Copper', price: '$9,140.00/t', change: '-0.45%', direction: 'down', exchange: 'LME' },
  { symbol: 'LME Zinc', price: '$2,785.00/t', change: '+1.15%', direction: 'up', exchange: 'LME' },
  { symbol: 'LME Lead', price: '$2,042.00/t', change: '+0.30%', direction: 'up', exchange: 'LME' },
  { symbol: 'MCX Silver', price: '₹87,450/kg', change: '+0.65%', direction: 'up', exchange: 'MCX' },
  { symbol: 'MCX Aluminium', price: '₹228.80/kg', change: '+0.75%', direction: 'up', exchange: 'MCX' },
  { symbol: 'MCX Copper', price: '₹741.90/kg', change: '-0.38%', direction: 'down', exchange: 'MCX' },
  { symbol: 'USD/INR Reference', price: '₹83.88', change: '+0.04%', direction: 'up', exchange: 'RBI' },
  { symbol: 'Domestic TMT Fe550D', price: '₹54,500/MT', change: '-0.20%', direction: 'down', exchange: 'Ex-Works' },
];

export const WAREHOUSE_HUBS = [
  { city: 'Mumbai', state: 'Maharashtra', location: 'Bhiwandi Logistics Park', capacityMT: '15,000 MT', pincode: '421302', contact: '+91 22 6890 1100', address: 'Plot 45-B, Indian Corporation Industrial Park, Mankoli Naka, Bhiwandi, Thane 421302' },
  { city: 'New Delhi NCR', state: 'Haryana', location: 'Faridabad Industrial Corridor', capacityMT: '12,500 MT', pincode: '121004', contact: '+91 129 4280 900', address: 'Sector 58, IMT Faridabad, Industrial Zone, Haryana 121004' },
  { city: 'Ahmedabad', state: 'Gujarat', location: 'Sanand Mega Metal Hub', capacityMT: '10,000 MT', pincode: '382110', contact: '+91 79 3590 4400', address: 'GIDC Industrial Estate, Phase II, Sanand, Ahmedabad 382110' },
  { city: 'Chennai', state: 'Tamil Nadu', location: 'Sriperumbudur Logistics Park', capacityMT: '14,000 MT', pincode: '602105', contact: '+91 44 4890 2200', address: 'SIPCOT Industrial Park, Mambakkam, Sriperumbudur, Chennai 602105' },
  { city: 'Kolkata', state: 'West Bengal', location: 'Dankuni Multi-Modal Terminal', capacityMT: '9,500 MT', pincode: '712311', contact: '+91 33 2980 6600', address: 'NH-2 Corridor, Dankuni Industrial Complex, Hooghly, Kolkata 712311' },
  { city: 'Hyderabad', state: 'Telangana', location: 'Patancheru Central Stockyard', capacityMT: '8,500 MT', pincode: '502319', contact: '+91 40 4580 7700', address: 'IDA Patancheru, Near Outer Ring Road, Medak Dist, Hyderabad 502319' },
  { city: 'Raipur', state: 'Chhattisgarh', location: 'Urla Industrial Complex', capacityMT: '11,000 MT', pincode: '492003', contact: '+91 771 4980 300', address: 'Urla Industrial Area, Ring Road No. 2, Raipur, Chhattisgarh 492003' }
];

export const BRANCH_OFFICES = [
  {
    name: 'Corporate Headquarters - Delhi NCR',
    city: 'New Delhi',
    type: 'Headquarters & Trading Floor',
    address: '8th Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi NCR 110001',
    phone: '+91 9879879871',
    email: 'corporate@armetals.com / sales@armetals.com',
    hours: 'Mon - Sat: 9:00 AM - 7:30 PM IST'
  },
  {
    name: 'Northern Regional Office - New Delhi',
    city: 'New Delhi',
    type: 'Regional Sales & Government EPC Desk',
    address: '8th Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001',
    phone: '+91 11 4950 1200',
    email: 'sales.north@armetals.com',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST'
  },
  {
    name: 'Western Regional Office - Ahmedabad',
    city: 'Ahmedabad',
    type: 'Regional Sales & MSME Financing Desk',
    address: '5th Floor, Titanium Square, Thaltej Cross Roads, SG Highway, Ahmedabad 380054',
    phone: '+91 79 3800 6500',
    email: 'sales.gujarat@armetals.com',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST'
  },
  {
    name: 'Southern Regional Office - Chennai',
    city: 'Chennai',
    type: 'Regional Sales & Coastal Exports Desk',
    address: '4th Floor, Prestige Palladium Bayan, Greams Road, Thousand Lights, Chennai 600006',
    phone: '+91 44 4920 8100',
    email: 'sales.south@armetals.com',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST'
  },
  {
    name: 'Eastern Regional Office - Kolkata',
    city: 'Kolkata',
    type: 'Regional Sales & Steel Projects Desk',
    address: '6th Floor, Constantia Building, 11 Dr. U. N. Brahmachari Street, Park Street, Kolkata 700017',
    phone: '+91 33 4600 9400',
    email: 'sales.east@armetals.com',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST'
  },
  {
    name: 'Central Industrial Desk - Raipur',
    city: 'Raipur',
    type: 'Smelter Logistics & Heavy Stockyard Operations',
    address: '3rd Floor, Magneto Offizo, Labhandi, GE Road, Raipur 492001',
    phone: '+91 771 4600 200',
    email: 'sales.central@armetals.com',
    hours: 'Mon - Sat: 8:30 AM - 7:00 PM IST'
  }
];

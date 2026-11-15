/**
 * THE VERDANT ESTATE — CENTRALIZED PROJECT DATA CONFIGURATION
 * Single source of truth for all project details, copy, pricing, configurations,
 * amenities, floor plans, gallery items, location connectivity, and developer metadata.
 */

const PROJECT_DATA = {
  brand: {
    name: "The Verdant Estate",
    tagline: "An Extraordinary Address. An Exceptional Lifestyle.",
    subtagline: "Discover thoughtfully designed residences where modern architecture meets timeless elegance.",
    locationName: "Whitefield, Bengaluru",
    fullAddress: "Hope Farm Junction, Whitefield Main Road, Bengaluru, Karnataka 560066",
    reraNumber: "PRM/KA/RERA/1251/446/PR/220324/004812",
    contact: {
      phoneDisplay: "+91 1234567890",
      phoneRaw: "+911234567890",
      whatsappRaw: "911234567890",
      email: "sales@theverdantestate.in",
      officeHours: "Daily 9:30 AM – 6:30 PM IST"
    },
    brochureUrl: "assets/documents/brochure.pdf"
  },

  hero: {
    headline: "An Extraordinary Address.\nAn Exceptional Lifestyle.",
    description: "Discover thoughtfully designed 2, 3 & 4 BHK luxury residences nestled across 12 pristine green acres at Whitefield, Bengaluru. Curated for understated elegance and enduring serenity.",
    priceStarting: "₹ 1.85 Cr*",
    priceNote: "*Excluding statutory registration, stamp duty, and applicable taxes."
  },

  highlights: [
    { value: "12", unit: "Acres", label: "Expansive Campus", icon: "bi-bounding-box-circles" },
    { value: "4", unit: "Towers", label: "Iconic High-Rise Towers", icon: "bi-building" },
    { value: "380", unit: "Residences", label: "Boutique Homes", icon: "bi-houses" },
    { value: "78%", unit: "Open Space", label: "Curated Greens & Waterways", icon: "bi-tree" },
    { value: "2, 3 & 4", unit: "BHK", label: "Luxury Configurations", icon: "bi-grid-1x2" },
    { value: "Dec 2026", unit: "Possession", label: "RERA Committed Delivery", icon: "bi-calendar-check" }
  ],

  configurations: [
    {
      id: "2bhk",
      title: "2 BHK Grande Residence",
      badge: "Popular for Couples & Young Families",
      carpetArea: "920 sq.ft.",
      superArea: "1,350 sq.ft.",
      price: "₹ 1.85 Cr* onwards",
      facing: "East & North Facing",
      specs: [
        { label: "Carpet Area", value: "920 sq.ft." },
        { label: "Balconies", value: "2 Wide Sundeck Balconies" },
        { label: "Bathrooms", value: "2 Premium Kohler Fitted" },
        { label: "Kitchen", value: "Utility Balcony Attached" }
      ],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      planImage: "assets/images/floor-plans/2bhk-plan.svg"
    },
    {
      id: "3bhk",
      title: "3 BHK Royal Residence",
      badge: "Most Coveted Layout",
      carpetArea: "1,420 sq.ft.",
      superArea: "1,980 sq.ft.",
      price: "₹ 2.65 Cr* onwards",
      facing: "East & North-East Facing",
      specs: [
        { label: "Carpet Area", value: "1,420 sq.ft." },
        { label: "Balconies", value: "3 Panoramic Sky Balconies" },
        { label: "Bathrooms", value: "3 Ensuite Designer Baths" },
        { label: "Staff Room", value: "Dedicated Maid Suite with WC" }
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      planImage: "assets/images/floor-plans/3bhk-plan.svg"
    },
    {
      id: "4bhk",
      title: "4 BHK Presidential Penthouse",
      badge: "Ultra-Luxury Limited Edition",
      carpetArea: "2,380 sq.ft.",
      superArea: "3,450 sq.ft.",
      price: "₹ 4.45 Cr* onwards",
      facing: "Panoramic 270° Corner Facing",
      specs: [
        { label: "Carpet Area", value: "2,380 sq.ft." },
        { label: "Balconies", value: "Wraparound Glass Terrace" },
        { label: "Private Lobby", value: "Direct Keycard Elevator" },
        { label: "Master Suite", value: "Walk-in Wardrobe & Jacuzzi" }
      ],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      planImage: "assets/images/floor-plans/4bhk-plan.svg"
    }
  ],

  amenities: [
    {
      id: "pool",
      title: "Temperature-Controlled Infinity Pool",
      category: "Wellness & Leisure",
      description: "Olympic-length 50m infinity pool overlooking lush tree canopies with adjoining heated jacuzzi and kids splash pool.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "clubhouse",
      title: "The Grand Pavilion Clubhouse",
      category: "Social & Community",
      description: "35,000 sq.ft. multi-level clubhouse with private screening theater, banquet hall, cigar lounge, and business suites.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fitness",
      title: "Technogym Fitness & Pilates Arena",
      category: "Health & Fitness",
      description: "State-of-the-art cardiovascular and strength conditioning equipment, dedicated spin room, and certified trainer studio.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "play",
      title: "Children's Adventure Wonderland",
      category: "Family & Recreation",
      description: "Biophilic outdoor play area with safety rubber flooring, climbing wall, sandpit, and treehouse sensory zones.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "zen",
      title: "Japanese Zen Reflection Garden",
      category: "Serenity & Nature",
      description: "Calming water streams, native Japanese bonsai plantings, natural stone pathways, and shaded yoga pavilions.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sports",
      title: "Multi-Sport Arena & Tennis Courts",
      category: "Sports & Activity",
      description: "Floodlit championship tennis court, 2 international standard squash courts, and outdoor half-basketball court.",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80"
    }
  ],

  connectivity: {
    tech: [
      { name: "ITPL (International Tech Park Bangalore)", time: "10 Mins", dist: "3.2 km" },
      { name: "Prestige Shantiniketan Commercial Hub", time: "12 Mins", dist: "4.1 km" },
      { name: "Bagmane Tech Park / Constellation", time: "18 Mins", dist: "6.5 km" },
      { name: "EPIP Zone Industrial & Tech Corridor", time: "14 Mins", dist: "4.8 km" }
    ],
    transit: [
      { name: "Hope Farm Channasandra Metro Station", time: "3 Mins", dist: "900 m" },
      { name: "Whitefield Railway Station", time: "7 Mins", dist: "2.4 km" },
      { name: "Outer Ring Road (KR Puram Junction)", time: "22 Mins", dist: "9.8 km" },
      { name: "Kempegowda International Airport (BLR)", time: "45 Mins", dist: "38.5 km" }
    ],
    schools: [
      { name: "The Deens Academy, Whitefield", time: "8 Mins", dist: "2.8 km" },
      { name: "Delhi Public School (DPS) Bangalore East", time: "15 Mins", dist: "5.6 km" },
      { name: "Whitefield Global School", time: "6 Mins", dist: "1.9 km" },
      { name: "Inventure Academy International", time: "20 Mins", dist: "8.2 km" }
    ],
    healthcare: [
      { name: "Manipal Hospital Whitefield", time: "10 Mins", dist: "3.5 km" },
      { name: "Vydehi Institute of Medical Sciences", time: "12 Mins", dist: "4.2 km" },
      { name: "Columbia Asia (Aster) Whitefield", time: "14 Mins", dist: "5.1 km" },
      { name: "Sri Sathya Sai Super Speciality Hospital", time: "15 Mins", dist: "5.4 km" }
    ],
    retail: [
      { name: "Nexus Shantiniketan Mall", time: "12 Mins", dist: "4.0 km" },
      { name: "Phoenix Marketcity & VR Bengaluru", time: "20 Mins", dist: "8.9 km" },
      { name: "Inorbit Mall Whitefield", time: "14 Mins", dist: "5.2 km" },
      { name: "Nexus Whitefield (Forum Neighbourhood)", time: "11 Mins", dist: "3.8 km" }
    ]
  },

  developer: {
    name: "Verdant Living Group",
    experienceYears: "26+",
    deliveredSqFt: "18.5 Million",
    familiesHoused: "14,000+",
    activeProjects: "9",
    description: "For more than two decades, Verdant Living Group has shaped Bangalore's architectural skyline with precision engineering, sustainable biophilic philosophy, and unwavering commitment to customer trust.",
    badges: ["IGBC Platinum Certified", "CREDAI Bangalore Member", "100% On-Time Delivery Track Record"]
  },

  faqs: [
    {
      q: "What is the exact legal RERA status and registration number?",
      a: "The Verdant Estate is fully approved and registered under Karnataka Real Estate Regulatory Authority with RERA Registration Number: PRM/KA/RERA/1251/446/PR/220324/004812. All sanction plans, title deeds, and NOCs are publicly available and can be inspected at our sales gallery or on the official K-RERA portal."
    },
    {
      q: "What is the scheduled possession date for the project?",
      a: "Construction is proceeding at an advanced phase in strict accordance with the master schedule. Phase 1 possession (Towers A & B) is scheduled for June 2026, and Phase 2 (Towers C & D) along with the Clubhouse will be handed over by December 2026."
    },
    {
      q: "Which major banks and financial institutions have approved the project?",
      a: "The Verdant Estate has received pre-approved loan sanctions from all premier nationalized and private banks including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank, offering attractive home loan interest rates and flexible payment schemes."
    },
    {
      q: "What are the key sustainability and green building credentials?",
      a: "The project is pre-certified IGBC Platinum rated. It integrates zero-discharge sewage treatment (STP), 100% rainwater harvesting, rooftop solar photovoltaic panels for common lighting, EV charging provisions for all parking bays, and 78% native botanical greenery."
    },
    {
      q: "Can I customize the interior layout or smart home specifications?",
      a: "Yes. Homebuyers booking during the current construction phase can consult with our dedicated in-house architectural team to select bespoke flooring options, smart home automation packages, and modular kitchen upgrades."
    }
  ]
};

// Freeze object to avoid accidental mutations
if (typeof Object.freeze === "function") {
  Object.freeze(PROJECT_DATA);
}

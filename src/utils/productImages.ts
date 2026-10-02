// Luxury visual asset helpers for Velvetique Beauty products
// High-resolution SVG illustrations designed with soft blush, frosted glass, rose gold accents and clean aesthetics

export const createProductSvg = (
  type: 'dropper' | 'jar' | 'pump' | 'lipstick' | 'tube' | 'spray' | 'box',
  primaryColor: string,
  accentColor: string,
  title: string
): string => {
  const encodedTitle = title.replace(/&/g, '&amp;').slice(0, 24);
  
  let graphic = '';
  
  if (type === 'dropper') {
    // Elegant luxury dropper bottle
    graphic = `
      <defs>
        <linearGradient id="grad_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
          <stop offset="30%" stop-color="${primaryColor}"/>
          <stop offset="100%" stop-color="${accentColor}"/>
        </linearGradient>
        <linearGradient id="cap_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EED7C5"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#C5A880"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <!-- Soft aura background -->
      <circle cx="200" cy="240" r="140" fill="${primaryColor}" opacity="0.25"/>
      <!-- Pedestal reflection -->
      <ellipse cx="200" cy="410" rx="90" ry="12" fill="#EADCDA" opacity="0.5"/>
      <!-- Bottle Group -->
      <g filter="url(#shadow)">
        <!-- Rubber Bulb -->
        <path d="M185 85 C185 68 215 68 215 85 Z" fill="#FBF8F6" stroke="#E2D4D2" stroke-width="2"/>
        <!-- Gold Cap Ring -->
        <rect x="178" y="85" width="44" height="42" rx="4" fill="url(#cap_${primaryColor.replace('#','')})"/>
        <!-- Glass Neck -->
        <rect x="186" y="127" width="28" height="15" fill="#FAF7F5" opacity="0.9"/>
        <!-- Glass Body -->
        <rect x="145" y="142" width="110" height="240" rx="28" fill="url(#grad_${primaryColor.replace('#','')})" stroke="#FFFFFF" stroke-width="2"/>
        <!-- Inner Glow & Glass Highlight -->
        <path d="M155 155 L155 365" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
        <path d="M165 155 L165 365" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
        <!-- Luxury Label -->
        <rect x="156" y="210" width="88" height="110" rx="6" fill="#FFFFFF" fill-opacity="0.95" stroke="#F0E5E2"/>
        <text x="200" y="235" font-family="'Cormorant Garamond', serif" font-size="11" font-weight="600" fill="#2A1E20" text-anchor="middle" letter-spacing="2">VELVETIQUE</text>
        <line x1="175" y1="244" x2="225" y2="244" stroke="#C47D82" stroke-width="1"/>
        <text x="200" y="262" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#7E4856" text-anchor="middle" letter-spacing="1">CLEAN BEAUTY</text>
        <text x="200" y="282" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="500" fill="#5A4A4D" text-anchor="middle">${encodedTitle}</text>
        <text x="200" y="302" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#8C7B7E" text-anchor="middle">30 ML / 1.0 FL. OZ</text>
      </g>
    `;
  } else if (type === 'jar') {
    // Luxury frosted cream jar
    graphic = `
      <defs>
        <linearGradient id="jar_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>
          <stop offset="40%" stop-color="${primaryColor}"/>
          <stop offset="100%" stop-color="${accentColor}"/>
        </linearGradient>
        <linearGradient id="lid_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E8CEB8"/>
          <stop offset="40%" stop-color="#FFF5EC"/>
          <stop offset="70%" stop-color="#DFC4AB"/>
          <stop offset="100%" stop-color="#C5A880"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <circle cx="200" cy="250" r="140" fill="${primaryColor}" opacity="0.25"/>
      <ellipse cx="200" cy="390" rx="110" ry="15" fill="#EADCDA" opacity="0.5"/>
      <g filter="url(#shadow)">
        <!-- Gold / Rose Cap -->
        <rect x="120" y="165" width="160" height="48" rx="8" fill="url(#lid_${primaryColor.replace('#','')})"/>
        <!-- Frosted Glass Jar Base -->
        <rect x="125" y="213" width="150" height="150" rx="24" fill="url(#jar_${primaryColor.replace('#','')})" stroke="#FFFFFF" stroke-width="2"/>
        <!-- Glass reflections -->
        <path d="M140 225 L140 345" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.6"/>
        <!-- Label -->
        <rect x="145" y="250" width="110" height="75" rx="6" fill="#FFFFFF" fill-opacity="0.95" stroke="#F0E5E2"/>
        <text x="200" y="272" font-family="'Cormorant Garamond', serif" font-size="11" font-weight="600" fill="#2A1E20" text-anchor="middle" letter-spacing="2">VELVETIQUE</text>
        <line x1="175" y1="280" x2="225" y2="280" stroke="#C47D82" stroke-width="1"/>
        <text x="200" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#7E4856" text-anchor="middle">${encodedTitle}</text>
        <text x="200" y="310" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#8C7B7E" text-anchor="middle">50 ML / 1.7 FL. OZ</text>
      </g>
    `;
  } else if (type === 'lipstick') {
    // Luxury Lipstick bullet in gold & velvet casing
    graphic = `
      <defs>
        <linearGradient id="metal_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#D9B78F"/>
          <stop offset="35%" stop-color="#FFF2E2"/>
          <stop offset="70%" stop-color="#CFA375"/>
          <stop offset="100%" stop-color="#A67B4C"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <circle cx="200" cy="240" r="140" fill="${primaryColor}" opacity="0.25"/>
      <ellipse cx="200" cy="405" rx="75" ry="12" fill="#EADCDA" opacity="0.5"/>
      <g filter="url(#shadow)">
        <!-- Lipstick Bullet Angle -->
        <path d="M182 165 L218 135 L218 200 L182 200 Z" fill="${accentColor}"/>
        <path d="M182 165 L218 135 L212 130 L176 160 Z" fill="#F8C0C8" opacity="0.6"/>
        <!-- Inner Gold Mechanism -->
        <rect x="175" y="200" width="50" height="45" fill="url(#metal_${primaryColor.replace('#','')})"/>
        <!-- Outer Shell -->
        <rect x="170" y="245" width="60" height="145" rx="8" fill="#2E181D" stroke="#D9B78F" stroke-width="1.5"/>
        <line x1="170" y1="285" x2="230" y2="285" stroke="#D9B78F" stroke-width="2"/>
        <!-- Logo -->
        <text x="200" y="335" font-family="'Cormorant Garamond', serif" font-size="10" font-weight="600" fill="#D9B78F" text-anchor="middle" letter-spacing="3" transform="rotate(-90 200 335)">VELVETIQUE</text>
      </g>
    `;
  } else if (type === 'tube') {
    // Elegant Cleanser / Cream squeeze tube
    graphic = `
      <defs>
        <linearGradient id="tube_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${primaryColor}"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="${accentColor}"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <circle cx="200" cy="240" r="140" fill="${primaryColor}" opacity="0.25"/>
      <ellipse cx="200" cy="415" rx="85" ry="12" fill="#EADCDA" opacity="0.5"/>
      <g filter="url(#shadow)">
        <!-- Crimped Top Edge -->
        <rect x="140" y="105" width="120" height="15" rx="3" fill="${accentColor}" stroke="#FFFFFF" stroke-width="1"/>
        <!-- Tube Body -->
        <path d="M142 120 L160 335 L240 335 L258 120 Z" fill="url(#tube_${primaryColor.replace('#','')})" stroke="#FFFFFF" stroke-width="2"/>
        <!-- Tube Highlights -->
        <path d="M175 130 L180 325" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.6"/>
        <!-- Cap at bottom -->
        <rect x="168" y="335" width="64" height="60" rx="6" fill="#F4EAE6" stroke="#D19B9E" stroke-width="1.5"/>
        <line x1="168" y1="365" x2="232" y2="365" stroke="#D19B9E" stroke-width="1"/>
        <!-- Typography on tube -->
        <text x="200" y="195" font-family="'Cormorant Garamond', serif" font-size="12" font-weight="600" fill="#2A1E20" text-anchor="middle" letter-spacing="2">VELVETIQUE</text>
        <line x1="180" y1="205" x2="220" y2="205" stroke="#C47D82" stroke-width="1"/>
        <text x="200" y="225" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="#7E4856" text-anchor="middle">${encodedTitle}</text>
        <text x="200" y="245" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#8C7B7E" text-anchor="middle">DERMATOLOGIST TESTED</text>
        <text x="200" y="265" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#8C7B7E" text-anchor="middle">100 ML / 3.4 FL. OZ</text>
      </g>
    `;
  } else if (type === 'pump') {
    // Luxury lotion / shampoo pump bottle
    graphic = `
      <defs>
        <linearGradient id="pump_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${primaryColor}"/>
          <stop offset="45%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="${accentColor}"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <circle cx="200" cy="240" r="140" fill="${primaryColor}" opacity="0.25"/>
      <ellipse cx="200" cy="425" rx="95" ry="14" fill="#EADCDA" opacity="0.5"/>
      <g filter="url(#shadow)">
        <!-- Pump Head -->
        <path d="M175 75 L235 65 L235 85 L195 85 L195 105 L180 105 Z" fill="#2E181D"/>
        <!-- Pump Neck Collar -->
        <rect x="180" y="105" width="40" height="28" fill="#D9B78F"/>
        <!-- Bottle Body -->
        <rect x="145" y="133" width="110" height="270" rx="20" fill="url(#pump_${primaryColor.replace('#','')})" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M158 145 L158 385" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.5"/>
        <!-- Label -->
        <rect x="156" y="200" width="88" height="140" rx="6" fill="#FFFFFF" fill-opacity="0.95" stroke="#F0E5E2"/>
        <text x="200" y="230" font-family="'Cormorant Garamond', serif" font-size="11" font-weight="600" fill="#2A1E20" text-anchor="middle" letter-spacing="2">VELVETIQUE</text>
        <line x1="175" y1="240" x2="225" y2="240" stroke="#C47D82" stroke-width="1"/>
        <text x="200" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#7E4856" text-anchor="middle">${encodedTitle}</text>
        <text x="200" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#5A4A4D" text-anchor="middle">NOURISHING CARE</text>
        <text x="200" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#8C7B7E" text-anchor="middle">250 ML / 8.5 FL. OZ</text>
      </g>
    `;
  } else if (type === 'spray') {
    // Hydrating mist / toner spray
    graphic = `
      <defs>
        <linearGradient id="spray_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${primaryColor}"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="${accentColor}"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <circle cx="200" cy="240" r="140" fill="${primaryColor}" opacity="0.25"/>
      <ellipse cx="200" cy="415" rx="85" ry="12" fill="#EADCDA" opacity="0.5"/>
      <g filter="url(#shadow)">
        <!-- Clear Spray Cap -->
        <rect x="180" y="85" width="40" height="45" rx="4" fill="#FFFFFF" fill-opacity="0.7" stroke="#D19B9E" stroke-width="1.5"/>
        <rect x="186" y="95" width="28" height="25" fill="#D9B78F"/>
        <!-- Bottle -->
        <rect x="150" y="130" width="100" height="265" rx="24" fill="url(#spray_${primaryColor.replace('#','')})" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M162 142 L162 375" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
        <!-- Label -->
        <rect x="158" y="200" width="84" height="130" rx="6" fill="#FFFFFF" fill-opacity="0.95" stroke="#F0E5E2"/>
        <text x="200" y="230" font-family="'Cormorant Garamond', serif" font-size="11" font-weight="600" fill="#2A1E20" text-anchor="middle" letter-spacing="2">VELVETIQUE</text>
        <line x1="175" y1="240" x2="225" y2="240" stroke="#C47D82" stroke-width="1"/>
        <text x="200" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#7E4856" text-anchor="middle">${encodedTitle}</text>
        <text x="200" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#5A4A4D" text-anchor="middle">PURE BOTANICALS</text>
        <text x="200" y="308" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#8C7B7E" text-anchor="middle">150 ML / 5.1 FL. OZ</text>
      </g>
    `;
  } else {
    // Luxury Gift Box / Beauty Set
    graphic = `
      <defs>
        <linearGradient id="box_${primaryColor.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${primaryColor}"/>
          <stop offset="60%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="${accentColor}"/>
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#4A2830" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect width="400" height="480" fill="#FAF6F4"/>
      <circle cx="200" cy="240" r="140" fill="${primaryColor}" opacity="0.25"/>
      <ellipse cx="200" cy="410" rx="125" ry="16" fill="#EADCDA" opacity="0.5"/>
      <g filter="url(#shadow)">
        <!-- Box Base -->
        <rect x="110" y="160" width="180" height="210" rx="14" fill="url(#box_${primaryColor.replace('#','')})" stroke="#D9B78F" stroke-width="2"/>
        <!-- Golden Ribbon -->
        <rect x="190" y="160" width="20" height="210" fill="#D9B78F"/>
        <rect x="110" y="255" width="180" height="20" fill="#D9B78F"/>
        <!-- Silk Bow Center -->
        <circle cx="200" cy="265" r="18" fill="#C5A880"/>
        <circle cx="200" cy="265" r="12" fill="#EED7C5"/>
        <!-- Embossed Label -->
        <rect x="135" y="185" width="130" height="55" rx="6" fill="#FFFFFF" fill-opacity="0.95" stroke="#E2D4D2"/>
        <text x="200" y="210" font-family="'Cormorant Garamond', serif" font-size="12" font-weight="600" fill="#2A1E20" text-anchor="middle" letter-spacing="2">VELVETIQUE</text>
        <text x="200" y="228" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#7E4856" text-anchor="middle">${encodedTitle}</text>
      </g>
    `;
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">${graphic}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
};

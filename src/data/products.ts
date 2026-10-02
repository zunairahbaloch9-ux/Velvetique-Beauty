import { Product } from '../types';
import { createProductSvg } from '../utils/productImages';

export const PRODUCTS: Product[] = [
  // 8 Specific Best Sellers requested:
  {
    id: 'oil-control-face-wash',
    name: 'Oil Control Face Wash',
    category: 'Skincare',
    subcategory: 'Cleansers',
    concern: ['Oily Skin', 'Acne & Breakouts'],
    price: 499,
    oldPrice: 650,
    discountPercent: 23,
    rating: 4.8,
    reviewsCount: 128,
    image: createProductSvg('tube', '#F5E6E6', '#C47D82', 'Oil Control Face Wash'),
    thumbnails: [
      createProductSvg('tube', '#F5E6E6', '#C47D82', 'Oil Control Face Wash'),
      createProductSvg('tube', '#FAF0F0', '#B36D72', 'Texture View'),
      createProductSvg('tube', '#F2DDDF', '#8B4852', 'Bottle Angle')
    ],
    shortDescription: 'Purifying gentle foam with Salicylic Acid and Tea Tree to dissolve excess sebum without stripping moisture.',
    description: 'A deeply clarifying daily cleanser formulated with natural botanical extracts, 1.5% micro-encapsulated salicylic acid, and soothing green tea. It balances sebum production, unclogs congested pores, and leaves skin refreshed, velvety soft, and shine-free all day.',
    benefits: [
      'Controls excess sebum and unwanted shine for up to 12 hours',
      'Unclogs pores and prevents blackheads and breakouts',
      'Sulfate-free formulation preserves natural skin lipid barrier',
      'Gentle cooling sensation with organic tea tree leaf extract'
    ],
    ingredients: 'Aqua (Water), Sodium Cocoyl Glycinate, Glycerin, Salicylic Acid (1.5%), Melaleuca Alternifolia (Tea Tree) Leaf Oil, Camellia Sinensis (Green Tea) Leaf Extract, Allantoin, Niacinamide, Panthenol, Phenoxyethanol, Ethylhexylglycerin.',
    howToUse: 'Dampen face with lukewarm water. Squeeze a pea-sized amount onto palms, lather into a rich foam, and gently massage in circular motions for 60 seconds. Rinse thoroughly and pat dry. Use morning and evening.',
    isBestSeller: true,
    inStock: true,
    volume: '120 ml'
  },
  {
    id: '10-niacinamide-face-serum',
    name: '10% Niacinamide Face Serum',
    category: 'Skincare',
    subcategory: 'Serums',
    concern: ['Oily Skin', 'Acne & Breakouts', 'Dull Skin'],
    price: 799,
    oldPrice: 1050,
    discountPercent: 24,
    rating: 4.9,
    reviewsCount: 240,
    image: createProductSvg('dropper', '#F8E8E9', '#A65561', '10% Niacinamide Serum'),
    thumbnails: [
      createProductSvg('dropper', '#F8E8E9', '#A65561', '10% Niacinamide Serum'),
      createProductSvg('dropper', '#FAF2F3', '#BF6E7A', 'Dropper Detail'),
      createProductSvg('dropper', '#EED4D7', '#803844', 'Texture Swatch')
    ],
    shortDescription: 'High-strength vitamin & mineral formula with Zinc PCA to visibly reduce dark spots and minimize pores.',
    description: 'Our award-winning serum combines 10% pure pharmaceutical-grade Niacinamide with 1% Zinc PCA to target uneven tone, post-inflammatory hyperpigmentation, and visible pores. The lightweight, water-gel texture absorbs instantly without stickiness.',
    benefits: [
      'Fades post-acne dark marks and hyperpigmentation in 4 weeks',
      'Tightens enlarged pores and refines coarse skin texture',
      'Fortifies skin barrier against daily environmental pollutants',
      'Regulates sebum output and calms visible redness'
    ],
    ingredients: 'Aqua, Niacinamide (10%), Butylene Glycol, Zinc PCA (1%), Dimethyl Isosorbide, Hydroxyethylcellulose, Phenoxyethanol, Sodium Hyaluronate, Ethoxydiglycol, Chlorphenesin.',
    howToUse: 'Apply 3–4 drops to cleansed face and neck prior to heavier creams. Gently press into skin until fully absorbed. Suitable for daily AM and PM routines.',
    isBestSeller: true,
    inStock: true,
    volume: '30 ml'
  },
  {
    id: 'hydra-intense-gel-moisturizer',
    name: 'Hydra Intense Gel Moisturizer',
    category: 'Skincare',
    subcategory: 'Moisturizers',
    concern: ['Dry Skin', 'Dull Skin', 'Sensitive Skin'],
    price: 649,
    oldPrice: 850,
    discountPercent: 24,
    rating: 4.8,
    reviewsCount: 184,
    image: createProductSvg('jar', '#EAF3F7', '#5B889C', 'Hydra Gel Moisturizer'),
    thumbnails: [
      createProductSvg('jar', '#EAF3F7', '#5B889C', 'Hydra Gel Moisturizer'),
      createProductSvg('jar', '#F0F7FA', '#7FA7B8', 'Open Jar Cream'),
      createProductSvg('jar', '#DCECF2', '#416B7E', 'Side Perspective')
    ],
    shortDescription: 'Weightless oil-free waterburst gel packed with 4D Hyaluronic Acid and Marine Algae for 72-hour deep hydration.',
    description: 'Quench dehydrated skin with an ultra-refreshing water-gel moisturizer. Featuring 4 molecular weights of Hyaluronic Acid, Ceramide NP, and Marine Algae extracts, it floods the skin with continuous moisture, plumping fine lines and leaving a dewy, non-greasy glow.',
    benefits: [
      '72-hour sustained moisture lock without heavy or sticky feel',
      'Instant cooling effect lowers surface temperature by 2°C',
      'Supports optimal skin barrier elasticity and bounce',
      'Flawless makeup base that prevents mid-day patchiness'
    ],
    ingredients: 'Water, Propanediol, Glycerin, Sodium Hyaluronate Crosspolymer, Hydrolyzed Sodium Hyaluronate, Ceramide NP, Laminaria Ochroleuca (Algae) Extract, Centella Asiatica Extract, Carbomer, Arginine, Caprylyl Glycol.',
    howToUse: 'Smooth a generous amount over face and neck morning and evening after serum. Pat gently until waterburst formula transforms and absorbs.',
    isBestSeller: true,
    inStock: true,
    volume: '50 ml'
  },
  {
    id: 'velvet-matte-lipstick',
    name: 'Velvet Matte Lipstick',
    category: 'Makeup',
    subcategory: 'Lipsticks',
    concern: ['Dry Skin'],
    price: 349,
    oldPrice: 450,
    discountPercent: 22,
    rating: 4.7,
    reviewsCount: 96,
    image: createProductSvg('lipstick', '#F4D8DA', '#9B2D45', 'Velvet Matte Lipstick'),
    thumbnails: [
      createProductSvg('lipstick', '#F4D8DA', '#9B2D45', 'Velvet Matte Lipstick'),
      createProductSvg('lipstick', '#EED0D3', '#831F35', 'Shade Swatch'),
      createProductSvg('lipstick', '#F9E6E8', '#BA465E', 'Gold Bullet Detail')
    ],
    shortDescription: 'Cushiony non-drying matte lipstick infused with Camellia Oil and Vitamin E for 10-hour comfortable wear.',
    description: 'A luxurious modern lipstick that delivers rich, weightless pigment with a plush soft-focus blur. Enriched with nourishing camellia seed oil, hyaluronic spheres, and antioxidant vitamin E to keep lips supple and comfortable without cracking or flaking.',
    benefits: [
      'Intense one-swipe opaque color payoff',
      'Velvety soft-blur finish that conceals lip lines',
      'Non-drying moisture-infusion stays comfortable for 10 hours',
      'Transfer-resistant and feather-proof precision tip'
    ],
    ingredients: 'Dimethicone, Dimethicone Crosspolymer, Isononyl Isononanoate, Camellia Japonica Seed Oil, Tocopheryl Acetate (Vitamin E), Synthetic Wax, Silica Dimethyl Silylate, CI 77491, CI 77499, CI 15850.',
    howToUse: 'Glide the sculpted bullet directly over lips starting from the cupid’s bow outward. For a soft diffused look, lightly tap onto the center of lips and blend with fingertips.',
    isBestSeller: true,
    inStock: true,
    volume: '3.8 g'
  },
  {
    id: 'radiance-face-serum',
    name: 'Radiance Face Serum',
    category: 'Skincare',
    subcategory: 'Serums',
    concern: ['Dull Skin', 'Anti-Aging'],
    price: 899,
    oldPrice: 1199,
    discountPercent: 25,
    rating: 4.9,
    reviewsCount: 312,
    image: createProductSvg('dropper', '#FBE5D8', '#C26B38', 'Radiance Face Serum'),
    thumbnails: [
      createProductSvg('dropper', '#FBE5D8', '#C26B38', 'Radiance Face Serum'),
      createProductSvg('dropper', '#FDF0E8', '#D68252', 'Dropper Pipette'),
      createProductSvg('dropper', '#F5D3BF', '#A85526', 'Golden Glow Texture')
    ],
    shortDescription: 'Concentrated 15% Vitamin C (3-O-Ethyl Ascorbic Acid) with Ferulic Acid for unmatched illumination and firmness.',
    description: 'The ultimate antidote to dullness and fatigued skin. Crafted with ultra-stable 3-O-Ethyl Ascorbic Acid, Japanese Ferulic Acid, and botanic peptides, this potent antioxidant elixir stimulates collagen synthesis, brightens stubborn dark spots, and shields skin from photoaging.',
    benefits: [
      'Visibly boosts skin glow and luminous clarity within 7 days',
      'Neutralizes 98% of free radical oxidative stress',
      'Fades sun spots and discoloration',
      'Non-oxidizing formula stays fresh and potent for up to 12 months'
    ],
    ingredients: 'Aqua, 3-O-Ethyl Ascorbic Acid (15%), Propylene Glycol, Ferulic Acid (0.5%), Alpha Arbutin, Citrus Aurantium Dulcis (Orange) Peel Extract, Tocopherol, Sodium Citrate, Citric Acid, Disodium EDTA.',
    howToUse: 'Dispense 4 drops onto fingertips and press gently into cleansed face, neck, and décolletage in the morning. Follow with your favorite moisturizer and SPF 50 sunscreen.',
    isBestSeller: true,
    inStock: true,
    volume: '30 ml'
  },
  {
    id: 'gentle-daily-cleanser',
    name: 'Gentle Daily Cleanser',
    category: 'Skincare',
    subcategory: 'Cleansers',
    concern: ['Sensitive Skin', 'Dry Skin'],
    price: 599,
    oldPrice: 799,
    discountPercent: 25,
    rating: 4.7,
    reviewsCount: 145,
    image: createProductSvg('tube', '#F5EFE6', '#9B8168', 'Gentle Daily Cleanser'),
    thumbnails: [
      createProductSvg('tube', '#F5EFE6', '#9B8168', 'Gentle Daily Cleanser'),
      createProductSvg('tube', '#FAF6F0', '#B09880', 'Milky Foam Lather'),
      createProductSvg('tube', '#ECE2D4', '#7D654E', 'Eco Tube Detail')
    ],
    shortDescription: 'pH-balanced 5.5 milky emulsion with Oat Extract and Colloidal Ceramides to nurture fragile, sensitive skin.',
    description: 'Designed specifically for hypersensitive, easily irritated, or barrier-compromised skin. This milky lotion cleanser lifts away makeup, sunscreen, and daily debris without stripping essential lipids. Calming colloidal oat extract and bisabolol soothe tight, red skin.',
    benefits: [
      'Preserves physiological pH 5.5 barrier equilibrium',
      'Hypoallergenic, fragrance-free, and ophthalmologist tested',
      'Dissolves light makeup and particulate dust gently',
      'Leaves skin silky, calm, and comforted'
    ],
    ingredients: 'Aqua, Cetearyl Alcohol, Colloidal Oatmeal, Ceramide EOP, Ceramide AP, Bisabolol, Chamomilla Recutita Flower Extract, Sodium Lauroyl Oat Amino Acids, Glycerin, Xanthan Gum, Phenoxyethanol.',
    howToUse: 'Massage 1–2 pumps onto dry or damp skin. Gently wipe away with a damp cotton pad or rinse with lukewarm water. Safe for delicate eye area.',
    isBestSeller: true,
    inStock: true,
    volume: '150 ml'
  },
  {
    id: 'repair-glow-body-lotion',
    name: 'Repair & Glow Body Lotion',
    category: 'Bodycare',
    subcategory: 'Body Lotion',
    concern: ['Dry Skin', 'Dull Skin'],
    price: 699,
    oldPrice: 899,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 176,
    image: createProductSvg('pump', '#F3E8E2', '#A36852', 'Repair Body Lotion'),
    thumbnails: [
      createProductSvg('pump', '#F3E8E2', '#A36852', 'Repair Body Lotion'),
      createProductSvg('pump', '#F8F1ED', '#BA806B', 'Rich Cream Dispenser'),
      createProductSvg('pump', '#E8D7CE', '#8C523D', 'Velvet Texture Swatch')
    ],
    shortDescription: 'Velvety body cream packed with 5% Lactic Acid, Shea Butter, and Sweet Almond Oil for baby-soft limbs.',
    description: 'Transform rough, dry, and strawberry skin with this dual-action smoothing body treatment. Gentle AHA lactic acid dissolves rough dead skin cells while organic shea butter and sweet almond oil replenish deep lipid layers for a luminous satin sheen.',
    benefits: [
      'Eliminates rough bumps (keratosis pilaris) and flaky patches',
      'Deeply nourishes with rich raw African shea butter',
      'Fast-absorbing velvet finish with zero sticky residue',
      'Subtle natural vanilla blossom and almond scent'
    ],
    ingredients: 'Aqua, Butyrospermum Parkii (Shea) Butter, Lactic Acid (5%), Prunus Amygdalus Dulcis (Sweet Almond) Oil, Cetyl Alcohol, Glyceryl Stearate, Niacinamide, Sodium Hydroxide, Parfum (Natural), Tocopheryl Acetate.',
    howToUse: 'Massage over entire body daily, paying extra attention to elbows, knees, heels, and arms. For optimal results, apply onto slightly damp skin immediately after showering.',
    isBestSeller: true,
    inStock: true,
    volume: '250 ml'
  },
  {
    id: 'vitamin-c-brightening-cream',
    name: 'Vitamin C Brightening Cream',
    category: 'Skincare',
    subcategory: 'Moisturizers',
    concern: ['Dull Skin', 'Anti-Aging'],
    price: 749,
    oldPrice: 999,
    discountPercent: 25,
    rating: 4.8,
    reviewsCount: 210,
    image: createProductSvg('jar', '#FCEEE3', '#BD632B', 'Vitamin C Brightening Cream'),
    thumbnails: [
      createProductSvg('jar', '#FCEEE3', '#BD632B', 'Vitamin C Brightening Cream'),
      createProductSvg('jar', '#FEF5ED', '#D27B45', 'Whipped Soufflé Texture'),
      createProductSvg('jar', '#F7DECC', '#A04D1B', 'Rose Gold Lid Detail')
    ],
    shortDescription: 'Whipped antioxidant soufflé with Kakadu Plum and Bio-Retinol that revives tired, lacklustre complexions.',
    description: 'A decadent yet breathable face cream that drenches skin in stabilized Vitamin C, Australian Kakadu plum (nature’s richest Vitamin C source), and plant-derived Bakuchiol. Re-energizes cellular turnover, evens discolorations, and delivers an undeniable lit-from-within luminosity.',
    benefits: [
      'Restores youthful radiance and natural skin bounce',
      'Targets sun damage and stubborn brown spots',
      'Bakuchiol provides retinol-like firming benefits without irritation',
      'Protects against oxidative stress and blue light exposure'
    ],
    ingredients: 'Aqua, Caprylic/Capric Triglyceride, Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Ascorbyl Tetraisopalmitate, Bakuchiol (1%), Squalane, Cetearyl Olivate, Sorbitan Olivate, Sodium Hyaluronate, Phenoxyethanol.',
    howToUse: 'Warm a dime-sized amount between palms and gently press onto face, neck, and chest. Use morning and night as your sealing step.',
    isBestSeller: true,
    inStock: true,
    volume: '50 ml'
  },

  // NEW ARRIVALS & CATEGORY EXPANSIONS:
  {
    id: 'rosewater-hydrating-toner',
    name: 'Rosewater Hydrating Toner',
    category: 'Skincare',
    subcategory: 'Toners',
    concern: ['Dry Skin', 'Sensitive Skin', 'Dull Skin'],
    price: 549,
    oldPrice: 699,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 88,
    image: createProductSvg('spray', '#FCE8E8', '#B85368', 'Rosewater Mist Toner'),
    thumbnails: [
      createProductSvg('spray', '#FCE8E8', '#B85368', 'Rosewater Mist Toner'),
      createProductSvg('spray', '#FDF2F2', '#CA6D81', 'Micro-Fine Spray Detail'),
      createProductSvg('spray', '#F7D6D8', '#9F3E52', 'Damask Rose Petal Extract')
    ],
    shortDescription: 'Pure hydro-distilled Damask Rosewater mist with Aloe Vera and Centella to soothe and refresh.',
    description: 'An ethereal facial mist hand-crafted from wild-harvested Rosa Damascena blossoms. It restores moisture equilibrium immediately after cleansing, cools overheated skin, and sets makeup with an enchanting dewy veil.',
    benefits: [
      'Instantly hydrates and balances cutaneous pH',
      'Anti-inflammatory rose polyphenols calm reactive skin',
      'Multi-purpose: toner, midday refresher, and makeup setter',
      '100% steam-distilled floral essence with no synthetic perfume'
    ],
    ingredients: 'Rosa Damascena Flower Water, Aloe Barbadensis Leaf Juice, Centella Asiatica Extract, Glycerin, Sodium Hyaluronate, Panthenol, Levulinic Acid, Sodium Anisate.',
    howToUse: 'Spritz generously onto face after cleansing or whenever skin craves an uplifting botanical burst. Keep in refrigerator for an enhanced cooling effect.',
    isNewArrival: true,
    inStock: true,
    volume: '150 ml'
  },
  {
    id: 'spf-50-ultralight-invisible-sunscreen',
    name: 'SPF 50+ Invisible Sunscreen Gel',
    category: 'Sun Care',
    subcategory: 'SPF 50',
    concern: ['Sun Protection', 'Anti-Aging', 'Oily Skin'],
    price: 849,
    oldPrice: 1099,
    discountPercent: 23,
    rating: 4.9,
    reviewsCount: 164,
    image: createProductSvg('tube', '#FEF5E7', '#C87F1C', 'SPF 50+ Sunscreen Gel'),
    thumbnails: [
      createProductSvg('tube', '#FEF5E7', '#C87F1C', 'SPF 50+ Sunscreen Gel'),
      createProductSvg('tube', '#FFF9F0', '#DC9333', 'Zero White Cast Gel'),
      createProductSvg('tube', '#FCE9CF', '#AE6B12', 'Matte Finish Swatch')
    ],
    shortDescription: 'Zero white-cast, ultra-lightweight broad spectrum UVA/UVB gel enriched with Niacinamide and Cica.',
    description: 'The sunscreen you will genuinely look forward to wearing every single day. A transparent water-light gel that disappears into skin without stickiness, oiliness, or ghostly white cast. Features advanced photostable filters and blue-light defense.',
    benefits: [
      'Broad spectrum SPF 50+ PA++++ UVA/UVB and Blue Light protection',
      'Completely transparent and leaves a soft velvety matte finish',
      'Non-comedogenic and water-resistant for up to 80 minutes',
      'Zero eye-stinging formulation'
    ],
    ingredients: 'Aqua, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Niacinamide (2%), Centella Asiatica Leaf Extract, Silica, Tocopheryl Acetate, Acrylates Copolymer.',
    howToUse: 'Apply two finger-lengths generously to face, neck, and ears 15 minutes before sun exposure. Reapply every 2 hours or after swimming and sweating.',
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
    volume: '50 ml'
  },
  {
    id: 'silk-peptide-nourishing-hair-mask',
    name: 'Silk Peptide Hair Mask',
    category: 'Haircare',
    subcategory: 'Hair Mask',
    concern: ['Hair Fall', 'Dry Skin'],
    price: 799,
    oldPrice: 999,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 92,
    image: createProductSvg('jar', '#EFE8E5', '#8E6754', 'Silk Peptide Hair Mask'),
    thumbnails: [
      createProductSvg('jar', '#EFE8E5', '#8E6754', 'Silk Peptide Hair Mask'),
      createProductSvg('jar', '#F7F2EF', '#A57E6B', 'Rich Butter Texture'),
      createProductSvg('jar', '#E2D5CF', '#734E3C', 'Rose Gold Jar Rim')
    ],
    shortDescription: 'Intensive bond repair treatment with Hydrolyzed Silk, Keratin, and Argan Oil for mirror-like gloss.',
    description: 'Rescue brittle, heat-damaged, or colored strands in 5 minutes. This deeply restorative hair treatment penetrates the hair cortex to rebuild fractured disulfide bonds, seal open cuticles, and reduce breakage by up to 92%.',
    benefits: [
      'Reconstructs damaged hair keratin bonds',
      'Eliminates unruly frizz and seals split ends',
      'Imparts mirror-like gloss and weightless silkiness',
      'Safe for color-treated and chemically straightened hair'
    ],
    ingredients: 'Aqua, Cetearyl Alcohol, Hydrolyzed Silk Peptides, Behentrimonium Chloride, Argania Spinosa (Argan) Kernel Oil, Hydrolyzed Keratin, Panthenol, Amodimethicone, Citric Acid, Fragrance.',
    howToUse: 'After shampooing, squeeze out excess water. Apply generously from mid-lengths to ends. Comb through and leave on for 5–10 minutes. Rinse thoroughly with cool water.',
    isNewArrival: true,
    inStock: true,
    volume: '200 ml'
  },
  {
    id: 'rosemary-biotin-hair-growth-oil',
    name: 'Rosemary & Biotin Scalp Oil',
    category: 'Haircare',
    subcategory: 'Hair Oil',
    concern: ['Hair Fall'],
    price: 699,
    oldPrice: 899,
    discountPercent: 22,
    rating: 4.9,
    reviewsCount: 205,
    image: createProductSvg('dropper', '#E6EFEA', '#447A5A', 'Rosemary Scalp Oil'),
    thumbnails: [
      createProductSvg('dropper', '#E6EFEA', '#447A5A', 'Rosemary Scalp Oil'),
      createProductSvg('dropper', '#F0F6F3', '#5E9273', 'Scalp Dropper'),
      createProductSvg('dropper', '#D5E4DC', '#306044', 'Herbal Infusion Swatch')
    ],
    shortDescription: 'Potent therapeutic scalp elixir with pure Rosemary Essential Oil, Biotin, and Castor Oil to stimulate hair roots.',
    description: 'Formulated with clinically studied 2% Rosmarinic Acid and pure cold-pressed castor and jojoba oils. It invigoratingly stimulates scalp micro-circulation, fortifies roots, and visibly reduces hair thinning while encouraging robust, lush new strand growth.',
    benefits: [
      'Stimulates scalp follicular micro-circulation',
      'Reduces excessive shedding and hair fall within 6 weeks',
      'Soothes dry, itchy scalp and prevents dandruff',
      'Non-greasy, easily washes out with regular shampoo'
    ],
    ingredients: 'Rosmarinus Officinalis (Rosemary) Leaf Oil, Ricinus Communis (Castor) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Biotin, Mentha Piperita (Peppermint) Oil, Tocopherol, Melaleuca Alternifolia Leaf Oil.',
    howToUse: 'Part hair into sections and apply 1–2 dropperfuls directly to scalp. Massage gently with fingertips for 5 minutes. Leave on for at least 2 hours or overnight before shampooing. Use 2–3 times weekly.',
    inStock: true,
    volume: '50 ml'
  },
  {
    id: 'berry-glaze-hydrating-lip-oil',
    name: 'Berry Glaze Hydrating Lip Oil',
    category: 'Makeup',
    subcategory: 'Lipsticks',
    concern: ['Dry Skin'],
    price: 399,
    oldPrice: 499,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 78,
    image: createProductSvg('dropper', '#F8DEE5', '#AB3C60', 'Berry Lip Glaze Oil'),
    thumbnails: [
      createProductSvg('dropper', '#F8DEE5', '#AB3C60', 'Berry Lip Glaze Oil'),
      createProductSvg('dropper', '#FCEEF2', '#C05377', 'Plush Doe-Foot Applicator'),
      createProductSvg('dropper', '#F2CAD5', '#912749', 'Juicy Berry Shine')
    ],
    shortDescription: 'High-shine, cushiony lip oil infused with Raspberry Seed Oil and Vitamin E for a non-sticky glassy pout.',
    description: 'The shine of a gloss meets the deep replenishment of a nourishing lip treatment. Rich in raspberry, jojoba, and pomegranate seed oils, it envelops lips in a juicy wash of sheer rosy berry tint with irresistible high-shine reflection.',
    benefits: [
      'Cushiony high-gloss shine without any stickiness',
      'Deeply conditions dry, chapped lips',
      'Subtle universal tint enhances natural lip color',
      'Oversized plush applicator for effortless one-swipe application'
    ],
    ingredients: 'Polybutene, Octyldodecanol, Rubus Idaeus (Raspberry) Seed Oil, Punica Granatum Seed Oil, Simmondsia Chinensis Seed Oil, Tocopherol, Aroma, CI 45410, CI 77891.',
    howToUse: 'Glide applicator over bare lips for an everyday glazed look, or layer on top of your favorite Velvet Matte Lipstick for instant multidimensional shine.',
    isNewArrival: true,
    inStock: true,
    volume: '6 ml'
  },
  {
    id: 'luminous-silk-liquid-blush',
    name: 'Luminous Silk Liquid Blush',
    category: 'Makeup',
    subcategory: 'Blush',
    concern: ['Dull Skin'],
    price: 499,
    oldPrice: 650,
    discountPercent: 23,
    rating: 4.8,
    reviewsCount: 114,
    image: createProductSvg('dropper', '#FCE3E3', '#BE5555', 'Luminous Silk Blush'),
    thumbnails: [
      createProductSvg('dropper', '#FCE3E3', '#BE5555', 'Luminous Silk Blush'),
      createProductSvg('dropper', '#FDF0F0', '#D16F6F', 'Soft Petal Flush Swatch'),
      createProductSvg('dropper', '#F7D0D0', '#A63E3E', 'Pipette Droplet')
    ],
    shortDescription: 'Weightless serum-blush with Hyaluronic Acid that melts seamlessly into skin for a healthy, lit-from-within flush.',
    description: 'An airy liquid blush that blends like second skin. Infused with skincare actives like hyaluronic acid and squalane, this buildable formula delivers a natural pinch-of-color radiant cheek glow that never cakes or settles into pores.',
    benefits: [
      'Seamless second-skin melt with buildable pigment',
      'Dewy, radiant finish lasts for up to 12 hours',
      'Infused with hydrating squalane and rosehip oil',
      'Can be applied to cheeks, eyelids, and lips'
    ],
    ingredients: 'Isododecane, Squalane, Mica, Silica, Rosa Canina (Rosehip) Seed Oil, Sodium Hyaluronate, Disteardimonium Hectorite, Propylene Carbonate, CI 77891, CI 77491, CI 15850.',
    howToUse: 'Dot 1–2 drops onto the apples of your cheeks. Blend upward toward the temples using fingertips, a beauty sponge, or a dense blush brush.',
    inStock: true,
    volume: '15 ml'
  },
  {
    id: 'champagne-glow-liquid-highlighter',
    name: 'Champagne Glow Highlighter',
    category: 'Makeup',
    subcategory: 'Highlighter',
    concern: ['Dull Skin'],
    price: 549,
    oldPrice: 699,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 86,
    image: createProductSvg('dropper', '#FFF3E3', '#BF9348', 'Champagne Glow Highlighter'),
    thumbnails: [
      createProductSvg('dropper', '#FFF3E3', '#BF9348', 'Champagne Glow Highlighter'),
      createProductSvg('dropper', '#FFF9F0', '#D4AB63', 'Prismatic Pearl Reflect'),
      createProductSvg('dropper', '#FDE7CC', '#A57B30', 'Glass Dropper Detail')
    ],
    shortDescription: 'Ultra-refined micro-pearl illuminator that delivers an angelic glass-skin sheen with zero glitter chunks.',
    description: 'Create ethereal, candlelit skin in seconds. This liquid illuminator suspends ultra-fine light-refracting pearls in a nourishing botanical serum base. Accentuates high points of face with a dewy, non-powdery sheen.',
    benefits: [
      'Zero visible glitter, pure molten glass-skin sheen',
      'Universal soft champagne tone flatters all skin undertones',
      'Mixable with foundation or primer for all-over glow',
      'Non-greasy, quick-setting formula'
    ],
    ingredients: 'Aqua, Hydrogenated Polyisobutene, Synthetic Fluorphlogopite, Squalane, Glycerin, Mica, Tin Oxide, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491), Phenoxyethanol.',
    howToUse: 'Dab onto high points of face: cheekbones, bridge of nose, brow bone, and cupid’s bow. Alternatively, mix 1 drop into liquid foundation for an overall luminous complexion.',
    inStock: true,
    volume: '20 ml'
  },
  {
    id: 'exfoliating-sugar-body-scrub',
    name: 'Velvet Rose Sugar Body Scrub',
    category: 'Bodycare',
    subcategory: 'Body Scrub',
    concern: ['Dry Skin', 'Dull Skin'],
    price: 599,
    oldPrice: 750,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 132,
    image: createProductSvg('jar', '#F9E7E9', '#A84B5B', 'Rose Sugar Body Scrub'),
    thumbnails: [
      createProductSvg('jar', '#F9E7E9', '#A84B5B', 'Rose Sugar Body Scrub'),
      createProductSvg('jar', '#FDF2F4', '#BD6372', 'Granular Sugar Crystals'),
      createProductSvg('jar', '#F3D2D6', '#8F3444', 'Whipped Coconut Butter')
    ],
    shortDescription: 'Polishing scrub made with fine cane sugar crystals, Virgin Coconut Oil, and Moroccan Rose petals.',
    description: 'Buff away dull, dry skin cells and reveal velvety touchable smoothness. Natural golden cane sugar gently polishes while nutrient-rich cold-pressed coconut and jojoba oils wrap the body in deep hydration.',
    benefits: [
      'Gentle physical exfoliation without micro-tears',
      'Rinses clean with no sticky or greasy tub residue',
      'Prepares skin for a smooth, streak-free self-tan application',
      'Sensuous aroma of fresh Moroccan damask rose garden'
    ],
    ingredients: 'Sucrose (Cane Sugar), Cocos Nucifera (Coconut) Oil, Butyrospermum Parkii Butter, Rosa Damascena Flower Powder, Simmondsia Chinensis Seed Oil, Tocopherol, Natural Rose Extract.',
    howToUse: 'Massage a scoop of scrub onto wet skin in circular motions, concentrating on dry areas like elbows, knees, and feet. Rinse thoroughly with warm water. Use 2–3 times a week.',
    inStock: true,
    volume: '250 g'
  },
  {
    id: 'luxury-skincare-gift-set',
    name: 'The Ultimate Glow Skincare Set',
    category: 'Gift Sets',
    subcategory: 'Skincare Gift Set',
    concern: ['Dull Skin', 'Dry Skin', 'Anti-Aging'],
    price: 1999,
    oldPrice: 2650,
    discountPercent: 25,
    rating: 5.0,
    reviewsCount: 89,
    image: createProductSvg('box', '#FCE8E8', '#9B3F50', 'Ultimate Glow Skincare Set'),
    thumbnails: [
      createProductSvg('box', '#FCE8E8', '#9B3F50', 'Ultimate Glow Skincare Set'),
      createProductSvg('box', '#FDF2F2', '#B35364', 'Open Gift Box Display'),
      createProductSvg('box', '#F7D4D7', '#802B3C', 'Full 4-Piece Routine')
    ],
    shortDescription: 'Curated 4-piece luxury ritual: Gentle Cleanser, Radiance Serum, Hydra Gel Moisturizer & Rosewater Toner.',
    description: 'The pinnacle of beauty self-care, packaged in a keepsake blush gift box with embossed gold foil details. This 4-step ritual provides everything needed to cleanse, tone, treat, and seal the ultimate glass-skin glow.',
    benefits: [
      'Complete 4-step morning and evening skincare regimen',
      'Saves over 25% compared to purchasing items separately',
      'Packaged in an exquisite luxury gift box with satin ribbon',
      'Includes complimentary Velvetique silk head band and cleansing sponge'
    ],
    ingredients: 'Full size: Gentle Daily Cleanser (150ml), Rosewater Toner (150ml), Radiance Face Serum (30ml), Hydra Intense Gel Moisturizer (50ml).',
    howToUse: 'Step 1: Cleanse with Gentle Daily Cleanser. Step 2: Spritz Rosewater Toner. Step 3: Apply 4 drops of Radiance Serum. Step 4: Lock in hydration with Hydra Gel Moisturizer.',
    isBestSeller: true,
    inStock: true,
    volume: '4-Piece Full Size Set'
  },
  {
    id: 'after-sun-soothing-gel',
    name: 'After Sun Aloe & Cica Soothing Gel',
    category: 'Sun Care',
    subcategory: 'After Sun Care',
    concern: ['Sun Protection', 'Sensitive Skin'],
    price: 499,
    oldPrice: 650,
    discountPercent: 23,
    rating: 4.8,
    reviewsCount: 67,
    image: createProductSvg('tube', '#E9F5EF', '#3A7D58', 'After Sun Aloe Gel'),
    thumbnails: [
      createProductSvg('tube', '#E9F5EF', '#3A7D58', 'After Sun Aloe Gel'),
      createProductSvg('tube', '#F2FAF6', '#52966F', 'Cooling Gel Swatch'),
      createProductSvg('tube', '#D7EDE2', '#286341', 'Refreshing Pump Tube')
    ],
    shortDescription: '99% fermented Aloe Vera Leaf Juice with Madecassoside to instantly relieve sunburn, heat, and redness.',
    description: 'An emergency rescue treatment for sun-exposed or stressed skin. Formulated with organic Jeju Aloe Vera and fermented Centella Asiatica, this instant-cooling jelly lowers skin temperature, prevents peeling, and calms redness.',
    benefits: [
      'Immediately cools heated skin and relieves sun discomfort',
      'Accelerates healing of epidermal sun irritation',
      'Alcohol-free, fragrance-free, and suitable for face and body',
      'Leaves skin soothed, hydrated, and calm'
    ],
    ingredients: 'Aloe Barbadensis Leaf Juice (99%), Madecassoside, Allantoin, Cucumis Sativus (Cucumber) Fruit Extract, Panthenol, Carbomer, Glycerin, Sodium Hyaluronate.',
    howToUse: 'Apply generously to face and body after sun exposure or whenever skin feels tight, hot, or irritated. Reapply as often as desired.',
    inStock: true,
    volume: '150 ml'
  }
];

export const CATEGORIES = [
  {
    id: 'Skincare',
    name: 'SKINCARE',
    description: 'Clean, dermatologist tested formulations for radiant, balanced skin.',
    itemCount: '12 Products',
    iconColor: '#F5E6E8',
    imageType: 'dropper'
  },
  {
    id: 'Makeup',
    name: 'MAKEUP',
    description: 'Effortless, skin-loving pigments that enhance your natural beauty.',
    itemCount: '8 Products',
    iconColor: '#FBE8E1',
    imageType: 'lipstick'
  },
  {
    id: 'Haircare',
    name: 'HAIRCARE',
    description: 'Botanical scalp elixirs and bond-repair treatments for lustrous strands.',
    itemCount: '6 Products',
    iconColor: '#EBE5E2',
    imageType: 'jar'
  },
  {
    id: 'Bodycare',
    name: 'BODYCARE',
    description: 'Decadent scrubs, rich butters, and firming smoothing lotions.',
    itemCount: '7 Products',
    iconColor: '#F2E8E4',
    imageType: 'pump'
  },
  {
    id: 'Sun Care',
    name: 'SUN CARE',
    description: 'Weightless, invisible broad-spectrum SPF and cooling after-sun therapy.',
    itemCount: '5 Products',
    iconColor: '#FEF3E4',
    imageType: 'tube'
  },
  {
    id: 'Gift Sets',
    name: 'GIFT SETS',
    description: 'Curated self-care collections and limited-edition beauty boxes.',
    itemCount: '4 Sets',
    iconColor: '#F7E2E4',
    imageType: 'box'
  }
] as const;

export const SKIN_CONCERNS = [
  { id: 'Acne & Breakouts', name: 'Acne & Breakouts', icon: '✨' },
  { id: 'Dry Skin', name: 'Dry Skin', icon: '💧' },
  { id: 'Oily Skin', name: 'Oily Skin', icon: '🌿' },
  { id: 'Dull Skin', name: 'Dull Skin', icon: '🌸' },
  { id: 'Sensitive Skin', name: 'Sensitive Skin', icon: '🍃' },
  { id: 'Anti-Aging', name: 'Anti-Aging', icon: '⏳' },
  { id: 'Hair Fall', name: 'Hair Fall', icon: '💆‍♀️' },
  { id: 'Sun Protection', name: 'Sun Protection', icon: '☀️' }
];

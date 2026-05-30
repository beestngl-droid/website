const categories = [
  {
    id: 'spices-masala',
    name: 'Spices & Masala',
    image: '/assets/products/masala.png',
    description: 'Premium quality Indian spices and masala blends for global markets. Garam Masala, Turmeric, Red Chili, Cumin, and custom blends.',
    products: [
      { id: 1, name: 'Garam Masala Powder', image: '/assets/products/239-2399368_garam-masala-powder-png-transparent-png.png', description: 'Premium blend of aromatic spices, perfect for Indian cuisine.' },
      { id: 2, name: 'Red Chili Flakes', image: '/assets/products/red-chili-flakes.jpg', description: 'High-quality dried red chili flakes with rich color and heat.' },
      { id: 3, name: 'Masala Blend', image: '/assets/products/Masala-1.png', description: 'Custom masala blends prepared to international quality standards.' },
      { id: 4, name: 'Spice Mix', image: '/assets/products/Masala1.png', description: 'Traditional Indian spice mix for authentic flavors.' },
      { id: 5, name: 'Premium Masala', image: '/assets/products/Masala2.png', description: 'Export-grade premium masala powder.' }
    ]
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda & Herbal',
    image: '/assets/products/Ayurveda.png',
    description: 'Traditional Ayurvedic and herbal products. Natural supplements, herbal capsules, and wellness products from India.',
    products: [
      { id: 6, name: 'Ayurvedic Products', image: '/assets/products/Ayurveda.png', description: 'Authentic Ayurvedic wellness products from India.' },
      { id: 7, name: 'Herbal Supplements', image: '/assets/products/Ayurveda1.png', description: 'Natural herbal supplements and health products.' },
      { id: 8, name: 'Vitamin Capsules', image: '/assets/products/ayurveda-vitamin-capsules-500x500-1.png', description: 'Ayurvedic vitamin capsules made from natural ingredients.' }
    ]
  },
  {
    id: 'tea-coffee',
    name: 'Tea & Coffee',
    image: '/assets/products/TeaCoffe.png',
    description: 'Finest Indian tea and coffee. Assam, Darjeeling, South Indian coffee beans and specialty blends.',
    products: [
      { id: 9, name: 'Indian Tea Collection', image: '/assets/products/TeaCoffe.png', description: 'Premium Assam and Darjeeling tea for export.' },
      { id: 10, name: 'Coffee Beans', image: '/assets/products/TeaCoffe1.png', description: 'South Indian Arabica and Robusta coffee beans.' },
      { id: 11, name: 'Specialty Blends', image: '/assets/products/TeaCoffe2.png', description: 'Custom tea and coffee blends for international markets.' },
      { id: 12, name: 'Tea & Coffee Range', image: '/assets/products/cofee-and-tea.png', description: 'Complete range of Indian tea and coffee products.' }
    ]
  },
  {
    id: 'oils',
    name: 'Seed Oils & Cooking Oils',
    image: '/assets/products/Seed-oil.png',
    description: 'Pure and natural cooking oils. Cold-pressed seed oils, mustard oil, sesame oil, and groundnut oil.',
    products: [
      { id: 13, name: 'Seed Oil', image: '/assets/products/Seed-oil.png', description: 'Cold-pressed natural seed oils for cooking and wellness.' },
      { id: 14, name: 'Premium Oils', image: '/assets/products/Seed-oil1.png', description: 'Export-quality premium cooking oils.' },
      { id: 15, name: 'Natural Oils', image: '/assets/products/oil.png', description: 'Pure natural oils — mustard, sesame, groundnut varieties.' }
    ]
  },
  {
    id: 'marine-products',
    name: 'Marine Products',
    image: '/assets/products/Marine-Products.png',
    description: 'Fresh and frozen marine products. Fish, prawns, shrimp, and seafood for international markets.',
    products: [
      { id: 16, name: 'Marine Products', image: '/assets/products/Marine-Products.png', description: 'Fresh and frozen seafood products for export.' }
    ]
  },
  {
    id: 'carpets',
    name: 'Carpets & Rugs',
    image: '/assets/products/Carpet.png',
    description: 'Handmade Indian carpets and rugs. Traditional designs, premium quality wool and silk carpets.',
    products: [
      { id: 17, name: 'Handmade Carpets', image: '/assets/products/Carpet.png', description: 'Traditional handmade Indian carpets.' },
      { id: 18, name: 'Designer Carpets', image: '/assets/products/Carpet-1.png', description: 'Designer carpets with intricate patterns.' },
      { id: 19, name: 'Premium Rugs', image: '/assets/products/Carpet1.png', description: 'Premium quality wool and silk rugs.' }
    ]
  },
  {
    id: 'leather',
    name: 'Leather Goods',
    image: '/assets/products/lether.png',
    description: 'Quality leather products. Bags, accessories, footwear, and industrial leather goods.',
    products: [
      { id: 20, name: 'Leather Products', image: '/assets/products/lether.png', description: 'Premium leather goods for international markets.' }
    ]
  },
  {
    id: 'garments',
    name: 'Garments & Textiles',
    image: '/assets/products/Garments.png',
    description: 'Indian garments and textiles. Cotton, silk, and blended fabrics. Ready-made garments and fabric rolls.',
    products: [
      { id: 21, name: 'Garments & Textiles', image: '/assets/products/Garments.png', description: 'Quality Indian garments and textile products.' }
    ]
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    image: '/assets/products/Craft.png',
    description: 'Traditional Indian handicrafts. Artisan-made decorative items, home decor, and gift articles.',
    products: [
      { id: 22, name: 'Indian Crafts', image: '/assets/products/Craft.png', description: 'Traditional Indian handicraft items.' },
      { id: 23, name: 'Artisan Products', image: '/assets/products/Craft1.png', description: 'Handmade artisan products and decorative items.' }
    ]
  },
  {
    id: 'rubber',
    name: 'Rubber Products',
    image: '/assets/products/Rubber.png',
    description: 'Industrial rubber products. Natural rubber, synthetic rubber, and rubber-based goods.',
    products: [
      { id: 24, name: 'Rubber Products', image: '/assets/products/Rubber.png', description: 'Industrial and commercial rubber products.' }
    ]
  },
  {
    id: 'agricultural',
    name: 'Agricultural Products',
    image: '/assets/products/agricultural.png',
    description: 'Fresh and processed agricultural products. Grains, pulses, cereals, fruits, and vegetables.',
    products: [
      { id: 25, name: 'Agricultural Products', image: '/assets/products/agricultural.png', description: 'Premium Indian agricultural products.' },
      { id: 26, name: 'Fruits & Vegetables', image: '/assets/products/fruitsvegetables.jpg', description: 'Fresh Indian fruits and vegetables for export.' },
      { id: 27, name: 'Processed Food', image: '/assets/products/ProcessedFood1.jpg', description: 'Processed and packaged food products.' },
      { id: 28, name: 'Raw Materials', image: '/assets/products/Raw_Material.png', description: 'Agricultural raw materials for industries.' }
    ]
  }
];

export default categories;

const products = [
  {
    _id: '1',
    name: 'AMD Ryzen 5 5600X',
    image: '/images/5600x.jpg',
    description:
      'AMD Ryzen™ 5 5600X gaming desktop processor features 6 incredible cores for those who just want to game.',
    brand: 'AMD',
    category: 'Processors',
    price: 269.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Intel Core i5 12600K',
    image: '/images/12600k.jpg',
    description:
      'If you are building your dream gaming PC, the Intel Core™ i5-12600K Processor is a great place to start',
    brand: 'Intel',
    category: 'Processors',
    price: 329.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Nvidia Geforce RTX 3080Ti',
    image: '/images/3080Ti.jpg',
    description:
      'The GeForce RTX™ 3080 Ti graphics card delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture.',
    brand: 'Nvidia',
    category: 'Graphics',
    price: 629.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'NZXT H510 Mid-Tower PC Case',
    image: '/images/H510.jpg',
    description:
      'This compact mid-tower is an ideal case for the majority of builds. The H510 is easy-to-build-in and offers flexibility for a variety of ATX parts.',
    brand: 'NZXT',
    category: 'Cases',
    price: 79.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: '16GB Corsair Vengeance LPX DDR4 3200MHz',
    image: '/images/vengeance.jpg',
    description:
      'VENGEANCE LPX memory is designed for high-performance overclocking. The heatspreader is made of pure aluminum for faster heat dissipation, and the eight-layer PCB helps manage heat and provides superior overclocking headroom.',
    brand: 'Corsair',
    category: 'Memory',
    price: 79.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Samsung 970 EVO Plus 1 TB PCIe',
    image: '/images/970.jpg',
    description:
      'Boost your PC with the Samsung 970 EVO SSD. Designed for intensive workloads and applications, it speeds up everything you save on it.',
    brand: 'Samsung',
    category: 'Storage',
    price: 199.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

module.exports = products

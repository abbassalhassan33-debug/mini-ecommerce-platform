const products = [
  {
    id: 1,
    title: "iphone 16",
    description: "Apple iPhone 16 is the best!!",
    price: 1200,
    stock: 20,
    image: "https://placehold.co/600x400?text=iPhone+16",
    variants: [
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Color",
        value: "White",
      },
    ],
  },

  {
    id: 2,
    title: "Samsung Galaxy S25",
    description:
      "Samsung Galaxy S25 with a bright AMOLED display and powerful performance.",
    price: 1900,
    stock: 10,
    image: "https://placehold.co/600x400?text=Galaxy+S25",
    variants: [
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Color",
        value: "White",
      },
    ],
  },

  {
    id: 3,
    title: "Google Pixel 9",
    description:
      "Google Pixel 9 with an advanced camera system and clean Android experience.",
    price: 1900,
    stock: 10,
    image: "https://placehold.co/600x400?text=Pixel+9",
    variants: [
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Color",
        value: "White",
      },
    ],
  },

  {
    id: 4,
    title: "MacBook Air M3",
    description:
      "A lightweight and powerful Apple laptop powered by the M3 chip.",
    price: 1099,
    stock: 10,
    image: "https://placehold.co/600x400?text=MacBook+Air",
    variants: [
      {
        type: "Color",
        value: "Midnight",
      },
    ],
  },

  {
    id: 5,
    title: "Dell XPS 15",
    description:
      "Premium Dell laptop designed for productivity, development, and entertainment.",
    price: 1499,
    stock: 8,
    image: "https://placehold.co/600x400?text=Dell+XPS+15",
    variants: [
      {
        type: "Color",
        value: "Silver",
      },
    ],
  },

  {
    id: 6,
    title: "Sony WH-1000XM5",
    description:
      "Premium wireless headphones featuring advanced noise cancellation.",
    price: 399,
    stock: 25,
    image: "https://placehold.co/600x400?text=Sony+Headphones",
    variants: [
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Color",
        value: "Silver",
      },
    ],
  },

  {
    id: 7,
    title: "Apple AirPods Pro 2",
    description:
      "Wireless earbuds with active noise cancellation and immersive sound.",
    price: 249,
    stock: 30,
    image: "https://placehold.co/600x400?text=AirPods+Pro",
    variants: [],
  },

  {
    id: 8,
    title: "Apple Watch Series 10",
    description:
      "Smartwatch with health features, fitness tracking, and a modern design.",
    price: 429,
    stock: 18,
    image: "https://placehold.co/600x400?text=Apple+Watch",
    variants: [
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Color",
        value: "Silver",
      },
    ],
  },

  {
    id: 9,
    title: "iPad Air M2",
    description:
      "Versatile Apple tablet powered by the M2 chip with a beautiful display.",
    price: 599,
    stock: 14,
    image: "https://placehold.co/600x400?text=iPad+Air",
    variants: [
      {
        type: "Storage",
        value: "128GB",
      },
      {
        type: "Storage",
        value: "256GB",
      },
    ],
  },

  {
    id: 10,
    title: "Nintendo Switch OLED",
    description:
      "Nintendo gaming console with a vibrant OLED display and portable design.",
    price: 349,
    stock: 16,
    image: "https://placehold.co/600x400?text=Nintendo+Switch",
    variants: [],
  },

  {
    id: 11,
    title: "PlayStation 5",
    description:
      "Sony's next-generation gaming console with fast loading and immersive graphics.",
    price: 499,
    stock: 7,
    image: "https://placehold.co/600x400?text=PlayStation+5",
    variants: [],
  },

  {
    id: 12,
    title: "Xbox Series X",
    description:
      "Powerful Microsoft gaming console designed for high-performance gaming.",
    price: 499,
    stock: 9,
    image: "https://placehold.co/600x400?text=Xbox+Series+X",
    variants: [],
  },

  {
    id: 13,
    title: "Logitech MX Master 3S",
    description:
      "Professional wireless mouse designed for productivity and comfortable daily use.",
    price: 99,
    stock: 35,
    image: "https://placehold.co/600x400?text=MX+Master+3S",
    variants: [
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Color",
        value: "White",
      },
    ],
  },

  {
    id: 14,
    title: "Keychron K2",
    description:
      "Compact mechanical keyboard with wireless connectivity and customizable keys.",
    price: 89,
    stock: 22,
    image: "https://placehold.co/600x400?text=Keychron+K2",
    variants: [
      {
        type: "Switch",
        value: "Red",
      },
      {
        type: "Switch",
        value: "Brown",
      },
    ],
  },

  {
    id: 15,
    title: "Anker PowerCore 20K",
    description:
      "High-capacity portable power bank for charging your devices on the go.",
    price: 59,
    stock: 40,
    image: "https://placehold.co/600x400?text=Anker+PowerBank",
    variants: [],
  },
];

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

module.exports = {
  getAllProducts,
  getProductById,
};

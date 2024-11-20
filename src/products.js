import BARCAVIS from "./components/assets/Camisetas futbol/2020-2025/24-25/Europa/La Liga/Barcelona/Barcelona 24-25 visitante.png";
import BARCALOC from "./components/assets/Camisetas futbol/2020-2025/24-25/Europa/La Liga/Barcelona/Barcelona 24-25 Local.jpg";
import BARCAALT from "./components/assets/Camisetas futbol/2020-2025/24-25/Europa/La Liga/Barcelona/Barcelona 24-25 alternativa.png";

// ------------------------------
// Categoría: Retro
// ------------------------------
const retroProducts = [
  {
    id: 1,
    name: 'Camisa Retro 1',
    price: '$549.950',
    category: 'Retro',
    imageUrl: 'https://thegoatstores.com/cdn/shop/files/106_47b04fb9-5179-480c-a4f0-59dd44dbcf94.jpg?v=1723998936&width=1445',
  },
  {
    id: 2,
    name: 'Camisa Retro 2',
    price: '$649.950',
    category: 'Retro',
    imageUrl: 'https://acdn.mitiendanube.com/stores/003/177/055/products/camiseta-visitante-negra-arsenal-premier-league-2024-2025-adidas-1-3682aacbc138bb7fff17189826765381-1024-1024.jpeg',
  },
  {
    id: 4,
    name: 'Camiseta retro',
    price: '$299.950',
    category: 'Retro',
    // imageUrl:,
  },
  {
    id: 5,
    name: 'Camiseta retro',
    price: '$299.950',
    category: 'Retro',
    // imageUrl:,
  },
  {
    id: 6,
    name: 'Camiseta retro',
    price: '$299.950',
    category: 'Retro',
    // imageUrl:,
  },
  {
    id: 9,
    name: 'Camiseta retro',
    price: '$299.950',
    category: 'Retro',
    // imageUrl:,
  },
  {
    id: 10,
    name: 'Camiseta retro',
    price: '$299.950',
    category: 'Retro',
    // imageUrl:,
  },
];

// ------------------------------
// Categoría: Camisetas 24/25
// ------------------------------
const camisetas2425Products = [
  {
    id: 3,
    name: 'Barcelona Visitante 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
    imageUrl: BARCAVIS,
  },
  {
    id: 12,
    name: 'Barcelona Local 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
    imageUrl: BARCALOC,
  },
  {
    id: 13,
    name: 'Barcelona Alternativa 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
    imageUrl: BARCAALT,
  },
  {
    id: 14,
    name: 'Real Madrid Local 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 15,
    name: 'Real Madrid Visitante 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 16,
    name: 'Real Madrid Alternativa 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 17,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 18,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 19,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 20,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 21,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 22,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 23,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
  {
    id: 24,
    name: 'Camiseta 24/25',
    price: '125.000 COP',
    category: 'Camisetas2425',
  },
];

// // ------------------------------
// // Categoría: Niños
// // ------------------------------
const kidsProducts = [
  {
    id: 7,
    name: 'Camiseta Niños',
    price: '299.950',
    category: 'Niños',
  },
  {
    id: 8,
    name: 'Camiseta Niños',
    price: '$299.950',
    category: 'Niños',
  },
  {
    id: 11,
    name: 'Camiseta Niños',
    price: '$299.950',
    category: 'Niños',
  },
];


const products = [...retroProducts, ...camisetas2425Products, ...kidsProducts];

export default products;

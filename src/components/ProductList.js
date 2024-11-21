// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { customFetch } from '../Helpers/fetch'; 
// import './ProductList.css';

// const ProductList = () => {
//   const { categoryName } = useParams(); // Obtener la categoría actual desde la URL
//   const [products, setProducts] = useState([]); // Todos los productos del backend
//   const [filterProducts, setFilterProducts] = useState([]); // Productos filtrados
//   const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda
//   const [currentPage, setCurrentPage] = useState(1); // Página actual
//   const [loading, setLoading] = useState(true); // Estado de carga
//   const productsPerPage = 4; // Productos por página

//   // Función para obtener productos desde el backend
//   const fetchProducts = async () => {
//     try {
//       const response = await customFetch({
//         endpoint: `api/jerseys/?q_filter=${categoryName}`, // Ajuste del endpoint 
//         method: 'GET',
//       });

//       if (response.status === 200) {
//         console.log(response)
//         setProducts(response.data); // Almacena los productos originales del backend
//         setFilterProducts(response.data); // Almacena los productos filtrados
//       } else {
//         console.error('Error al obtener los productos:', response);
//       }
//     } catch (error) {
//       console.error('Error de fetch:', error);
//     } finally {
//       setLoading(false); // Finaliza la carga
//     }
//   };

//   // Efecto para obtener productos cuando cambia la categoría
//   useEffect(() => {
//     setLoading(true); // Activa el estado de carga
//     fetchProducts(); 
//     setSearchTerm(''); // Resetea la barra de búsqueda
//     setCurrentPage(1); // Vuelve a la primera página
//   }, [categoryName]);

//   // Manejar el término de búsqueda
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);

//     const arrayFilter = products.filter(
//       (product) =>
//         product.category === categoryName && // Filtra por categoría actual
//         product.name.toLowerCase().includes(e.target.value.toLowerCase()) // Filtra por término de búsqueda
//     );

//     setFilterProducts(arrayFilter);

//     if (e.target.value === '') {
//       setFilterProducts(products);
//     }
//   };

//   // Calcular los productos de la página actual
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Cambiar de página
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="product-list-container">
//       <h2 className="category-title">Nuestras {categoryName}</h2>

//       {/* Barra de búsqueda */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Buscar productos..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Productos */}
//       {loading ? (
//         <p>Cargando productos...</p>
//       ) : (
//         <div className="products-container">
//           {currentProducts.length > 0 ? (
//             currentProducts.map((product) => (
//               <div key={product.id} className="product-card">
//                 <div className="product-image">
//                   <img src={product.imageUrl} alt={product.name} />
//                 </div>
//                 <h3>{product.name}</h3>
//                 <h4>{product.size}</h4>
//                 <p className="product-price">${product.price}</p>
//                 <button>Comprar</button>
//               </div>
//             ))
//           ) : (
//             <p>No hay productos en esta categoría</p>
//           )}
//         </div>
//       )}

//       {/* Paginación */}
//       <div className="pagination">
//         {[...Array(Math.ceil(filterProducts.length / productsPerPage)).keys()].map((number) => (
//           <button
//             key={number}
//             onClick={() => paginate(number + 1)}
//             className={currentPage === number + 1 ? 'active' : ''}
//           >
//             {number + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
  
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { customFetch } from '../Helpers/fetch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ProductList.css';

const ProductList = () => {
  const { categoryName } = useParams(); // Obtener la categoría actual desde la URL
  const [products, setProducts] = useState([]); // Todos los productos del backend
  const [filterProducts, setFilterProducts] = useState([]); // Productos filtrados
  const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [loading, setLoading] = useState(true); // Estado de carga
  const productsPerPage = 4; // Productos por página

  // Función para obtener productos desde el backend
  const fetchProducts = async () => {
    try {
      const response = await customFetch({
        endpoint: `api/jerseys/?q_filter=${categoryName}`,
        method: 'GET',
      });

      if (response.status === 200) {
        setProducts(response.data); // Almacena los productos originales del backend
        setFilterProducts(response.data); // Almacena los productos filtrados
      } else {
        console.error('Error al obtener los productos:', response);
      }
    } catch (error) {
      console.error('Error de fetch:', error);
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  // Efecto para obtener productos cuando cambia la categoría
  useEffect(() => {
    setLoading(true); // Activa el estado de carga
    fetchProducts();
    setSearchTerm(''); // Resetea la barra de búsqueda
    setCurrentPage(1); // Vuelve a la primera página
  }, [categoryName]);

  // Manejar el término de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const arrayFilter = products.filter(
      (product) =>
        product.category === categoryName && // Filtra por categoría actual
        product.name.toLowerCase().includes(e.target.value.toLowerCase()) // Filtra por término de búsqueda
    );

    setFilterProducts(arrayFilter);

    if (e.target.value === '') {
      setFilterProducts(products);
    }
  };

  // Calcular los productos de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-list-container">
      <h2 className="category-title">Nuestras {categoryName}</h2>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Productos */}
{loading ? (
  <p>Cargando productos...</p>
) : (
  <div className="products-container">
    {currentProducts.length > 0 ? (
      currentProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <h3>{product.name}</h3>

          {/* Selector de tallas con texto "Tallas disponibles:" */}
          <div className="size-selector">
            <span className="size-label">Tallas disponibles:</span>
            <Box sx={{  width: "30%", height: "15%" }}>
              <FormControl fullWidth>
                <InputLabel id={`size-select-label-${product.id}`}>Talla</InputLabel>
                <Select  
                  labelId={`size-select-label-${product.id}`}
                  id={`size-select-${product.id}`}
                  defaultValue="" // Valor inicial vacío
                  onChange={(e) =>
                    console.log(`Producto: ${product.name}, Talla seleccionada: ${e.target.value}`)
                  }
                  sx={{ fontSize: '14px' }} // Ajustamos el texto para que sea más compacto
                >
                  {product.size.split(' ').map((size, index) => (
                    <MenuItem key={index} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <p className="product-price">${product.price}</p>
          <button>Comprar</button>
        </div>
      ))
    ) : (
      <p>No hay productos en esta categoría</p>
    )}
  </div>
)}

      {/* Paginación */}
      <div className="pagination">
        {[...Array(Math.ceil(filterProducts.length / productsPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

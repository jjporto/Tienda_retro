import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { customFetch } from '../Helpers/fetch'; // Asegúrate de que esté correctamente importado
import './ProductList.css';

const ProductList = () => {
  const { categoryName } = useParams(); // Obtener la categoría actual desde la URL
  const [products, setProducts] = useState([]); // Todos los productos del backend
  const [filterProducts, setFilterProducts] = useState([]); // Filtro global
  const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [loading, setLoading] = useState(true); // Estado de carga
  const productsPerPage = 4; // Productos por página

  // Función para obtener productos desde el backend
  const fetchProducts = async () => {
    try {
      const response = await customFetch({
        endpoint: `api/jerseys/?q_filter=${categoryName}`, // Ajusta el endpoint según tu backend
        method: 'GET',
      });

      if (response.status === 200) {
        console.log(response)
        // const data = response.data.filter( (product) => product.category === categoryName) // Filtro de la Consulta de backend por categorias
        setProducts(response.data); // Almacena los productos originales del backend
        setFilterProducts(response.data); // Almacena los productos que se listan del backend
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
    fetchProducts(); // Llama al fetch
    setSearchTerm(''); // Resetea la barra de búsqueda
    setCurrentPage(1); // Vuelve a la primera página
  }, []);


  // Manejar el término de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const arrayFilter = products.filter(
      (product) =>
        product.category === categoryName && // Filtra por categoría actual
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por término de búsqueda
    )

    setFilterProducts(arrayFilter)

    if (e.target.value === '') {
      setFilterProducts(products)
    }
  };

  // Calcular los productos de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

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
          {filterProducts.length > 0 ? (
            filterProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
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

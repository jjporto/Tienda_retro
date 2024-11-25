import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import products from './products';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const hiddenPaths = ['/', '/about', '/contact'];
    setShowSidebar(!hiddenPaths.includes(location.pathname.toLowerCase()));
  }, [location]);

  const ProductListWrapper = () => {
    const { categoryName } = useParams();
    const filteredProducts = filterProductsByCategory(categoryName);
    return <ProductList products={filteredProducts} />;
  };

  const filterProductsByCategory = (category) => {
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
          {showSidebar && <Sidebar />}
          <div style={{ flex: 1 ,background: '#f4f4f4'}}>
            <Routes>
              <Route path="/" element={<Home onCategoryClick={setShowSidebar} />} />
              <Route path="/category/:categoryName" element={<ProductListWrapper />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

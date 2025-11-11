import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Home = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Datos mock
  const products = [
    { id: 1, name: 'Producto Wave Weare 1', store: 'Wave Weare' },
    { id: 2, name: 'Producto Gift Lab 1', store: 'Gift Lab' },
    { id: 3, name: 'Producto Work Wellness 1', store: 'Work Wellness' },
  ];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      {/* Título y Dark Mode */}
      <h1>INTEGRADORA SHOP</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>

      {/* Carrusel */}
      <Carousel autoPlay>
        <div><img src="https://via.placeholder.com/800x400?text=Oferta+1" alt="Oferta 1" /></div>
        <div><img src="https://via.placeholder.com/800x400?text=Oferta+2" alt="Oferta 2" /></div>
      </Carousel>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Filtrar productos..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '20px 0' }}
      />

      {/* Lista de productos */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map(p => (
          <li
            key={p.id}
            style={{
              margin: '10px 0',
              padding: '10px',
              background: darkMode ? '#444' : '#f9f9f9',
              borderRadius: '8px'
            }}
          >
            <span>
              {p.name} - {p.store}{' '}
              <button
                onClick={() => addToCart(p)}
                style={{ marginLeft: '10px', padding: '5px 10px' }}
              >
                Añadir al Carrito
              </button>
            </span>
          </li>
        ))}
      </ul>

      {/* Secciones de tiendas */}
      <div style={{ marginTop: '40px' }}>
        <h2>Wave Weare</h2>
        <p>Estilo y comodidad para el día a día.</p>

        <h2>Gift Lab</h2>
        <p>Regalos únicos y personalizados.</p>

        <h2>Work Wellness</h2>
        <p>Productos para tu bienestar en el trabajo.</p>
      </div>
    </div>
  );
};

export default Home;
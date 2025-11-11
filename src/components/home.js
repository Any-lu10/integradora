import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

const addToCart = (product) => {
  dispatch({ type: 'ADD_TO_CART', payload: product });
};

  // Datos mock para productos de las tiendas (expande con más si quieres)
  const products = [
    { id: 1, name: 'Producto Wave Weare 1', store: 'Wave Weare' },
    { id: 2, name: 'Producto Gift Lab 1', store: 'Gift Lab' },
    { id: 3, name: 'Producto Work Wellness 1', store: 'Work Wellness' },
  ];

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>INTEGRADORA SHOP</h1>
      <Carousel autoPlay>
        <div><img src="https://via.placeholder.com/800x400?text=Oferta+1" alt="Oferta 1" /></div>
        <div><img src="https://via.placeholder.com/800x400?text=Oferta+2" alt="Oferta 2" /></div>
      </Carousel>
      <input type="text" placeholder="Filtrar productos..." value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {filteredProducts.map(p => <li key={p.id}>
  {p.name} - {p.store} <button onClick={() => addToCart(p)}>Añadir al Carrito</button>
</li>
      </ul>
      {/* Aquí puedes agregar tus secciones existentes de tiendas, como <h2>Wave Weare</h2> con descripciones */}
    </div>
  );
};

export default Home;
// src/pages/SearchReservoir.tsx
import React from 'react';

const SearchReservoir: React.FC = () => {
  return (
    <section id="search-section">
      <h2>Buscar Embalses de Agua</h2>
      <form id="search-form">
        <label htmlFor="search-query">Introduce el nombre del embalse:</label>
        <input type="text" id="search-query" placeholder="Embalse..." required></input>
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default SearchReservoir;

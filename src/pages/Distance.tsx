// src/pages/SearchByDistance.tsx
import React from 'react';

const Distance: React.FC = () => {
  return (
    <section id="Distance search list">
      <h2>Embalses de agua cerca de ti</h2>
      <form id="latitude">
        <label htmlFor="lat">Latitud:</label>
        <input type="text" id="lat" placeholder="Latitud..." required></input>
        
        <label htmlFor="long">Longitud:</label>
        <input type="text" id="long" placeholder="Longitud..." required></input>
        
        <label htmlFor="dist">Distancia:</label>
        <input type="text" id="dist" placeholder="Distancia..." required></input>
        
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default Distance;

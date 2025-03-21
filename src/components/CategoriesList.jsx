import React from 'react';
import '../App.css';

const categories = [
  "Moda Feminina",
  "Moda Masculina",
  "Eletrónicos",
  "Casa",
  "Saúde",
  "Esportes",
  "Bringuedos",
  "Monitimentos",
  "Beleza"
];

const CategoryList = () => {
  return (
    <div>
      <h2>Categorias</h2>
      <ul className="valores-lista">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
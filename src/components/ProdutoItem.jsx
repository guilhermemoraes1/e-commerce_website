import React from 'react';

const ProdutoItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.discountPrice} <del>{product.originalPrice}</del></p>
      <p>{product.rating}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProdutoItem;

import React from 'react';

const ProdutoItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.discountPrice} <del>{product.originalPrice}</del></p>
      <p>{product.rating}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProdutoItem;
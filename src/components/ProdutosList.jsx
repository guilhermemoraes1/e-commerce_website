import React from 'react';
import ProductItem from './ProdutoItem';
import '../App.css';

const products = [
  { name: 'HAVIT HV-G92 Gamepad', originalPrice: '$160', discountPrice: '$120', rating: '★★★★★ (39)' },
  { name: 'AK-900 Wired Keyboard', originalPrice: '$160', discountPrice: '$860', rating: '★★★★★ (76)' },
  { name: 'IPS LCD Gaming Monitor', originalPrice: '$400', discountPrice: '$370', rating: '★★★★★ (89)' },
  { name: 'S-Series Comfort Chair', originalPrice: '$400', discountPrice: '$375', rating: '★★★★★ (49)' },
  { name: 'S-Series Comfort Chair', originalPrice: '$400', discountPrice: '$375', rating: '★★★★★ (50)' }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
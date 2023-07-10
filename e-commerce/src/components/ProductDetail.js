import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(
    '🚀 ~ file: ProductDetail.js:6 ~ ProductDetail ~ params:',
    productId
  );
  return <div>ProductDetail</div>;
};

export default ProductDetail;

import { useEffect, useState } from "react";
import ProductItem from "./Productİtem";
import NewProduct from "../NewProducts/NewProduct";

const Products = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <div className="product1">
        <NewProduct products={products} setProducts={setProducts} />
      </div>
      <div className="product">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

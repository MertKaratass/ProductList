import ProductForm from "./ProductForm";

const NewProduct = ({ products, setProducts }) => {
  const onSaveProduct = (newProductData) => {
    setProducts((products) => [newProductData, ...products]);
  };

  return (
    <div>
      <ProductForm onSaveProduct={onSaveProduct} products={products} />
    </div>
  );
};

export default NewProduct;

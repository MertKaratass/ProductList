const ProductItem = ({ product, products, setProducts }) => {
  const { id, name, imageUrl, price } = product;

  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="product-item">
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>{price} $</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default ProductItem;

import { useState } from "react";

const ProductForm = ({ onSaveProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const titleChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newProductData = {
      id: Math.random().toString(),
      name,
      price,
      imageUrl,
    };

    onSaveProduct(newProductData);
    setName("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <div>
      {isFormVisible && (
        <form className="product-form" onSubmit={submitHandler}>
          <div className="product-form-input">
            <label>Ürün Adı</label>
            <input
              type="text"
              placeholder="Ürün Adı Giriniz..."
              onChange={titleChangeHandler}
              value={name}
            />
          </div>
          <div className="product-form-input">
            <label>Ürün Fiyatı</label>
            <input
              type="number"
              placeholder="Ürün Fiyatı Giriniz..."
              onChange={priceChangeHandler}
              value={price}
            />
          </div>
          <div className="product-form-input">
            <label>Ürün Görseli</label>
            <input
              type="text"
              placeholder="Ürün Görseli Giriniz..."
              onChange={imageChangeHandler}
              value={imageUrl}
            />
          </div>
          <div className="form-buttons">
            <button className="btn1">Ürün Ekle</button>
          </div>
        </form>
      )}
      <button className="btn2" type="button" onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Gizle" : "Göster"}
      </button>
      ;
    </div>
  );
};

export default ProductForm;

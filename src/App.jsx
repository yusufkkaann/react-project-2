import { useState } from "react";
import { products as productsData } from "./data/products";
import ImgNotSelected from "./components/ImgNotSelected";
import ImgContainer from "./components/ImgContainer";

function App() {
  const [products, setProducts] = useState(productsData);
  const [activeProduct, setActiveProduct] = useState(false);

  function handleClick(productId) {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    selectedProduct.isActive = true;
    setActiveProduct(selectedProduct);
    const unSelectedProduct = products
      .filter((product) => product.id !== productId)
      .map((item) => {
        return {
          ...item,
          isActive: false,
        };
      });
    console.log(productId);
    console.log(selectedProduct);
    console.log("unselected", unSelectedProduct);
    setProducts(() => {
      return [...unSelectedProduct, selectedProduct];
    });
  }
  return (
    <>
      <main className="container">
        {activeProduct ? (
          <>
            <img style={{ width: "100%" }} src={activeProduct.imgName} alt="" />
          </>
        ) : (
          <ImgNotSelected />
        )}
        <ImgContainer products={products} handleClick={handleClick} />
      </main>
    </>
  );
}

export default App;

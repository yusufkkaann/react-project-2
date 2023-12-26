import ProductCard from "./ProductCard";

export default function ImgContainer({ products, handleClick }) {
  return (
    <>
      <div className="grid">
        {products
          .filter((product) => product.isAvailable)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
      </div>
    </>
  );
}

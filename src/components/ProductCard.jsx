import ImgBtn from "./ImgBtn";

export default function ProductCard({ product, handleClick }) {
  return (
    <>
      <article className="">
        <header>{product.name}</header>
        <img src={product.thumbnail} alt="" />
        <footer>
          <ImgBtn productId={product.id} handleClick={handleClick} />
        </footer>
      </article>
    </>
  );
}

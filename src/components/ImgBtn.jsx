export default function ImgBtn({ productId, handleClick }) {
  return (
    <>
      <button onClick={() => handleClick(productId)}>Seç {productId}</button>
    </>
  );
}

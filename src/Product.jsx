import "./Product.css";
function Product({title, Price}) {
  return (
    <div className="ProductCompont">
      <h1>{title}</h1>
      <h5>Price: {Price}</h5>
    </div>
  );
}
export default Product;

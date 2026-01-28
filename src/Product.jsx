import "./Product.css";
function Product({title, Price, Features}) {
  return (
    <div className="ProductCompont">
      <h1>{title}</h1>
      <h5>Price: {Price}</h5>
      <p>
        Features:{" "}
        {Features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
    </div>
  );
}
export default Product;

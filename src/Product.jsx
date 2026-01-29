import "./Product.css";
function Product({title, Price}) {
  return (
    <div className="ProductCompont">
      <h1>{title}</h1>
      <h5>Price: {Price}</h5>
      <h3 style={{color: "red"}}>
        {Price < 2000 ? (
          " Not Available"
        ) : (
          <a href="https://www.google.com/">Available</a>
        )}
      </h3>
      {/* <p>
        Features:{" "}
        {Features.map((feature) => (
          <li>{feature}</li>
        ))}
          " Not Available"
        ) : (
          <a href="https://www.google.com/">Available</a>
        )}
      </h3>
      {/* <p>
        Features:{" "}
        {Features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
    </div>
  );
}
export default Product;

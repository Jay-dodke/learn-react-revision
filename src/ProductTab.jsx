import Product from "./Product.jsx";
function ProductTab() {
  //   let Features = ["Good Camera", "Fast Processor", "Long Battery Life"];
  return (
    <>
      <Product title="Phone" Price={90000} />
      <Product title="Tablet" Price={50000} />
      <Product title="Laptop" Price={150000} />
      <Product title="Laptop" Price={1000} />
    </>
  );
}
export default ProductTab;

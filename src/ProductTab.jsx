import Product from "./Product.jsx";
function ProductTab() {
  let Features = ["Good Camera", "Fast Processor", "Long Battery Life"];
  return (
    <>
      <Product title="Phone" Price={90000} Features={Features} />
      <Product title="Tablet" Price={50000} Features={Features} />
      <Product title="Laptop" Price={150000} Features={Features} />
    </>
  );
}
export default ProductTab;

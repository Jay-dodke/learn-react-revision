import React, { useState, useEffect } from "react";

function Useeffecta() {
  const [count, setCount] = useState(0);

  // Ye sirf ek baar chalega (component mount hone par)
  useEffect(() => {
    console.log("Component Load Ho Gaya ✅");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Useeffecta;

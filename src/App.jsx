import React from "react";

// create component App
function Title() {
  return <h1> Hello World I am title! </h1>;
}

function Description() {
  return <h3> I am description </h3>;
}

function App() {
  return (
    <>
      <Title />
      <Description />
      <Title />
      <Description />
      <Title />
      <Description />
    </>
  );
}

export default App;

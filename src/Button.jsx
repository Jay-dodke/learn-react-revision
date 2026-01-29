import "./Button.css";
function Onclick() {
  alert("Button Clicked!");
}

function Button() {
  return (
    <>
      <button className="my-button" onClick={Onclick}>
        Click Me
      </button>
    </>
  );
}

export default Button;

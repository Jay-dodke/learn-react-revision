import "./Button.css";
function ClickButton() {
  alert("Button Clicked!");
}

function Button() {
  return (
    <>
      <button className="my-button" onClick={ClickButton}>
        Click Me
      </button>
    </>
  );
}

export default Button;

import "./Button.css";
function ClickButton() {
  alert("Button Clicked!");
}

function Button() {
  return (
    <>
      <h1>click this button and see the alert!</h1>
      <button className="my-button" onClick={ClickButton}>
        Click Me
      </button>
    </>
  );
}

export default Button;

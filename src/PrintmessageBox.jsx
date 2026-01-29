import MessageBox from "./MessageBox";

function PrintmessageBox() {
  let style = {color: "red", backgroundColor: "yellow"};
  let massage = "jay Dodke";
  let age = 24;
  return (
    <>
      <MessageBox massage={massage} age={age} style={style} />
    </>
  );
}
export default PrintmessageBox;

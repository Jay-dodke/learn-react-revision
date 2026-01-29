import MessageBox from "./MessageBox";

function PrintmessageBox() {
  let massage = "jay Dodke";
  let age = 24;
  return (
    <>
      <MessageBox massage={massage} age={age} />
    </>
  );
}
export default PrintmessageBox;

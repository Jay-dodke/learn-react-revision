function MessageBox({massage, age, style}) {
  return (
    <>
      <h1>
        <span style={style}>{massage} </span>is {age} years old
      </h1>
    </>
  );
}

export default MessageBox;

import React from "react";

function Input({ label = false, ...props }) {
  const [inputState, setInputState] = React.useState('');

  function changeHandler({ target }) {
    setInputState(target.value);
  }
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} onChange={changeHandler} value={inputState}></input>
    </div>
  );
}

export default Input;

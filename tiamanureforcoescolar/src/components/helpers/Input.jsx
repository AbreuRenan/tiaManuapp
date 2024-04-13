import React from "react";

function Input({ label = false, textArea = false, ...props }) {
  const [inputState, setInputState] = React.useState('');

  function changeHandler({ target }) {
    setInputState(target.value);
  }
  return (
    <div>
      {label && <label>{label}</label>}
      {!textArea && <input {...props} onChange={changeHandler} value={inputState}/>}
      {textArea && <textarea  {...props} onChange={changeHandler} value={inputState} />}
    </div>
  );
}

export default Input;

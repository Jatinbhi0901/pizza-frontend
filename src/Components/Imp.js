import React, { useState } from "react";



function Imp() {
  const [counter, setCounter] = useState(1);
  function h1() {
    setCounter(counter + 1);
  }
  function h2() {
    setCounter(counter - 1);
  }


  return (
    <div>
      <button onClick={h2}>
        <img
          src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/undefined/external-minus-essentials-tanah-basah-glyph-tanah-basah.png"
          width="11px"
          alt=""
        />
      </button>

      <input type="text" value={counter} />

      <button onClick={h1}>
        <img
          src="https://img.icons8.com/external-simple-solid-edt.graphics/50/undefined/external-Plus-add-and-remove-simple-solid-edt.graphics.png"
          width="13px"
          alt=""
        />
      </button>
    </div>
  );
}

export default Imp;

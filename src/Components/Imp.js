import React, { useState } from "react";

function Imp() {
  const [counter, setCounter] = useState(0);
  function h1() {
    setCounter(counter + 1);
  }
  function h2() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <button onClick={h1}>
        <img
          src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png"
          width="15px"
        />
      </button>

      {counter}

      <button onClick={h2}>
        <img
          src="https://img.icons8.com/fluency-systems-regular/48/000000/minus-2-math.png"
          width="15px"
        />
      </button>
    </div>
  );
}

export default Imp;

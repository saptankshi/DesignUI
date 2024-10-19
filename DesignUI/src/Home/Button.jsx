import React from "react";

function Button({ text }) {
  return (
    <button className="self-end custom-shadow px-3.5 py-3.5 mt-16 bg-orange-100 rounded-2xl max-md:mt-10">
      {text}
    </button>
  );
}

export default Button;
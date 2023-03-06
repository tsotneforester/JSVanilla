import React, { useState, useEffect } from "react";

function Remove({ handler }) {
  return (
    <button className="clear-btn" onClick={handler}>
      CLEAR LIST
    </button>
  );
}
export default Remove;

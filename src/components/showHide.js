import React, { useState } from "react";

function ShowHideText() {
  const [showText, updateText] = useState(true);

  return (
    <div>
      <button onClick={() => updateText(!showText)}>ShowHide</button>;
      {showText && <div>This text should show</div>}
    </div>
  );
}

export default ShowHideText;

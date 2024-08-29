import { AppContext } from "../../App";
import { useContext, useState } from "react";
function ChangeProfile() {
  const { setUsername } = useContext(AppContext);
  const [newUserName, setNewUsername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => setNewUsername(event.target.value)}
        placeholder="Enter name to change"
      />
      <button
        onClick={() => {
          setUsername(newUserName);
        }}
      >
        Change it!
      </button>
    </div>
  );
}

export default ChangeProfile;

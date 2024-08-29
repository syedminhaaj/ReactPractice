import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import ChangeProfile from "./ChangeProfile";
function Contact() {
  const { username } = useContext(AppContext);
  return (
    <div>
      Contact PAge and user is {username}
      <ChangeProfile />
    </div>
  );
}

export default Contact;

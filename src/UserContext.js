import React from "react";
import { useState } from "react";
let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  let [userlist, setuserlist] = useState([]);
  return (
    <UserContext.Provider value={{ userlist, setuserlist }}>
      {children}
    </UserContext.Provider>
  );
};

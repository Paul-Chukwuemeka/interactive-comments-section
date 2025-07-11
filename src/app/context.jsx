"use client";
import { createContext, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [replyToDelete, setReplyToDelete] = useState(null);
  const [deleteParent, setDeleteParent] = useState(null);
  const [addReplyParent,setAddReplyParent] = useState(null)

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        isDelete,
        setIsDelete,
        replyToDelete,
        setReplyToDelete,
        deleteParent,
        setDeleteParent,
        addReplyParent,
        setAddReplyParent
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

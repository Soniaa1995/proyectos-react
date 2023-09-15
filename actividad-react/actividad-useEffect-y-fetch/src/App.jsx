import { useState } from "react";
import { UserList } from "./components/userList";

export const App = () => {

  const[endPoint, setEndPoint] = useState('users');  

  const handleFetch = () => {
    setEndPoint('comments')
  }

  return (
    <>
      <h1>Lista de usuarios</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>Aquí se llama a la Api</button>
    </>
  )
}

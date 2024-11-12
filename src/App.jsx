import { useState } from "react";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  const [results,setResult] = useState([])
  const getUsers = (users)=>{
    setResult(users)
  }
  
  return (
    <>
      <Search findUsers={getUsers}/>
      <Results results={results}/>
    </>
  );
}

export default App;

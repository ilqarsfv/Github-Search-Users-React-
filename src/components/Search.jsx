import { useState } from "react";
import axios from "axios";
function Search({ findUsers }) {
  const [users, setUsers] = useState("");
  const API_URL = "https://api.github.com";

  const getUser = async () => {
    const finds = await axios.get(`${API_URL}/search/users?q=${users}`);
    findUsers(finds.data);
  };
  return (
    <div className="searchContainer">
      <h1>GitHub User Search</h1>
      <div className="searchWrapper">
        <input
          onChange={(e) => setUsers(e.target.value)}
          className="input"
          placeholder="İstifadəçi adı daxil edin"
          type="search"
          name=""
          id="search"
        />
        <button onClick={getUser} className="btn">
          Axtar
        </button>
      </div>
      <p className="resultTitle">Nəticələr</p>
    </div>
  );
}

export default Search;

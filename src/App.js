import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import "./index.css";
import ReactBootstrap from "react-bootstrap";

function App() {
  const { useState, useEffect } = React;
  const { Container } = ReactBootstrap;
  const [url, setUrl] = useState("http://localhost:8080/data.json");
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  console.log("Rendering App");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <input type="text" value={query} onChange={(event) => setQuery}></input>
      <button></button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
//=================================
const root = ReactDOM.createRoot(<App />, document.getElementById("root"));

export default App;

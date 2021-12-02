import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("나는 처음 한번만 실행 돼요");
  }, []);
  useEffect(() => {
    console.log("나는 키워드를 검색할때만 실행 돼요");
  }, [keyword]);
  useEffect(() => {
    console.log("나는 카운터가 변화할때만 실행 돼요");
  }, [counter]);
  useEffect(() => {
    console.log("나는 카운터와 키워드가 변화할때만 실행 돼요");
  }, [counter, keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

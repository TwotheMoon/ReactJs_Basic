import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") { // 인풋 비어있으면 작동X
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]); /*[새 할일, 기존[](toDos)] 을 합쳐 새로운 배열 생성하여 갱신*/
    setToDo(""); // 인풋값 초기화
  };
  return (
    <div>
      <h1>My Yo Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할일을 적어보세요"></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

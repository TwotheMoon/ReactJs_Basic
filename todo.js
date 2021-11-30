const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 리스트 저장 배열
let toDos = [];

// localStorage에 리스트 저장
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// 삭제 버튼
function deleteToDo(e) {
    // event.target 클릭된 버튼에 대한 타겟 정보
    const li = (e.target.parentElement);
    li.remove();
}

// 핳일 리스트 폼
function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    savedToDos();
}

// 할일 리스트 출력
function paintToDo(newTodo) {
    // 리스트들이 담김
    const li = document.createElement("li");
    // 삭제 버튼을 위해 li 안에 span에 할일 목록 적는 형식
    const span = document.createElement("span");
    span.innerText = newTodo;
    // 삭제 버튼 추가
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    // li 안에 span 배치
    li.appendChild(span);
    li.appendChild(button);
    // html에 있는 toDoList에 배치
    toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
// 배열 형태 스트링으로 변환
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // 기존 베열에 리스트 복원
    toDos = parsedToDos;
    // 배열 안 각각의 값에 적용
    parsedToDos.forEach(paintToDo);
}


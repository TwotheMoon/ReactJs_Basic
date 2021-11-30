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
    // 삭제할 요소의 id 값으로 해당 리스트를 제외한 나머지 리스트들로 새로운 배열을 만들어 toDos 에 업데이트
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // 로컬스토리지에 갱신된 toDos 저장
    saveToDos();
}

// 핳일 리스트 폼
function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        // 고유 식별자 1/1000 초 값으로 id 부여
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// 할일 리스트 출력
function paintToDo(newTodo) {
    // 리스트들이 담김
    const li = document.createElement("li");
    li.id = newTodo.id;
    // 삭제 버튼을 위해 li 안에 span에 할일 목록 적는 형식
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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


import "./App.css";
import { useTodos } from "./useTodos";

function App() {
  const {
    query: { data: todos },
  } = useTodos();

  return (
    <>
      <h1>Todo App</h1>
      <section
        className="todo-list"
        style={{
          border: "5px solid black",
          width: "90%",
        }}
      >
        <h3 className="my-todos">My Todos</h3>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </section>
    </>
  );
}

export default App;
